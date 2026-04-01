import { GladiaFaq } from "./faq";
import { GladiaHero } from "./hero";
import styles from "./gladia.module.css";

import { gladiaPageData } from "@/data/gladia";
import type {
  GladiaFeatureCard,
  GladiaFeatureSection,
  GladiaFooterColumn,
  GladiaLink,
  GladiaLogo,
  GladiaTestimonial,
  GladiaUseCase,
} from "@/types/gladia";

type ShowcaseVariant = "performance" | "triptych" | "integration";

function ExternalLink({
  className,
  href,
  label,
}: GladiaLink & { className?: string }) {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {label}
    </a>
  );
}

function TrustedLogoBelt({
  label,
  logos,
}: {
  label: string;
  logos: GladiaLogo[];
}) {
  const visibleLogos = logos.slice(0, 5);
  const [lead, ...tail] = label.split("300,000+");

  return (
    <section className={styles.trustedSection}>
      <div className={styles.container}>
        <p className={styles.trustedLabel}>
          {lead}
          <strong>300,000+</strong>
          {tail.join("300,000+")}
        </p>

        <div className={styles.trustedShell}>
          <div className={styles.trustedGradientLeft} />
          <div className={styles.trustedGradientRight} />

          <div className={styles.trustedTrack}>
            {visibleLogos.map((logo) => (
              <a
                key={logo.name}
                className={styles.trustedLogo}
                href={logo.href}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  alt={logo.name}
                  className={styles.trustedLogoImage}
                  src={logo.src}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePanel({
  card,
  compact = false,
}: {
  card: GladiaFeatureCard;
  compact?: boolean;
}) {
  return (
    <article
      className={`${styles.featurePanel} ${compact ? styles.featurePanelCompact : ""}`}
      data-accent={card.accent ?? "violet"}
    >
      <div className={styles.featurePanelBody}>
        <h3 className={styles.featurePanelTitle}>{card.title}</h3>
        <p className={styles.featurePanelDescription}>{card.description}</p>

        {card.logos?.length ? (
          <div className={styles.inlineLogos}>
            {card.logos.map((logo) => (
              <img key={logo.name} alt={logo.name} src={logo.src} />
            ))}
          </div>
        ) : null}

        {card.link ? (
          <ExternalLink className={styles.inlineAction} {...card.link} />
        ) : null}
      </div>

      {card.image ? (
        <div className={styles.featurePanelVisual}>
          <img alt={card.imageAlt ?? card.title} src={card.image} />
        </div>
      ) : null}
    </article>
  );
}

function ShowcaseShell({
  section,
  supportCard,
  variant,
}: {
  section: GladiaFeatureSection;
  supportCard?: GladiaFeatureCard;
  variant: ShowcaseVariant;
}) {
  const shellClass =
    variant === "performance"
      ? styles.showcaseShellPerformance
      : variant === "integration"
        ? styles.showcaseShellIntegration
        : styles.showcaseShellTriptych;

  const cardsClass =
    variant === "performance"
      ? styles.showcaseCardsPerformance
      : variant === "integration"
        ? styles.showcaseCardsIntegration
        : styles.showcaseCardsTriptych;

  return (
    <section className={styles.showcaseSection} id={section.id}>
      <div className={styles.container}>
        <div
          className={`${styles.showcaseShell} ${shellClass}`}
          style={{ backgroundImage: `url(${section.background})` }}
        >
          <div className={styles.showcaseIntro}>
            <p className={styles.showcaseEyebrow}>{section.eyebrow}</p>
            <h2 className={styles.showcaseTitle}>{section.title}</h2>
            <p className={styles.showcaseDescription}>{section.description}</p>
            {section.action ? (
              <ExternalLink className={styles.showcaseAction} {...section.action} />
            ) : null}
          </div>

          <div className={`${styles.showcaseCards} ${cardsClass}`}>
            {section.cards.map((card) => (
              <FeaturePanel key={card.title} card={card} />
            ))}
          </div>

          {supportCard ? (
            <div className={styles.supportBand}>
              <FeaturePanel card={supportCard} compact />
            </div>
          ) : null}
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
              <ExternalLink className={styles.performanceAction} {...section.action} />
            ) : null}
          </article>

          <div className={styles.performanceGrid}>
            {section.cards.map((card) => (
              <article key={card.title} className={styles.performanceGridCard}>
                {card.image ? (
                  <img
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
          <img
            alt=""
            className={styles.sectionEyebrowDot}
            src="/gladia/assets/68d3c4f6c540ef7930dbe2d4_Pill.svg"
          />
          <p className={styles.sectionEyebrowText}>{section.eyebrow}</p>
          <div className={styles.sectionEyebrowLine} />
        </div>

        <article
          className={styles.scalingHeroCard}
          style={{ backgroundImage: `url(${section.background})` }}
        >
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
                <img
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
        <img
          alt={card.imageAlt ?? card.title}
          className={styles.integrationCardIcon}
          src={card.image}
        />
      ) : null}

      <div className={styles.integrationCardText}>
        <h3 className={styles.integrationCardTitle}>{card.title}</h3>
        <p className={styles.integrationCardDescription}>{card.description}</p>
      </div>

      {card.logos?.length ? (
        <div className={styles.integrationCardLogos}>
          {card.logos.map((logo) => (
            <img key={logo.name} alt={logo.name} src={logo.src} />
          ))}
        </div>
      ) : null}
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
          <img
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
              <h2 className={styles.integrationHeroTitle}>{section.title}</h2>
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
            <img alt={beltImageAlt} src={beltImage} />
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
          <img
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
                <img
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

function TestimonialCard({ item }: { item: GladiaTestimonial }) {
  return (
    <article className={styles.testimonialCard}>
      <div className={styles.testimonialTopRow}>
        <img
          alt={item.company}
          className={styles.testimonialCompanyLogo}
          src={item.companyLogo}
        />

        <div className={styles.testimonialPerson}>
          <img alt={item.name} className={styles.testimonialAvatar} src={item.avatar} />
          <div>
            <h3 className={styles.testimonialName}>{item.name}</h3>
            <p className={styles.testimonialRole}>{item.role}</p>
          </div>
        </div>
      </div>

      <p className={styles.testimonialQuote}>{item.quote}</p>
    </article>
  );
}

function UseCaseCard({ card }: { card: GladiaUseCase }) {
  const hasBrandedKicker = Boolean(card.logo && card.kicker);

  return (
    <article className={styles.useCaseCard} data-accent={card.accent ?? "violet"}>
      <div className={styles.useCaseTop}>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>

      {hasBrandedKicker ? (
        card.link ? (
          <a
            className={styles.useCaseKickerLink}
            href={card.link.href}
            rel="noreferrer"
            target="_blank"
          >
            <span className={styles.useCaseBrandChip}>
              <img alt={card.logo!.name} src={card.logo!.src} />
            </span>
            <span className={styles.useCaseKickerText}>{card.kicker}</span>
            <span aria-hidden className={styles.useCaseKickerArrow}>
              &#8594;
            </span>
          </a>
        ) : (
          <div className={styles.useCaseKickerLink}>
            <span className={styles.useCaseBrandChip}>
              <img alt={card.logo!.name} src={card.logo!.src} />
            </span>
            <span className={styles.useCaseKickerText}>{card.kicker}</span>
            <span aria-hidden className={styles.useCaseKickerArrow}>
              &#8594;
            </span>
          </div>
        )
      ) : null}

      {!hasBrandedKicker && card.kicker ? (
        <p className={styles.useCaseKicker}>{card.kicker}</p>
      ) : null}

      {!hasBrandedKicker && card.link ? (
        <ExternalLink className={styles.useCaseLink} {...card.link} />
      ) : null}
    </article>
  );
}

function FooterColumn({ links, title }: GladiaFooterColumn) {
  return (
    <div className={styles.footerColumn}>
      <h3>{title}</h3>

      <div className={styles.footerColumnLinks}>
        {links.map((link) => (
          <ExternalLink key={link.label} className={styles.footerLink} {...link} />
        ))}
      </div>
    </div>
  );
}

export function GladiaHome() {
  const {
    benchmarks,
    compliance,
    faq,
    footer,
    hero,
    integration,
    languageSupport,
    mission,
    performance,
    problem,
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

      <TrustedLogoBelt
        label={hero.trustedLabel}
        logos={hero.trustedLogos}
      />

      <section className={styles.problemSection}>
        <div className={styles.containerNarrow}>
          <div className={styles.problemBlock}>
            <h2 className={styles.problemTitle}>{problem.title}</h2>
            <p className={styles.problemText}>{problem.description}</p>
          </div>
        </div>
      </section>

      <PerformanceShowcase section={performance} />
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

      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.centeredIntro}>
            <p className={styles.showcaseEyebrow}>{testimonials.eyebrow}</p>
            <h2 className={styles.sectionTitleLarge}>{testimonials.title}</h2>
            <p className={styles.sectionLead}>{testimonials.description}</p>
          </div>

          <div
            className={styles.testimonialsShell}
            style={{ backgroundImage: `url(${testimonials.background})` }}
          >
            <div className={styles.testimonialsGrid}>
              <article className={styles.caseStudyCard}>
                <div className={styles.caseStudyFrame}>
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.caseStudyVideo}
                    src={testimonials.caseStudy.videoUrl}
                    title={testimonials.caseStudy.caption}
                  />
                  <div className={styles.caseStudyMeta}>
                    <p className={styles.caseStudyEyebrow}>
                      {testimonials.caseStudy.caption}
                    </p>
                    <h3>{testimonials.caseStudy.name}</h3>
                    <p>{testimonials.caseStudy.role}</p>
                    <span className={styles.caseStudyCompany}>
                      {testimonials.caseStudy.company}
                    </span>
                  </div>
                </div>
              </article>

              <div className={styles.testimonialColumn}>
                {testimonials.items.map((item) => (
                  <TestimonialCard key={`${item.name}-${item.company}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <GladiaFaq items={faq.items} title={faq.title} />

      <footer className={styles.footerSection}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <img
                alt="Gladia"
                className={styles.footerLogo}
                src="/gladia/assets/66914a5d5cdd9676a68fa3f6_gladia-logo.svg"
              />

              <p className={styles.footerStrapline}>{footer.strapline}</p>

              <div className={styles.footerSocials}>
                {footer.social.map((item) => (
                  <a
                    key={item.name}
                    className={styles.footerSocialLink}
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img alt={item.name} src={item.src} />
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.footerColumns}>
              {footer.columns.map((column) => (
                <FooterColumn key={column.title} {...column} />
              ))}
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerLegal}>
              {footer.legal.map((item) => (
                <ExternalLink key={item.label} className={styles.footerLink} {...item} />
              ))}
            </div>

            <div className={styles.footerCertifications}>
              <img alt={footer.badgeImageAlt} src={footer.badgeImage} />
              <span>GDPR Compliant</span>
              <span>HIPAA Compliant</span>
              <span>AICPA SOC Type 2</span>
              <span>ISO 27001 Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
