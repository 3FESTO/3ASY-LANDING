import {
  ArrowUpRight,
  Boxes,
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
      eyebrow: 'WHERE TO START',
      title: 'Choose the problem, not the plan.',
      description: '3ASY is not one subscription with five logos. Each product has its own users, maturity and way in. Explore what is already open, bring us a real company workflow, or help shape the next release.',
      liveTitle: 'Try what is already open',
      liveDescription: 'Work on a 3D file in the browser, turn research into an interactive tool or give a GitHub profile a new shape. No sales call required.',
      hrTitle: 'Bring HR into your company',
      hrDescription: 'Start from your calendars, attendance and approval flows. We map the process, show the JUNO.AM case and configure a focused demo for your team.',
      bnbTitle: 'Join the selected BNB beta',
      bnbDescription: 'For Italian short-term-rental property managers who want to test the month-end workflow before the public launch on January 1, 2027.',
      explore: 'Open 3ASYCAD',
      demo: 'Request an HR demo',
      beta: 'Ask for beta access',
      footer: 'A different need?',
      contact: 'Tell us what keeps repeating',
    },
    it: {
      eyebrow: 'DA DOVE COMINCIARE',
      title: 'Scegli il problema, non il piano.',
      description: '3ASY non è un unico abbonamento con cinque loghi. Ogni prodotto ha utenti, maturità e modalità di accesso proprie. Esplora ciò che è già aperto, portaci un processo aziendale reale oppure contribuisci a dare forma al prossimo rilascio.',
      liveTitle: 'Prova ciò che è già aperto',
      liveDescription: 'Lavora su un file 3D nel browser, trasforma una ricerca in uno strumento interattivo o dai una nuova forma a un profilo GitHub. Senza passare da una call commerciale.',
      hrTitle: 'Porta HR nella tua azienda',
      hrDescription: 'Partiamo da calendari, presenze e flussi approvativi. Mappiamo il processo, mostriamo il caso JUNO.AM e prepariamo una demo mirata per il tuo team.',
      bnbTitle: 'Entra nella beta selezionata BNB',
      bnbDescription: 'Per property manager italiani che vogliono provare il flusso di fine mese prima del lancio pubblico del 1 gennaio 2027.',
      explore: 'Apri 3ASYCAD',
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
    <section className="bg-[#111510] px-4 py-20 text-white md:py-28">
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
              <Boxes className="size-6" aria-hidden="true" />
              <FlaskConical className="size-5" aria-hidden="true" />
              <GitBranch className="size-5" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-2xl font-bold">{content.liveTitle}</h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">{content.liveDescription}</p>
            <div className="mt-auto flex flex-wrap gap-3">
              <a href="https://cad.3asy.app/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-[6px] bg-[#28a745] px-4 py-3 text-sm font-bold transition-colors hover:bg-[#218838]">
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
            <a href="https://hr.3asy.app/" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-[6px] border border-[#5da2ff] px-4 py-3 text-sm font-bold text-[#8abaff] transition-colors hover:bg-[#0b5ee8] hover:text-white">
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
