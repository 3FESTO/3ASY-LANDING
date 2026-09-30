import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

interface FooterProps {
  language: 'en' | 'it';
}

export function Footer({ language }: FooterProps) {
  const { company, footer } = SITE_CONFIG;
  const content = language === 'it'
    ? { line: 'SOFTWARE UTILITIES da Bologna.', home: 'Torna all’inizio', source: 'Codice sorgente' }
    : { line: 'SOFTWARE UTILITIES built in Bologna.', home: 'Back to top', source: 'Source code' };

  return (
    <footer className="border-t border-gray-200 bg-[#f5f6f2] px-4 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <a href={language === 'it' ? '/' : '/en/'} className="inline-flex items-center gap-2 text-lg font-bold text-gray-950">
            <span className="text-[#28a745]" aria-hidden="true">◆ ▲</span> 3ASY
          </a>
          <p className="mt-3 text-sm text-gray-600">{content.line}</p>
          <p className="mt-1 text-xs text-gray-500">© 2026 {company.name} · {footer.copyright[language]}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-gray-600" aria-label={language === 'it' ? 'Link nel piè di pagina' : 'Footer links'}>
          <a href="#top" className="hover:text-gray-950">{content.home}</a>
          <a href="https://github.com/3FESTO/3ASY-LANDING" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-gray-950">{content.source}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a>
          <a href={company.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-gray-950">3FESTO<ArrowUpRight className="size-3.5" aria-hidden="true" /></a>
          <a href={`mailto:${company.email}`} className="text-[#18752d] hover:text-[#125b23]">{company.email.toLowerCase()}</a>
        </nav>
      </div>
    </footer>
  );
}
