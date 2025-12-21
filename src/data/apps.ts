export interface App {
  id: string;
  icon: string;
  title: string;
  author: string;
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
    id: '3asyhr',
    icon: '👥',
    title: '3ASYHR',
    author: 'MicheleMikyMonti',
    subtitle: {
      en: 'SMART HR SOLUTIONS',
      it: 'SMART HR SOLUTIONS'
    },
    description: {
      en: 'Say goodbye to manual timesheets. Auto-export from Outlook Calendar, 8h validation, Excel reports ready for payroll. Zero config, works in 10 seconds.',
      it: 'Addio timesheet manuali. Export automatico da Outlook Calendar, validazione 8h, report Excel pronti per la busta paga. Zero config, funziona in 10 secondi.'
    },
    features: {
      en: [
        'Auto-detect from Outlook Calendar',
        '8h validation with smart suggestions',
        'Excel ready for HR/payroll',
        'Team Lead approval dashboard'
      ],
      it: [
        'Auto-rileva da Outlook Calendar',
        'Validazione 8h con suggerimenti smart',
        'Excel pronto per HR/buste paga',
        'Dashboard approvazione Team Lead'
      ]
    },
    ctaText: {
      en: 'TRY IT FREE',
      it: 'PROVALO GRATIS'
    },
    url: 'https://juno-hr.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '⏰ Zero setup - Ready in 10 seconds',
          '📅 Reads "Day Activity" from Outlook automatically',
          '✅ Guided 8h completion with suggestions',
          '📊 Cost centers and leaves pre-separated for HR',
          '🇮🇹 Italian holidays included (even San Petronio!)'
        ],
        it: [
          '⏰ Zero setup - Pronto in 10 secondi',
          '📅 Legge "Attività del giorno" da Outlook automaticamente',
          '✅ Completamento guidato 8h con suggerimenti',
          '📊 Centri di costo e permessi già separati per HR',
          '🇮🇹 Festività italiane incluse (anche San Petronio!)'
        ]
      },
      whyItMatters: {
        en: 'Built for real employees who hate filling timesheets. Connect Microsoft account, export calendar, send to HR. Done. From €9.99/month or €99.99/year. Enterprise pricing available.',
        it: 'Pensato per dipendenti veri che odiano compilare timesheet. Connetti account Microsoft, esporta calendario, invia a HR. Fatto. Da €9,99/mese o €99,99/anno. Prezzi enterprise disponibili.'
      }
    }
  },
  {
    id: '3asymodeling',
    icon: '🎨',
    title: '3ASYMODELING',
    author: 'MicheleMikyMonti',
    subtitle: {
      en: 'AI-POWERED 3D GENERATION',
      it: 'AI-POWERED 3D GENERATION'
    },
    description: {
      en: 'Describe your idea or upload an image → get a professional 3D model in minutes. No technical skills needed. Export or mint as NFT.',
      it: 'Descrivi la tua idea o carica un\'immagine → ottieni un modello 3D professionale in minuti. Nessuna competenza tecnica. Export o mint come NFT.'
    },
    features: {
      en: [
        'Text-to-3D: describe and create',
        'Image-to-3D: any photo becomes 3D',
        'Export GLB, STL, OBJ for printing',
        'Mint NFT directly on blockchain'
      ],
      it: [
        'Text-to-3D: descrivi e crea',
        'Image-to-3D: qualsiasi foto diventa 3D',
        'Export GLB, STL, OBJ per stampa',
        'Mint NFT direttamente su blockchain'
      ]
    },
    ctaText: {
      en: 'CREATE NOW',
      it: 'CREA ORA'
    },
    url: 'https://3asymodeling.com/'
  },
  {
    id: '3asynutry',
    icon: '🥗',
    title: '3ASYNUTRY',
    author: 'NEW USER',
    subtitle: {
      en: 'FOR NUTRITIONISTS & PATIENTS',
      it: 'PER NUTRIZIONISTI E PAZIENTI'
    },
    description: {
      en: 'Professional nutrition management platform. Nutritionists create personalized meal plans, patients follow them effortlessly. Real-time sync, compliance tracking, and results that speak for themselves.',
      it: 'Piattaforma professionale per la gestione nutrizionale. I nutrizionisti creano piani alimentari personalizzati, i pazienti li seguono senza sforzo. Sync in tempo reale, tracking dell\'aderenza e risultati che parlano da soli.'
    },
    features: {
      en: [
        '👨‍⚕️ Pro dashboard for nutritionists',
        '📱 Simple app for patients',
        '📊 Compliance & progress analytics',
        '🔄 Real-time plan updates'
      ],
      it: [
        '👨‍⚕️ Dashboard pro per nutrizionisti',
        '📱 App semplice per pazienti',
        '📊 Analytics aderenza e progressi',
        '🔄 Aggiornamenti piani in tempo reale'
      ]
    },
    ctaText: {
      en: 'COMING SOON',
      it: 'COMING SOON'
    },
    url: '#',
    isComingSoon: true
  },
  {
    id: '3asyperiod',
    icon: '🩸',
    title: '3ASYPERIOD',
    author: 'YURI',
    subtitle: {
      en: 'CYCLE TRACKING FOR COUPLES',
      it: 'CYCLE TRACKING PER COPPIE'
    },
    description: {
      en: 'Revolutionary dual-view cycle tracking. Her dashboard: complete and detailed. His dashboard: 8 essential cards to understand and support her better.',
      it: 'Tracking del ciclo con dual-view rivoluzionaria. Dashboard lei: completa e dettagliata. Dashboard lui: 8 card essenziali per capirla e supportarla al meglio.'
    },
    features: {
      en: [
        'Her View 👩: complete analytics',
        'Him View 👨: 8 essential cards',
        'Behavioral suggestions by phase',
        'Gift ideas at the right time'
      ],
      it: [
        'Her View 👩: analytics complete',
        'Him View 👨: 8 card essenziali',
        'Suggerimenti comportamentali per fase',
        'Idee regalo al momento giusto'
      ]
    },
    ctaText: {
      en: 'TRY IT NOW',
      it: 'PROVALO ORA'
    },
    url: 'https://period.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          '🩸 Menstrual Phase: Maximum cuddle mode activated',
          '🌱 Follicular Phase: Energy rising, adventure time',
          '🌟 Ovulation: Peak fertility alert',
          '🍂 Luteal Phase: PMS radar on, tread carefully'
        ],
        it: [
          '🩸 Fase Mestruale: Modalità coccole al massimo',
          '🌱 Fase Follicolare: Energia in crescita, tempo di avventure',
          '🌟 Ovulazione: Alert picco fertilità',
          '🍂 Fase Luteale: Radar PMS attivo, muoviti con cautela'
        ]
      },
      whyItMatters: {
        en: 'Built for real couples. The "Him View" gives partners exactly what they need: current phase, mood tips, gift suggestions, and a countdown to know when to bring chocolate. Ironic but genuinely useful. No more "I didn\'t know!" excuses.',
        it: 'Pensata per coppie vere. La "Him View" dà ai partner esattamente ciò che serve: fase attuale, consigli sul mood, suggerimenti regalo e countdown per sapere quando portare il cioccolato. Ironico ma genuinamente utile. Niente più scuse "non lo sapevo!".'
      }
    }
  },
  {
    id: '3asytrading',
    icon: '📈',
    title: '3ASYTRADING',
    author: 'MicheleMikyMonti',
    subtitle: {
      en: 'P2P STRATEGY MARKETPLACE',
      it: 'P2P STRATEGY MARKETPLACE'
    },
    description: {
      en: 'Marketplace where expert traders share verified strategies and you follow them with real-time Telegram alerts. Creator code stays private.',
      it: 'Marketplace dove trader esperti condividono strategie verificate e tu le segui con alert Telegram in tempo reale. Il codice dei creator resta privato.'
    },
    features: {
      en: [
        'Verified strategies with public performance',
        'Real-time Telegram alerts via webhook',
        'Creator code protected (serverless)',
        '🔥 Beta: Early Bird -50% until 31/12'
      ],
      it: [
        'Strategie verificate con performance pubbliche',
        'Alert Telegram real-time via webhook',
        'Codice creator protetto (serverless)',
        '🔥 Beta: Early Bird -50% fino al 31/12'
      ]
    },
    ctaText: {
      en: 'JOIN BETA',
      it: 'ENTRA IN BETA'
    },
    url: 'https://3asytrading.com/'
  },
  {
    id: '3asywealth',
    icon: '💰',
    title: '3ASYWEALTH',
    author: 'MicheleMikyMonti',
    subtitle: {
      en: '100% PRIVATE WEALTH TRACKING',
      it: '100% PRIVATE WEALTH TRACKING'
    },
    description: {
      en: 'Track your entire wealth with TOTAL privacy. All data stays in your browser — no servers, no accounts, no registration. Free forever.',
      it: 'Traccia tutto il tuo patrimonio con privacy TOTALE. Tutti i dati restano nel tuo browser — nessun server, nessun account, nessuna registrazione. Gratis per sempre.'
    },
    features: {
      en: [
        '100% localStorage — nothing leaves your device',
        'No account, no registration, no credit card',
        'Import/Export CSV & JSON',
        'Open Source — verify the code yourself'
      ],
      it: [
        '100% localStorage — niente lascia il tuo dispositivo',
        'Nessun account, registrazione, carta di credito',
        'Import/Export CSV & JSON',
        'Open Source — verifica tu stesso il codice'
      ]
    },
    ctaText: {
      en: 'START NOW — IT\'S FREE',
      it: 'INIZIA ORA — È GRATIS'
    },
    url: 'https://wealth.3asy.app/'
  },
  {
    id: '3asywhistle',
    icon: '🤫',
    title: '3ASYWHISTLE',
    author: 'UNKNOWN',
    subtitle: {
      en: 'WHISTLEBLOWING BLOCKCHAIN-BASED',
      it: 'WHISTLEBLOWING BLOCKCHAIN-BASED'
    },
    description: {
      en: 'First Italian blockchain-protected whistleblowing platform. 100% compliant with D.Lgs. 24/2023. Mandatory for companies with 50+ employees.',
      it: 'Prima piattaforma italiana di whistleblowing protetta da blockchain. 100% conforme D.Lgs. 24/2023. Obbligatoria per aziende con 50+ dipendenti.'
    },
    features: {
      en: [
        'Absolute anonymity via blockchain hash',
        'End-to-end encrypted communications',
        'Unique tracking code for reports',
        'Smart referral: 5% employees, 25% freelance'
      ],
      it: [
        'Anonimato assoluto via hash blockchain',
        'Comunicazioni cifrate end-to-end',
        'Codice univoco per tracciare segnalazioni',
        'Referral smart: 5% dipendenti, 25% freelance'
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
          '📥 Submit completely anonymous report',
          '🔐 Receive unique tracking code',
          '📍 Monitor investigation status',
          '⚖️ 100% EU Directive 2019/1937 compliant',
          '🏢 Required for 50+ employee companies'
        ],
        it: [
          '📥 Compila segnalazione completamente anonima',
          '🔐 Ricevi codice univoco di tracciamento',
          '📍 Monitora lo stato dell\'indagine',
          '⚖️ 100% conforme Direttiva UE 2019/1937',
          '🏢 Obbligatoria per aziende 50+ dipendenti'
        ]
      },
      whyItMatters: {
        en: 'Legal compliance is not optional. Since 2023, companies with 50+ employees MUST have a whistleblowing channel. We offer blockchain-level security at accessible prices. The referral becomes your first anonymous report.',
        it: 'La compliance legale non è opzionale. Dal 2023, aziende con 50+ dipendenti DEVONO avere un canale whistleblowing. Offriamo sicurezza blockchain a prezzi accessibili. Il referral diventa la tua prima segnalazione anonima.'
      }
    }
  }
];
