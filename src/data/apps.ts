export type AppStatus = 'production' | 'vision' | 'pilot' | 'early';
export type AppTheme = 'blue' | 'yellow' | 'purple' | 'green';

export interface App {
  id: string;
  icon: string;
  title: string;
  author: string;
  appType: string;
  status: AppStatus;
  theme: AppTheme;
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
  origin: {
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
  milestone?: {
    eyebrow: { en: string; it: string };
    value: { en: string; it: string };
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
    theme: 'blue',
    tag: {
      en: 'PROVEN FOR A YEAR',
      it: 'TESTATO DA UN ANNO'
    },
    subtitle: {
      en: 'CALENDAR → HR AGENT',
      it: 'CALENDARIO → HR AGENT'
    },
    description: {
      en: 'One workspace connects attendance, HR, finance and operations. People clock in and turn calendar activity into validated timesheets; team leads approve leave; business profiles see the real cost and margin of every resource.',
      it: 'Un solo spazio collega presenze, HR, finance e operations. Le persone marcano e trasformano il calendario in timesheet validati; i team lead approvano ferie e permessi; i profili business vedono costo e marginalità reale di ogni risorsa.'
    },
    origin: {
      en: 'It started with what every company has to do: track work, manage absences and close payroll correctly. Then came the questions spreadsheets could not answer.',
      it: 'Nasce da ciò che ogni azienda deve fare davvero: rilevare il lavoro, gestire le assenze e chiudere correttamente il mese. Poi sono arrivate le domande a cui i fogli di calcolo non sapevano rispondere.'
    },
    features: {
      en: [
        'Attendance and automatic timesheets from Microsoft 365 / Google Calendar',
        'Leave and permit requests with team-lead approval flows',
        'Company device inventory and assignment history',
        'Cost, implicit rate and real margin for each resource',
        'Budget, hours delivered and invoice reconciliation',
        'Multi-company controls and accounting-ready exports'
      ],
      it: [
        'Presenze e timesheet automatici da Microsoft 365 / Google Calendar',
        'Ferie e permessi con flussi di richiesta e approvazione',
        'Censimento device aziendali e storico assegnazioni',
        'Costo, tariffa implicita e marginalità reale per risorsa',
        'Riconciliazione tra budget, ore erogate e fatture',
        'Controllo multi-società ed export pronti per la contabilità'
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
    id: '3asybnb',
    icon: 'KeyRound',
    title: '3ASYBNB',
    author: 'MicheleMikyMonti',
    appType: 'Utility',
    status: 'early',
    theme: 'yellow',
    tag: {
      en: 'SELECTED BETA',
      it: 'BETA SELEZIONATA'
    },
    subtitle: {
      en: 'MONTH-END, IN ONE CLICK',
      it: 'IL FINE MESE, IN UN CLICK'
    },
    description: {
      en: 'The guided month-end flow for short-term rental property managers. It reads mixed documents, flags anomalies, calculates each allocation with deterministic rules and produces owner-ready reports.',
      it: 'Il fine mese guidato per chi gestisce affitti brevi per conto di proprietari. Legge documenti diversi, segnala le anomalie, calcola ogni ripartizione con regole deterministiche e prepara report pronti da inviare.'
    },
    origin: {
      en: 'A property manager asked us to remove half a day of repetitive work every month. It was outside our industry, but the need was clear enough to deserve a product.',
      it: 'Un property manager ci ha chiesto di eliminare mezza giornata di lavoro ripetitivo ogni mese. Era fuori dal nostro settore, ma il bisogno era troppo chiaro per non diventare un prodotto.'
    },
    features: {
      en: [
        'CSV, Excel, PDF, Word, notes and photos as source documents',
        '3ASY Ai extracts bookings, payouts, guests and anomalies',
        'Commissions, cleaning, taxes and PM fees calculated line by line',
        'Owner PDF, cleaning summary and annual property statement'
      ],
      it: [
        'CSV, Excel, PDF, Word, note e foto come documenti sorgente',
        '3ASY Ai estrae prenotazioni, payout, ospiti e anomalie',
        'Commissioni, pulizie, imposte e compensi calcolati riga per riga',
        'PDF proprietario, riepilogo pulizie e consuntivo annuale'
      ]
    },
    ctaText: {
      en: 'DISCOVER THE BETA',
      it: 'SCOPRI LA BETA'
    },
    milestone: {
      eyebrow: { en: 'PUBLIC LAUNCH', it: 'LANCIO PUBBLICO' },
      value: { en: 'JAN 01 · 2027', it: '01 GEN · 2027' }
    },
    url: 'https://bnb.3asy.app/',
    hasDetails: true,
    details: {
      highlights: {
        en: [
          'Selected beta with a small group of property managers',
          'PDF reports ready for the owner',
          'Public launch: January 1, 2027'
        ],
        it: [
          'Beta con un piccolo gruppo di property manager selezionati',
          'Report PDF pronti per il proprietario',
          'Lancio pubblico: 1 gennaio 2027'
        ]
      },
      whyItMatters: {
        en: 'It started with a practical request: take half a day of repetitive month-end work and turn it into a guided, reliable flow. It is outside our core industry, and that is exactly why it belongs here.',
        it: 'È partito da una necessità concreta: trasformare mezza giornata di lavoro ripetitivo a fine mese in un flusso guidato e affidabile. È fuori dal nostro settore principale, ed è proprio per questo che appartiene a questa raccolta.'
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
    theme: 'purple',
    tag: {
      en: 'LONG-TERM VISION',
      it: 'VISIONE A LUNGO TERMINE'
    },
    subtitle: {
      en: '3D PRINTABILITY ENGINE',
      it: 'ENGINE DI STAMPABILITÀ 3D'
    },
    description: {
      en: 'A browser workspace for preparing additive-manufacturing builds: inspect geometry, repair meshes, generate lattices, estimate stiffness and arrange parts in the build volume. No workstation install or license server.',
      it: 'Un ambiente browser per preparare build di manifattura additiva: ispeziona geometrie, ripara mesh, genera lattice, stima la rigidezza e dispone le parti nel volume di stampa. Senza installazioni workstation o license server.'
    },
    origin: {
      en: 'This is the hard, long-term project. Parts of the framework already support 3D operations at JUNO.AM and give us room to experiment beyond the ANY3DP MES.',
      it: 'È il progetto difficile, a lungo termine. Parti del framework supportano già operazioni 3D in JUNO.AM e ci danno uno spazio in cui sperimentare anche oltre il MES di ANY3DP.'
    },
    features: {
      en: [
        'Printability score, wall thickness and critical 3D markers',
        'Three-pass repair with safe rollback when geometry worsens',
        'TPMS and variable-density lattices with stiffness estimates',
        'Nesting, collision checks and per-printer build volumes'
      ],
      it: [
        'Score di stampabilità, spessori e marker critici nel 3D',
        'Riparazione in tre passaggi con rollback se la mesh peggiora',
        'Lattice TPMS e a densità variabile con stima della rigidezza',
        'Nesting, controllo collisioni e volumi macchina configurabili'
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
    theme: 'green',
    tag: {
      en: 'PUBLIC PILOT',
      it: 'PILOT PUBBLICO'
    },
    subtitle: {
      en: 'GITHUB GAMIFICATION',
      it: 'GITHUB GAMIFICATION'
    },
    description: {
      en: 'Enter a GitHub profile and turn its contribution history into a 3D city, a solar system or a speed circuit. A small public experiment, built just for fun and open to the next visualization.',
      it: 'Inserisci un profilo GitHub e trasformane la storia delle contribuzioni in una città 3D, un sistema solare o un circuito. Un piccolo esperimento pubblico, nato per gioco e aperto alla prossima visualizzazione.'
    },
    origin: {
      en: 'A playful question: what if a contribution graph became a place you could explore?',
      it: 'Una domanda giocosa: e se il contribution graph diventasse un luogo da esplorare?'
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
    theme: 'green',
    tag: {
      en: 'EARLY STAGE',
      it: 'EARLY STAGE'
    },
    subtitle: {
      en: 'RESEARCH → INTERACTIVE PLAY',
      it: 'RICERCA → GIOCO INTERATTIVO'
    },
    description: {
      en: 'Research papers become plain-language explanations and interactive tools. Two live cases already let people generate hybrid TPMS structures and model MJF production costs instead of only reading the formulas.',
      it: 'I paper diventano spiegazioni accessibili e strumenti interattivi. Due casi live permettono già di generare strutture TPMS ibride e modellare i costi di produzione MJF, invece di limitarsi a leggere le formule.'
    },
    origin: {
      en: 'Good research should be tried, not only cited. This experiment turns publications into something people can understand with their hands.',
      it: 'La buona ricerca dovrebbe essere provata, non soltanto citata. Questo esperimento trasforma le pubblicazioni in qualcosa che si può capire usando le mani.'
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
