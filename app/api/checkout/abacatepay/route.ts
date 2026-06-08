import { NextResponse } from "next/server";

import {
  ABACATEPAY_API_BASE_URL,
  buildAbacatePaySubscriptionDraft,
  type CheckoutCardPayment,
  type AbacatePayPaymentMethod,
  type AbacatePayResponse,
  type CheckoutCustomer,
} from "@/lib/checkout/abacatepay";
import { getCheckoutPlan } from "@/lib/checkout/plans";

export const dynamic = "force-dynamic";

type CheckoutRequestBody = {
  customer?: CheckoutCustomer;
  method?: AbacatePayPaymentMethod;
  payment?: {
    card?: CheckoutCardPayment;
  };
  plan?: string;
};

type AbacatePayCustomerData = {
  id: string;
};

type AbacatePaySubscriptionData = {
  id: string;
  url: string;
  status: string;
  amount: number;
  devMode: boolean;
};

function cleanOptionalValue(value: unknown) {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function cleanDigits(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\D/g, "");
}

function validateCardPayment(card: CheckoutCardPayment | undefined) {
  if (!card) {
    return "Dados do cartao sao obrigatorios.";
  }

  const requiredValues = [
    card.number,
    card.holderName,
    card.expirationMonth,
    card.expirationYear,
    card.cvv,
    card.holderTaxId,
    card.billingAddress?.zipCode,
    card.billingAddress?.streetNumber,
  ];

  if (requiredValues.some((value) => !cleanOptionalValue(value))) {
    return "Preencha todos os dados obrigatorios do cartao.";
  }

  const cardNumber = cleanDigits(card.number);
  const cvv = cleanDigits(card.cvv);

  if (cardNumber.length < 13 || cardNumber.length > 19) {
    return "Numero do cartao invalido.";
  }

  if (cvv.length < 3 || cvv.length > 4) {
    return "CVV invalido.";
  }

  return null;
}

function jsonError(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

async function postToAbacatePay<TData>({
  apiKey,
  body,
  path,
}: {
  apiKey: string;
  body: unknown;
  path: string;
}) {
  const response = await fetch(`${ABACATEPAY_API_BASE_URL}/${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const payload = (await response.json()) as AbacatePayResponse<TData>;

  if (!response.ok || !payload.success || !payload.data) {
    throw new Error(payload.error ?? "AbacatePay recusou a requisição.");
  }

  return payload.data;
}

export async function POST(request: Request) {
  const apiKey = process.env.ABACATEPAY_API_KEY;

  if (!apiKey) {
    return jsonError("ABACATEPAY_API_KEY não está configurada.", 500);
  }

  const body = (await request.json().catch(() => null)) as CheckoutRequestBody | null;
  const plan = body?.plan ? getCheckoutPlan(body.plan) : null;

  if (!plan) {
    return jsonError("Plano inválido.");
  }

  const method = body?.method ?? "CARD";
  const pixRecurringEnabled =
    process.env.ABACATEPAY_PIX_RECURRING_ENABLED === "true";

  if (method === "PIX" && !pixRecurringEnabled) {
    return jsonError("Pix recorrente ainda não está habilitado nesta loja.");
  }

  if (method !== "CARD" && method !== "PIX") {
    return jsonError("Método de pagamento inválido.");
  }

  const cardValidationError =
    method === "CARD" ? validateCardPayment(body?.payment?.card) : null;

  if (cardValidationError) {
    return jsonError(cardValidationError);
  }

  const email = cleanOptionalValue(body?.customer?.email);

  if (!email) {
    return jsonError("Email é obrigatório.");
  }

  const productId = process.env[plan.abacatePayProductEnvVar];

  if (!productId) {
    return jsonError(`${plan.abacatePayProductEnvVar} não está configurada.`, 500);
  }

  const origin = request.headers.get("origin") ?? new URL(request.url).origin;
  const runId = Date.now().toString();

  try {
    const customerPayload = {
      email,
      name: cleanOptionalValue(body?.customer?.name),
      cellphone: cleanOptionalValue(body?.customer?.cellphone),
      taxId: cleanOptionalValue(body?.customer?.taxId),
      zipCode: cleanOptionalValue(body?.customer?.zipCode),
      metadata: {
        source: "rebound-landing-page",
        plan: plan.slug,
      },
    };

    const customer = await postToAbacatePay<AbacatePayCustomerData>({
      apiKey,
      path: "customers/create",
      body: customerPayload,
    });

    const subscriptionPayload = buildAbacatePaySubscriptionDraft({
      customerId: customer.id,
      method,
      origin,
      plan,
      productId,
    });

    subscriptionPayload.externalId = `rebound-${plan.slug}-${method.toLowerCase()}-${runId}`;
    subscriptionPayload.metadata.method = method;
    subscriptionPayload.metadata.cardLast4 =
      method === "CARD"
        ? cleanDigits(body?.payment?.card?.number).slice(-4)
        : "";

    const subscription = await postToAbacatePay<AbacatePaySubscriptionData>({
      apiKey,
      path: "subscriptions/create",
      body: subscriptionPayload,
    });

    return NextResponse.json({
      id: subscription.id,
      url: subscription.url,
      status: subscription.status,
      amount: subscription.amount,
      devMode: subscription.devMode,
    });
  } catch (error) {
    return jsonError(
      error instanceof Error
        ? error.message
        : "Não foi possível criar o checkout.",
      502,
    );
  }
}
