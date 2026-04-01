import type { GladiaPageData } from "@/types/gladia";

export const gladiaPageData: GladiaPageData = {
  hero: {
    announcement: {
      href: "https://www.gladia.io/stt-api-benchmarks",
      label: "Open-source benchmarks here",
    },
    background: "/gladia/assets/699dd45d2deab1aeb6a44e35_Background.webp",
    titleLines: ["Agentes de I.A por Voz", "para Liga\u00e7\u00f5es que"],
    rotatingWords: [
      "recebe novos leads",
      "reativa leads da base",
      "recupera carrinhos abandonado",
    ],
    description:
      "Atenda todos seus leads com nosso sistema de Agentes de I.A para Liga\u00e7\u00f5es, CRM e WhatsApp, na mesma plataforma.",
    nav: [
      { href: "#product", label: "Product" },
      { href: "#solutions", label: "Solutions" },
      { href: "https://www.gladia.io/pricing", label: "Pricing" },
      { href: "#developers", label: "Developers" },
      { href: "#resources", label: "Resources" },
      { href: "#company", label: "Company" },
    ],
    headerActions: [
      {
        href: "https://www.gladia.io/request-demo",
        label: "Request a demo",
        variant: "light",
      },
      {
        href: "https://app.gladia.io/",
        label: "Sign up for free",
        variant: "dark",
      },
    ],
    actions: [
      {
        href: "https://app.gladia.io/",
        label: "Ativar Sistema",
        variant: "light",
      },
      {
        href: "https://www.gladia.io/request-demo",
        label: "Marque uma Demonstra\u00e7\u00e3o",
        variant: "dark",
      },
    ],
    trustedLabel: "Trusted by 300,000+ developers worldwide",
    trustedAction: {
      href: "https://www.gladia.io/testimonials",
      label: "See more",
    },
    trustedLogos: [
      {
        href: "https://www.method.com/",
        name: "Method",
        src: "/gladia/assets/669fab92f9f5f07cc3e09ef8_logo-method.svg",
      },
      {
        href: "https://www.recall.ai/",
        name: "Recall",
        src: "/gladia/assets/669fab9ea5868389244b7417_logo-recall.svg",
      },
      {
        href: "https://www.veed.io/",
        name: "VEED",
        src: "/gladia/assets/66cdfcbe778e42d9f068993c_logo-veed.svg",
      },
      {
        href: "https://www.adversus.io/",
        name: "Adversus",
        src: "/gladia/assets/6977a3eb22791a398ad7cbd9_4f88e56fc94c8a723aaded98d5d14994_Adversus-logo.svg",
      },
      {
        href: "https://alan.com/",
        name: "Alan",
        src: "/gladia/assets/669fabd7fc0afa2e80be301f_logo-alan.svg",
      },
      {
        href: "https://attention.tech/",
        name: "Attention",
        src: "/gladia/assets/67b0ce5dbb0e44bc6109ad7c_logo-attention.svg",
      },
      {
        href: "https://jellysmack.com/",
        name: "Jellysmack",
        src: "/gladia/assets/669fab6be0847c3aa68f7149_logo-jellysmack.svg",
      },
      {
        href: "https://www.mojo-app.com/",
        name: "Mojo",
        src: "/gladia/assets/669fac163b4ca2361685170f_logo-mojo.svg",
      },
      {
        href: "https://bambuser.com/",
        name: "Bambuser",
        src: "/gladia/assets/67b0ce85c98b23813ae581d4_logo-bambuser.svg",
      },
      {
        href: "https://www.citi.com/",
        name: "Citibank",
        src: "/gladia/assets/67aa69ac4b01577f54ae91e3_logo-citibank.svg",
      },
      {
        href: "https://www.samsung.com/",
        name: "Samsung",
        src: "/gladia/assets/67aa69ac8d21262e4216fa53_logo-samsung.svg",
      },
      {
        href: "https://www.oracle.com/",
        name: "Oracle",
        src: "/gladia/assets/67aa69ac8d21262e4216fa5b_logo-oracle.svg",
      },
      {
        href: "https://www.microsoft.com/",
        name: "Microsoft",
        src: "/gladia/assets/67aa69acf2c24ff2955dc55a_logo-microsoft.svg",
      },
      {
        href: "https://www.softbank.com/",
        name: "SoftBank",
        src: "/gladia/assets/67aa69ac303690b7b2b0eb75_logo-softbank.svg",
      },
    ],
  },
  problem: {
    title: "Most voice platform failures start with bad STT",
    description:
      "From missed key information to misattributed speakers, poor transcripts break trust in your product. Gladia captures critical insights across accents, jargon, and industries to deliver reliable voice experiences.",
  },
  performance: {
    id: "product",
    eyebrow: "performance",
    title: "Performance that won't disappoint",
    description:
      "Async and real-time STT models with high precision on key entities.",
    action: {
      href: "https://www.gladia.io/competitors/benchmarks",
      label: "Check our benchmarks",
    },
    background:
      "/gladia/assets/68d2575ad4dedb219b6668a7_d03124331526c19ecdb4423263e1c3a2_Homepage-bento-benefits-bg.avif",
    cards: [
      {
        accent: "cyan",
        title: "Sub-300ms latency",
        description:
          "To keep conversations seamless and ensure smooth, uninterrupted dialogue every time.",
        image: "/gladia/assets/68d2c14bdabaca2ad339fff7_Sub-200ms.avif",
        imageAlt: "Latency visual",
      },
      {
        accent: "violet",
        title: "Leading STT accuracy",
        description:
          "Capturing numerical, jargon, and key entities such as names and emails for downstream agent tasks.",
        image: "/gladia/assets/68d397760bcb3b776b166ae5_94-Accuracy.avif",
        imageAlt: "Accuracy visual",
      },
      {
        accent: "emerald",
        title: "Predictable, stable performance",
        description:
          "Forget variance spikes to deliver a consistent user experience.",
        image: "/gladia/assets/68d3c872979505715cd7099e_Performance.avif",
        imageAlt: "Stability visual",
      },
      {
        accent: "amber",
        title: "Optimized for SIP",
        description:
          "As well as telephony protocols (8 kHz), fitting natively into your existing workflows.",
        image: "/gladia/assets/68d3c87259929b50a0be4506_Tailored.avif",
        imageAlt: "SIP optimization visual",
      },
    ],
  },
  scaling: {
    id: "solutions",
    eyebrow: "SCALING",
    title: "Scale without thinking",
    description: "Instant scalability. No limits, no fine print.",
    action: {
      href: "https://www.gladia.io/request-demo",
      label: "Talk to sales",
    },
    background:
      "/gladia/assets/68d2c86cc2fa6c74349f9804_6f14f8895811502991dcb5bbcc1f34b3_Homepage-bento-scale-bg.avif",
    cards: [
      {
        accent: "violet",
        title: "Infinite parallel streams",
        description:
          "No need to forecast, give notice, or over-provision in advance.",
        image: "/gladia/assets/68d3c9a0cfb16b0b6afe5aae_Parallel.avif",
        imageAlt: "Parallel streams visual",
      },
      {
        accent: "cyan",
        title: "Zero infra burden",
        description:
          "Save at least 20% of DevOps effort without sacrificing latency, with no need to self-host.",
        image: "/gladia/assets/68d3c9a08b2f71326c82d3c1_Eye.avif",
        imageAlt: "Infra burden visual",
      },
      {
        accent: "amber",
        title: "Flexible, usage-based pricing",
        description:
          "Start small, test freely, scale-as-you-go with clear pricing tiers.",
        image: "/gladia/assets/68d3c9a0943562757c628f81_Piggy.avif",
        imageAlt: "Pricing visual",
      },
    ],
  },
  integration: {
    id: "developers",
    eyebrow: "INTEGRATION",
    title: "Developer-first experience",
    description: "Plug. Build. Ship.",
    action: {
      href: "https://docs.gladia.io/",
      label: "Gladia documentation",
    },
    background:
      "/gladia/assets/68d3cb669e507e6076828190_Homepage-bento-developer-bg.avif",
    cards: [
      {
        accent: "violet",
        title: "Lightweight SDK",
        description:
          "Minimal lines of code to make setup fast and painless.",
        image: "/gladia/assets/68d3ca07eb58dc51ad855766_Code.avif",
        imageAlt: "SDK visual",
        logos: [
          {
            name: "Python",
            src: "/gladia/assets/68d3f255739de5ad043ed136_python.svg",
          },
          {
            name: "JavaScript",
            src: "/gladia/assets/68d3f2557a0a96c0a6aa7afc_javascript.svg",
          },
        ],
      },
      {
        accent: "cyan",
        title: "Fast integration",
        description:
          "REST or WebSocket connections are simple to configure in under a day.",
        image: "/gladia/assets/68d3ca0755697e879d5a39c0_Link.avif",
        imageAlt: "Integration visual",
      },
      {
        accent: "emerald",
        title: "Telephony ready",
        description:
          "Designed to integrate seamlessly with top communication platforms.",
        image: "/gladia/assets/68d3ca07a3e04f2cf47aa3d6_Puzzle.avif",
        imageAlt: "Telephony visual",
        logos: [
          {
            name: "Twilio",
            src: "/gladia/assets/68d5640114f45ba040bd1e50_Twillio.svg",
          },
          {
            name: "Vonage",
            src: "/gladia/assets/68d5641023a3fbce574d8148_vonage.svg",
          },
          {
            name: "Telnyx",
            src: "/gladia/assets/68d5642e279c12339c584518_telnyx.svg",
          },
        ],
      },
      {
        accent: "amber",
        title: "Ecosystem native",
        description:
          "Works out-of-the-box with WebRTC, Recall, and more.",
        image: "/gladia/assets/68d3ca07fbfba9e9c60e0971_Toggle.avif",
        imageAlt: "Ecosystem visual",
        logos: [
          {
            name: "Vapi",
            src: "/gladia/assets/68da7911d1167c4432eb4bf5_vapi.svg",
          },
          {
            name: "Pipecat",
            src: "/gladia/assets/68d3f494a4365d47aa09ed0a_Pipecate-simple.svg",
          },
          {
            name: "LiveKit",
            src: "/gladia/assets/68da791fdf72269020b9908d_livekit.svg",
          },
        ],
      },
    ],
    supportCard: {
      title: "Direct support",
      description:
        "High-touch Slack access for instant help from engineers building the tech.",
      image: "/gladia/assets/68d3ca070460d658813302d4_Headphones.avif",
      imageAlt: "Support visual",
    },
  },
  compliance: {
    title: "Compliance & security",
    description:
      "At Gladia, data privacy is non-negotiable. We never use your audio to retrain our models, and we don't believe in charging extra for peace of mind.",
    action: {
      href: "https://www.gladia.io/compliance-hub",
      label: "Learn more about our security practices",
    },
    beltImage: "/gladia/assets/69973c5083a93a034c2eac82_compliance-belt.svg",
    beltImageAlt: "Compliance certifications belt",
    portrait: "/gladia/assets/66ec619513cb9be4e874c6a3_alexandre-bouju.png",
    portraitAlt: "Gladia customer portrait",
    badges: [
      {
        image: "/gladia/assets/68d3f7748f2c432c3bb8c31a_SOC.avif",
        imageAlt: "SOC badge",
        label: "AICPA SOC Type 2",
        shortLabel: "SOC 2",
      },
      {
        image: "/gladia/assets/68d3f774924e4d8b616fdcb0_GDPR.avif",
        imageAlt: "GDPR badge",
        label: "GDPR Compliant",
        shortLabel: "GDPR",
      },
      {
        image: "/gladia/assets/68d3f774d6b91d8f3f6d81df_HIPAA.avif",
        imageAlt: "HIPAA badge",
        label: "HIPAA Compliant",
        shortLabel: "HIPAA",
      },
    ],
  },
  languageSupport: {
    id: "resources",
    eyebrow: "LANGUAGE SUPPORT",
    title: "1 provider for any language",
    description: "Expand globally with a single API. 100+ languages included.",
    action: {
      href: "https://www.gladia.io/request-demo",
      label: "Talk to sales",
    },
    background:
      "/gladia/assets/68d3cd88739f2db230bbbe7d_Homepage-bento-languages-bg.avif",
    cards: [
      {
        accent: "violet",
        title: "Transcribes in any languages",
        description:
          "With leading accuracy in EN, FR, ES, and IT, with exclusive support for rare languages.",
        image: "/gladia/assets/68d3ca078e4cc199eb9b580c_Translate.avif",
        imageAlt: "Multilingual transcription visual",
      },
      {
        accent: "cyan",
        title: "Advanced code-switching",
        description:
          "Advanced recognition handles natural multilingual conversations without errors.",
        image: "/gladia/assets/68d3ca07fbfba9e9c60e0971_Toggle.avif",
        imageAlt: "Code-switching visual",
      },
      {
        accent: "emerald",
        title: "Any-to-any translation",
        description:
          "Ensures seamless communication across all supported languages.",
        image: "/gladia/assets/68d3ca070953e0f56bbe41b5_Translation.avif",
        imageAlt: "Translation visual",
      },
    ],
  },
  benchmarks: {
    eyebrow: "BENCHMARKS",
    title: "How we compare to alternatives",
    description:
      "Gladia is up to 39% more accurate than leading competitors in major European languages, including English.",
    action: {
      href: "https://www.gladia.io/stt-api-benchmarks",
      label: "Check our benchmarks",
    },
    background:
      "/gladia/assets/68d39c955ae22f7abd133935_Homepage-bento-benchmarks-bg.avif",
    graphic: "/gladia/assets/679270d0233671e008b8a55a_svgexport-4.svg",
    graphicAlt: "Benchmark comparison graphic",
  },
  testimonials: {
    eyebrow: "Rated 4.8 on G2",
    title: "Why customers choose us",
    description:
      "Here's what top-tier voice platform builders say about our product.",
    background: "/gladia/assets/6839ac6c53d82bf7befb218c_testimonials_bg.webp",
    caseStudy: {
      company: "Attention",
      name: "Matthias Winckenburg",
      role: "CTO & Founder, Attention",
      caption: "Watch Attention case study",
      videoUrl: "https://www.youtube.com/embed/toAcpe0LSpI?start=1",
    },
    items: [
      {
        avatar: "/gladia/assets/66ec619513cb9be4e874c6a3_alexandre-bouju.png",
        company: "Selectra",
        companyLogo: "/gladia/assets/67013cb9aeea15a9f6e7b6fb_Selectra.svg",
        name: "Alexandre Bouju",
        role: "CTO Deputy Manager",
        quote:
          "\"There's a lot more than one can get out of audio than just transcription, and Gladia understood that. Feature rollouts are proactive, and anticipate our needs as a platform.\"",
      },
      {
        avatar: "/gladia/assets/66ce0617609e67138b4f1e83_lazarerossillon.jpg",
        company: "Spoke",
        companyLogo: "/gladia/assets/67013d0254e7714dce80a7ab_Spoke.svg",
        name: "Lazare Rossillon",
        role: "CEO",
        quote:
          "\"Gladia has a clear-cut advantage when it comes to European languages. With their API, we acquired new users in countries like Finland and Sweden.\"",
      },
      {
        avatar: "/gladia/assets/66ce05aca96399b5038f4c8c_kojohinson.jpg",
        company: "VEED",
        companyLogo: "/gladia/assets/67013ccb6b2dabac3f2ea1e1_Veed.svg",
        name: "Kojo Hinson",
        role: "Group Engineering Manager",
        quote:
          "\"We are 100% benchmark and evaluation driven. Gladia was one of the best providers selected on merit to transcribe user videos, especially for non-English languages.\"",
      },
      {
        avatar: "/gladia/assets/66ce064ddef6aeb6c523ef4c_jeanpatry.jpg",
        company: "Mojo",
        companyLogo: "/gladia/assets/67013d2b380c99d965f77fe9_Mojo.svg",
        name: "Jean Patry",
        role: "Co-founder",
        quote:
          "\"Having tried numerous speech-to-text solutions, I can confidently say: Gladia's API outshines the rest. Their balance of accuracy, speed, and precise word timings is unparalleled.\"",
      },
    ],
  },
  useCases: {
    eyebrow: "use cases",
    title: "What you can build with our API",
    description:
      "Powering the next generation of AI assistants and voice agents across industries.",
    background:
      "/gladia/assets/68d3ad6f8f3dfc5310dd5d0a_Homepage-bento-use-cases-bg.avif",
    cards: [
      {
        accent: "violet",
        title: "Customer support",
        description:
          "Deliver natural conversations at scale - with agents that answer instantly, never drop a call, and handle thousands of interactions in parallel, inbound and outbound.",
        kicker: "transcribed 95% faster with Gladia",
        logo: {
          name: "Aircall",
          src: "/gladia/assets/68d3aea853f47650608c78a7_Aircall.svg",
        },
        link: {
          href: "https://www.gladia.io/customer-experience",
          label: "transcribed 95% faster with Gladia",
        },
      },
      {
        accent: "violet",
        title: "Sales enablement",
        description:
          "Capture names, emails, and company details across accents and languages, then sync seamlessly into CRMs to supercharge sales teams with top-tier AI assistance.",
        kicker: "closed more deals globally. Here's how",
        logo: {
          name: "Attention",
          src: "/gladia/assets/67b0ce5dbb0e44bc6109ad7c_logo-attention.svg",
        },
        link: {
          href: "https://www.gladia.io/sales-enablement",
          label: "closed more deals globally. Here's how",
        },
      },
      {
        accent: "magenta",
        title: "Note-takers",
        description:
          "Capture every detail automatically - with real-time or async transcription that tags speakers, generates summaries, and more across all your tools.",
        link: {
          href: "https://www.gladia.io/meeting-assistant",
          label: "How Gladia supports note-takers?",
        },
      },
      {
        accent: "plum",
        title: "Financial services",
        description:
          "Run voice agents that can engage customers in sensitive, compliance-heavy contexts, with stable transcription and top numerical accuracy.",
        link: {
          href: "https://www.gladia.io/customer-experience",
          label: "How Gladia supports financial services?",
        },
      },
    ],
  },
  mission: {
    title: "Voice is the ultimate interface. We're here to make it real.",
    description:
      "At Gladia, we believe that the future of human-machine interaction is voice. Speaking should be the most natural way to access information, build products, and connect with technology.",
    action: {
      href: "https://www.gladia.io/about",
      label: "Read more",
    },
    background:
      "/gladia/assets/68d3d44552eec3933d5f9405_56686e4f5a0364387ca1468f0d36b05e_Background_Footer.avif",
  },
  faq: {
    title: "All your questions. Answered.",
    items: [
      {
        question: "What are the key features of Gladia's audio transcription API?",
        answer:
          "On top of supporting 100+ languages across both highly accurate asynchronous and real-time transcription, at under 300 milliseconds latency, Gladia also offers a layer of add-ons. These range from custom vocabulary, diarization and sentiment analysis to named entity recognition, word-level timestamps, summarization and more.",
      },
      {
        question: "What languages does Gladia's speech-to-text API support?",
        answer:
          "Gladia's Speech-to-Text API supports 100+ languages and accents including english, french, spanish, italian, portuguese, german, dutch, swedish, arabic, hindi, japanese, korean and many more.",
      },
      {
        question: "How can I get started with implementing Gladia's API in my product?",
        answer:
          "To get started, sign up at app.gladia.io. You can try the product in the playground environment or generate a new API key directly from the dashboard. Full implementation guides are available in the documentation.",
      },
      {
        question: "How does Gladia's Speech-to-Text API work?",
        answer:
          "Gladia's Speech-to-Text API lets developers add both asynchronous and real-time transcription, plus audio intelligence add-ons, through a single API that works with existing tech stacks and telephony protocols.",
      },
      {
        question: "Do you offer support for multiple programming languages?",
        answer:
          "Absolutely. The API is language-agnostic and can be used with any programming language capable of making HTTP requests. Gladia also provides code examples in multiple languages.",
      },
      {
        question: "What audio formats does Gladia support?",
        answer:
          "The API supports a wide range of audio formats and codecs, from WAV and M4A to FLAC and AAC. The full list is available in the documentation under supported files and duration.",
      },
      {
        question: "Is Gladia secure?",
        answer:
          "Gladia works with organizations that have highly sensitive data and strict security requirements. The platform is GDPR compliant by default and can also support on-premises or air-gapped hosting depending on your setup.",
      },
    ],
  },
  footer: {
    strapline: "AI audio infrastructure for companies",
    badgeImage: "/gladia/assets/6787f8e10cba42b0d0cb9c4d_soc.avif",
    badgeImageAlt: "Compliance certification badge",
    columns: [
      {
        title: "Product",
        links: [
          { href: "https://www.gladia.io/real-time", label: "Real-time STT" },
          { href: "https://www.gladia.io/batch", label: "Batch STT" },
          { href: "https://www.gladia.io/solaria", label: "Solaria" },
          { href: "https://www.gladia.io/pricing", label: "Pricing" },
        ],
      },
      {
        title: "Use cases",
        links: [
          { href: "https://www.gladia.io/customer-experience", label: "Customer experience" },
          { href: "https://www.gladia.io/sales-enablement", label: "Sales enablement" },
          { href: "https://www.gladia.io/meeting-assistant", label: "Meeting assistants" },
          { href: "https://www.gladia.io/media", label: "Media" },
        ],
      },
      {
        title: "Developers",
        links: [
          { href: "https://app.gladia.io/", label: "Playground" },
          { href: "https://docs.gladia.io/", label: "Documentation" },
          { href: "https://discord.com/invite/gladia", label: "Discord" },
          { href: "https://status.gladia.io/", label: "Status" },
        ],
      },
      {
        title: "Resources",
        links: [
          { href: "https://www.gladia.io/blog", label: "Blog" },
          { href: "https://www.gladia.io/about", label: "About us" },
          {
            href: "https://www.welcometothejungle.com/en/companies/gladia",
            label: "Careers",
          },
          { href: "https://www.gladia.io/security", label: "Security" },
          { href: "https://trust.gladia.io/", label: "Trust center" },
        ],
      },
      {
        title: "Company",
        links: [
          { href: "https://www.gladia.io/press", label: "Press" },
          { href: "https://www.gladia.io/stt-api-benchmarks", label: "Benchmarks" },
          { href: "https://www.gladia.io/gladia-vs-deepgram", label: "Gladia vs Deepgram" },
          { href: "https://www.gladia.io/gladia-vs-assemblyai", label: "Gladia vs AssemblyAI" },
          { href: "https://www.gladia.io/ai-note-takers-guide", label: "AI note-taker guide" },
        ],
      },
    ],
    legal: [
      { href: "https://www.gladia.io/legal", label: "Legal notice" },
      { href: "https://www.gladia.io/privacy", label: "Privacy notice" },
      { href: "https://www.gladia.io/terms", label: "Terms & conditions" },
    ],
    social: [
      {
        href: "https://www.linkedin.com/company/gladia",
        name: "LinkedIn",
        src: "/gladia/assets/66aa763add6db937d66b4907_icon-linkedin.svg",
      },
      {
        href: "https://discord.com/invite/gladia",
        name: "Discord",
        src: "/gladia/assets/66aa76503ed97ed966ab2b00_icon-discord.svg",
      },
      {
        href: "https://github.com/gladiaio",
        name: "GitHub",
        src: "/gladia/assets/66aa76598f80e540f83a2a71_icon-github.svg",
      },
      {
        href: "https://x.com/gladiaio",
        name: "X",
        src: "/gladia/assets/66aa765e5d2c51c12d6e6713_icon-x.svg",
      },
    ],
  },
};
