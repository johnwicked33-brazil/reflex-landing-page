"use client";

import React from "react";

import { DottedSurface } from "@/components/ui/dotted-surface";
import { cn } from "@/lib/utils";

type ContactMethod = "Ligação" | "WhatsApp" | "Email";

type EnterpriseLead = {
  companyName: string;
  website: string;
  contactName: string;
  phone: string;
  email: string;
  preferredContact: ContactMethod;
};

type Plan = {
  name: string;
  desc: string;
  priceLabel: string;
  minuteCostLabel: string;
  includedMinutesLabel?: string;
  isMostPop: boolean;
  isEnterprise?: boolean;
  features: string[];
  checkoutUrl?: string;
};

const PLANS: Plan[] = [
  {
    name: "Basic",
    desc: "Para operações iniciando com alto foco em performance.",
    priceLabel: "R$ 197/mês",
    minuteCostLabel: "Custo por Minuto: R$ 0,99",
    includedMinutesLabel: "Minutos Inclusos: 198 minutos",
    isMostPop: false,
    checkoutUrl: "/checkout/basic",
    features: [
      "Ideal para equipes pequenas",
      "Setup rápido da operação",
      "Transcrição e monitoramento",
      "Suporte por WhatsApp e email",
      "Relatórios básicos de uso",
    ],
  },
  {
    name: "Pro",
    desc: "Escala com melhor custo por minuto e mais previsibilidade.",
    priceLabel: "R$ 497/mês",
    minuteCostLabel: "Custo por Minuto: R$ 0,89",
    includedMinutesLabel: "Minutos Inclusos: 558 minutos",
    isMostPop: true,
    checkoutUrl: "/checkout/pro",
    features: [
      "Melhor custo para operação recorrente",
      "Prioridade em suporte",
      "Análises avançadas",
      "Times e permissões",
      "Monitoramento contínuo de qualidade",
    ],
  },
  {
    name: "Enterprise",
    desc: "Planos personalizados para alta demanda e máxima escalabilidade.",
    priceLabel: "Personalizado",
    minuteCostLabel: "Custos por minuto menores para alto volume",
    isMostPop: false,
    isEnterprise: true,
    features: [
      "Condições comerciais personalizadas",
      "Arquitetura para alta demanda",
      "SLA e atendimento dedicado",
      "Escalabilidade para múltiplas operações",
      "Acompanhamento consultivo",
    ],
  },
];

const INITIAL_LEAD: EnterpriseLead = {
  companyName: "",
  website: "",
  contactName: "",
  phone: "",
  email: "",
  preferredContact: "Ligação",
};

const ACTION_BUTTON_CLASS =
  "flex w-full items-center justify-center gap-2 rounded-xl border border-[#1f6b54] bg-gradient-to-b from-[#78dfba] via-[#58cea6] to-[#2ea97c] px-3 py-2 text-center text-base font-semibold tracking-tight text-white [text-shadow:0_1px_0_rgba(0,0,0,0.55),0_2px_10px_rgba(0,0,0,0.45)] shadow-[0_14px_28px_rgba(0,0,0,0.45),0_2px_0_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.32)] ring-offset-2 ring-offset-zinc-950 transition-all duration-200 hover:brightness-105 hover:shadow-[0_16px_30px_rgba(0,0,0,0.5),0_2px_0_rgba(0,0,0,0.56),inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.38)] active:translate-y-[1px] active:shadow-[0_9px_18px_rgba(0,0,0,0.45),0_1px_0_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(0,0,0,0.25)] lg:px-4 lg:text-lg";

