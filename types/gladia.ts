export type GladiaButtonVariant = "light" | "dark" | "ghost";

export interface GladiaLink {
  href: string;
  label: string;
}

export interface GladiaAction extends GladiaLink {
  variant?: GladiaButtonVariant;
}

export interface GladiaLogo {
  href?: string;
  name: string;
  src: string;
}

export interface GladiaFeatureCard {
  accent?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  link?: GladiaLink;
  logos?: GladiaLogo[];
  title: string;
}

export interface GladiaFeatureSection {
  action?: GladiaLink;
  background: string;
  cards: GladiaFeatureCard[];
  description: string;
  eyebrow: string;
  id: string;
  title: string;
}

export interface GladiaComplianceBadge {
  image: string;
  imageAlt: string;
  label: string;
  shortLabel?: string;
}

export interface GladiaStatement {
  body: string;
  contrast: string;
  title: string;
}

export interface GladiaStep {
  description: string;
  eyebrow?: string;
  title: string;
}

export interface GladiaMetric {
  description?: string;
  label: string;
  value: string;
}

export interface GladiaComparisonRow {
  automation: string;
  criterion: string;
  manual: string;
  rebound: string;
}

export interface GladiaObjection {
  answer: string;
  question: string;
}

export interface GladiaUseCase {
  accent?: string;
  description: string;
  kicker?: string;
  link?: GladiaLink;
  logo?: GladiaLogo;
  title: string;
}

export interface GladiaFaqItem {
  answer: string;
  question: string;
}

export interface GladiaFooterColumn {
  links: GladiaLink[];
  title: string;
}

export interface GladiaPageData {
  benchmarks: {
    action: GladiaLink;
    background: string;
    description: string;
    eyebrow: string;
    graphic: string;
    graphicAlt: string;
    title: string;
  };
  comparison: {
    description: string;
    eyebrow: string;
    rows: GladiaComparisonRow[];
    title: string;
  };
  compliance: {
    action: GladiaLink;
    badges: GladiaComplianceBadge[];
    beltImage: string;
    beltImageAlt: string;
    description: string;
    portrait: string;
    portraitAlt: string;
    title: string;
  };
  faq: {
    categories: Record<string, string>;
    itemsByCategory: Record<string, GladiaFaqItem[]>;
    subtitle: string;
    title: string;
  };
  footer: {
    badgeImage: string;
    badgeImageAlt: string;
    columns: GladiaFooterColumn[];
    legal: GladiaLink[];
    social: GladiaLogo[];
    strapline: string;
  };
  hero: {
    actions: GladiaAction[];
    announcement: GladiaLink;
    background: string;
    description: string;
    headerActions?: GladiaAction[];
    nav: GladiaLink[];
    rotatingWords: string[];
    titleLines: string[];
    trustedAction?: GladiaLink;
    trustedLabel: string;
    trustedLogos: GladiaLogo[];
  };
  howItWorks: {
    description: string;
    eyebrow: string;
    steps: GladiaStep[];
    title: string;
  };
  integration: GladiaFeatureSection & {
    supportCard: GladiaFeatureCard;
  };
  languageSupport: GladiaFeatureSection;
  mission: {
    action: GladiaLink;
    background: string;
    description: string;
    title: string;
  };
  performance: GladiaFeatureSection;
  problem: {
    description: string;
    title: string;
  };
  productDemo: {
    action: GladiaLink;
    description: string;
    eyebrow: string;
    metrics: GladiaMetric[];
    timeline: GladiaStep[];
    title: string;
  };
  objections: {
    description: string;
    eyebrow: string;
    items: GladiaObjection[];
    title: string;
  };
  roi: {
    assumptions: string[];
    description: string;
    eyebrow: string;
    title: string;
  };
  scaling: GladiaFeatureSection;
  testimonials: {
    background: string;
    description: string;
    eyebrow: string;
    items: GladiaStatement[];
    title: string;
  };
  useCases: {
    background: string;
    cards: GladiaUseCase[];
    description: string;
    eyebrow: string;
    title: string;
  };
  finalCta: {
    description: string;
    primaryAction: GladiaLink;
    secondaryAction: GladiaLink;
    title: string;
  };
}
