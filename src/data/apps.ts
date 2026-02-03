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
    id: '3asybuilder',
    icon: '🏗️',
    title: '3ASYBUILDER',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    subtitle: {
      en: 'AI WEBSITE BUILDER',
      it: 'AI WEBSITE BUILDER'
    },
    description: {
      en: 'Describe your business → get a professional website. No coding required.',
      it: 'Descrivi la tua attività → ottieni un sito professionale. Zero codice.'
    },
    features: {
      en: [
        '🌐 10 languages supported',
        '📧 Contact forms & booking widgets',
        '🚀 One-click publish'
      ],
      it: [
        '🌐 10 lingue supportate',
        '📧 Form contatto & widget prenotazioni',
        '🚀 Pubblica con un click'
      ]
    },
    ctaText: {
      en: 'START BUILDING',
      it: 'INIZIA A COSTRUIRE'
    },
    url: 'https://builder.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '🤖 AI builds from conversation',
          '📊 Google Analytics included',
          '✨ Interactive gallery'
        ],
        it: [
          '🤖 AI costruisce da conversazione',
          '📊 Google Analytics incluso',
          '✨ Galleria interattiva'
        ]
      },
      whyItMatters: {
        en: 'Perfect for restaurants, shops, freelancers. From idea to live site in minutes.',
        it: 'Perfetto per ristoranti, negozi, freelancer. Dall\'idea al sito online in minuti.'
      }
    }
  },
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
    id: '3asymodeling',
    icon: '🎨',
    title: '3ASYMODELING',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    subtitle: {
      en: 'AI 3D GENERATION',
      it: 'AI 3D GENERATION'
    },
    description: {
      en: 'Text or image → professional 3D model in minutes. Export or mint NFT.',
      it: 'Testo o immagine → modello 3D professionale in minuti. Export o mint NFT.'
    },
    features: {
      en: [
        '✍️ Text-to-3D',
        '📸 Image-to-3D',
        '📦 GLB, STL, OBJ export'
      ],
      it: [
        '✍️ Text-to-3D',
        '📸 Image-to-3D',
        '📦 Export GLB, STL, OBJ'
      ]
    },
    ctaText: {
      en: 'CREATE NOW',
      it: 'CREA ORA'
    },
    url: 'https://3asymodeling.com/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '🎨 Professional quality',
          '🖨️ 3D print ready',
          '💎 NFT minting'
        ],
        it: [
          '🎨 Qualità professionale',
          '🖨️ Pronto per stampa 3D',
          '💎 Mint NFT'
        ]
      },
      whyItMatters: {
        en: 'From idea to printable model in minutes. By the ANY3DP team.',
        it: 'Dall\'idea al modello stampabile in minuti. Dal team ANY3DP.'
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
    id: '3asytrading',
    icon: '📈',
    title: '3ASYTRADING',
    author: '0zone',
    appType: 'WebApp',
    subtitle: {
      en: 'P2P STRATEGY MARKETPLACE',
      it: 'MARKETPLACE STRATEGIE P2P'
    },
    description: {
      en: 'Follow verified trading strategies with real-time Telegram alerts.',
      it: 'Segui strategie trading verificate con alert Telegram real-time.'
    },
    features: {
      en: [
        '📊 Verified performance',
        '📱 Telegram alerts',
        '🔒 Code protected'
      ],
      it: [
        '📊 Performance verificate',
        '📱 Alert Telegram',
        '🔒 Codice protetto'
      ]
    },
    ctaText: {
      en: 'JOIN BETA',
      it: 'ENTRA IN BETA'
    },
    url: 'https://3asytrading.com/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '📊 Public track record',
          '💰 Fair revenue sharing',
          '🔥 Early Bird -50%'
        ],
        it: [
          '📊 Track record pubblico',
          '💰 Revenue sharing equo',
          '🔥 Early Bird -50%'
        ]
      },
      whyItMatters: {
        en: 'Follow experts without giving up capital control.',
        it: 'Segui esperti senza cedere il controllo del capitale.'
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
    id: '3asywhistle',
    icon: '🤫',
    title: '3ASYWHISTLE',
    author: 'UNKNOWN',
    appType: 'WebApp',
    subtitle: {
      en: 'BLOCKCHAIN WHISTLEBLOWING',
      it: 'WHISTLEBLOWING BLOCKCHAIN'
    },
    description: {
      en: 'Blockchain-protected whistleblowing. 100% compliant D.Lgs. 24/2023.',
      it: 'Whistleblowing protetto da blockchain. 100% conforme D.Lgs. 24/2023.'
    },
    features: {
      en: [
        '🔐 Absolute anonymity',
        '🔒 E2E encrypted',
        '⚖️ EU compliant'
      ],
      it: [
        '🔐 Anonimato assoluto',
        '🔒 Cifrato E2E',
        '⚖️ Conforme EU'
      ]
    },
    ctaText: {
      en: 'LEARN MORE',
      it: 'SCOPRI DI PIÙ'
    },
    url: 'https://3asywhistle.it/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '📥 Anonymous reports',
          '🔐 Unique tracking code',
          '🏢 Required for 50+ employees'
        ],
        it: [
          '📥 Segnalazioni anonime',
          '🔐 Codice tracciamento unico',
          '🏢 Obbligatorio per 50+ dipendenti'
        ]
      },
      whyItMatters: {
        en: 'Legal compliance since 2023. Blockchain security, accessible prices.',
        it: 'Compliance legale dal 2023. Sicurezza blockchain, prezzi accessibili.'
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
