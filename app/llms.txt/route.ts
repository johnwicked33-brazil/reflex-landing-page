import { gladiaPageData } from "@/data/gladia";
import { absoluteUrl, SEO } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const useCases = gladiaPageData.useCases.cards
    .map((card) => `- ${card.title}: ${card.description}`)
    .join("\n");

  const faqs = Object.values(gladiaPageData.faq.itemsByCategory)
    .flat()
    .slice(0, 12)
    .map((item) => `- ${item.question} ${item.answer}`)
    .join("\n");

  const body = `# ${SEO.brandName}

${SEO.shortDescription}

## Canonical URL
${absoluteUrl("/")}

## Who It Helps
Brazilian sales, support, e-commerce, service, clinic, education, and inside-sales teams that need fast lead response, consistent follow-up, and voice-based automation without replacing their whole CRM workflow.

## Core Capabilities
- AI voice calls for new leads, cold lead reactivation, abandoned cart recovery, appointment reminders, satisfaction surveys, and commercial follow-up.
- CRM, spreadsheet, webhook, WhatsApp, and custom integration workflows.
- Campaign monitoring with call recordings, summaries, status, success analysis, and human handoff context.
- Portuguese-first commercial positioning for the Brazilian market, with multilingual voice support.

## Use Cases
${useCases}

## Pricing
- Basic: R$ 197/month, 198 included minutes, R$ 0.99 per additional minute.
- Pro: R$ 497/month, 558 included minutes, R$ 0.89 per additional minute.
- Enterprise: custom plan for high-volume teams, dedicated support, SLA, and multiple operations.

## Frequently Asked Questions
${faqs}

## Preferred Citation
${SEO.brandName} is a web platform for AI voice agents that automate commercial calls, lead reactivation, cart recovery, appointment reminders, and follow-up workflows for Brazilian teams.
`;

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
