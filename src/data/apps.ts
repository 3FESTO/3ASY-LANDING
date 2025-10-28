export interface App {
  id: string;
  icon: string;
  title: string;
  subtitle: {
    en: string;
    it: string;
  };
  description: {
    en: string;
    it: string;
  };
  features: {
    en: string[];
    it: string[];
  };
  ctaText: {
    en: string;
    it: string;
  };
  url: string;
}

export const apps: App[] = [
  {
    id: '3asyhr',
    icon: '👥',
    title: '3ASYHR',
    subtitle: {
      en: 'SMART HR SOLUTIONS',
      it: 'SMART HR SOLUTIONS'
    },
    description: {
      en: 'Intelligent human resources management with automatic calendar timesheets, team lead dashboard, advanced RBAC and Azure AD integration.',
      it: 'Gestione intelligente delle risorse umane con timesheet automatici da calendario, dashboard team lead, RBAC avanzato e integrazione Azure AD.'
    },
    features: {
      en: [
        'Automatic Outlook Calendar export',
        'Team Lead Dashboard with approvals',
        'Supabase PostgreSQL integration',
        'Role-based access control'
      ],
      it: [
        'Export da Outlook Calendar automatico',
        'Dashboard Team Lead con approvazioni',
        'Integrazione Supabase PostgreSQL',
        'Role-based access control'
      ]
    },
    ctaText: {
      en: 'ACCESS THE PLATFORM',
      it: 'ACCEDI ALLA PIATTAFORMA'
    },
    url: 'https://juno-hr.3asy.app/'
  },
  {
    id: '3asywhistle',
    icon: '🤫',
    title: '3ASYWHISTLE',
    subtitle: {
      en: 'WHISTLEBLOWING BLOCKCHAIN-BASED',
      it: 'WHISTLEBLOWING BLOCKCHAIN-BASED'
    },
    description: {
      en: 'First Italian blockchain-protected whistleblowing platform, compliant with D.Lgs. 24/2023 and EU Directive 2019/1937.',
      it: 'Prima piattaforma italiana di whistleblowing protetta da blockchain, conforme D.Lgs. 24/2023 e Direttiva UE 2019/1937.'
    },
    features: {
      en: [
        'Blockchain-guaranteed anonymity',
        'End-to-end encrypted communications',
        '5%-25% referral system',
        'European regulatory compliance'
      ],
      it: [
        'Anonimato garantito da blockchain',
        'Comunicazioni cifrate end-to-end',
        'Sistema referral 5%-25%',
        'Conformità normativa europea'
      ]
    },
    ctaText: {
      en: 'VISIT THE PLATFORM',
      it: 'VISITA LA PIATTAFORMA'
    },
    url: 'https://3asywhistle.it/'
  },
  {
    id: '3asymodeling',
    icon: '🎨',
    title: '3ASYMODELING',
    subtitle: {
      en: 'AI-POWERED 3D GENERATION',
      it: 'AI-POWERED 3D GENERATION'
    },
    description: {
      en: 'Transform concepts into 3D models through advanced AI. Text-to-3D, Image-to-3D, multiple exports and NFT minting.',
      it: 'Trasforma concetti in modelli 3D attraverso AI avanzata. Text-to-3D, Image-to-3D, export multipli e NFT minting.'
    },
    features: {
      en: [
        'AI Text/Image-to-3D generation',
        'Interactive 3D viewer',
        'GLB, STL, OBJ export',
        'Blockchain NFT minting'
      ],
      it: [
        'Generazione AI Text/Image-to-3D',
        'Visualizzatore 3D interattivo',
        'Export GLB, STL, OBJ',
        'NFT blockchain minting'
      ]
    },
    ctaText: {
      en: 'EXPLORE THE PLATFORM',
      it: 'ESPLORA LA PIATTAFORMA'
    },
    url: 'https://3asymodeling.com/'
  },
  {
    id: '3asytrading',
    icon: '📈',
    title: '3ASYTRADING',
    subtitle: {
      en: 'P2P STRATEGY MARKETPLACE',
      it: 'P2P STRATEGY MARKETPLACE'
    },
    description: {
      en: 'Peer-to-peer marketplace for algorithmic trading strategies. Share, discover and use quantitative strategies verified by the community.',
      it: 'Marketplace peer-to-peer per strategie di trading algoritmico. Condividi, scopri e utilizza strategie quantitative verificate dalla community.'
    },
    features: {
      en: [
        'Verified quantitative strategies',
        'Real-time multi-timeframe dashboard',
        'Performance tracking and metrics',
        'P2P strategist community'
      ],
      it: [
        'Strategie quantitative verificate',
        'Dashboard real-time multi-timeframe',
        'Performance tracking e metriche',
        'Community P2P di strategist'
      ]
    },
    ctaText: {
      en: 'EXPLORE STRATEGIES',
      it: 'ESPLORA LE STRATEGIE'
    },
    url: 'https://3asytrading.com/'
  },
  {
    id: '3asywealth',
    icon: '💰',
    title: '3ASYWEALTH',
    subtitle: {
      en: 'WEALTH MANAGEMENT PLATFORM',
      it: 'WEALTH MANAGEMENT PLATFORM'
    },
    description: {
      en: 'Advanced platform for asset and financial management. Portfolio tracking, analytics and professional reporting.',
      it: 'Piattaforma avanzata per la gestione patrimoniale e finanziaria. Portfolio tracking, analytics e reportistica professionale.'
    },
    features: {
      en: [
        'Integrated portfolio management',
        'Advanced analytics and reporting',
        'Customizable dashboard',
        'Export and automations'
      ],
      it: [
        'Portfolio management integrato',
        'Analytics e reportistica avanzata',
        'Dashboard personalizzabile',
        'Export e automazioni'
      ]
    },
    ctaText: {
      en: 'MANAGE WEALTH',
      it: 'GESTISCI IL PATRIMONIO'
    },
    url: 'https://wealth.3asy.app/'
  }
];
