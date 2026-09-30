import { Bot, Crosshair, Gauge } from 'lucide-react';

interface PhilosophyProps {
  language: 'en' | 'it';
}

export function Philosophy({ language }: PhilosophyProps) {
  const content = language === 'it' ? {
    eyebrow: 'COME LAVORIAMO',
    title: 'La tecnologia viene dopo il problema.',
    description: '3FE DEV è il team di sviluppo software di 3FESTO, una piccola azienda tecnologica indipendente di Bologna. Siamo partiti dalla manifattura additiva con ANY3DP; 3ASY raccoglie il software nato dai processi che conosciamo direttamente o da richieste abbastanza concrete da meritare una risposta.',
    principles: [
      { title: 'Partire dal lavoro', description: 'Osserviamo un processo reale prima di disegnare il prodotto.', Icon: Crosshair },
      { title: 'Rilasciare il necessario', description: 'Costruiamo una prima versione utile, misurabile e comprensibile.', Icon: Gauge },
      { title: 'Usare l’AI con criterio', description: 'Modelli e automazioni dove aiutano; regole esplicite dove serve controllo.', Icon: Bot },
    ],
    note: 'Italian design. Operational discipline. No theatre.',
  } : {
    eyebrow: 'HOW WE WORK',
    title: 'Technology comes after the problem.',
    description: '3FE DEV is the software development team at 3FESTO, a small independent technology company based in Bologna. We started in additive manufacturing with ANY3DP; 3ASY brings together software born from processes we know firsthand, or from requests concrete enough to deserve an answer.',
    principles: [
      { title: 'Start from the work', description: 'We observe a real process before designing the product.', Icon: Crosshair },
      { title: 'Ship what is needed', description: 'We build a first version that is useful, measurable and clear.', Icon: Gauge },
      { title: 'Use AI deliberately', description: 'Models and automation where they help; explicit rules where control matters.', Icon: Bot },
    ],
    note: 'Italian design. Operational discipline. No theatre.',
  };

  return (
    <section id="approach" className="scroll-mt-16 bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <header>
            <p className="mb-4 text-xs font-bold tracking-[0.14em] text-[#18752d]">{content.eyebrow}</p>
            <h2 className="text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-gray-950 md:text-6xl">{content.title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">{content.description}</p>
          </header>

          <div className="border-y border-gray-300">
            {content.principles.map(({ title, description, Icon }, index) => (
              <article key={title} className="grid grid-cols-[auto_1fr] gap-5 border-b border-gray-300 py-7 last:border-b-0">
                <span className="flex size-11 items-center justify-center rounded-[6px] bg-[#eef8f0] text-[#18752d]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="mb-1 text-[10px] font-bold text-[#18752d]">0{index + 1}</p>
                  <h3 className="text-xl font-bold text-gray-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="mt-12 border-l-2 border-[#28a745] pl-4 text-sm font-bold uppercase tracking-[0.12em] text-gray-500">{content.note}</p>
      </div>
    </section>
  );
}
