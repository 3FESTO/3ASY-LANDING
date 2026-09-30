import { apps } from '@/data/apps';
import { ProductCard } from '@/components/ProductCard';

interface AppsSectionProps {
  language: 'en' | 'it';
}

export function AppsSection({ language }: AppsSectionProps) {
  const product = (id: string) => apps.find((app) => app.id === id)!;
  const content = language === 'it' ? {
    eyebrow: '02 PRODOTTI',
    title: 'Software che oggi fa già un lavoro.',
    subtitle: 'Non una suite generica e non quattro promesse. Due prodotti distinti, nati in contesti reali e presentati per il livello di maturità che hanno davvero.',
    hrLabel: 'In uso operativo',
    hrNote: 'Sviluppato sulle esigenze quotidiane di tre società e oltre 30 persone.',
    bnbLabel: 'Beta selezionata',
    bnbNote: 'Il flusso è attivo con un piccolo gruppo di property manager.',
    projectsEyebrow: '02 PROGETTI',
    projectsTitle: 'Piccoli per scelta. Pubblici per imparare.',
    projectsNote: 'Due esplorazioni funzionanti, senza trasformare ogni esperimento in un prodotto.',
  } : {
    eyebrow: '02 PRODUCTS',
    title: 'Software already doing a real job.',
    subtitle: 'Not a generic suite and not four promises. Two distinct products, born in real contexts and presented at the level of maturity they actually have.',
    hrLabel: 'In operational use',
    hrNote: 'Built around the daily needs of three companies and more than 30 people.',
    bnbLabel: 'Selected beta',
    bnbNote: 'The workflow is active with a small group of property managers.',
    projectsEyebrow: '02 PROJECTS',
    projectsTitle: 'Small by design. Public so we can learn.',
    projectsNote: 'Two working explorations, without pretending every experiment is a product.',
  };

  return (
    <section id="products" className="scroll-mt-16 bg-[#f5f6f2] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.14em] text-[#18752d]">{content.eyebrow}</p>
            <h2 className="max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-gray-950 md:text-6xl">{content.title}</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-gray-600 md:justify-self-end">{content.subtitle}</p>
        </header>

        <div className="mb-12 grid border-y border-gray-300 md:grid-cols-2 md:divide-x md:divide-gray-300">
          <div className="py-5 md:pr-7">
            <p className="text-xs font-bold uppercase tracking-wide text-[#0756d4]">3HR · {content.hrLabel}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{content.hrNote}</p>
          </div>
          <div className="border-t border-gray-300 py-5 md:border-t-0 md:pl-7">
            <p className="text-xs font-bold uppercase tracking-wide text-[#806300]">3BNB · {content.bnbLabel}</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{content.bnbNote}</p>
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
          <ProductCard app={product('3hr')} language={language} variant="flagship" />
          <ProductCard app={product('3asybnb')} language={language} variant="story" />
        </div>

        <section id="projects" className="scroll-mt-20 pt-24 md:pt-32" aria-labelledby="projects-title">
          <header className="mb-8 grid gap-4 border-t border-gray-300 pt-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.14em] text-[#18752d]">{content.projectsEyebrow}</p>
              <h2 id="projects-title" className="max-w-xl text-3xl font-bold tracking-[-0.035em] text-gray-950 md:text-5xl">{content.projectsTitle}</h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-gray-600 md:justify-self-end">{content.projectsNote}</p>
          </header>
          <div className="grid gap-5 md:grid-cols-2">
            <ProductCard app={product('3asyresearch')} language={language} variant="compact" />
            <ProductCard app={product('3asygit')} language={language} variant="compact" />
          </div>
        </section>
      </div>
    </section>
  );
}
