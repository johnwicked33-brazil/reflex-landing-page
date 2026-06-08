"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  CreditCard,
  QrCode,
} from "lucide-react";

import type { AbacatePayPaymentMethod } from "@/lib/checkout/abacatepay";
import type { CheckoutPlan } from "@/lib/checkout/plans";
import { formatPriceFromCents } from "@/lib/checkout/plans";
import { cn } from "@/lib/utils";

type CheckoutFormProps = {
  plan: CheckoutPlan;
  pixRecurringEnabled: boolean;
};

type FieldProps = {
  autoComplete?: string;
  className?: string;
  disabled?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type: React.HTMLInputTypeAttribute;
};

const PAYMENT_METHODS: Array<{
  value: AbacatePayPaymentMethod;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  {
    value: "CARD",
    label: "Pagamento por Cartão",
    icon: CreditCard,
  },
  {
    value: "PIX",
    label: "Pagamento por Pix em Breve",
    icon: QrCode,
  },
];

function GlassInputWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-950/[0.035] backdrop-blur-sm transition-colors focus-within:border-emerald-400/80 focus-within:bg-emerald-500/10">
      {children}
    </div>
  );
}

function CheckoutField({
  autoComplete,
  className,
  disabled,
  inputMode,
  label,
  name,
  placeholder,
  required,
  type,
}: FieldProps) {
  return (
    <label className={cn("block", className)}>
      <span className="text-sm font-medium leading-tight text-zinc-600">
        {label}
        {required ? <span className="text-emerald-700"> *</span> : null}
      </span>
      <GlassInputWrapper>
        <input
          autoComplete={autoComplete}
          className="w-full rounded-xl bg-transparent px-3.5 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400"
          disabled={disabled}
          inputMode={inputMode}
          name={name}
          placeholder={placeholder}
          required={required}
          type={type}
        />
      </GlassInputWrapper>
    </label>
  );
}

function splitCardExpiration(value: FormDataEntryValue | null) {
  const digits = String(value ?? "").replace(/\D/g, "");
  const shortYear = digits.slice(2, 4);

  return {
    expirationMonth: digits.slice(0, 2),
    expirationYear: shortYear ? `20${shortYear}` : "",
  };
}

