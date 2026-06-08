import type { GladiaPageData } from "@/types/gladia";

export const gladiaPageData: GladiaPageData = {
  hero: {
    announcement: {
      href: "#product",
      label: "Revolucione seu comercial sem esfor\u00e7o",
    },
    background: "/gladia/assets/699dd45d2deab1aeb6a44e35_Background.webp",
    titleLines: ["Agentes de I.A por Voz", "para Liga\u00e7\u00f5es Ativas que"],
    rotatingWords: [
      "aciona novos leads",
      "reativa leads da base",
      "recupera carrinhos abandonados",
      "realiza pesquisa de satisfa\u00e7\u00e3o",
    ],
    description:
      "Atenda todos seus leads com nosso sistema de Agentes de I.A para Liga\u00e7\u00f5es, CRM e WhatsApp, na mesma plataforma.",
    nav: [
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#developers", label: "Integra\u00e7\u00e3o" },
      { href: "#nossos-clientes", label: "Nossos clientes" },
      { href: "#perguntas", label: "Perguntas" },
      { href: "#preco", label: "Pre\u00e7o" },
    ],
    headerActions: [
      {
        href: "#preco",
        label: "Solicitar demonstra\u00e7\u00e3o",
        variant: "light",
      },
      {
        href: "#preco",
        label: "Cadastre-se gr\u00e1tis",
        variant: "dark",
      },
    ],
    actions: [
      {
        href: "#preco",
        label: "Ativar Sistema",
        variant: "light",
      },
      {
        href: "#preco",
        label: "Marque uma Demonstra\u00e7\u00e3o",
        variant: "dark",
      },
    ],
    trustedLabel: "Estrutura confiável para escalar a sua operação.",
    trustedAction: {
      href: "#nossos-clientes",
      label: "Ver mais",
    },
    trustedLogos: [],
  },
  howItWorks: {
    eyebrow: "COMO FUNCIONA",
    title: "Coloque uma campanha no ar em 3 passos",
    description:
      "Da base de leads ao contato automatizado: a Rebound entra no seu processo comercial sem exigir uma troca completa de ferramentas.",
    steps: [
      {
        eyebrow: "01",
        title: "Conecte sua base",
        description:
          "Suba uma planilha, conecte seu CRM ou use um webhook para acionar ligações quando o lead chegar em uma etapa específica.",
      },
      {
        eyebrow: "02",
        title: "Defina objetivo e abordagem",
        description:
          "Escolha se a campanha vai reativar leads, recuperar carrinhos, confirmar agendamentos ou receber novos contatos.",
      },
      {
        eyebrow: "03",
        title: "Acompanhe resultado e próximos passos",
        description:
          "Veja gravação, resumo, status da ligação, motivo de sucesso ou falha e encaminhamento para WhatsApp ou atendimento humano.",
      },
    ],
  },
  problem: {
    title: "Ou\u00e7a a grava\u00e7\u00e3o de uma liga\u00e7\u00e3o real",
    description:
      "De informa\u00e7\u00f5es-chave perdidas a falas atribu\u00eddas ao interlocutor errado, transcri\u00e7\u00f5es ruins quebram a confian\u00e7a no seu produto. A Rebound captura insights cr\u00edticos em diferentes sotaques, jarg\u00f5es e setores para entregar experi\u00eancias de voz confi\u00e1veis.",
  },
  performance: {
    id: "product",
    eyebrow: "DESEMPENHO",
    title: "Voz natural para conversas que convertem",
    description:
      "Atenda, qualifique e reengaje contatos com uma voz fluida, humana e pronta para agir no momento certo.",
    action: {
      href: "/audio/demo-call-waveform.wav",
      label: "Ouvir \u00e1udio",
    },
    background:
      "/gladia/assets/68d2575ad4dedb219b6668a7_d03124331526c19ecdb4423263e1c3a2_Homepage-bento-benefits-bg.avif",
    cards: [
      {
        accent: "cyan",
        title: "Reativar leads que n\u00e3o respondem",
        description:
          "Retome conversas frias com abordagem natural, sem parecer rob\u00f4, e aumente respostas de leads parados.",
        image: "/gladia/assets/68d2c14bdabaca2ad339fff7_Sub-200ms.avif",
        imageAlt: "Visual de lat\u00eancia",
      },
      {
        accent: "violet",
        title: "Recuperar carrinho abandonado",
        description:
          "Recupere vendas perdidas com follow-up no timing certo, linguagem consultiva e foco em fechamento.",
        image: "/gladia/assets/68d397760bcb3b776b166ae5_94-Accuracy.avif",
        imageAlt: "Visual de precis\u00e3o",
      },
      {
        accent: "emerald",
        title: "Realizar avisos de agendamentos",
        description:
          "Confirme compromissos, reduza faltas e mantenha sua opera\u00e7\u00e3o organizada com lembretes autom\u00e1ticos.",
        image: "/gladia/assets/68d3c872979505715cd7099e_Performance.avif",
        imageAlt: "Visual de estabilidade",
      },
      {
        accent: "amber",
        title: "Receber novos leads",
        description:
          "Atenda novos contatos na hora, colete dados essenciais e encaminhe cada lead para o pr\u00f3ximo passo.",
        image: "/gladia/assets/68d3c87259929b50a0be4506_Tailored.avif",
        imageAlt: "Visual de otimiza\u00e7\u00e3o SIP",
      },
    ],
  },
  productDemo: {
    eyebrow: "DEMO DO PRODUTO",
    title: "Veja o agente trabalhando, não apenas a promessa",
    description:
      "Acompanhe campanhas, ligações, análise de sucesso e próximos contatos em um painel pensado para operação comercial.",
    action: {
      href: "#preco",
      label: "Testar com minha base",
    },
    metrics: [
      {
        value: "1.248",
        label: "contatos na fila",
        description: "Leads prontos para ligação ou follow-up.",
      },
      {
        value: "37%",
        label: "taxa de contato",
        description: "Visão rápida do avanço da campanha.",
      },
      {
        value: "12 min",
        label: "tempo médio",
        description: "Do lead parado ao próximo contato.",
      },
    ],
    timeline: [
      {
        title: "Ligação concluída",
        description:
          "O agente identifica interesse, objeções e próximos passos da conversa.",
      },
      {
        title: "Resumo e validação gerados",
        description:
          "A equipe entende por que a ligação avançou, falhou ou precisa de revisão.",
      },
      {
        title: "WhatsApp enviado automaticamente",
        description:
          "Quando faz sentido, o contato recebe a continuidade no canal da empresa.",
      },
    ],
  },
  scaling: {
    id: "solutions",
    eyebrow: "ESCALA",
    title: "Escale sua opera\u00e7\u00e3o sem perder controle",
    description:
      "Ative campanhas em paralelo para reativar leads frios, recuperar carrinhos abandonados, confirmar agendamentos e receber novos leads com consist\u00eancia.",
    action: {
      href: "#preco",
      label: "Assinar Rebound",
    },
    background:
      "/gladia/assets/68d2c86cc2fa6c74349f9804_6f14f8895811502991dcb5bbcc1f34b3_Homepage-bento-scale-bg.avif",
    cards: [
      {
        accent: "violet",
        title: "Campanhas simult\u00e2neas, sem fila",
        description:
          "Rode m\u00faltiplos fluxos ao mesmo tempo sem travar sua opera\u00e7\u00e3o comercial, mesmo em picos de demanda.",
        image: "/gladia/assets/68d3c9a0cfb16b0b6afe5aae_Parallel.avif",
        imageAlt: "Visual de fluxos paralelos",
      },
      {
        accent: "cyan",
        title: "Crescimento com opera\u00e7\u00e3o enxuta",
        description:
          "Automatize rotinas de contato e follow-up para o time focar no que mais importa: convers\u00e3o e fechamento.",
        image: "/gladia/assets/68d3c9a08b2f71326c82d3c1_Eye.avif",
        imageAlt: "Visual de carga de infraestrutura",
      },
      {
        accent: "amber",
        title: "Custos previs\u00edveis por uso real",
        description:
          "Comece pequeno, valide r\u00e1pido e escale com clareza de consumo, sem desperd\u00edcio de estrutura. Escalou? Temos um plano com servidor dedicado para voc\u00ea.",
        image: "/gladia/assets/68d3c9a0943562757c628f81_Piggy.avif",
        imageAlt: "Visual de precifica\u00e7\u00e3o",
      },
    ],
  },
  integration: {
    id: "developers",
    eyebrow: "INTEGRA\u00c7\u00c3O",
    title: "Experi\u00eancia intuitiva\npara colocar no ar r\u00e1pido,\nsem dificuldades.",
    description:
      "Conecte sua opera\u00e7\u00e3o em poucos passos e transforme etapas do comercial em a\u00e7\u00f5es autom\u00e1ticas de contato, qualifica\u00e7\u00e3o e recupera\u00e7\u00e3o.",
    action: {
      href: "#developers",
      label: "Documenta\u00e7\u00e3o da Rebound",
    },
    background: "/gladia/assets/developer-first-custom.png",
    cards: [
      {
        accent: "violet",
        title: "Implementa\u00e7\u00e3o r\u00e1pida, sem mexer com c\u00f3digo.",
        description:
          "Zero c\u00f3digo para iniciar, testar e colocar em produ\u00e7\u00e3o com velocidade. Voc\u00ea consegue ativar em minutos.",
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
        title: "Integra\u00e7\u00e3o r\u00e1pida com suas plataformas de uso",
        description:
          "Temos integra\u00e7\u00e3o com v\u00e1rias plataformas e CRM, e tamb\u00e9m criamos uma nova integra\u00e7\u00e3o para seu cen\u00e1rio em poucas horas.",
      },
      {
        accent: "emerald",
        title: "Pronto para orquestrar a\u00e7\u00f5es comerciais",
        description:
          "Realiza liga\u00e7\u00f5es e envie mensagens autom\u00e1ticas para reativar leads, recuperar carrinhos, avisar agendamentos e receber novos leads em tempo real.",
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
        title: "Arquitetura flex\u00edvel para evoluir",
        description:
          "Comece simples e expanda com seguran\u00e7a, sem reescrever toda a opera\u00e7\u00e3o depois.",
        logos: [
          {
            name: "Vapi",
            src: "/gladia/assets/68da7911d1167c4432eb4bf5_vapi.svg",
          },
          {
            name: "Pipecat",
            src: "/gladia/assets/68d3f494a4365d47aa09ed0a_Pipecate-simple.svg",
          },
        ],
      },
    ],
    supportCard: {
      title: "Suporte t\u00e9cnico para acelerar entrega",
      description:
        "Resolva d\u00favidas de implementa\u00e7\u00e3o r\u00e1pido e avance para produ\u00e7\u00e3o com confian\u00e7a. Tamb\u00e9m fazemos implementa\u00e7\u00e3o personalizada.",
    },
  },
  compliance: {
    title: "Conformidade e seguran\u00e7a",
    description:
      "Na Rebound, privacidade de dados \u00e9 inegoci\u00e1vel. Nunca usamos seu \u00e1udio para retreinar nossos modelos e n\u00e3o acreditamos em cobrar a mais por tranquilidade.",
    action: {
      href: "#perguntas",
      label: "Saiba mais sobre nossas pr\u00e1ticas de seguran\u00e7a",
    },
    beltImage: "/gladia/assets/69973c5083a93a034c2eac82_compliance-belt.svg",
    beltImageAlt: "Faixa de certifica\u00e7\u00f5es de conformidade",
    portrait: "/gladia/assets/66ec619513cb9be4e874c6a3_alexandre-bouju.png",
    portraitAlt: "Retrato de cliente da Rebound",
    badges: [
      {
        image: "/gladia/assets/68d3f7748f2c432c3bb8c31a_SOC.avif",
        imageAlt: "Selo SOC",
        label: "AICPA SOC Tipo 2",
        shortLabel: "SOC 2",
      },
      {
        image: "/gladia/assets/68d3f774924e4d8b616fdcb0_GDPR.avif",
        imageAlt: "Selo GDPR",
        label: "Em conformidade com GDPR",
        shortLabel: "GDPR",
      },
      {
        image: "/gladia/assets/68d3f774d6b91d8f3f6d81df_HIPAA.avif",
        imageAlt: "Selo HIPAA",
        label: "Em conformidade com HIPAA",
        shortLabel: "HIPAA",
      },
    ],
  },
  languageSupport: {
    id: "resources",
    eyebrow: "SUPORTE DE IDIOMAS",
    title: "Compreens\u00e3o e express\u00e3o perfeitas em +100 idiomas",
    description:
      "Entenda nuances, sotaques e inten\u00e7\u00f5es com precis\u00e3o. Responda com clareza e naturalidade em mais de 100 idiomas.",
    action: {
      href: "#preco",
      label: "Assinar Rebound",
    },
    background:
      "/gladia/assets/68d3cd88739f2db230bbbe7d_Homepage-bento-languages-bg.avif",
    cards: [
      {
        accent: "violet",
        title: "Transcreve em qualquer idioma",
        description:
          "Com precis\u00e3o de ponta em EN, FR, ES e IT, al\u00e9m de suporte exclusivo para idiomas raros.",
        image: "/gladia/assets/68d3ca078e4cc199eb9b580c_Translate.avif",
        imageAlt: "Visual de transcri\u00e7\u00e3o multil\u00edngue",
      },
      {
        accent: "cyan",
        title: "Transição de linguagem avançada",
        description:
          "Reconhecimento avan\u00e7ado lida com conversas multil\u00edngues naturais sem erros.",
        image: "/gladia/assets/68d3ca07fbfba9e9c60e0971_Toggle.avif",
        imageAlt: "Visual de transi\u00e7\u00e3o de idioma",
      },
      {
        accent: "emerald",
        title: "Tradução de qualquer idioma para qualquer idioma",
        description:
          "Garante comunica\u00e7\u00e3o fluida em todos os idiomas suportados.",
        image: "/gladia/assets/68d3ca070953e0f56bbe41b5_Translation.avif",
        imageAlt: "Visual de tradu\u00e7\u00e3o",
      },
    ],
  },
  benchmarks: {
    eyebrow: "COMPARATIVOS",
    title: "Como nos comparamos com as alternativas",
    description:
      "A Rebound \u00e9 at\u00e9 39% mais precisa que concorrentes l\u00edderes nos principais idiomas europeus, incluindo ingl\u00eas.",
    action: {
      href: "#product",
      label: "Confira nossos comparativos",
    },
    background:
      "/gladia/assets/homepage-bento-benchmarks-bg-green.avif",
    graphic: "/gladia/assets/679270d0233671e008b8a55a_svgexport-4.svg",
    graphicAlt: "Gr\u00e1fico comparativo",
  },
  comparison: {
    eyebrow: "COMPARATIVO",
    title: "O que muda quando o follow-up deixa de ser manual",
    description:
      "A Rebound fica entre a flexibilidade do time humano e a escala de automações, com voz, contexto e continuidade no mesmo fluxo.",
    rows: [
      {
        criterion: "Velocidade de contato",
        manual: "Depende da agenda do time e costuma atrasar nos picos.",
        automation: "Dispara mensagens, mas nem sempre conversa de verdade.",
        rebound: "Liga no momento certo e continua a conversa pelo WhatsApp.",
      },
      {
        criterion: "Contexto comercial",
        manual: "Varia por vendedor e exige disciplina no CRM.",
        automation: "Segue regras fixas e perde nuances da resposta.",
        rebound: "Usa objetivo, histórico e resultado da ligação para decidir o próximo passo.",
      },
      {
        criterion: "Escala",
        manual: "Cresce junto com contratação e treinamento.",
        automation: "Escala envio, mas pode gerar resposta sem continuidade.",
        rebound: "Roda múltiplas campanhas em paralelo com acompanhamento centralizado.",
      },
      {
        criterion: "Custo",
        manual: "Custo fixo alto para tarefas repetitivas.",
        automation: "Pode exigir setup caro e integrações longas.",
        rebound: "Começa com plano mensal e minutos previsíveis por uso real.",
      },
      {
        criterion: "Passagem para humano",
        manual: "Já nasce humana, mas consome tempo em contatos frios.",
        automation: "Frequentemente entrega contexto incompleto.",
        rebound: "Aciona o humano quando há intenção, objeção ou oportunidade clara.",
      },
    ],
  },
  testimonials: {
    eyebrow: "",
    title: "Por que os clientes nos escolhem",
    description:
      "Cinco motivos para transformar contato comercial em continuidade real.",
    background: "/gladia/assets/6839ac6c53d82bf7befb218c_testimonials_bg.webp",
    items: [
      {
        title: "Atendimento instant\u00e2neo, antes do lead esfriar",
        body:
          "O Rebound App responde no momento certo e reduz o tempo entre interesse e contato. Assim, sua opera\u00e7\u00e3o aproveita melhor cada oportunidade que chega.",
        contrast:
          "\u00c9 diferente de abrir o CRM no fim do dia e perceber que os melhores leads ficaram sem resposta.",
      },
      {
        title: "Follow-up que acontece sem depender da mem\u00f3ria do time",
        body:
          "O app organiza e dispara os pr\u00f3ximos contatos com consist\u00eancia. Menos lead esquecido, menos atraso e mais continuidade no funil.",
        contrast:
          "\u00c9 diferente de prometer retorno, o dia correr, e aquela conversa boa simplesmente sumir da rotina.",
      },
      {
        title: "Conversas mais inteligentes, n\u00e3o s\u00f3 notifica\u00e7\u00f5es autom\u00e1ticas",
        body:
          "O Rebound App conduz intera\u00e7\u00f5es com contexto, inten\u00e7\u00e3o e clareza. N\u00e3o \u00e9 s\u00f3 automa\u00e7\u00e3o: \u00e9 continuidade real na jornada comercial.",
        contrast:
          "\u00c9 diferente de receber resposta do lead e, ainda assim, a conversa travar porque o sistema n\u00e3o entendeu o que ele quis dizer.",
      },
      {
        title: "Visibilidade do que est\u00e1 travando sua convers\u00e3o",
        body:
          "Com o Rebound App, voc\u00ea entende onde os contatos param, atrasam ou somem. Isso transforma gargalos invis\u00edveis em decis\u00f5es pr\u00e1ticas de opera\u00e7\u00e3o.",
        contrast:
          "\u00c9 diferente de s\u00f3 descobrir que o processo falhou quando a agenda da semana veio mais vazia do que deveria.",
      },
      {
        title: "Escala de atendimento sem perder padr\u00e3o",
        body:
          "O app mant\u00e9m velocidade e consist\u00eancia mesmo quando a demanda aumenta. Sua opera\u00e7\u00e3o cresce sem depender de mais esfor\u00e7o manual a cada novo lead.",
        contrast:
          "\u00c9 diferente de aumentar a entrada de leads e ver o atendimento virar uma corrida para apagar inc\u00eandio.",
      },
    ],
  },
  useCases: {
    eyebrow: "CASOS DE USO",
    title: "O que voc\u00ea pode fazer com o nosso sistema",
    description:
      "Ligando todo o seu processo comercial com uma IA que entende cada etapa como um vendedor humano.",
    background:
      "/gladia/assets/homepage-bento-use-cases-bg-green.avif",
    cards: [
      {
        accent: "violet",
        title: "Atendimento e suporte",
        description:
          "Realiza atendimento e suporte com conversas naturais em escala, com agentes que atendem instantaneamente, nunca deixam chamadas ca\u00edrem e lidam com milhares de intera\u00e7\u00f5es em paralelo, de entrada e sa\u00edda.",
        kicker: "Atendimento em escala com qualidade",
        logo: {
          name: "Aircall",
          src: "/gladia/assets/68d3aea853f47650608c78a7_Aircall.svg",
        },
        link: {
          href: "#company",
          label: "Atendimento em escala com qualidade",
        },
      },
      {
        accent: "violet",
        title: "Recupera\u00e7\u00e3o de leads",
        description:
          "Recupere leads parados com fluxos ativos dentro da nossa plataforma ou via integra\u00e7\u00e3o com o CRM do cliente. Ao mover um lead para um status ou etapa espec\u00edfica, a liga\u00e7\u00e3o \u00e9 enviada automaticamente no timing certo.",
        kicker: "Recupera\u00e7\u00e3o autom\u00e1tica por etapa do CRM",
        logo: {
          name: "Attention",
          src: "/gladia/assets/67b0ce5dbb0e44bc6109ad7c_logo-attention.svg",
        },
        link: {
          href: "#company",
          label: "Recupera\u00e7\u00e3o autom\u00e1tica por etapa do CRM",
        },
      },
      {
        accent: "magenta",
        title: "Veja e analise as liga\u00e7\u00f5es do agente",
        description:
          "O sistema conta com grava\u00e7\u00e3o da liga\u00e7\u00e3o e an\u00e1lise de sucesso com valida\u00e7\u00e3o, facilitando visualizar quais liga\u00e7\u00f5es atingiram o objetivo, quais n\u00e3o atingiram e por qu\u00ea.",
        link: {
          href: "#company",
          label: "Veja a an\u00e1lise de resultado das liga\u00e7\u00f5es",
        },
      },
      {
        accent: "plum",
        title: "Campanhas de Prospec\u00e7\u00e3o em Massa",
        description:
          "Suba listas de leads e rode prospec\u00e7\u00e3o ativa em escala com liga\u00e7\u00f5es, e-mail e at\u00e9 10 WhatsApps conectados \u00e0 campanha, distribuindo envios para reduzir bloqueios e manter o ritmo comercial.",
        link: {
          href: "#company",
          label: "Rodar prospec\u00e7\u00e3o multicanal",
        },
      },
    ],
  },
  finalCta: {
    title: "Comece com uma campanha de reativação hoje",
    description:
      "Escolha uma base parada, defina um objetivo simples e veja em poucos dias quais leads ainda têm intenção real de compra.",
    primaryAction: {
      href: "#preco",
      label: "Ativar minha primeira campanha",
    },
    secondaryAction: {
      href: "#perguntas",
      label: "Tirar dúvidas antes",
    },
  },
  mission: {
    title: "A voz \u00e9 a interface definitiva. Estamos aqui para torn\u00e1-la real.",
    description:
      "Na Rebound, acreditamos que o futuro da intera\u00e7\u00e3o entre humanos e m\u00e1quinas \u00e9 a voz. Falar deve ser a forma mais natural de acessar informa\u00e7\u00f5es, criar produtos e se conectar com a tecnologia.",
    action: {
      href: "#perguntas",
      label: "Ler mais",
    },
    background: "/gladia/assets/green-scales-horizontal-left.webp",
  },
  objections: {
    eyebrow: "ANTES DE COMEÇAR",
    title: "As objeções mais comuns já têm resposta",
    description:
      "Antes de ativar uma campanha, normalmente surgem dúvidas sobre voz, integração, controle e passagem para o time humano.",
    items: [
      {
        question: "E se a voz parecer robótica?",
        answer:
          "O foco da Rebound é conversa natural, com contexto e entonação adequada ao objetivo da campanha. Você pode testar o áudio antes de escalar.",
      },
      {
        question: "E se meu CRM ou plataforma for diferente?",
        answer:
          "A operação pode começar por planilha, webhook ou integração personalizada. O objetivo é entrar no fluxo atual sem exigir troca de sistema.",
      },
      {
        question: "Quando o humano entra na conversa?",
        answer:
          "Você define regras de passagem: interesse claro, objeção específica, pedido de proposta, dúvida sensível ou qualquer etapa em que o vendedor deva assumir.",
      },
      {
        question: "E WhatsApp, e-mail e bloqueios?",
        answer:
          "A Rebound combina canais conforme a campanha e distribui contatos para manter ritmo comercial com mais controle operacional.",
      },
      {
        question: "Como evito contatos fora do horário certo?",
        answer:
          "As campanhas podem respeitar janelas de ligação, pausas e retomadas, mantendo consistência sem incomodar o lead no momento errado.",
      },
    ],
  },
  roi: {
    eyebrow: "CALCULADORA",
    title: "Quanto dinheiro fica parado na sua base?",
    description:
      "Simule rapidamente o potencial de receita recuperada quando leads esquecidos voltam a receber contato no momento certo.",
    assumptions: [
      "Estimativa simples para orientar decisão comercial.",
      "Use seu ticket médio e uma taxa conservadora de recuperação.",
      "O resultado não inclui ganhos indiretos de velocidade, agenda e produtividade.",
    ],
  },
  faq: {
    title: "Todas as suas perguntas respondidas.",
    subtitle: "",
    categories: {
      geral: "Geral",
      ligacoes: "Ligações",
      campanhas: "Campanhas",
      escala: "Escala",
      implantacao: "Implantação",
    },
    itemsByCategory: {
      geral: [
        {
          question: "Para que serve o Rebound App?",
          answer:
            "O Rebound App automatiza contatos comerciais para reativar leads frios, recuperar carrinhos, confirmar agendamentos e receber novos leads com mais velocidade.",
        },
        {
          question: "Ele é só para empresas grandes?",
          answer:
            "Não. O Rebound App também funciona muito bem para pequenas e médias operações. A proposta é pagar pelos minutos falados, sem custo de disparo, evitando gastos altos com automações que custam R$ 3.000+ para fazer algo semelhante.",
        },
        {
          question: "O Rebound App substitui SDR?",
          answer:
            "Em muitos casos, sim. O agente consegue reativar leads parados na base, receber novos leads, explicar a oferta, contornar objeções e continuar o contato pelo WhatsApp da empresa. O time humano entra quando for estratégico para fechamento.",
        },
        {
          question: "Que tipo de empresa mais se beneficia?",
          answer:
            "Times com volume de leads e necessidade de resposta rápida: e-commerce, educação, serviços, clínicas, imobiliárias e vendas internas.",
        },
        {
          question: "Qual é o principal ganho prático?",
          answer:
            "Garante que atendimento, follow-up e demais contatos sejam feitos com qualidade e consistência, enquanto libera os vendedores para focarem nas etapas mais importantes da venda, como negociação e fechamento.",
        },
      ],
      ligacoes: [
        {
          question: "O que as ligações automatizadas conseguem fazer?",
          answer:
            "Primeiro contato, follow-up, reativação de leads sem resposta e confirmação de interesse. Também podem executar pesquisa de satisfação, lembretes de agendamento e outras rotinas de relacionamento, sempre com foco em avançar o lead no processo.",
        },
        {
          question: "A voz parece robótica?",
          answer:
            "Não. A proposta é conversa natural, com entonação humana e contexto de atendimento.",
        },
        {
          question: "Dá para enviar WhatsApp durante a ligação?",
          answer:
            "Sim. É possível acionar o envio de WhatsApp no fluxo da própria conversa, conforme as regras da campanha.",
        },
        {
          question: "Dá para confirmar agendamento por ligação?",
          answer:
            "Sim. Você pode automatizar lembretes e confirmações para reduzir faltas e melhorar o comparecimento.",
        },
        {
          question: "Como o time assume quando precisa?",
          answer:
            "Você define regras de transição para o atendimento humano entrar no momento certo, com o contexto da conversa.",
        },
        {
          question: "Como são feitas as ligações?",
          answer:
            "As ligações podem acontecer em tempo real, usando o link de integração (Webhook) dentro da sua plataforma para disparar no momento escolhido (ex.: mudança de etapa no CRM), ou em modo de ligação em massa nas campanhas, a partir de planilhas e bases de leads.",
        },
      ],
      campanhas: [
        {
          question: "Quais campanhas posso rodar hoje?",
          answer:
            "Campanhas de ligação para reativação de leads, recuperação de oportunidades e avisos de agendamento.",
        },
        {
          question: "Vai ter envio de e-mail e WhatsApp nas campanhas?",
          answer:
            "Sim. Em breve, além das ligações, as campanhas também terão envio nativo de e-mail e WhatsApp.",
        },
        {
          question: "Dá para criar campanhas por objetivo?",
          answer:
            "Sim. Você pode estruturar campanhas por etapa do funil e tipo de lead, além de controlar as faixas de horário de ligação para cada operação.",
        },
        {
          question: "Consigo acompanhar resultado por campanha?",
          answer:
            "Sim. Você acompanha volume de contatos, progresso e evolução por campanha.",
        },
        {
          question: "Posso pausar e retomar sem perder configuração?",
          answer:
            "Sim. As campanhas podem ser pausadas e reativadas mantendo a estrutura definida.",
        },
      ],
      escala: [
        {
          question: "Aguenta aumento de volume?",
          answer:
            "Sim. A plataforma foi pensada para operações com crescimento de contatos e campanhas em paralelo.",
        },
        {
          question: "Preciso aumentar equipe para escalar?",
          answer:
            "Não na mesma proporção. A automação absorve a parte operacional e o time foca no fechamento.",
        },
        {
          question: "Dá para operar múltiplas frentes ao mesmo tempo?",
          answer:
            "Sim. Você pode manter reativação, recuperação e avisos rodando em paralelo.",
        },
        {
          question: "Como manter padrão de atendimento em escala?",
          answer:
            "Com regras, fluxos e objetivos definidos por campanha, garantindo consistência.",
        },
        {
          question: "Escalar aumenta muito o risco operacional?",
          answer:
            "A ideia é o contrário: escalar com previsibilidade, monitoramento e ajustes contínuos.",
        },
      ],
      implantacao: [
        {
          question: "É difícil começar?",
          answer:
            "Não. Na prática, basta criar o agente, conectar um número via SIP Trunk (ou adquirir um número com nossa equipe) e inserir o link de integração dentro da sua plataforma. Se precisar, nosso suporte técnico implementa para você.",
        },
        {
          question: "Quanto tempo leva para colocar no ar?",
          answer:
            "Depende do processo atual, mas a entrada costuma ser rápida quando o fluxo comercial está minimamente definido.",
        },
        {
          question: "Preciso de time técnico dedicado?",
          answer:
            "Não obrigatoriamente. A operação pode iniciar com apoio guiado e depois ganhar sofisticação.",
        },
        {
          question: "Como o Rebound App entra no processo atual?",
          answer:
            "Ele se conecta ao fluxo comercial existente para automatizar etapas sem exigir mudança radical de operação.",
        },
        {
          question: "Como medir resultado no início?",
          answer:
            "Acompanhe indicadores como tempo de resposta, taxa de contato, reativação e avanço no funil.",
        },
      ],
    },
  },
  footer: {
    strapline: "Infraestrutura de \u00e1udio com IA para empresas",
    badgeImage: "/gladia/assets/6787f8e10cba42b0d0cb9c4d_soc.avif",
    badgeImageAlt: "Selo de certifica\u00e7\u00e3o de conformidade",
    columns: [
      {
        title: "Produto",
        links: [
          { href: "#product", label: "Liga\u00e7\u00f5es por IA" },
          { href: "#solutions", label: "Campanhas" },
          { href: "#developers", label: "Integra\u00e7\u00e3o" },
          { href: "#preco", label: "Pre\u00e7os" },
        ],
      },
      {
        title: "Casos de uso",
        links: [
          { href: "#company", label: "Atendimento e suporte" },
          { href: "#company", label: "Recupera\u00e7\u00e3o de leads" },
          { href: "#company", label: "An\u00e1lise de liga\u00e7\u00f5es" },
          { href: "#company", label: "Campanhas em massa" },
        ],
      },
      {
        title: "Desenvolvedores",
        links: [
          { href: "#preco", label: "Ambiente de testes" },
          { href: "#developers", label: "Documenta\u00e7\u00e3o" },
          { href: "#perguntas", label: "Suporte" },
          { href: "#perguntas", label: "Status" },
        ],
      },
      {
        title: "Recursos",
        links: [
          { href: "#perguntas", label: "Blog" },
          { href: "#perguntas", label: "Sobre n\u00f3s" },
          {
            href: "#perguntas",
            label: "Carreiras",
          },
          { href: "#perguntas", label: "Seguran\u00e7a" },
          { href: "#perguntas", label: "Central de confian\u00e7a" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { href: "#perguntas", label: "Imprensa" },
          { href: "#product", label: "Comparativos" },
          { href: "#product", label: "Rebound x Deepgram" },
          { href: "#product", label: "Rebound x AssemblyAI" },
          { href: "#developers", label: "Guia de assistente de notas com IA" },
        ],
      },
    ],
    legal: [
      { href: "#perguntas", label: "Aviso legal" },
      { href: "#perguntas", label: "Pol\u00edtica de privacidade" },
      { href: "#perguntas", label: "Termos e condi\u00e7\u00f5es" },
    ],
    social: [
      {
        href: "#perguntas",
        name: "LinkedIn",
        src: "/gladia/assets/66aa763add6db937d66b4907_icon-linkedin.svg",
      },
      {
        href: "#perguntas",
        name: "Discord",
        src: "/gladia/assets/66aa76503ed97ed966ab2b00_icon-discord.svg",
      },
      {
        href: "#perguntas",
        name: "GitHub",
        src: "/gladia/assets/66aa76598f80e540f83a2a71_icon-github.svg",
      },
      {
        href: "#perguntas",
        name: "X",
        src: "/gladia/assets/66aa765e5d2c51c12d6e6713_icon-x.svg",
      },
    ],
  },
};
