import { createElement, type ImgHTMLAttributes } from "react";
import dynamic from "next/dynamic";

import { GladiaHero } from "./hero";
import { AudioExampleModalTrigger } from "./problem-audio";
import { RoiCalculator } from "./roi-calculator";
import { SmoothAnchor as ExternalLink } from "./smooth-anchor";
import FUIPricingSectionWithBadge from "@/components/ui/pricing-section";
import styles from "./gladia.module.css";

import { gladiaPageData } from "@/data/gladia";
import type {
  GladiaFeatureCard,
  GladiaFeatureSection,
  GladiaLink,
  GladiaStatement,
  GladiaUseCase,
} from "@/types/gladia";

const FAQ = dynamic(
  () => import("@/components/ui/faq-tabs").then((module) => module.FAQ),
  {
    loading: () => (
      <div className="h-[520px] w-full rounded-[32px] border border-white/10 bg-[#050505]/80" />
    ),
  },
);

function externalLinkProps(href: string) {
  return href.startsWith("http")
    ? ({ rel: "noreferrer", target: "_blank" } as const)
    : {};
}

function LazyImage({
  loading = "lazy",
  decoding = "async",
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return createElement("img", {
    ...props,
    decoding,
    loading,
  });
}

const infrastructureLogos = [
  {
    label: "OpenAI",
    mark: (
      <svg aria-hidden="true" viewBox="0 0 160 42">
        <path
          d="M22.2 37.8c-3 0-5.8-.9-8.3-2.6-3.8-2.6-6-7.1-5.8-11.7-2-1.7-3.2-4.2-3.2-6.9 0-4.5 3.2-8.4 7.6-9.1C14.2 4.2 17.7 2 21.5 2c3 0 5.8.9 8.3 2.6 3.8 2.6 6 7.1 5.8 11.7 2 1.7 3.2 4.2 3.2 6.9 0 4.5-3.2 8.4-7.6 9.1-1.8 3.3-5.2 5.5-9 5.5Zm-6.5-9.1 6.4 3.7c3.1 1.8 7 .7 8.8-2.4.7-1.2 1-2.4.9-3.8l-7.2 4.1a2 2 0 0 1-2 0l-6.9-4Zm-6.1-12.1c0 1.4.5 2.7 1.3 3.8V13c-3.1 1.8-4.2 5.7-2.4 8.8.7 1.2 1.6 2 2.8 2.6v-8.3a2 2 0 0 1 1-1.7l6.9-4-6.2-3.6c-3.2-.1-6.4 2.7-6.4 6.6Zm14.2 13.1 6.4-3.7v-7.4l-6.4-3.7-6.4 3.7V26Zm-11-13.1v7.4l6.4 3.7v-7.4Zm18.7-1.2v7.4l6.2-3.6c.1-3.6-2.7-6.6-6.2-6.8Zm-18-8.5 7.2 4.1a2 2 0 0 1 1 1.7v8l6.4-3.7v-7.4l-6.4-3.7c-3.1-1.8-7-.7-8.8 2.4-.7 1.1-1 2.4-.9 3.7Zm16.8 7.7v-7.4l-6.2-3.6c-1.3-.7-2.6-1-3.9-.9l7.2 4.1a2 2 0 0 1 1 1.7v8Z"
          fill="currentColor"
        />
        <text
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="25"
          fontWeight="700"
          letterSpacing="0"
          x="47"
          y="29"
        >
          OpenAI
        </text>
      </svg>
    ),
  },
  {
    label: "Google Gemini",
    mark: (
      <svg aria-hidden="true" viewBox="0 0 190 42">
        <path
          d="M21 6.5c1.9 7.2 6.1 11.4 13.3 13.3C27.1 21.7 22.9 25.9 21 33.1c-1.9-7.2-6.1-11.4-13.3-13.3C14.9 17.9 19.1 13.7 21 6.5Z"
          fill="currentColor"
        />
        <text
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="0"
          x="45"
          y="28"
        >
          Google Gemini
        </text>
      </svg>
    ),
  },
  {
    label: "xAI",
    mark: (
      <svg aria-hidden="true" viewBox="0 0 100 42">
        <text
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="31"
          fontWeight="800"
          fontStyle="italic"
          letterSpacing="0"
          x="20"
          y="31"
        >
          xAI
        </text>
      </svg>
    ),
  },
  {
    label: "Supabase",
    mark: (
      <svg aria-hidden="true" viewBox="0 0 178 42">
        <path
          d="M26.8 4.4c1-1.6 3.4-.9 3.4 1v13h7.6c1.8 0 2.8 2 1.8 3.4L19.4 37.2c-1 1.6-3.4.9-3.4-1v-13H8.4c-1.8 0-2.8-2-1.8-3.4Z"
          fill="currentColor"
        />
        <text
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="23"
          fontWeight="700"
          letterSpacing="0"
          x="49"
          y="29"
        >
          Supabase
        </text>
      </svg>
    ),
  },
  {
    label: "Redis",
    mark: (
      <svg aria-hidden="true" viewBox="0 0 140 42">
        <path
          d="M22.1 4.3 39.2 14 22.1 23.7 5 14Zm0 10.1 7-4-7-4-7 4Zm-17.1 4 17.1 9.7 17.1-9.7v4.4L22.1 32.5 5 22.8Zm0 8.2 17.1 9.7 17.1-9.7V31L22.1 40.7 5 31Z"
          fill="currentColor"
        />
        <text
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="25"
          fontWeight="700"
          letterSpacing="0"
          x="52"
          y="29"
        >
          Redis
        </text>
      </svg>
    ),
  },
];

function TrustedLogoBelt() {
  const trustedTitle = "Estrutura confiável para escalar a sua operação.";

  return (
    <section className={styles.trustedSection}>
      <div className={styles.container}>
        <h2 className={styles.trustedLabel}>{trustedTitle}</h2>

        <div className={styles.trustedShell}>
          <div className={styles.trustedTrack}>
            {infrastructureLogos.map((logo) => (
              <div
                key={logo.label}
                className={styles.trustedLogo}
                role="img"
                aria-label={logo.label}
              >
                {logo.mark}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection({
  section,
}: {
  section: typeof gladiaPageData.howItWorks;
}) {
  return (
    <section className={styles.howItWorksSection} id="como-funciona">
      <div className={styles.container}>
        <div className={styles.centeredIntro}>
          <p className={styles.showcaseEyebrow}>{section.eyebrow}</p>
          <h2 className={styles.sectionTitleLarge}>{section.title}</h2>
          <p className={styles.sectionLead}>{section.description}</p>
        </div>

        <div className={styles.howItWorksGrid}>
          {section.steps.map((step) => (
            <article className={styles.howItWorksCard} key={step.title}>
              {step.eyebrow ? (
                <span className={styles.howItWorksNumber}>{step.eyebrow}</span>
              ) : null}
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductDemoSection({
  section,
}: {
  section: typeof gladiaPageData.productDemo;
}) {
  return (
    <section className={styles.productDemoSection}>
      <div className={styles.container}>
        <div className={styles.productDemoShell}>
          <div className={styles.productDemoIntro}>
            <p className={styles.showcaseEyebrow}>{section.eyebrow}</p>
            <h2 className={styles.sectionTitleLarge}>{section.title}</h2>
            <p className={styles.sectionLead}>{section.description}</p>
            <ExternalLink className={styles.showcaseAction} {...section.action} />
          </div>

          <div className={styles.productDemoPanel}>
            <div className={styles.productDemoTopbar}>
              <span>Campanha de reativação</span>
              <strong>Em execução</strong>
            </div>

            <div className={styles.productDemoMetrics}>
              {section.metrics.map((metric) => (
                <div className={styles.productDemoMetric} key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  {metric.description ? <p>{metric.description}</p> : null}
                </div>
              ))}
            </div>

            <div className={styles.productDemoTimeline}>
              {section.timeline.map((item) => (
                <div className={styles.productDemoTimelineItem} key={item.title}>
                  <span aria-hidden className={styles.productDemoDot} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection({
  section,
}: {
  section: typeof gladiaPageData.comparison;
}) {
  return (
    <section className={styles.comparisonSection}>
      <div className={styles.container}>
        <div className={styles.centeredIntro}>
          <p className={styles.showcaseEyebrow}>{section.eyebrow}</p>
          <h2 className={styles.sectionTitleLarge}>{section.title}</h2>
          <p className={styles.sectionLead}>{section.description}</p>
        </div>

        <div className={styles.comparisonTableWrap}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Critério</th>
                <th>SDR manual</th>
                <th>Automação tradicional</th>
                <th>Rebound App</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.criterion}>
                  <th scope="row">{row.criterion}</th>
                  <td>{row.manual}</td>
                  <td>{row.automation}</td>
                  <td>{row.rebound}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ObjectionsSection({
  section,
}: {
  section: typeof gladiaPageData.objections;
}) {
  return (
    <section className={styles.objectionsSection}>
      <div className={styles.container}>
        <div className={styles.objectionsLayout}>
          <div className={styles.objectionsIntro}>
            <p className={styles.showcaseEyebrow}>{section.eyebrow}</p>
            <h2 className={styles.sectionTitleLarge}>{section.title}</h2>
            <p className={styles.sectionLead}>{section.description}</p>
          </div>

          <div className={styles.objectionsList}>
            {section.items.map((item) => (
              <article className={styles.objectionCard} key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoiSection({ section }: { section: typeof gladiaPageData.roi }) {
  return (
    <section className={styles.roiSection}>
      <div className={styles.container}>
        <div className={styles.roiShell}>
          <div className={styles.roiIntro}>
            <p className={styles.showcaseEyebrow}>{section.eyebrow}</p>
            <h2 className={styles.sectionTitleLarge}>{section.title}</h2>
            <p className={styles.sectionLead}>{section.description}</p>
          </div>
          <RoiCalculator assumptions={section.assumptions} />
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection({
  section,
}: {
  section: typeof gladiaPageData.finalCta;
}) {
  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.container}>
        <div className={styles.finalCtaShell}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <div className={styles.finalCtaActions}>
            <ExternalLink className={styles.heroPrimaryAction} {...section.primaryAction} />
            <ExternalLink className={styles.heroSecondaryAction} {...section.secondaryAction} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PerformanceShowcase({ section }: { section: GladiaFeatureSection }) {
  return (
    <section className={styles.showcaseSection} id={section.id}>
      <div className={styles.container}>
        <div className={styles.performanceLayout}>
          <article
            className={styles.performanceIntroCard}
            style={{ backgroundImage: `url(${section.background})` }}
          >
            <div className={styles.performanceIntroText}>
              <p className={styles.showcaseEyebrow}>{section.eyebrow}</p>
              <h2 className={styles.performanceIntroTitle}>{section.title}</h2>
              <p className={styles.performanceIntroDescription}>
                {section.description}
              </p>
            </div>

            {section.action ? (
              <AudioExampleModalTrigger
                audioSrc={section.action.href}
                className={styles.performanceAction}
                label={section.action.label}
              />
            ) : null}
          </article>

          <div className={styles.performanceGrid}>
            {section.cards.map((card) => (
              <article key={card.title} className={styles.performanceGridCard}>
                {card.image ? (
                  <LazyImage
                    alt={card.imageAlt ?? card.title}
                    className={styles.performanceGridIcon}
                    src={card.image}
                  />
                ) : null}

                <div className={styles.performanceGridText}>
                  <h3 className={styles.performanceGridTitle}>{card.title}</h3>
                  <p className={styles.performanceGridDescription}>
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScalingShowcase({ section }: { section: GladiaFeatureSection }) {
  return (
    <section className={styles.showcaseSection} id={section.id}>
      <div className={styles.container}>
        <div className={styles.sectionEyebrowTitle}>
          <LazyImage
            alt=""
            className={styles.sectionEyebrowDot}
            src="/gladia/assets/68d3c4f6c540ef7930dbe2d4_Pill.svg"
          />
          <p className={styles.sectionEyebrowText}>{section.eyebrow}</p>
          <div className={styles.sectionEyebrowLine} />
        </div>

        <article className={styles.scalingHeroCard}>
          <div aria-hidden className={styles.scalingHeroOverlay} />

          <div className={styles.scalingHeroText}>
            <h2 className={styles.scalingHeroTitle}>{section.title}</h2>
            <p className={styles.scalingHeroDescription}>{section.description}</p>
          </div>

          {section.action ? (
            <ExternalLink className={styles.performanceAction} {...section.action} />
          ) : null}
        </article>

        <div className={styles.scalingRow}>
          {section.cards.map((card) => (
            <article key={card.title} className={styles.scalingRowCard}>
              {card.image ? (
                <LazyImage
                  alt={card.imageAlt ?? card.title}
                  className={styles.performanceGridIcon}
                  src={card.image}
                />
              ) : null}

              <div className={styles.performanceGridText}>
                <h3 className={styles.performanceGridTitle}>{card.title}</h3>
                <p className={styles.performanceGridDescription}>
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationCard({
  card,
  className,
}: {
  card: GladiaFeatureCard;
  className?: string;
}) {
  return (
    <article className={`${styles.integrationCard} ${className ?? ""}`.trim()}>
      {card.image ? (
        <LazyImage
          alt={card.imageAlt ?? card.title}
          className={styles.integrationCardIcon}
          src={card.image}
        />
      ) : null}

      <div className={styles.integrationCardText}>
        <h3 className={styles.integrationCardTitle}>{card.title}</h3>
        <p className={styles.integrationCardDescription}>{card.description}</p>
      </div>

    </article>
  );
}

function IntegrationShowcase({
  section,
}: {
  section: GladiaFeatureSection & { supportCard: GladiaFeatureCard };
}) {
  const [sdkCard, fastCard, telephonyCard, ecosystemCard] = section.cards;

  return (
    <section className={styles.showcaseSection} id={section.id}>
      <div className={styles.container}>
        <div className={styles.sectionEyebrowTitle}>
          <LazyImage
            alt=""
            className={styles.sectionEyebrowDot}
            src="/gladia/assets/68d3c4f6c540ef7930dbe2d4_Pill.svg"
          />
          <p className={styles.sectionEyebrowText}>{section.eyebrow}</p>
          <div className={styles.sectionEyebrowLine} />
        </div>

        <div className={styles.integrationLayout}>
          <article
            className={styles.integrationHeroCard}
            style={{ backgroundImage: `url(${section.background})` }}
          >
            <div className={styles.integrationHeroContent}>
              <h2 className={styles.integrationHeroTitle}>
                {section.title.split("\n").map((line) => (
                  <span key={line} className={styles.integrationHeroTitleLine}>
                    {line}
                  </span>
                ))}
              </h2>
              <p className={styles.integrationHeroDescription}>
                {section.description}
              </p>
            </div>

            {section.action ? (
              <ExternalLink className={styles.integrationHeroAction} {...section.action} />
            ) : null}
          </article>

          <div className={styles.integrationGrid}>
            <IntegrationCard card={sdkCard} className={styles.integrationCardTopLeft} />
            <IntegrationCard card={fastCard} className={styles.integrationCardTopRight} />
            <IntegrationCard
              card={telephonyCard}
              className={styles.integrationCardWide}
            />
            <IntegrationCard
              card={ecosystemCard}
              className={styles.integrationCardBottomLeft}
            />
            <IntegrationCard
              card={section.supportCard}
              className={styles.integrationCardBottomRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceShowcase({
  action,
  beltImage,
  beltImageAlt,
  description,
  title,
}: {
  action: GladiaLink;
  beltImage: string;
  beltImageAlt: string;
  description: string;
  title: string;
}) {
  return (
    <section className={styles.showcaseSection}>
      <div className={styles.container}>
        <article className={styles.complianceBand}>
          <div className={styles.complianceBandIntro}>
            <h2 className={styles.complianceBandTitle}>{title}</h2>
            <p className={styles.complianceBandDescription}>{description}</p>
            <ExternalLink className={styles.complianceBandLink} {...action} />
          </div>

          <div className={styles.complianceBandVisual}>
            <LazyImage alt={beltImageAlt} src={beltImage} />
          </div>
        </article>
      </div>
    </section>
  );
}

function LanguageSupportShowcase({ section }: { section: GladiaFeatureSection }) {
  return (
    <section className={styles.showcaseSection} id={section.id}>
      <div className={styles.container}>
        <div className={styles.sectionEyebrowTitle}>
          <LazyImage
            alt=""
            className={styles.sectionEyebrowDot}
            src="/gladia/assets/68d3c4f6c540ef7930dbe2d4_Pill.svg"
          />
          <p className={styles.sectionEyebrowText}>{section.eyebrow}</p>
          <div className={styles.sectionEyebrowLine} />
        </div>

        <article
          className={styles.languageHeroCard}
          style={{ backgroundImage: `url(${section.background})` }}
        >
          <div className={styles.languageHeroContent}>
            <h2 className={styles.languageHeroTitle}>{section.title}</h2>
            <p className={styles.languageHeroDescription}>{section.description}</p>

            {section.action ? (
              <ExternalLink className={styles.integrationHeroAction} {...section.action} />
            ) : null}
          </div>
        </article>

        <div className={styles.languageFeatureGrid}>
          {section.cards.map((card, index) => (
            <article
              key={card.title}
              className={`${styles.languageFeatureCard} ${
                index === 0
                  ? styles.languageFeatureCardLeft
                  : index === section.cards.length - 1
                    ? styles.languageFeatureCardRight
                    : ""
              }`.trim()}
            >
              {card.image ? (
                <LazyImage
                  alt={card.imageAlt ?? card.title}
                  className={styles.languageFeatureIcon}
                  src={card.image}
                />
              ) : null}

              <div className={styles.languageFeatureText}>
                <h3 className={styles.languageFeatureTitle}>{card.title}</h3>
                <p className={styles.languageFeatureDescription}>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatementCard({ item }: { item: GladiaStatement }) {
  return (
    <article className={styles.testimonialCard}>
      <div className={styles.statementContent}>
        <h3 className={styles.statementTitle}>{item.title}</h3>
        <p className={styles.testimonialQuote}>{item.body}</p>
        <p className={styles.statementContrast}>{item.contrast}</p>
      </div>
    </article>
  );
}

function UseCaseCard({ card }: { card: GladiaUseCase }) {
  const hasKicker = Boolean(card.kicker);

  return (
    <article className={styles.useCaseCard} data-accent={card.accent ?? "violet"}>
      <div className={styles.useCaseTop}>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>

      {hasKicker ? (
        card.link ? (
          <a
            className={styles.useCaseKickerLink}
            href={card.link.href}
            {...externalLinkProps(card.link.href)}
          >
            <span className={styles.useCaseKickerText}>{card.kicker}</span>
            <span aria-hidden className={styles.useCaseKickerArrow}>
              &#8594;
            </span>
          </a>
        ) : (
          <div className={styles.useCaseKickerLink}>
            <span className={styles.useCaseKickerText}>{card.kicker}</span>
            <span aria-hidden className={styles.useCaseKickerArrow}>
              &#8594;
            </span>
          </div>
        )
      ) : null}

      {!hasKicker && card.link ? (
        <ExternalLink className={styles.useCaseLink} {...card.link} />
      ) : null}
    </article>
  );
}

export function GladiaHome() {
  const {
    benchmarks,
    comparison,
    compliance,
    faq,
    finalCta,
    hero,
    howItWorks,
    integration,
    languageSupport,
    mission,
    objections,
    performance,
    productDemo,
    roi,
    scaling,
    testimonials,
    useCases,
  } = gladiaPageData;

  return (
    <main className={styles.page}>
      <GladiaHero
        actions={hero.actions}
        announcement={hero.announcement}
        background={hero.background}
        description={hero.description}
        headerActions={hero.headerActions}
        nav={hero.nav}
        rotatingWords={hero.rotatingWords}
        titleLines={hero.titleLines}
      />

      <HowItWorksSection section={howItWorks} />
      <TrustedLogoBelt />

      <section className={styles.useCasesSection} id="company">
        <div className={styles.container}>
          <div className={styles.centeredIntro}>
            <p className={styles.showcaseEyebrow}>{useCases.eyebrow}</p>
            <h2 className={styles.sectionTitleLarge}>{useCases.title}</h2>
            <p className={styles.sectionLead}>{useCases.description}</p>
          </div>

          <div
            className={styles.useCasesShell}
            style={{ backgroundImage: `url(${useCases.background})` }}
          >
            <div className={styles.useCasesGrid}>
              {useCases.cards.map((card) => (
                <UseCaseCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PerformanceShowcase section={performance} />
      <ProductDemoSection section={productDemo} />
      <ScalingShowcase section={scaling} />
      <IntegrationShowcase section={integration} />
      <ComplianceShowcase
        action={compliance.action}
        beltImage={compliance.beltImage}
        beltImageAlt={compliance.beltImageAlt}
        description={compliance.description}
        title={compliance.title}
      />
      <LanguageSupportShowcase section={languageSupport} />

      <section className={styles.benchmarkSection}>
        <div className={styles.container}>
          <div
            className={styles.benchmarkShell}
            style={{ backgroundImage: `url(${benchmarks.background})` }}
          >
            <div className={styles.benchmarkContent}>
              <p className={styles.showcaseEyebrow}>{benchmarks.eyebrow}</p>
              <h2 className={styles.sectionTitleLarge}>{benchmarks.title}</h2>
              <p className={styles.sectionLead}>{benchmarks.description}</p>
            </div>

            <div className={styles.benchmarkGlow} />
            <ExternalLink className={styles.benchmarkAction} {...benchmarks.action} />
          </div>
        </div>
      </section>

      <ComparisonSection section={comparison} />

      <section className={styles.testimonialsSection} id="nossos-clientes">
        <div className={styles.container}>
          <div className={styles.centeredIntro}>
            {testimonials.eyebrow ? (
              <p className={styles.showcaseEyebrow}>{testimonials.eyebrow}</p>
            ) : null}
            <h2 className={styles.sectionTitleLarge}>{testimonials.title}</h2>
            <p className={styles.sectionLead}>{testimonials.description}</p>
          </div>

          <div
            className={styles.testimonialsShell}
            style={{ backgroundImage: `url(${testimonials.background})` }}
          >
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialColumn}>
                {testimonials.items.map((item) => (
                  <StatementCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ObjectionsSection section={objections} />

      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div
            className={styles.missionShell}
            style={{ backgroundImage: `url(${mission.background})` }}
          >
            <div className={styles.missionGlow} />

            <div className={styles.missionContent}>
              <h2 className={styles.missionTitle}>{mission.title}</h2>
              <p className={styles.missionText}>{mission.description}</p>
              <ExternalLink className={styles.showcaseAction} {...mission.action} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection} id="perguntas">
        <div className={styles.container}>
          <FAQ
            categories={faq.categories}
            className="rounded-[32px] border border-white/10 bg-[#050505]/80 px-6 py-10 md:px-10"
            faqData={faq.itemsByCategory}
            subtitle={faq.subtitle}
            title={faq.title}
          />
        </div>
      </section>

      <RoiSection section={roi} />

      <section className="relative pb-3" id="preco">
        <div className={styles.container}>
          <FUIPricingSectionWithBadge />
        </div>
      </section>

      <FinalCtaSection section={finalCta} />

      <footer className="border-t border-white/10 py-5">
        <div className={styles.container}>
          <p className="text-sm text-white/60">
            Rebound AI © 2026 - Política de Privacidade - Termos de Uso
          </p>
        </div>
      </footer>
    </main>
  );
}




