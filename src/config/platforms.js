import {
  FileSignature,
  ShieldCheck,
  Truck,
  Stethoscope,
  ShoppingCart,
  Ticket,
  KanbanSquare,
  Pickaxe
} from "lucide-react";
import pcomImage from "./../assets/compliance.jpg";
import pcontImage from "./../assets/contract.jpg";
import pmImage from "./../assets/logistic.jpg";
import pihImage from "./../assets/hospital.jpg";
import p2pImage from "./../assets/shopping.jpg";
import helpdeskImage from "./../assets/helpdesk.jpg";
import papImage from "./../assets/pap.jpg";
import piomImage from "./../assets/piom.jpg"

export const platformsData = {
  label: "PORTFÓLIO",
  title: "Soluções que Transformam Sectores",
  description:
    "Plataformas criadas para otimizar processos e aumentar a eficiência em sectores críticos como compliance, jurídico, RH, agricultura, logística e saúde.",
  items: [
    /* ──────────────────────────────────────────────
       01 · PCONT — Plataforma dos Contratos
    ────────────────────────────────────────────── */
    {
      id: "01",
      slug: "pcont",
      title: "PCONT",
      icon: FileSignature,
      tag: "Plataformas de contracto",
      headline: "Transforme a Gestão de Contratos numa Vantagem Competitiva",
      desc: "Imagine nunca mais perder um prazo, nunca mais procurar um contrato perdido numa pasta cheia de PDFs, e ter todo o histórico do fornecedor ao alcance de um clique. Isso não é luxo — é o PCONT.",
      whatDo:
        "O PCONT gere todo o ciclo de vida dos seus contratos: desde a criação e negociação, passando pela assinatura digital, até ao acompanhamento de renovações e rescisões. Sem papelada. Sem confusão. Sem dores de cabeça.",
      forWho:
        "Gestores de compras, departamentos jurídicos e compliance, diretores financeiros e qualquer empresa que assine dezenas — ou centenas — de contratos por ano.",
      whyNeed: [
        {
          title: "Visibilidade Total",
          description:
            "Todos os contratos numa única plataforma. Quem assinou, quando expira, quais têm cláusulas críticas.",
        },
        {
          title: "Alertas Automáticos",
          description:
            "Nunca mais perca uma renovação. O sistema avisa antes do prazo acabar.",
        },
        {
          title: "Assinatura Digital",
          description:
            "Assine e envie contratos em minutos, sem ter de imprimir, digitalizar ou enviar por correio.",
        },
        {
          title: "Controlo Total",
          description:
            "Histórico completo de alterações, aprovações e comunicações relacionadas com cada contrato.",
        },
        {
          title: "Conformidade Garantida",
          description:
            "Cumprimento legal integrado para cada tipo de contrato.",
        },
      ],
      features: [
        "Biblioteca Centralizada",
        "Assinatura Digital",
        "Alertas de Renovação",
        "Relatórios e Analytics",
        "Integração com ERP",
        "Automatização dos Processos",
      ],
      stats: [
        { value: "70%", label: "menos tempo em tarefas administrativas" },
        { value: "60%", label: "redução de contratos perdidos ou esquecidos" },
        { value: "100%", label: "visibilidade sobre o pipeline contratual" },
      ],
      faq: [
        {
          question: "Preciso de instalar algo?",
          answer:
            "Não. O PCONT é 100% baseado na nuvem. Acede a partir de qualquer navegador, em qualquer lugar.",
        },
        {
          question: "Os meus contratos estão seguros?",
          answer:
            "Absolutamente. Encriptação de nível bancário, cópias de segurança automáticas e controlo de acessos por perfis.",
        },
        {
          question: "Posso personalizar os modelos de contrato?",
          answer:
            "Sim. A plataforma permite criar e adaptar modelos ao seu negócio.",
        },
      ],
      slogan:
        "Gestão de contratos deixou de ser um caos. Com o PCONT, é uma vantagem competitiva.",
      website: "https://pcont.gsaplatform.co",
      background: pcontImage,
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    /* ──────────────────────────────────────────────
       02 · PCOM — Plataforma de Gestão de Compliance
    ────────────────────────────────────────────── */
    {
      id: "02",
      slug: "pcom",
      title: "PCOM",
      icon: ShieldCheck,
      tag: "Compliance",
      headline: "O Seu Compliance Officer Vai Dizer «Finalmente!»",
      desc: "Cansado de folhas de cálculo infinitas, relatórios desorganizados e aquela sensação constante de que algo pode estar fora de conformidade? O PCOM existe para dar ao seu Compliance Officer — e a toda a liderança — a visibilidade e o controlo que o mercado exige.",
      whatDo:
        "O PCOM é a plataforma de gestão integrada de Compliance que centraliza políticas, procedimentos, riscos, controlos, auditorias e elaboração de relatórios regulatórios. Da integração de novos colaboradores à monitorização contínua de conformidade, tudo acontece num único ambiente seguro e auditável.",
      whyNeed: [
        {
          title: "Gestão Centralizada de Políticas",
          description:
            "Crie, distribua, rastreie e confirme a aceitação de políticas internas sem papelada.",
        },
        {
          title: "Matriz de Riscos Dinâmica",
          description:
            "Mapeie, avalie e acompanhe os riscos de conformidade em tempo real.",
        },
        {
          title: "Gestão de Auditorias",
          description:
            "Agende auditorias, atribua responsáveis, acompanhe constatações e planos de ação.",
        },
        {
          title: "Relatórios Automáticos",
          description:
            "Relatórios prontos para reguladores, conselhos de administração e comités de risco.",
        },
        {
          title: "Gestão de Formação",
          description:
            "Rastreio das formações obrigatórias em Compliance de todos os colaboradores.",
        },
        {
          title: "Alertas Inteligentes",
          description:
            "A plataforma avisa quando há prazos de compliance ou ações pendentes.",
        },
      ],
      features: [
        "Biblioteca de Políticas",
        "Matriz de Riscos e Controlos",
        "Gestão de Auditorias",
        "Relatórios Automáticos",
        "Formação e Capacitação",
        "Gestão de Incidentes",
        "Dashboard de Compliance",
        "Integração Regulatória",
      ],
      stats: [
        { value: "65%", label: "menos tempo na preparação de relatórios" },
        { value: "90%", label: "melhoria na taxa de cumprimento de políticas" },
        { value: "85%", label: "redução do tempo de resposta a incidentes" },
        { value: "100%", label: "rastreabilidade em todas as ações" },
      ],
      faq: [
        {
          question: "A plataforma cobre que sectores/regulações?",
          answer:
            "O PCOM é agnóstico e adaptável. Cobre AML, proteção de dados, ISO 37001, ISO 27001, ISO 9001 e legislação angolana, sendo parametrizável à medida.",
        },
        {
          question: "Posso dar acessos diferenciados por perfil?",
          answer:
            "Sim. Controlo de acessos para administradores, auditores, colaboradores de linha, gestão e conselho.",
        },
        {
          question: "Como funciona a gestão de incidentes?",
          answer:
            "Incidentes são registados, classificados por severidade, atribuídos a responsáveis, acompanhados com plano de ação e só encerrados após verificação e validação.",
        },
      ],
      slogan:
        "O PCOM não só reduz multas e litígios, como protege a reputação e a sustentabilidade das operações e do negócio.",
      website: "https://pcom.gsaplatform.co",
      background: pcomImage,
      image:
        "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    /* ──────────────────────────────────────────────
       03 · PM — Plataforma Logística, Património e Manutenção
    ────────────────────────────────────────────── */
    {
      id: "03",
      slug: "pm",
      title: "PM",
      icon: Truck,
      tag: "Logística e Manutenção",
      headline: "Cada Ativo sob Controlo. Cada Processo Otimizado.",
      desc: "Desde o terreno ao teto, do armazém ao veículo, do edifício ao equipamento — o património da sua empresa precisa de ser gerido com rigor. A PM faz isso e muito mais. Tudo num só lugar.",
      whatDo:
        "A Plataforma Logística, Património e Manutenção é a solução completa para gerir os ativos físicos da sua organização. Controla inventário, logística, manutenção preventiva e corretiva, gestão de espaços e muito mais.",
      whyNeed: [
        {
          title: "Visão 360° do Património",
          description:
            "Sabe exatamente o que tem, onde está e em que condições.",
        },
        {
          title: "Menos Avarias, Menos Custos",
          description:
            "Manutenção preventiva reduz paragens inesperadas em até 60%.",
        },
        {
          title: "Otimização de Stocks",
          description: "Evita tanto a rutura como o excesso de inventário.",
        },
        {
          title: "Decisões Baseadas em Dados",
          description:
            "Relatórios de utilização, custos de manutenção e vida útil dos ativos.",
        },
      ],
      features: [
        "Gestão de Logística",
        "Gestão de Património",
        "Manutenção Preventiva",
        "Ordens de Trabalho",
        "Gestão de Espaços",
        "Relatórios Operacionais",
        "Integração ERP",
        "Multi-localização",
      ],
      stats: [
        { value: "55%", label: "redução de avarias inesperadas" },
        { value: "40%", label: "poupança em custos de manutenção" },
        {
          value: "90%",
          label: "precisão no inventário com registo automático",
        },
        { value: "80%", label: "menos tempo em processos de gestão de stocks" },
      ],
      faq: [
        {
          question: "Funciona para empresas com múltiplas localizações?",
          answer:
            "Sim. A plataforma suporta múltiplas filiais, armazéns, edifícios e localizações com controlo de acessos por site.",
        },
        {
          question: "Como funciona a manutenção preventiva?",
          answer:
            "Pode calendarizar manutenções por periodicidade. O sistema gera automaticamente ordens de trabalho e notifica os responsáveis.",
        },
        {
          question: "Posso integrar com o meu ERP?",
          answer:
            "Sim. Integração nativa com SAP, Oracle, Microsoft Dynamics e outros.",
        },
      ],
      slogan:
        "Pare de gerir o património com especulações. O PM é o seu cockpit operacional com dados reais.",
      website: "https://pm.gsaplatform.co",
      background: pmImage,
      image:
        "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    /* ──────────────────────────────────────────────
       04 · PIH — Plataforma Hospitalar
    ────────────────────────────────────────────── */
    {
      id: "04",
      slug: "pih",
      title: "PIH",
      icon: Stethoscope,
      tag: "Saúde",
      headline: "O Futuro da Gestão Hospitalar. Agora.",
      desc: "Hospitais e clínicas que operam com processos desorganizados colocam vidas em risco. A PIH foi construída para dar às instituições de saúde a tecnologia de que os profissionais precisam: eficiência operacional, segurança do paciente e integração total dos serviços.",
      whatDo:
        "A Plataforma Hospitalar Integrada conecta todos os departamentos e processos de uma instituição de saúde. Desde a gestão de internamento e consulta externa, ao bloco operatório, farmácia, laboratório e administrativos — tudo numa plataforma única e interoperável.",
      whyNeed: [
        {
          title: "Segurança do Paciente em Primeiro Lugar",
          description:
            "Alertas de interação medicamentosa, alergias e validação clínica automática.",
        },
        {
          title: "Informação Sempre Disponível",
          description:
            "Processo clínico único e acessível a todos os profissionais autorizados.",
        },
        {
          title: "Redução de Erros Médicos",
          description:
            "Digitalização de processos reduz erros de prescrição e identificação.",
        },
        {
          title: "Eficiência Operacional",
          description: "Menos tempo em papelada, mais tempo para o paciente.",
        },
        {
          title: "Redução de Custos com Consumíveis",
          description:
            "Controlo rigoroso da farmácia, stocks e dispensação reduz desperdício.",
        },
        {
          title: "Integração com Equipamento Hospitalar",
          description:
            "Ligação direta a monitores, bombas de infusão, laboratório e imagiologia.",
        },
      ],
      features: [
        "Gestão Clínica",
        "Farmácia e Dispensação",
        "Laboratório e Imagiologia",
        "Internamento e Consultas",
        "Bloco Operatório",
        "Faturação e Convenções",
        "Documentação Clínica",
        "Integração com Equipamentos",
      ],
      stats: [
        { value: "70%", label: "redução de erros de medicação" },
        { value: "50%", label: "menos tempo em processos administrativos" },
        { value: "85%", label: "melhoria na satisfação dos profissionais" },
        { value: "100%", label: "rastreabilidade do percurso clínico" },
      ],
      faq: [
        {
          question: "A plataforma cumpre normas de proteção de dados de saúde?",
          answer:
            "Sim. A PIH está alinhada com as melhores práticas de proteção de dados sensíveis, incluindo o RGPD e as diretivas de proteção de dados de saúde.",
        },
        {
          question: "Pode integrar com equipamentos médicos?",
          answer:
            "Sim. Integração com monitores de sinais vitais, bombas de infusão, equipamentos de laboratório e sistemas de imagiologia.",
        },
        {
          question: "É adequada para clínicas pequenas?",
          answer:
            "A PIH escala. Funciona desde clínicas de família até grandes hospitais universitários.",
        },
      ],
      slogan:
        "Cada minuto ganho na administração é mais um minuto para o paciente. A PIH devolve tempo aos profissionais de saúde.",
      website: "https://pih.gsaplatform.co",
      background: pihImage,
      image:
        "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    /* ──────────────────────────────────────────────
       05 · P2P — Plataforma de Procurement e Compras
    ────────────────────────────────────────────── */
    {
      id: "05",
      slug: "p2p",
      title: "P2P",
      icon: ShoppingCart,
      tag: "Procurement e Compras",
      headline: "Compras Inteligentes. Poupança Real.",
      desc: "Processos de compra lentos, aprovações bloqueadas, fornecedores sem controlo, faturas que ninguém sabe onde estão — estas são as dores que a P2P resolve. A Plataforma de Procurement transforma o ciclo completo de aquisição numa experiência rápida, transparente e financeiramente inteligente.",
      whatDo:
        "A P2P cobre todo o ciclo Source-to-Pay: desde a requisição e aprovação de compras, passando pela negociação e gestão de fornecedores, até à receção de mercadorias e processamento de faturas. Compras centralizadas, controladas e otimizadas.",
      whyNeed: [
        {
          title: "Controlo de Gastos",
          description:
            "Visibilidade total sobre o que se compra, quando, a quem e por quanto.",
        },
        {
          title: "Processos Mais Rápidos",
          description:
            "Requisições e aprovações que demoravam dias passam a minutos.",
        },
        {
          title: "Poupança Mensurável",
          description:
            "Negociação centralizada gera poupanças reais e mensuráveis.",
        },
        {
          title: "Menos Erros e Fraude",
          description:
            "Workflows de aprovação e validação tripartida eliminam compras fora de processo.",
        },
      ],
      features: [
        "Requisição e Aprovação",
        "Catálogo e Gestão de Compras",
        "Gestão de Fornecedores",
        "Receção e Validação",
        "Faturação e Pagamentos",
        "Portal de Fornecedores",
        "Aprovação Mobile",
        "Reconciliação Automática",
      ],
      stats: [
        { value: "25%", label: "poupança média em custos de procurement" },
        { value: "60%", label: "redução no tempo de ciclo de aprovação" },
        { value: "85%", label: "redução de compras fora de processo" },
        {
          value: "95%",
          label: "taxa de reconciliação automática fatura-encomenda",
        },
      ],
      faq: [
        {
          question: "A plataforma suporta compras por emergência?",
          answer:
            "Sim. Workflows de exceção com aprovações rápidas para situações de urgência.",
        },
        {
          question: "Podemos integrar com os nossos fornecedores?",
          answer:
            "Sim. Portal de fornecedores para receção de propostas e comunicação direta.",
        },
        {
          question: "Como funciona a aprovação em mobile?",
          answer:
            "A P2P inclui app mobile com notificações push para aprovações de qualquer lugar.",
        },
      ],
      slogan:
        "A melhor compra não é a mais barata. É a que foi certa desde o início. A P2P garante isso em cada processo.",
      website: "https://p2p.gsaplatform.co",
      background: p2pImage,
      image:
        "https://images.pexels.com/photos/6169028/pexels-photo-6169028.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    /* ──────────────────────────────────────────────
       06 · TICKETS — Manutenção de Imóveis e HelpDesk
    ────────────────────────────────────────────── */
    {
      id: "06",
      slug: "tickets",
      title: "TICKETS",
      icon: Ticket,
      tag: "Manutenção e HelpDesk",
      headline: "Problema Resolvido. Rapidamente.",
      desc: "Uma inundação no escritório, a luz que não acende na receção, o ar-condicionado que parou — quem resolve? Com a plataforma de Tickets, tudo chega, é atribuído e resolvido com velocidade e rastreabilidade total.",
      whatDo:
        "Uma plataforma integrada de gestão de tickets para manutenção de imóveis e HelpDesk de TI. Os colaboradores reportam incidentes, o sistema atribui automaticamente, técnicos executam, e a gestão tem visibilidade total.",
      whyNeed: [
        {
          title: "Tempo de Resolução Reduzido",
          description:
            "Atribuição automática e monitorização de SLA garantem que nada fica parado.",
        },
        {
          title: "Visibilidade para a Gestão",
          description:
            "Dashboard com tickets abertos, em progresso e resolvidos em tempo real.",
        },
        {
          title: "Histórico Completo",
          description:
            "Cada imóvel, equipamento ou utilizador tem o seu histórico de intervenções.",
        },
        {
          title: "Avaliação de Prestadores",
          description:
            "Classifique técnicos e fornecedores e tome decisões baseadas em dados.",
        },
      ],
      features: [
        "Manutenção de Imóveis",
        "HelpDesk de TI",
        "Atribuição Automática",
        "Gestão de SLA",
        "Manutenção Preventiva",
        "Dashboard Operacional",
        "App Mobile",
        "Avaliação de Serviço",
      ],
      priorityLevels: [
        { level: "Crítica", sla: "Imediato (0–1h)" },
        { level: "Alta", sla: "4 horas" },
        { level: "Média", sla: "24 horas" },
        { level: "Baixa", sla: "48–72 horas" },
      ],
      stats: [
        { value: "65%", label: "redução no tempo médio de resolução" },
        { value: "80%", label: "menos tickets perdidos ou esquecidos" },
        { value: "90%", label: "satisfação dos utilizadores com a resolução" },
        { value: "100%", label: "rastreabilidade do pedido à resolução" },
      ],
      faq: [
        {
          question: "Os colaboradores podem reportar por onde?",
          answer:
            "Sim. Web portal, app mobile e integração com e-mail — o colaborador escolhe o canal mais conveniente.",
        },
        {
          question: "Podemos definir os nossos próprios fluxos de trabalho?",
          answer:
            "Absolutamente. Cada organização configura os seus próprios fluxos, prioridades, SLAs e escalonamentos.",
        },
        {
          question: "Como funciona a avaliação do serviço?",
          answer:
            "Após resolução, o solicitante classifica o serviço. A avaliação fica registada e disponível nos relatórios de desempenho.",
        },
      ],
      slogan:
        "O ticket que não se perde. O problema que se resolve. O serviço que se mede. Tudo na mesma plataforma.",
      website: "https://tickets.gsaplatform.co",
      background: helpdeskImage,
      image:
        "https://images.pexels.com/photos/7709284/pexels-photo-7709284.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    /* ──────────────────────────────────────────────
       07 · PAP — Plataforma da Automação de Projetos
    ────────────────────────────────────────────── */
    {
      id: "07",
      slug: "pap",
      title: "PAP",
      icon: KanbanSquare,
      tag: "Gestão de Projetos",
      headline: "Entre Projetos Dentro do Prazo. Sempre.",
      desc: "Metas não cumpridas, inúmeras reuniões de ponto de situação sem informação real, recursos sobrecarregados e entregas em atraso — se isto lhe é familiar, a PAP é a mudança de que a sua organização necessita.",
      whatDo:
        "A Plataforma de Automação de Projetos permite planear, executar, monitorizar e reportar projetos de forma estruturada e automatizada. Desde projetos simples de equipa até programas multi-projecto com governança complexa.",
      whyNeed: [
        {
          title: "Visibilidade Real",
          description:
            "A gestão sabe sempre o estado dos projetos sem precisar de reunião de ponto de situação.",
        },
        {
          title: "Menos Trabalho Administrativo",
          description:
            "Automatização cuida das notificações, relatórios e lembretes.",
        },
        {
          title: "Decisões Informadas",
          description:
            "Indicadores como SPI e CPI mostram a saúde real dos projetos.",
        },
        {
          title: "Governança Escalável",
          description:
            "PMOs ganham ferramentas para gerir dezenas de projetos em simultâneo.",
        },
      ],
      features: [
        "Planeamento e WBS/EAP",
        "Automação de Workflows",
        "Dashboard em Tempo Real",
        "Gestão de Equipas",
        "Indicadores KPI",
        "Gestão de Riscos",
        "Relatórios Automáticos",
        "Suporte Agile e Waterfall",
      ],
      stats: [
        { value: "85%", label: "dos projetos geridos com PAP cumprem prazos" },
        { value: "55%", label: "menos tempo em reuniões de ponto de situação" },
        { value: "30%", label: "melhoria no cumprimento do orçamento" },
        {
          value: "70%",
          label: "redução de riscos não identificados atempadamente",
        },
      ],
      faq: [
        {
          question: "A plataforma suporta metodologias ágeis e tradicionais?",
          answer:
            "Sim. A PAP é híbrida e suporta waterfall, agile (Scrum/Kanban) e abordagens híbridas no mesmo programa.",
        },
        {
          question: "Posso integrar com outras ferramentas?",
          answer:
            "Sim. Integração com MS Project, calendário, e-mail e APIs REST.",
        },
        {
          question: "Como funcionam os relatórios automáticos?",
          answer:
            "Configure relatórios que são gerados e distribuídos automaticamente por e-mail em frequência definida.",
        },
      ],
      slogan:
        "O maior risco de um projeto não é falhar. É não saber que está a falhar até ser tarde demais. A PAP garante que nunca chega lá.",
      website: "https://pap.gsaplatform.co",
      background: papImage,
      image:
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    /* ______________________________________________________
       08 | PIOM - Plataforma Integrada de operações mineiras
    ______________________________________________________ */
    {
      id: "08",
      slug: "piom",
      title: "PIOM",
      icon: Pickaxe,
      tag: "Mineração e Operações Mineiras",
      headline: "A Plataforma Integrada de Operações Mineiras",
      desc: "A PIOM reúne numa única plataforma todos os processos críticos de uma operação mineira. Desde a gestão documental, logística, património e manutenção até ao controlo operacional, fiscalização, procurement e estatísticas, tudo funciona de forma integrada para aumentar a eficiência, reduzir custos e apoiar decisões baseadas em dados.",

      whatDo:
        "A Plataforma Integrada de Operações Mineiras (PIOM) centraliza e automatiza toda a gestão operacional de empresas mineiras. Os seus módulos comunicam entre si, permitindo acompanhar em tempo real equipamentos, equipas, produção, contratos, manutenção, logística, documentação, indicadores operacionais e integrações com sistemas externos como ERP, SCADA, GPS e sensores IoT.",

      whyNeed: [
        {
          title: "Operação Totalmente Integrada",
          description:
            "Todos os departamentos operam na mesma plataforma, eliminando silos de informação.",
        },
        {
          title: "Decisões Baseadas em Dados",
          description:
            "Dashboards e indicadores estatísticos permitem acompanhar a operação em tempo real.",
        },
        {
          title: "Automação Operacional",
          description:
            "Automatiza processos, reduz tarefas manuais e melhora a produtividade das equipas.",
        },
        {
          title: "Integração com Equipamentos",
          description:
            "Comunicação com sensores, GPS, sistemas SCADA/MES e ERP para recolha automática de dados.",
        },
        {
          title: "Conformidade com Normas Internacionais",
          description:
            "Desenvolvida seguindo normas ISO/IEC e requisitos regulatórios do setor mineiro.",
        },
        {
          title: "Escalabilidade",
          description:
            "Adaptável a pequenas, médias ou grandes operações mineiras com parametrização completa.",
        },
      ],

      features: [
        "Gestão Documental",
        "Gestão de Contratos",
        "Gestão de Projetos",
        "Fiscalização",
        "Procurement",
        "Gestão de Equipas",
        "Património",
        "Logística",
        "Manutenção",
        "Sistema de Tickets",
        "Dashboards Estatísticos",
        "Integração ERP",
        "Integração GPS",
        "Integração SCADA/MES",
        "Integração IoT",
        "Parametrização Completa",
      ],

      stats: [
        {
          value: "100%",
          label: "integração entre os principais processos mineiros",
        },
        {
          value: "24/7",
          label: "monitorização contínua das operações",
        },
        {
          value: "360°",
          label: "visibilidade operacional sobre toda a mina",
        },
        {
          value: "1",
          label: "plataforma para centralizar toda a operação mineira",
        },
      ],

      faq: [
        {
          question: "A PIOM pode integrar com sistemas já existentes?",
          answer:
            "Sim. A plataforma integra-se com ERP, sistemas SCADA/MES, GPS, sensores IoT e outras soluções utilizadas na operação mineira.",
        },
        {
          question:
            "É possível adaptar a plataforma à realidade da minha mina?",
          answer:
            "Sim. A PIOM é totalmente parametrizável, permitindo configurar processos, equipamentos, turnos, áreas operacionais e regras específicas da organização.",
        },
        {
          question: "A plataforma segue normas internacionais?",
          answer:
            "Sim. Foi desenvolvida com base em normas ISO/IEC aplicáveis à qualidade, segurança da informação, gestão de projetos, geoinformação e operações industriais, além das exigências regulatórias do setor mineiro em Angola.",
        },
      ],

      slogan: "Uma única plataforma. Toda a operação mineira sob controlo.",

      website: "https://piom.gsaplatform.co",

      background: piomImage,

      image:
        "https://images.pexels.com/photos/162568/mining-excavator-coal-mining-162568.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
