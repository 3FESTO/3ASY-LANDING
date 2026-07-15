import { apps } from '@/data/apps';
import { ProductCard } from '@/components/ProductCard';

interface AppsSectionProps {
  language: 'en' | 'it';
}

export function AppsSection({ language }: AppsSectionProps) {
  const product = (id: string) => apps.find((app) => app.id === id)!;
  const content = {
    en: {
      eyebrow: 'THE 3ASY LINE',
      title: 'We do not start with ideas. We start with work.',
      subtitle: 'Every 3ASY product begins with a real task, a repeated friction or a question worth testing. We build the first useful version, use it ourselves and let reality decide how far it should go.',
      paths: [
        ['01', 'An internal need', 'HR and CAD grow from our daily operations in people management and additive manufacturing.'],
        ['02', 'A request from outside', 'BNB proves that a clear problem deserves an answer, even beyond our usual industry.'],
        ['03', 'An idea to test', 'Research and Git stay small on purpose: one hypothesis, one experience, something real to try.'],
      ],
      core: 'CORE PRODUCT',
      utilities: 'A USEFUL DETOUR',
      lab: 'THE 3D LAB',
      side: 'SMALLER EXPERIMENTS',
      sideNote: 'Compact projects, free to explore a single idea well.',
    },
    it: {
      eyebrow: 'LA LINEA 3ASY',
      title: 'Non partiamo dalle idee. Partiamo dal lavoro.',
      subtitle: 'Ogni prodotto 3ASY nasce da un’attività reale, da un attrito che si ripete o da una domanda che vale la pena verificare. Costruiamo la prima versione utile, la usiamo e lasciamo che sia la realtà a dirci fin dove portarla.',
      paths: [
        ['01', 'Una necessità interna', 'HR e CAD crescono dentro il nostro lavoro quotidiano: gestione delle persone e manifattura additiva.'],
        ['02', 'Una richiesta da fuori', 'BNB dimostra che un problema chiaro merita una risposta, anche oltre il nostro settore abituale.'],
        ['03', 'Un’idea da verificare', 'Research e Git restano piccoli per scelta: un’ipotesi, un’esperienza, qualcosa di concreto da provare.'],
      ],
      core: 'IL PRODOTTO CENTRALE',
      utilities: 'UNA DEVIAZIONE UTILE',
      lab: 'IL LABORATORIO 3D',
      side: 'ESPERIMENTI PIÙ PICCOLI',
      sideNote: 'Progetti compatti, liberi di esplorare bene una singola idea.',
    },
  }[language];

  return (
    <section id="products" className="bg-[#f7f8f5] px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold text-[#218838]">{content.eyebrow}</p>
            <h2 className="max-w-xl text-4xl font-bold leading-[1.05] text-gray-950 md:text-6xl">{content.title}</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-gray-600 md:justify-self-end">{content.subtitle}</p>
        </header>

        <div className="mb-14 grid border-y border-gray-300 md:mb-20 md:grid-cols-3">
          {content.paths.map(([index, title, description]) => (
            <div key={index} className="border-b border-gray-300 py-5 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-bold text-[#218838]">{index}</span>
                <h3 className="text-sm font-bold text-gray-950">{title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mb-14 md:mb-20">
          <p className="mb-4 text-[11px] font-bold text-[#0756d4]">01 / {content.core}</p>
          <ProductCard app={product('3asyhr')} language={language} variant="flagship" />
        </div>

        <div className="mb-14 grid gap-7 md:mb-20 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-4 text-[11px] font-bold text-[#806300]">02 / {content.utilities}</p>
            <ProductCard app={product('3asybnb')} language={language} variant="story" />
          </div>
          <div className="lg:mt-20">
            <p className="mb-4 text-[11px] font-bold text-[#6742b8]">03 / {content.lab}</p>
            <ProductCard app={product('3asycad')} language={language} variant="story" />
          </div>

        </div>

        <div className="border-t border-gray-300 pt-8">
          <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <p className="text-[11px] font-bold text-[#1f8437]">04 / {content.side}</p>
            <p className="text-sm text-gray-500">{content.sideNote}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <ProductCard app={product('3asyresearch')} language={language} variant="compact" />
            <ProductCard app={product('3asygit')} language={language} variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
}