export default function FUIPricingSectionWithBadge() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [lead, setLead] = React.useState<EnterpriseLead>(INITIAL_LEAD);

  const openEnterpriseModal = () => {
    setError(null);
    setSubmitted(false);
    setIsModalOpen(true);
  };

  const closeEnterpriseModal = () => {
    setIsModalOpen(false);
  };

  const onFieldChange =
    (field: keyof EnterpriseLead) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setError(null);
      setSubmitted(false);
      setLead((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  const onSubmitLead = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitted(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enterprise-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          payload.error ?? "Não foi possível enviar o cadastro agora.",
        );
      }

      setSubmitted(true);
    } catch (leadError) {
      setError(
        leadError instanceof Error
          ? leadError.message
          : "Não foi possível enviar o cadastro agora.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden pt-8 pb-4">
      <DottedSurface className="!absolute !top-auto !bottom-0 !left-1/2 !z-0 !h-[95vh] !w-[140vw] !-translate-x-1/2 opacity-[0.2] [mask-image:linear-gradient(to_top,black_0%,black_78%,transparent_100%)]" />

      <div className="relative z-10 mx-auto min-h-full max-w-screen-xl px-3 sm:px-4 md:px-5 lg:px-8">
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="py-1 text-3xl font-semibold tracking-normal text-white sm:py-2 sm:text-5xl">
            Planos para todos os tamanhos.
          </h2>
          <div className="mx-auto mt-3 max-w-xl text-sm text-white/60 sm:text-base">
            <p>
              Escolha o plano ideal para seu volume atual e evolua com custos
              progressivamente mais eficientes.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-3 min-[640px]:grid-cols-3 lg:mt-12 lg:gap-5">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className="relative mt-5 flex h-full flex-col rounded-2xl border border-white/10 bg-[#060708] min-[640px]:mt-0"
            >
              {plan.isMostPop ? (
                <span className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full border border-white/20 bg-black/80 px-3 py-2 text-center text-sm font-semibold text-white/90 shadow-md">
                  Mais popular
                </span>
              ) : null}

              <div
                className={cn(
                  "flex flex-col border-b border-white/10 bg-[#0a0b0c] p-4 min-[640px]:min-h-[305px] lg:p-6",
                  plan.name === "Enterprise" &&
                    "rounded-t-2xl bg-[linear-gradient(110deg,#0a0b0c,45%,#11392d,55%,#0a0b0c)] bg-[length:200%_100%] animate-background-shine",
                )}
              >
                <span className="font-medium tracking-tight text-[#8be8bf]">
                  {plan.name}
                </span>

                <div className="mt-2 text-xl font-semibold text-white min-[700px]:text-2xl lg:text-3xl">{plan.priceLabel}</div>

                <div className="mt-3 min-h-[112px] space-y-1.5">
                  <p className="text-sm text-white/70">{plan.minuteCostLabel}</p>
                  {plan.includedMinutesLabel ? (
                    <p className="text-sm text-white/70">{plan.includedMinutesLabel}</p>
                  ) : (
                    <p aria-hidden className="invisible text-sm">
                      Minutos Inclusos: 000 minutos
                    </p>
                  )}
                  <p className="pt-1.5 text-sm leading-5 text-white/55">{plan.desc}</p>
                </div>

                {plan.isEnterprise ? (
                  <button
                    className={cn(ACTION_BUTTON_CLASS, "mt-4 min-[640px]:mt-auto")}
                    onClick={openEnterpriseModal}
                    type="button"
                  >
                    Solicitar proposta
                  </button>
                ) : (
                  <a className={cn(ACTION_BUTTON_CLASS, "mt-4 min-[640px]:mt-auto")} href={plan.checkoutUrl ?? "#"}>
                    Assinar agora
                  </a>
                )}
              </div>

              <ul className="space-y-2.5 p-4 lg:p-6">
                <li className="pb-2 font-medium text-white/80">Recursos</li>

                {plan.features.map((featureItem, idx) => (
                  <li
                    key={`${plan.name}-feature-${idx}`}
                    className="flex items-center gap-3 text-sm text-white/75 lg:text-base"
                  >
                    <svg
                      className="h-5 w-5 text-[#8be8bf]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-2xl border border-white/15 bg-[#050505] p-6 sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h4 className="text-2xl font-semibold text-white">Cadastro Enterprise</h4>
                <p className="mt-1 text-sm text-white/60">
                  Preencha seus dados e nosso time entra em contato.
                </p>
              </div>
              <button
                aria-label="Fechar modal"
                className="rounded-md border border-white/15 px-2 py-1 text-white/80 hover:bg-white/10"
                disabled={isSubmitting}
                onClick={closeEnterpriseModal}
                type="button"
              >
                ×
              </button>
            </div>

            <form className="space-y-4" onSubmit={onSubmitLead}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-white/85">
                  Nome da empresa
                  <input
                    className="mt-1 w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-[#8be8bf]"
                    disabled={isSubmitting}
                    onChange={onFieldChange("companyName")}
                    required
                    type="text"
                    value={lead.companyName}
                  />
                </label>

                <label className="text-sm text-white/85">
                  Site da empresa
                  <input
                    className="mt-1 w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-[#8be8bf]"
                    disabled={isSubmitting}
                    onChange={onFieldChange("website")}
                    required
                    type="url"
                    value={lead.website}
                  />
                </label>

                <label className="text-sm text-white/85">
                  Nome da pessoa
                  <input
                    className="mt-1 w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-[#8be8bf]"
                    disabled={isSubmitting}
                    onChange={onFieldChange("contactName")}
                    required
                    type="text"
                    value={lead.contactName}
                  />
                </label>

                <label className="text-sm text-white/85">
                  Telefone da pessoa
                  <input
                    className="mt-1 w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-[#8be8bf]"
                    disabled={isSubmitting}
                    onChange={onFieldChange("phone")}
                    required
                    type="tel"
                    value={lead.phone}
                  />
                </label>
              </div>

              <label className="block text-sm text-white/85">
                Email para contato
                <input
                  className="mt-1 w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-white outline-none focus:border-[#8be8bf]"
                  disabled={isSubmitting}
                  onChange={onFieldChange("email")}
                  required
                  type="email"
                  value={lead.email}
                />
              </label>

              <fieldset className="space-y-2">
                <legend className="text-sm text-white/85">Meio preferido de contato</legend>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  {(["Ligação", "WhatsApp", "Email"] as ContactMethod[]).map(
                    (option) => (
                      <label key={option} className="inline-flex items-center gap-2">
                        <input
                          checked={lead.preferredContact === option}
                          disabled={isSubmitting}
                          name="preferredContact"
                          onChange={() => {
                            setError(null);
                            setSubmitted(false);
                            setLead((prev) => ({
                              ...prev,
                              preferredContact: option,
                            }));
                          }}
                          type="radio"
                          value={option}
                        />
                        {option}
                      </label>
                    ),
                  )}
                </div>
              </fieldset>

              <div className="pt-2">
                <button
                  className={cn(
                    ACTION_BUTTON_CLASS,
                    "rounded-md text-base disabled:cursor-not-allowed disabled:opacity-70",
                  )}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Enviando..." : "Enviar cadastro"}
                </button>
                {submitted ? (
                  <p className="mt-3 text-sm text-[#8be8bf]">
                    Cadastro enviado. Nossa equipe vai falar com você em breve.
                  </p>
                ) : null}
                {error ? (
                  <p className="mt-3 text-sm text-red-300">
                    {error}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
}
