import { gladiaPageData } from "@/data/gladia";
import { CHECKOUT_PLANS } from "@/lib/checkout/plans";

const DEFAULT_SITE_URL = "https://reboundapp.com.br";

function normalizeSiteUrl(value: string | undefined) {
  const trimmed = value?.trim();

  if (!trimmed) {
    return DEFAULT_SITE_URL;
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  return withProtocol.replace(/\/+$/, "");
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL,
);

export const SITE_ORIGIN = new URL(SITE_URL);

export const SEO = {
  author: "Rebound AI",
  brandName: "Rebound App",
  businessName: "Rebound AI",
  canonicalPath: "/",
  category: "BusinessApplication",
  description:
    "Automatize ligações comerciais, reative leads, recupere carrinhos e acompanhe campanhas com agentes de IA por voz, CRM e WhatsApp.",
  imageAlt:
    "Rebound App, plataforma de agentes de IA por voz para ligações comerciais",
  keywords: [
    "agente de IA por voz",
    "ligações comerciais automatizadas",
    "automação de vendas",
    "reativação de leads",
    "recuperação de carrinho abandonado",
    "campanhas de ligação",
    "IA para WhatsApp",
    "CRM com IA",
    "SDR automatizado",
    "voice AI Brasil",
  ],
  locale: "pt_BR",
  market: "Brasil",
  shortDescription:
    "Agentes de IA por voz para atendimento, follow-up, reativação de leads e recuperação de vendas.",
  title: "Rebound App | Agentes de IA por voz para vendas",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_ORIGIN).toString();
}

function uniqueFaqItems() {
  const seen = new Set<string>();

  return Object.values(gladiaPageData.faq.itemsByCategory)
    .flat()
    .filter((item) => {
      const key = item.question.toLowerCase();

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
}

export function buildLandingPageJsonLd() {
  const faqItems = uniqueFaqItems();
  const useCaseNames = gladiaPageData.useCases.cards.map((card) => card.title);
  const featureList = [
    gladiaPageData.hero.description,
    ...gladiaPageData.performance.cards.map((card) => card.title),
    ...gladiaPageData.scaling.cards.map((card) => card.title),
    ...useCaseNames,
  ];

  const offerCatalog = {
    "@type": "OfferCatalog",
    name: "Planos Rebound App",
    itemListElement: [
      ...Object.values(CHECKOUT_PLANS).map((plan) => ({
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        category: "SaaS",
        name: `Plano ${plan.name}`,
        price: (plan.priceInCents / 100).toFixed(2),
        priceCurrency: plan.currency,
        url: absoluteUrl(`/checkout/${plan.slug}`),
        itemOffered: {
          "@type": "Service",
          name: `${SEO.brandName} ${plan.name}`,
          description: plan.description,
          serviceType: "Agentes de IA por voz para vendas",
        },
      })),
      {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        category: "SaaS",
        name: "Plano Enterprise",
        priceCurrency: "BRL",
        url: absoluteUrl("#preco"),
        itemOffered: {
          "@type": "Service",
          name: `${SEO.brandName} Enterprise`,
          description:
            "Plano personalizado para alta demanda, SLA, atendimento dedicado e múltiplas operações comerciais.",
          serviceType: "Agentes de IA por voz para vendas",
        },
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absoluteUrl("#organization"),
        name: SEO.businessName,
        url: absoluteUrl(),
        logo: absoluteUrl("/gladia/assets/66d173a496aae98d99f630a0_webclip.png"),
        areaServed: {
          "@type": "Country",
          name: SEO.market,
        },
        knowsAbout: SEO.keywords,
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("#website"),
        name: SEO.brandName,
        url: absoluteUrl(),
        inLanguage: "pt-BR",
        publisher: {
          "@id": absoluteUrl("#organization"),
        },
      },
      {
        "@type": "WebPage",
        "@id": absoluteUrl("#webpage"),
        name: SEO.title,
        description: SEO.description,
        url: absoluteUrl(),
        isPartOf: {
          "@id": absoluteUrl("#website"),
        },
        about: {
          "@id": absoluteUrl("#software"),
        },
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "Times de vendas, atendimento, e-commerce, clínicas, educação, serviços e operações comerciais com alto volume de leads.",
        },
        breadcrumb: {
          "@id": absoluteUrl("#breadcrumb"),
        },
        inLanguage: "pt-BR",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/opengraph-image"),
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": absoluteUrl("#software"),
        name: SEO.brandName,
        alternateName: "Rebound AI",
        applicationCategory: SEO.category,
        operatingSystem: "Web",
        description: SEO.description,
        featureList,
        offers: offerCatalog,
        provider: {
          "@id": absoluteUrl("#organization"),
        },
        url: absoluteUrl(),
      },
      {
        "@type": "Service",
        "@id": absoluteUrl("#service"),
        name: "Agentes de IA por voz para ligações comerciais",
        serviceType:
          "Automação de ligações comerciais, follow-up, atendimento e reativação de leads",
        areaServed: {
          "@type": "Country",
          name: SEO.market,
        },
        provider: {
          "@id": absoluteUrl("#organization"),
        },
        hasOfferCatalog: offerCatalog,
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("#use-cases"),
        name: "Casos de uso do Rebound App",
        itemListElement: gladiaPageData.useCases.cards.map((card, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: card.title,
          description: card.description,
          url: absoluteUrl("#company"),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl("#faq"),
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("#breadcrumb"),
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: absoluteUrl(),
          },
        ],
      },
    ],
  };
}
