export type AppTheme = 'blue' | 'yellow' | 'green';

export interface App {
  id: string;
  title: string;
  theme: AppTheme;
  tag: { en: string; it: string };
  subtitle: { en: string; it: string };
  description: { en: string; it: string };
  origin: { en: string; it: string };
  features: { en: string[]; it: string[] };
  ctaText: { en: string; it: string };
  milestone?: {
    eyebrow: { en: string; it: string };
    value: { en: string; it: string };
  };
  url: string;
}

export const apps: App[] = [
  {
    id: '3hr',
    title: '3HR',
    theme: 'blue',
    tag: { en: 'IN OPERATIONAL USE', it: 'IN USO OPERATIVO' },
    subtitle: { en: 'CALENDAR → HR OPERATIONS', it: 'CALENDARIO → OPERATIONS HR' },
    description: {
      en: 'One workspace connects attendance, HR, finance and operations. People track attendance and turn calendar activity into validated timesheets; team leads approve leave; business roles can review the cost and margin of each resource.',
      it: 'Un solo spazio collega presenze, HR, finance e operations. Le persone registrano le presenze e trasformano il calendario in timesheet validati; i team lead approvano ferie e permessi; i profili business possono leggere costo e marginalità di ogni risorsa.',
    },
    origin: {
      en: 'It started with a process we run ourselves: tracking work, managing absences and closing the month with reliable data.',
      it: 'Nasce da un processo che gestiamo in prima persona: rilevare il lavoro, organizzare le assenze e chiudere il mese con dati affidabili.',
    },
    features: {
      en: [
        'Attendance and timesheets from Microsoft 365 or Google Calendar',
        'Leave and permit requests with approval flows',
        'Company device inventory and assignment history',
        'Cost, implicit rate and margin by resource',
        'Reconciliation of budgets, delivered hours and invoices',
        'Multi-company controls and accounting-ready exports',
      ],
      it: [
        'Presenze e timesheet da Microsoft 365 o Google Calendar',
        'Ferie e permessi con flussi di richiesta e approvazione',
        'Censimento dei device aziendali e storico assegnazioni',
        'Costo, tariffa implicita e marginalità per risorsa',
        'Riconciliazione di budget, ore erogate e fatture',
        'Controllo multi-società ed export per la contabilità',
      ],
    },
    ctaText: { en: 'REQUEST A FOCUSED DEMO', it: 'RICHIEDI UNA DEMO MIRATA' },
    url: 'https://www.3hr.it/',
  },
  {
    id: '3asybnb',
    title: '3BNB',
    theme: 'yellow',
    tag: { en: 'SELECTED BETA', it: 'BETA SELEZIONATA' },
    subtitle: { en: 'A GUIDED MONTH-END', it: 'UN FINE MESE GUIDATO' },
    description: {
      en: 'A guided month-end workflow for short-term-rental property managers. It reads mixed documents, flags anomalies, applies explicit allocation rules and prepares reports for property owners.',
      it: 'Un flusso di fine mese guidato per chi gestisce affitti brevi per conto di proprietari. Legge documenti diversi, segnala anomalie, applica regole di ripartizione esplicite e prepara i report per i proprietari.',
    },
    origin: {
      en: 'A property manager asked us to reduce a repetitive half-day of work each month. The request was outside our usual industry, but concrete enough to build and test.',
      it: 'Un property manager ci ha chiesto di ridurre mezza giornata di lavoro ripetitivo ogni mese. La richiesta era fuori dal nostro settore abituale, ma abbastanza concreta da costruire e verificare.',
    },
    features: {
      en: [
        'CSV, Excel, PDF, Word, notes and photos as source documents',
        'AI-assisted extraction of bookings, payouts, guests and anomalies',
        'Line-by-line calculation of commissions, cleaning, taxes and fees',
        'Owner PDF, cleaning summary and annual property statement',
      ],
      it: [
        'CSV, Excel, PDF, Word, note e foto come documenti sorgente',
        'Estrazione assistita da AI di prenotazioni, payout, ospiti e anomalie',
        'Calcolo riga per riga di commissioni, pulizie, imposte e compensi',
        'PDF proprietario, riepilogo pulizie e consuntivo annuale',
      ],
    },
    ctaText: { en: 'ASK FOR BETA ACCESS', it: 'RICHIEDI ACCESSO ALLA BETA' },
    milestone: {
      eyebrow: { en: 'PLANNED PUBLIC LAUNCH', it: 'LANCIO PUBBLICO PREVISTO' },
      value: { en: 'JAN 01 · 2027', it: '01 GEN · 2027' },
    },
    url: 'https://bnb.3asy.app/',
  },
  {
    id: '3asyresearch',
    title: '3ASYRESEARCH',
    theme: 'green',
    tag: { en: 'EARLY EXPERIMENT', it: 'ESPERIMENTO INIZIALE' },
    subtitle: { en: 'RESEARCH → INTERACTIVE TOOLS', it: 'RICERCA → STRUMENTI INTERATTIVI' },
    description: {
      en: 'Research papers become plain-language explanations and interactive tools. Two live cases explore hybrid TPMS structures and MJF production-cost modelling.',
      it: 'I paper diventano spiegazioni accessibili e strumenti interattivi. Due casi live esplorano strutture TPMS ibride e la modellazione dei costi di produzione MJF.',
    },
    origin: {
      en: 'An experiment in making technical research something people can try, not only cite.',
      it: 'Un esperimento per rendere la ricerca tecnica qualcosa da provare, non soltanto da citare.',
    },
    features: {
      en: ['Plain-language summaries', 'Interactive playgrounds', 'Two live research cases'],
      it: ['Sintesi accessibili', 'Playground interattivi', 'Due casi di ricerca live'],
    },
    ctaText: { en: 'EXPLORE THE PROJECT', it: 'ESPLORA IL PROGETTO' },
    url: 'https://research.3asy.app/',
  },
  {
    id: '3asygit',
    title: '3ASYGIT',
    theme: 'green',
    tag: { en: 'PUBLIC EXPERIMENT', it: 'ESPERIMENTO PUBBLICO' },
    subtitle: { en: 'GITHUB DATA → 3D LANDSCAPES', it: 'DATI GITHUB → PAESAGGI 3D' },
    description: {
      en: 'Enter a public GitHub profile and turn its contribution history into a 3D city, solar system or speed circuit. A playful visualization project, open to explore.',
      it: 'Inserisci un profilo GitHub pubblico e trasformane le contribuzioni in una città 3D, un sistema solare o un circuito. Un progetto di visualizzazione giocoso, aperto a tutti.',
    },
    origin: {
      en: 'A playful question: what if a contribution graph became a place you could explore?',
      it: 'Una domanda giocosa: e se il contribution graph diventasse un luogo da esplorare?',
    },
    features: {
      en: ['3D contribution views', 'Sound generated from commits', 'Shareable visualizations'],
      it: ['Viste 3D delle contribuzioni', 'Suono generato dai commit', 'Visualizzazioni condivisibili'],
    },
    ctaText: { en: 'EXPLORE THE PROJECT', it: 'ESPLORA IL PROGETTO' },
    url: 'https://git.3asy.app/',
  },
];
