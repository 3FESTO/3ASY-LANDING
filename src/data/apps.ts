export type AppStatus = 'production' | 'vision' | 'pilot' | 'early';

export interface App {
  id: string;
  icon: string;
  title: string;
  author: string;
  appType: string;
  status: AppStatus;
  tag: {
    en: string;
    it: string;
  };
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
    appType: 'WebApp',
    status: 'production',
    tag: {
      en: 'IN PRODUCTION',
      it: 'IN PRODUZIONE'
    },
    subtitle: {
      en: 'CALENDAR → HR AGENT',
      it: 'CALENDARIO → HR AGENT'
    },
    description: {
      en: 'Born from our own payroll: dozens of people, contractors and resources to manage. So we built it — automatic timesheets and cost analysis straight from the calendar. Zero data entry. Now it runs every day.',
      it: 'Nato dalle nostre buste paga: decine di persone, collaboratori e risorse da gestire. Così lo abbiamo costruito — timesheet automatici e analisi costi dal calendario. Zero data entry. Oggi gira ogni giorno.'
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
    url: 'https://hr.3asy.app/',
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
        en: 'Our most mature product. In production with JUNO.AM — 30+ resources, 3 companies. We built it for ourselves; now it could pay off for someone else too.',
        it: 'Il nostro prodotto più maturo. In produzione con JUNO.AM — 30+ risorse, 3 società. Nato per noi: ora potrebbe giovare anche a qualcun altro.'
      }
    }
  },
  {
    id: '3asycad',
    icon: '🎨',
    title: '3ASYCAD',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    status: 'vision',
    tag: {
      en: 'LONG-TERM VISION',
      it: 'VISIONE A LUNGO TERMINE'
    },
    subtitle: {
      en: '3D PRINTABILITY ENGINE',
      it: 'ENGINE DI STAMPABILITÀ 3D'
    },
    description: {
      en: 'Our most ambitious bet. 3D is our home: inspect, repair, lattice, nesting — from upload to build-ready, all in the browser. The same world where partners like JUNO.AM run their printing operations.',
      it: 'La nostra scommessa più ambiziosa. Il 3D è casa nostra: ispezione, riparazione, lattice, nesting — dal caricamento al pezzo pronto, tutto nel browser. Lo stesso mondo in cui partner come JUNO.AM gestiscono la produzione.'
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
      en: 'DISCOVER',
      it: 'SCOPRI'
    },
    url: 'https://www.3asycad.com/',
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
        en: 'Built for AM professionals — service bureaus, OEMs, engineers. A long-term play in the territory of pro tools, born from the same 3D expertise behind ANY3DP.',
        it: 'Pensato per professionisti AM — service bureau, OEM, ingegneri. Una visione a lungo termine nel territorio dei tool pro, nata dalla stessa expertise 3D di ANY3DP.'
      }
    }
  },
  {
    id: '3asygit',
    icon: '🎮',
    title: '3ASYGIT',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    status: 'pilot',
    tag: {
      en: 'PUBLIC PILOT',
      it: 'PILOT PUBBLICO'
    },
    subtitle: {
      en: 'GITHUB GAMIFICATION',
      it: 'GITHUB GAMIFICATION'
    },
    description: {
      en: 'A public pilot, live on GitHub, for developers who live there too. Turn your contributions into 3D art and audio — your coding, finally something you can show off.',
      it: 'Un pilot pubblico, live su GitHub, per gli sviluppatori che ci vivono. Trasforma le tue contribuzioni in arte 3D e audio — il tuo coding, finalmente qualcosa da mostrare.'
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
        en: 'A finished, reliable product — a fun, technical showcase for the GitHub community.',
        it: 'Un prodotto finito e affidabile — una vetrina tecnica e divertente per la community GitHub.'
      }
    }
  },
  {
    id: '3asyresearch',
    icon: '🔬',
    title: '3ASYRESEARCH',
    author: 'MicheleMikyMonti',
    appType: 'WebApp',
    status: 'early',
    tag: {
      en: 'EARLY STAGE',
      it: 'EARLY STAGE'
    },
    subtitle: {
      en: 'RESEARCH → INTERACTIVE PLAY',
      it: 'RICERCA → GIOCO INTERATTIVO'
    },
    description: {
      en: 'An early-stage concept we are shaping, open to institutional backing. Complex research papers → interactive experiences and usable tools you can actually play with.',
      it: 'Un concept allo stadio iniziale che stiamo plasmando, aperto a investimenti istituzionali. Paper complessi → esperienze interattive e strumenti utilizzabili con cui giocare davvero.'
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
        en: 'A sketched prototype with big ambitions — we are looking for institutional partners to take it further.',
        it: 'Un prototipo abbozzato con grandi ambizioni — cerchiamo partner istituzionali per portarlo avanti.'
      }
    }
  }
];

export interface StatusMeta {
  label: { en: string; it: string };
  note: { en: string; it: string };
  gradient: string;
  solid: string;
  soft: string;
  text: string;
  dot: string;
}

export const statusMeta: Record<AppStatus, StatusMeta> = {
  production: {
    label: { en: 'In production', it: 'In produzione' },
    note: {
      en: 'Already running every day — ready to save your team hours.',
      it: 'Già in uso ogni giorno: pronto a far risparmiare ore al tuo team.'
    },
    gradient: 'from-[#28a745] to-emerald-600',
    solid: 'bg-[#28a745]',
    soft: 'bg-emerald-50 border-emerald-200',
    text: 'text-emerald-700',
    dot: 'bg-[#28a745]'
  },
  vision: {
    label: { en: 'Long-term vision', it: 'Visione a lungo termine' },
    note: {
      en: 'Built for people who work with 3D printing every day.',
      it: 'Pensato per chi lavora ogni giorno con la stampa 3D.'
    },
    gradient: 'from-indigo-500 to-violet-600',
    solid: 'bg-violet-600',
    soft: 'bg-violet-50 border-violet-200',
    text: 'text-violet-700',
    dot: 'bg-violet-500'
  },
  pilot: {
    label: { en: 'Public pilot', it: 'Pilot pubblico' },
    note: {
      en: 'Live on GitHub — turn your profile into something worth showing.',
      it: 'Live su GitHub: trasforma il tuo profilo in qualcosa da mostrare.'
    },
    gradient: 'from-sky-500 to-blue-600',
    solid: 'bg-sky-600',
    soft: 'bg-sky-50 border-sky-200',
    text: 'text-sky-700',
    dot: 'bg-sky-500'
  },
  early: {
    label: { en: 'Early stage', it: 'Early stage' },
    note: {
      en: 'The foundations are there — open to partners to take it far.',
      it: 'Le basi ci sono: aperti a partner per portarlo lontano.'
    },
    gradient: 'from-amber-500 to-orange-600',
    solid: 'bg-amber-500',
    soft: 'bg-amber-50 border-amber-200',
    text: 'text-amber-700',
    dot: 'bg-amber-500'
  }
};
