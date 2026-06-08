import type { CheckoutPlan } from "@/lib/checkout/plans";

export type AbacatePayPaymentMethod = "CARD" | "PIX";

export type CheckoutCustomer = {
  email: string;
  name?: string;
  cellphone?: string;
  taxId?: string;
  zipCode?: string;
};

export type CheckoutCardPayment = {
  number: string;
  holderName: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
  holderTaxId: string;
  billingAddress: {
    zipCode: string;
    streetNumber: string;
    complement?: string;
  };
};

export type AbacatePaySubscriptionCreatePayload = {
  items: Array<{
    id: string;
    quantity: number;
  }>;
  customerId: string;
  externalId: string;
  returnUrl: string;
  completionUrl: string;
  methods: AbacatePayPaymentMethod[];
  metadata: Record<string, string>;
};

export type AbacatePayProductDraft = {
  externalId: string;
  name: string;
  price: number;
  currency: "BRL";
  cycle: CheckoutPlan["cycle"];
  description: string;
};

export type AbacatePayResponse<TData> = {
  data: TData | null;
  success: boolean;
  error: string | null;
};

export const ABACATEPAY_API_BASE_URL = "https://api.abacatepay.com/v2";

export function buildAbacatePayProductDraft(plan: CheckoutPlan): AbacatePayProductDraft {
  return {
    externalId: `rebound-${plan.slug}-monthly`,
    name: `Rebound ${plan.name}`,
    price: plan.priceInCents,
    currency: plan.currency,
    cycle: plan.cycle,
    description: plan.description,
  };
}

export function buildAbacatePaySubscriptionDraft({
  customerId,
  method,
  origin,
  plan,
  productId,
}: {
  customerId: string;
  method: AbacatePayPaymentMethod;
  origin: string;
  plan: CheckoutPlan;
  productId: string;
}): AbacatePaySubscriptionCreatePayload {
  return {
    items: [
      {
        id: productId,
        quantity: 1,
      },
    ],
    customerId,
    externalId: `rebound-${plan.slug}-${Date.now()}`,
    returnUrl: `${origin}/checkout/${plan.slug}`,
    completionUrl: `${origin}/checkout/${plan.slug}/success`,
    methods: [method],
    metadata: {
      plan: plan.slug,
      cycle: plan.cycle,
      source: "rebound-landing-page",
    },
  };
}
