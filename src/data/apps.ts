export interface App {
  id: string;
  icon: string;
  title: string;
  author: string;
  appType: string;
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
  isComingSoon?: boolean;
  hasDetails?: boolean;
  details?: {
    highlights: {
      en: string[];
      it: string[];
    };
    whyItMatters: {
      en: string;
      it: string;
    };
  };
}

export const apps: App[] = [
  {
    id: '3asygit',
    icon: '🎮',
    title: '3ASYGIT',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    subtitle: {
      en: 'GITHUB GAMIFICATION',
      it: 'GITHUB GAMIFICATION'
    },
    description: {
      en: 'Turn your GitHub contributions into 3D art and audio.',
      it: 'Trasforma le tue contribuzioni GitHub in arte 3D e audio.'
    },
    features: {
      en: [
        '🎨 3D contribution visualization',
        '🎵 Audio from commits',
        '🏆 Gamified stats'
      ],
      it: [
        '🎨 Visualizzazione 3D contribuzioni',
        '🎵 Audio dai commit',
        '🏆 Statistiche gamificate'
      ]
    },
    ctaText: {
      en: 'GAMIFY NOW',
      it: 'GAMIFY NOW'
    },
    url: 'https://git.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '🎨 Stunning 3D visuals',
          '🎵 Unique audio patterns',
          '🏆 Shareable achievements'
        ],
        it: [
          '🎨 Visual 3D mozzafiato',
          '🎵 Pattern audio unici',
          '🏆 Achievement condivisibili'
        ]
      },
      whyItMatters: {
        en: 'Showcase your coding activity in a unique, visual way.',
        it: 'Mostra la tua attività di coding in modo unico e visivo.'
      }
    }
  },
  {
    id: '3asyhr',
    icon: '👥',
    title: '3ASYHR',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    subtitle: {
      en: 'CALENDAR → HR AGENT',
      it: 'CALENDARIO → HR AGENT'
    },
    description: {
      en: 'Automatic timesheets & cost analysis from your calendar. Zero data entry.',
      it: 'Timesheet automatici e analisi costi dal calendario. Zero data entry.'
    },
    features: {
      en: [
        '📅 Microsoft 365 / Google Cal',
        '💰 Real-time budget visibility',
        '🏢 Multi-company ready'
      ],
      it: [
        '📅 Microsoft 365 / Google Cal',
        '💰 Visibilità budget real-time',
        '🏢 Multi-società'
      ]
    },
    ctaText: {
      en: 'REQUEST DEMO',
      it: 'RICHIEDI DEMO'
    },
    url: 'https://juno-hr.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '⏰ -85% timesheet time',
          '📈 KPIs per resource',
          '🔐 Enterprise security'
        ],
        it: [
          '⏰ -85% tempo timesheet',
          '📈 KPI per risorsa',
          '🔐 Sicurezza enterprise'
        ]
      },
      whyItMatters: {
        en: 'In production with JUNO.AM — 30+ resources, 3 companies.',
        it: 'In produzione con JUNO.AM — 30+ risorse, 3 società.'
      }
    }
  },
  {
    id: '3asycad',
    icon: '🎨',
    title: '3ASYCAD',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    subtitle: {
      en: '3D PRINTABILITY ENGINE',
      it: 'ENGINE DI STAMPABILITÀ 3D'
    },
    description: {
      en: 'Inspect, repair, lattice, nesting — from upload to build-ready parts. Browser-based, no install.',
      it: 'Ispezione, riparazione, lattice, nesting — dal caricamento al pezzo pronto. Browser-based, nessuna installazione.'
    },
    features: {
      en: [
        '🔍 Printability analysis & auto-repair',
        '🧬 TPMS lattice generation',
        '📦 Nesting & AI assistant'
      ],
      it: [
        '🔍 Analisi stampabilità & auto-repair',
        '🧬 Generazione lattice TPMS',
        '📦 Nesting & assistente AI'
      ]
    },
    ctaText: {
      en: 'TRY FREE',
      it: 'PROVA GRATIS'
    },
    url: 'https://cad.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '🌐 Browser-based — no install needed',
          '🔧 Printability score & 3-pass auto-repair',
          '🧬 TPMS lattice (Gyroid, Schwarz P, Diamond, IWP)'
        ],
        it: [
          '🌐 Browser-based — nessuna installazione',
          '🔧 Score di stampabilità & auto-repair a 3 passaggi',
          '🧬 Lattice TPMS (Gyroid, Schwarz P, Diamond, IWP)'
        ]
      },
      whyItMatters: {
        en: 'From upload to build-ready in minutes. Built for AM professionals — service bureaus, OEMs, engineers.',
        it: 'Dal caricamento al pezzo pronto in minuti. Pensato per professionisti AM — service bureau, OEM, ingegneri.'
      }
    }
  },
  {
    id: '3asymusic',
    icon: '🎵',
    title: '3ASYMUSIC',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    subtitle: {
      en: 'AI SONG GENERATION',
      it: 'GENERAZIONE CANZONI AI'
    },
    description: {
      en: 'Create original songs with AI. Describe the vibe, get music.',
      it: 'Crea canzoni originali con AI. Descrivi il mood, ottieni musica.'
    },
    features: {
      en: [
        '🤖 AI-powered generation',
        '🎶 Multiple genres',
        '💾 Download & share'
      ],
      it: [
        '🤖 Generazione AI',
        '🎶 Generi multipli',
        '💾 Scarica e condividi'
      ]
    },
    ctaText: {
      en: 'CREATE MUSIC',
      it: 'CREA MUSICA'
    },
    url: 'https://music.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '🤖 Text-to-music AI',
          '🎶 Any genre & style',
          '💾 Export ready'
        ],
        it: [
          '🤖 AI text-to-music',
          '🎶 Qualsiasi genere e stile',
          '💾 Pronto per export'
        ]
      },
      whyItMatters: {
        en: 'No musical skills needed. Describe and create.',
        it: 'Nessuna competenza musicale. Descrivi e crea.'
      }
    }
  },
  {
    id: '3asywealth',
    icon: '💰',
    title: '3ASYWEALTH',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    subtitle: {
      en: '100% PRIVATE WEALTH TRACKING',
      it: 'WEALTH TRACKING 100% PRIVATO'
    },
    description: {
      en: 'Track wealth with total privacy. All data in your browser. Free forever.',
      it: 'Traccia il patrimonio con privacy totale. Dati nel browser. Gratis sempre.'
    },
    features: {
      en: [
        '🔒 100% localStorage',
        '🚫 No account needed',
        '💻 Open Source'
      ],
      it: [
        '🔒 100% localStorage',
        '🚫 Nessun account',
        '💻 Open Source'
      ]
    },
    ctaText: {
      en: 'START FREE',
      it: 'INIZIA GRATIS'
    },
    url: 'https://wealth.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '🔒 Nothing leaves your device',
          '📥 Import/Export CSV & JSON',
          '💰 Free forever'
        ],
        it: [
          '🔒 Niente lascia il dispositivo',
          '📥 Import/Export CSV & JSON',
          '💰 Gratis per sempre'
        ]
      },
      whyItMatters: {
        en: 'Your wealth data stays yours. We never see it.',
        it: 'I tuoi dati patrimoniali restano tuoi. Non li vediamo mai.'
      }
    }
  },
  {
    id: '3asyresearch',
    icon: '🔬',
    title: '3ASYRESEARCH',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    subtitle: {
      en: 'RESEARCH → INTERACTIVE PLAY',
      it: 'RICERCA → GIOCO INTERATTIVO'
    },
    description: {
      en: 'Complex research papers → interactive experiences and usable tools.',
      it: 'Paper complessi → esperienze interattive e strumenti utilizzabili.'
    },
    features: {
      en: [
        '📝 Digestible summaries',
        '🎮 Interactive playgrounds',
        '🧪 Hands-on tools'
      ],
      it: [
        '📝 Riassunti accessibili',
        '🎮 Playground interattivi',
        '🧪 Strumenti hands-on'
      ]
    },
    ctaText: {
      en: 'EXPLORE',
      it: 'ESPLORA'
    },
    url: 'https://research.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '📝 Papers made simple',
          '🎮 Try formulas live',
          '🔬 Real research cases'
        ],
        it: [
          '📝 Paper semplificati',
          '🎮 Prova formule live',
          '🔬 Casi di ricerca reali'
        ]
      },
      whyItMatters: {
        en: 'From TPMS generators to quantum ML — experience research, don\'t just read it.',
        it: 'Dai generatori TPMS al quantum ML — vivi la ricerca, non solo leggerla.'
      }
    }
  },
  {
    id: '3asysocial',
    icon: '📱',
    title: '3ASYSOCIAL',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    subtitle: {
      en: 'SOCIAL CONTENT IN SECONDS',
      it: 'CONTENUTI SOCIAL IN SECONDI'
    },
    description: {
      en: '3 questions → posts for Instagram, TikTok, X, LinkedIn, YouTube.',
      it: '3 domande → post per Instagram, TikTok, X, LinkedIn, YouTube.'
    },
    features: {
      en: [
        '⚡ 3 questions → 5 platforms',
        '🎯 3 free generations',
        '✨ Ready to post'
      ],
      it: [
        '⚡ 3 domande → 5 piattaforme',
        '🎯 3 generazioni gratis',
        '✨ Pronto da postare'
      ]
    },
    ctaText: {
      en: 'CREATE NOW',
      it: 'CREA ORA'
    },
    url: 'https://social.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '📲 All major platforms',
          '🚫 No signup required',
          '🤖 AI-powered'
        ],
        it: [
          '📲 Tutte le piattaforme',
          '🚫 Nessuna registrazione',
          '🤖 Powered by AI'
        ]
      },
      whyItMatters: {
        en: 'Stop staring at blank screens. Content ready in seconds.',
        it: 'Basta schermi bianchi. Contenuti pronti in secondi.'
      }
    }
  }
];