export function CheckoutForm({ pixRecurringEnabled, plan }: CheckoutFormProps) {
  const [method, setMethod] = React.useState<AbacatePayPaymentMethod>("CARD");
  const [error, setError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [sameCardHolder, setSameCardHolder] = React.useState(true);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitted(false);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const customerTaxId = String(formData.get("taxId") ?? "");
    const cardExpiration = splitCardExpiration(formData.get("cardExpiration"));

    try {
      const response = await fetch("/api/checkout/abacatepay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: plan.slug,
          method,
          customer: {
            email: String(formData.get("email") ?? ""),
            name: String(formData.get("name") ?? ""),
            cellphone: String(formData.get("cellphone") ?? ""),
            taxId: customerTaxId,
            zipCode: String(formData.get("zipCode") ?? ""),
          },
          payment:
            method === "CARD"
              ? {
                  card: {
                    number: String(formData.get("cardNumber") ?? ""),
                    holderName: String(formData.get("cardHolderName") ?? ""),
                    expirationMonth: cardExpiration.expirationMonth,
                    expirationYear: cardExpiration.expirationYear,
                    cvv: String(formData.get("cardCvv") ?? ""),
                    holderTaxId: sameCardHolder
                      ? customerTaxId
                      : String(formData.get("cardHolderTaxId") ?? ""),
                    billingAddress: {
                      zipCode: String(formData.get("cardZipCode") ?? ""),
                      streetNumber: String(formData.get("cardStreetNumber") ?? ""),
                      complement: String(formData.get("cardComplement") ?? ""),
                    },
                  },
                }
              : undefined,
        }),
      });

      const payload = (await response.json()) as {
        error?: string;
        url?: string;
      };

      if (!response.ok || !payload.url) {
        throw new Error(
          payload.error ?? "Não foi possível iniciar o checkout agora.",
        );
      }

      setSubmitted(true);
      window.location.assign(payload.url);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Não foi possível iniciar o checkout agora.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black/90 p-4 text-zinc-950 sm:p-6 lg:px-12 lg:py-8">
      <div className="flex w-full max-w-[1040px] flex-col overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-[0_20px_64px_rgba(15,23,42,0.12)] md:min-h-[600px] md:flex-row lg:min-h-[620px]">
        <section className="flex flex-1 items-center justify-center px-4 py-4 sm:px-5 lg:px-5">
          <div className="w-full max-w-[500px]">
            <Link
              className="animate-element animate-delay-100 mb-3 inline-flex items-center gap-2 text-sm font-medium leading-tight text-zinc-500 transition hover:text-zinc-950"
              href="/#preco"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar aos planos
            </Link>

            <div className="flex flex-col gap-3">
              <div>
                <p className="animate-element animate-delay-100 text-sm font-semibold uppercase leading-tight tracking-[0.18em] text-emerald-700">
                  Checkout Rebound
                </p>
                <h1 className="animate-element animate-delay-200 mt-1 text-4xl font-semibold leading-[0.94] tracking-normal text-zinc-950 md:text-[38px]">
                  Ative o plano {plan.name}
                </h1>
                <p className="animate-element animate-delay-300 mt-1 text-sm leading-[1.3] text-zinc-500">
                  Informe seus dados para preparar sua assinatura mensal e
                  continuar para o pagamento.
                </p>
              </div>

              <form className="space-y-3" onSubmit={onSubmit}>
                <fieldset className="animate-element animate-delay-400 space-y-1.5">
                  <legend className="text-sm font-medium leading-tight text-zinc-600">
                    Método de pagamento
                  </legend>
                  <div className="grid gap-1.5 sm:grid-cols-2">
                    {PAYMENT_METHODS.map((item) => {
                      const Icon = item.icon;
                      const isPixUnavailable =
                        item.value === "PIX" && !pixRecurringEnabled;
                      const isSelected = method === item.value;

                      return (
                        <label
                          className={cn(
                            "flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition",
                            isPixUnavailable
                              ? "cursor-not-allowed opacity-55"
                              : "cursor-pointer",
                            isSelected
                              ? "border-emerald-400 bg-emerald-50 shadow-[0_0_0_1px_rgba(52,211,153,0.35)]"
                              : "border-zinc-200 bg-zinc-50 hover:border-zinc-300",
                          )}
                          key={item.value}
                        >
                          <input
                            checked={isSelected}
                            className="sr-only"
                            disabled={isPixUnavailable}
                            name="paymentMethod"
                            onChange={() => setMethod(item.value)}
                            type="radio"
                            value={item.value}
                          />
                          <span
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                              isSelected
                                ? "border-emerald-200 bg-white text-emerald-700"
                                : "border-zinc-200 bg-white text-zinc-500",
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="min-w-0 truncate text-sm font-semibold leading-tight text-zinc-950">
                            {item.label}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="grid gap-2.5 sm:grid-cols-2">
                  <CheckoutField
                    autoComplete="email"
                    className="animate-element animate-delay-500"
                    label="Email"
                    name="email"
                    placeholder="voce@empresa.com"
                    required
                    type="email"
                  />
                  <CheckoutField
                    autoComplete="name"
                    className="animate-element animate-delay-600"
                    label="Nome completo"
                    name="name"
                    placeholder="Nome da pessoa"
                    type="text"
                  />
                  <CheckoutField
                    autoComplete="tel"
                    className="animate-element animate-delay-700"
                    label="Telefone"
                    name="cellphone"
                    placeholder="(11) 99999-9999"
                    type="tel"
                  />
                  <CheckoutField
                    className="animate-element animate-delay-700"
                    inputMode="numeric"
                    label="CPF ou CNPJ"
                    name="taxId"
                    required={method === "CARD" && sameCardHolder}
                    placeholder="Somente números"
                    type="text"
                  />
                  <CheckoutField
                    autoComplete="postal-code"
                    className="animate-element animate-delay-800"
                    inputMode="numeric"
                    label="CEP"
                    name="zipCode"
                    placeholder="00000-000"
                    type="text"
                  />
                </div>

                {method === "CARD" ? (
                  <section className="animate-element animate-delay-600 space-y-2">
                    <h2 className="text-sm font-semibold leading-tight text-zinc-950">
                      Dados do cartão
                    </h2>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      <CheckoutField
                        autoComplete="cc-number"
                        className="sm:col-span-2"
                        inputMode="numeric"
                        label="Número do cartão"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        type="text"
                      />
                      <CheckoutField
                        autoComplete="cc-name"
                        className="sm:col-span-2"
                        label="Nome no cartão"
                        name="cardHolderName"
                        placeholder="Nome igual ao cartão"
                        required
                        type="text"
                      />
                      <CheckoutField
                        autoComplete="cc-exp"
                        inputMode="numeric"
                        label="Data de validade"
                        name="cardExpiration"
                        placeholder="MM/AA"
                        required
                        type="text"
                      />
                      <CheckoutField
                        autoComplete="cc-csc"
                        inputMode="numeric"
                        label="CVV"
                        name="cardCvv"
                        placeholder="123"
                        required
                        type="password"
                      />
                      <div className="sm:col-span-2">
                        <div className="mb-1 flex items-center justify-between gap-3">
                          <span className="text-sm font-medium leading-tight text-zinc-600">
                            CPF do titular
                            {!sameCardHolder ? (
                              <span className="text-emerald-700"> *</span>
                            ) : null}
                          </span>
                          <label className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                            <input
                              checked={sameCardHolder}
                              className="h-4 w-4 rounded border-zinc-300 text-emerald-600"
                              onChange={(event) =>
                                setSameCardHolder(event.target.checked)
                              }
                              type="checkbox"
                            />
                            Sou o titular do cartão
                          </label>
                        </div>
                        <GlassInputWrapper>
                          <input
                            className="w-full rounded-xl bg-transparent px-3.5 py-2.5 text-sm text-zinc-950 outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:text-zinc-400"
                            disabled={sameCardHolder}
                            inputMode="numeric"
                            name="cardHolderTaxId"
                            placeholder={
                              sameCardHolder
                                ? "Usar CPF/CNPJ informado acima"
                                : "000.000.000-00"
                            }
                            required={!sameCardHolder}
                            type="text"
                          />
                        </GlassInputWrapper>
                      </div>
                    </div>
                  </section>
                ) : null}

                {method === "CARD" ? (
                  <section className="animate-element animate-delay-700 space-y-2">
                    <h2 className="text-sm font-semibold leading-tight text-zinc-950">
                      Endereço de cobrança
                    </h2>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      <CheckoutField
                        autoComplete="postal-code"
                        inputMode="numeric"
                        label="CEP"
                        name="cardZipCode"
                        placeholder="00000-000"
                        required
                        type="text"
                      />
                      <CheckoutField
                        inputMode="numeric"
                        label="Nº residencial"
                        name="cardStreetNumber"
                        placeholder="000"
                        required
                        type="text"
                      />
                      <CheckoutField
                        autoComplete="address-line2"
                        className="sm:col-span-2"
                        label="Complemento"
                        name="cardComplement"
                        placeholder="Apto, casa, etc."
                        type="text"
                      />
                    </div>
                  </section>
                ) : null}

                <button
                  className="animate-element animate-delay-900 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-medium leading-tight text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Criando checkout..." : "Preparar assinatura"}
                  <CheckCircle2 className="h-5 w-5" />
                </button>
              </form>

              {submitted ? (
                <div className="animate-element rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm leading-5 text-emerald-800">
                  Checkout criado. Redirecionando para o pagamento.
                </div>
              ) : null}

              {error ? (
                <div className="animate-element rounded-xl border border-red-200 bg-red-50 p-3 text-sm leading-5 text-red-700">
                  {error}
                </div>
              ) : null}

            </div>
          </div>
        </section>

        <section className="hidden flex-1 p-2 md:block">
          <div
            className="animate-slide-right animate-delay-300 relative h-full overflow-hidden rounded-[22px] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(3,7,18,0.05), rgba(3,7,18,0.72)), url('/gladia/assets/699dd45d2deab1aeb6a44e35_Background.webp')",
            }}
          >
            <div className="absolute left-4 right-4 top-4 rounded-2xl border border-white/20 bg-white/75 p-3.5 text-zinc-950 shadow-2xl shadow-black/15 backdrop-blur-xl">
              <p className="text-sm font-medium leading-tight text-emerald-700">Resumo</p>
              <div className="mt-1.5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold leading-none">{plan.name}</h2>
                  <p className="mt-1.5 text-sm leading-[1.3] text-zinc-600">
                    {plan.description}
                  </p>
                </div>
                <BadgeCheck className="h-6 w-6 shrink-0 text-emerald-600" />
              </div>

              <div className="mt-3 rounded-2xl bg-zinc-950 p-3.5 text-white">
                <div className="flex items-end justify-between gap-4">
                  <span className="text-sm leading-tight text-white/60">Mensalidade</span>
                  <strong className="text-2xl font-semibold leading-none">
                    {formatPriceFromCents(plan.priceInCents)}
                  </strong>
                </div>
                <div className="mt-2.5 flex justify-between gap-4 text-sm leading-tight text-white/65">
                  <span>Minutos inclusos</span>
                  <span>{plan.includedMinutes} minutos</span>
                </div>
                <div className="mt-2 flex justify-between gap-4 text-sm leading-tight text-white/65">
                  <span>Custo por minuto</span>
                  <span>{formatPriceFromCents(plan.minuteCostInCents)}</span>
                </div>
              </div>

              <ul className="mt-3 grid gap-1.5">
                {plan.features.map((feature) => (
                  <li className="flex gap-2 text-sm leading-tight text-zinc-700" key={feature}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
