import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CheckoutForm } from "@/components/checkout/checkout-form";
import {
  CHECKOUT_PLAN_SLUGS,
  getCheckoutPlan,
  type CheckoutPlanSlug,
} from "@/lib/checkout/plans";

type CheckoutPageProps = {
  params: Promise<{
    plan: string;
  }>;
};

export function generateStaticParams() {
  return CHECKOUT_PLAN_SLUGS.map((plan) => ({ plan }));
}

export async function generateMetadata({
  params,
}: CheckoutPageProps): Promise<Metadata> {
  const { plan: planSlug } = await params;
  const plan = getCheckoutPlan(planSlug);

  if (!plan) {
    return {
      title: "Checkout | Rebound",
    };
  }

  return {
    title: `Checkout ${plan.name} | Rebound`,
    description: `Ative o plano ${plan.name} da Rebound.`,
  };
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { plan: planSlug } = await params;
  const plan = getCheckoutPlan(planSlug as CheckoutPlanSlug);

  if (!plan) {
    notFound();
  }

  return (
    <CheckoutForm
      pixRecurringEnabled={
        process.env.ABACATEPAY_PIX_RECURRING_ENABLED === "true"
      }
      plan={plan}
    />
  );
}
