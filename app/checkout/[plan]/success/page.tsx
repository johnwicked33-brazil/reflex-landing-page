import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { getCheckoutPlan } from "@/lib/checkout/plans";

type CheckoutSuccessPageProps = {
  params: Promise<{
    plan: string;
  }>;
};

export default async function CheckoutSuccessPage({
  params,
}: CheckoutSuccessPageProps) {
  const { plan: planSlug } = await params;
  const plan = getCheckoutPlan(planSlug);

  if (!plan) {
    notFound();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-zinc-950">
      <section className="w-full max-w-md rounded-3xl border border-zinc-200 bg-zinc-50 p-8 text-center shadow-xl shadow-zinc-200/60">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h1 className="mt-6 text-3xl font-semibold">
          Assinatura {plan.name} iniciada
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Recebemos o retorno da AbacatePay. Em produção, esta página pode
          liberar o acesso e orientar os próximos passos do cliente.
        </p>
        <Link
          className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-5 py-4 font-medium text-white transition hover:bg-emerald-700"
          href="/"
        >
          Voltar para a Rebound
        </Link>
      </section>
    </main>
  );
}
