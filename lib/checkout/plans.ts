export type CheckoutPlanSlug = "basic" | "pro";

export type CheckoutPlanCycle = "MONTHLY";

export type CheckoutPlan = {
  slug: CheckoutPlanSlug;
  name: string;
  description: string;
  priceInCents: number;
  currency: "BRL";
  cycle: CheckoutPlanCycle;
  includedMinutes: number;
  minuteCostInCents: number;
  abacatePayProductEnvVar: string;
  features: string[];
};

export const CHECKOUT_PLANS: Record<CheckoutPlanSlug, CheckoutPlan> = {
  basic: {
    slug: "basic",
    name: "Basic",
    description: "Para operações iniciando com alto foco em performance.",
    priceInCents: 19700,
    currency: "BRL",
    cycle: "MONTHLY",
    includedMinutes: 198,
    minuteCostInCents: 99,
    abacatePayProductEnvVar: "ABACATEPAY_BASIC_PRODUCT_ID",
    features: [
      "Setup rápido da operação",
      "Transcrição e monitoramento",
      "Suporte por WhatsApp e email",
      "Relatórios básicos de uso",
    ],
  },
  pro: {
    slug: "pro",
    name: "Pro",
    description: "Escala com melhor custo por minuto e mais previsibilidade.",
    priceInCents: 49700,
    currency: "BRL",
    cycle: "MONTHLY",
    includedMinutes: 558,
    minuteCostInCents: 89,
    abacatePayProductEnvVar: "ABACATEPAY_PRO_PRODUCT_ID",
    features: [
      "Prioridade em suporte",
      "Análises avançadas",
      "Times e permissões",
      "Monitoramento contínuo de qualidade",
    ],
  },
};

export const CHECKOUT_PLAN_SLUGS = Object.keys(
  CHECKOUT_PLANS,
) as CheckoutPlanSlug[];

export function getCheckoutPlan(slug: string) {
  return CHECKOUT_PLANS[slug as CheckoutPlanSlug] ?? null;
}

export function formatPriceFromCents(valueInCents: number) {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(valueInCents / 100);
}
