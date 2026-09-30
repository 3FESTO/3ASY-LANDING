import {
  ArrowUpRight,
  FlaskConical,
  GitBranch,
  KeyRound,
  Mail,
  UsersRound,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

interface CTAProps {
  language: 'en' | 'it';
}

export function CTA({ language }: CTAProps) {
  const { company } = SITE_CONFIG;
  const content = {
    en: {
      eyebrow: 'A CONCRETE NEXT STEP',
      title: 'Start from the work you want to improve.',
      description: 'The two 3ASY products have different users and entry points. 3HR starts with a focused process review; 3BNB is currently available to a selected beta group. The two public projects are free to explore.',
      liveTitle: 'Explore the public projects',
      liveDescription: 'Try an interactive research case or turn a GitHub profile into a 3D landscape. No sales call and no product claim.',
      hrTitle: 'Bring HR into your company',
      hrDescription: 'Start from your calendars, attendance and approval flows. We map the process, show the JUNO.AM case and configure a focused demo for your team.',
      bnbTitle: 'Join the selected BNB beta',
      bnbDescription: 'For Italian short-term-rental property managers who want to test the month-end workflow before the public launch on January 1, 2027.',
      explore: 'Open 3ASYRESEARCH',
      demo: 'Request an HR demo',
      beta: 'Ask for beta access',
      footer: 'A different need?',
      contact: 'Tell us what keeps repeating',
    },
    it: {
      eyebrow: 'UN PROSSIMO PASSO CONCRETO',
      title: 'Parti dal lavoro che vuoi migliorare.',
      description: 'I due prodotti 3ASY hanno utenti e modalità di accesso diverse. 3HR parte da un confronto mirato sul processo; 3BNB è oggi disponibile a un gruppo beta selezionato. I due progetti pubblici sono liberamente esplorabili.',
      liveTitle: 'Esplora i progetti pubblici',
      liveDescription: 'Prova un caso di ricerca interattivo o trasforma un profilo GitHub in un paesaggio 3D. Senza call commerciale e senza promesse da prodotto.',
      hrTitle: 'Porta HR nella tua azienda',
      hrDescription: 'Partiamo da calendari, presenze e flussi approvativi. Mappiamo il processo, mostriamo il caso JUNO.AM e prepariamo una demo mirata per il tuo team.',
      bnbTitle: 'Entra nella beta selezionata BNB',
      bnbDescription: 'Per property manager italiani che vogliono provare il flusso di fine mese prima del lancio pubblico del 1 gennaio 2027.',
      explore: 'Apri 3ASYRESEARCH',
      demo: 'Richiedi una demo HR',
      beta: 'Candidati alla beta',
      footer: 'Hai un bisogno diverso?',
      contact: 'Raccontaci cosa continua a ripetersi',
    },
  }[language];

  const mailSubject = language === 'it'
    ? 'Un problema reale per 3ASY'
    : 'A real problem for 3ASY';

  return (
    <section id="contact" className="scroll-mt-16 bg-[#111510] px-4 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 grid gap-6 border-b border-white/20 pb-10 md:mb-16 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold text-[#5bd174]">{content.eyebrow}</p>
            <h2 className="max-w-xl text-4xl font-bold leading-[1.05] md:text-6xl">{content.title}</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-gray-300 md:justify-self-end">{content.description}</p>
        </header>

        <div className="grid border-y border-white/20 lg:grid-cols-3">
          <article className="flex flex-col border-b border-white/20 py-8 lg:border-b-0 lg:border-r lg:pr-8">
            <div className="mb-8 flex items-center gap-3 text-[#5bd174]">
              <FlaskConical className="size-5" aria-hidden="true" />
              <GitBranch className="size-5" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">{content.liveTitle}</h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">{content.liveDescription}</p>
            <div className="mt-auto flex flex-wrap gap-3">
              <a href="https://research.3asy.app/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-[6px] bg-[#28a745] px-4 py-3 text-sm font-bold transition-colors hover:bg-[#218838]">
                {content.explore}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a href="https://research.3asy.app/" target="_blank" rel="noopener noreferrer" aria-label="3ASYRESEARCH" className="flex size-11 items-center justify-center rounded-[6px] border border-white/25 text-gray-300 transition-colors hover:border-white hover:text-white">
                <FlaskConical className="size-4" aria-hidden="true" />
              </a>
              <a href="https://git.3asy.app/" target="_blank" rel="noopener noreferrer" aria-label="3ASYGIT" className="flex size-11 items-center justify-center rounded-[6px] border border-white/25 text-gray-300 transition-colors hover:border-white hover:text-white">
                <GitBranch className="size-4" aria-hidden="true" />
              </a>
            </div>
          </article>

          <article className="flex flex-col border-b border-white/20 py-8 lg:border-b-0 lg:border-r lg:px-8">
            <UsersRound className="mb-8 size-7 text-[#5da2ff]" aria-hidden="true" />
            <h3 className="mb-3 text-2xl font-bold">{content.hrTitle}</h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">{content.hrDescription}</p>
            <a href="https://www.3hr.it/" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-[6px] border border-[#5da2ff] px-4 py-3 text-sm font-bold text-[#8abaff] transition-colors hover:bg-[#0b5ee8] hover:text-white">
              {content.demo}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </article>

          <article className="flex flex-col py-8 lg:pl-8">
            <KeyRound className="mb-8 size-7 text-[#f5c518]" aria-hidden="true" />
            <h3 className="mb-3 text-2xl font-bold">{content.bnbTitle}</h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">{content.bnbDescription}</p>
            <a href="https://bnb.3asy.app/" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-[6px] bg-[#f5c518] px-4 py-3 text-sm font-bold text-[#171711] transition-colors hover:bg-[#ffdb4f]">
              {content.beta}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </article>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-400">{content.footer}</p>
          <a href={`mailto:${company.email}?subject=${encodeURIComponent(mailSubject)}`} className="inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-[#28a745] decoration-2 underline-offset-8 transition-colors hover:text-[#73dd89]">
            <Mail className="size-4" aria-hidden="true" />
            {content.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
