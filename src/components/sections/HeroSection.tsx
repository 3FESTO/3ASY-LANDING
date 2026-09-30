import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

interface HeroSectionProps {
  language: 'en' | 'it';
}

export function HeroSection({ language }: HeroSectionProps) {
  const content = language === 'it' ? {
    eyebrow: 'SOFTWARE UTILITIES · BOLOGNA, ITALIA',
    title: 'Strumenti digitali, costruiti su problemi reali.',
    description: '3ASY è la linea software di 3FE DEV, il team di sviluppo di 3FESTO: due prodotti operativi e due piccoli progetti pubblici. Automazione e AI entrano solo dove rendono il lavoro più semplice, verificabile e utile.',
    primary: 'Scopri i prodotti',
    secondary: 'Il nostro lavoro industriale',
    products: 'prodotti',
    projects: 'progetti pubblici',
    principle: 'problema prima della tecnologia',
  } : {
    eyebrow: 'SOFTWARE UTILITIES · BOLOGNA, ITALY',
    title: 'Digital tools, built around real problems.',
    description: '3ASY is the software line by 3FE DEV: two operational products and two small public projects. Automation and AI belong only where they make work simpler, verifiable and useful.',
    primary: 'Explore the products',
    secondary: 'Our industrial work',
    products: 'products',
    projects: 'public projects',
    principle: 'problem before technology',
  };

  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-[#fbfcf9]">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute -right-40 -top-56 size-[38rem] rounded-full bg-[#28a745]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 md:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:py-36">
        <div>
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#18752d]">{content.eyebrow}</p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-gray-950 sm:text-6xl md:text-7xl">
            {content.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">{content.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] bg-[#18752d] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#125b23] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#18752d]">
              {content.primary}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a href={SITE_CONFIG.hero.any3dpUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-800 transition-colors hover:border-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
              {content.secondary}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <dl className="grid grid-cols-2 border-y border-gray-300 lg:grid-cols-1">
          <div className="border-r border-gray-300 py-5 pr-5 lg:border-b lg:border-r-0 lg:px-0">
            <dd className="text-4xl font-bold tracking-[-0.04em] text-gray-950">2</dd>
            <dt className="mt-1 text-xs font-bold uppercase tracking-wide text-gray-500">{content.products}</dt>
          </div>
          <div className="py-5 pl-5 lg:border-b lg:px-0">
            <dd className="text-4xl font-bold tracking-[-0.04em] text-gray-950">2</dd>
            <dt className="mt-1 text-xs font-bold uppercase tracking-wide text-gray-500">{content.projects}</dt>
          </div>
          <div className="col-span-2 border-t border-gray-300 py-5 lg:col-span-1 lg:border-t-0">
            <dd className="text-lg font-bold text-[#18752d]">01</dd>
            <dt className="mt-1 text-xs font-bold uppercase tracking-wide text-gray-500">{content.principle}</dt>
          </div>
        </dl>
      </div>
    </section>
  );
}
