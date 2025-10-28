export interface App {
  id: string;
  icon: string;
  title: string;
  description: {
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
    description: {
      en: 'Complete HR management: recruitment, onboarding, payroll, and performance tracking in one platform',
      it: 'Gestione HR completa: recruiting, onboarding, payroll e valutazione performance in un\'unica piattaforma'
    },
    url: 'https://3asyhr.com'
  },
  {
    id: '3asywhistle',
    icon: '🤫',
    title: '3ASYWHISTLE',
    description: {
      en: 'Secure whistleblowing platform with guaranteed anonymity and legal compliance',
      it: 'Piattaforma di whistleblowing sicura con anonimato garantito e compliance normativa'
    },
    url: 'https://3asywhistle.com'
  },
  {
    id: '3asymodeling',
    icon: '🎨',
    title: '3ASYMODELING',
    description: {
      en: 'Advanced 3D modeling tools for creating immersive digital experiences',
      it: 'Strumenti avanzati di modellazione 3D per creare esperienze digitali immersive'
    },
    url: 'https://3asymodeling.com'
  },
  {
    id: '3asychannelmanager',
    icon: '🏠',
    title: '3ASYCHANNELMANAGER',
    description: {
      en: 'Multi-channel property management system for vacation rentals and hospitality',
      it: 'Sistema di gestione multi-canale per affitti turistici e hospitality'
    },
    url: 'https://3asychannelmanager.com'
  },
  {
    id: '3asywealth',
    icon: '💰',
    title: '3ASYWEALTH',
    description: {
      en: 'Intelligent wealth management platform for investment tracking and financial planning',
      it: 'Piattaforma intelligente di wealth management per tracking investimenti e pianificazione finanziaria'
    },
    url: 'https://3asywealth.com'
  }
];
