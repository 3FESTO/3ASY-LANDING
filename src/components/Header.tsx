import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { LanguageGlobe } from './LanguageGlobe';

interface HeaderProps {
  language: 'en' | 'it';
  onToggleLanguage: () => void;
}

export function Header({ language, onToggleLanguage }: HeaderProps) {
  const labels = language === 'it'
    ? { products: 'Prodotti', projects: 'Progetti', approach: 'Metodo', contact: 'Contatti' }
    : { products: 'Products', projects: 'Projects', approach: 'Approach', contact: 'Contact' };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="inline-flex min-w-0 items-center gap-3">
          <a
            href={language === 'it' ? '/' : '/en/'}
            className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#218838]"
            aria-label={language === 'it' ? '3ASY, torna alla home' : '3ASY, back to home'}
          >
            <span className="flex items-center gap-1 text-lg text-[#28a745]" aria-hidden="true">
              <span>◆</span><span className="text-sm">▲</span>
            </span>
            <span className="text-xl font-bold tracking-[-0.03em] text-gray-950">3ASY</span>
          </a>
          <a
            href={SITE_CONFIG.company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 border-l border-gray-200 pl-3 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400 transition-colors hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#218838] sm:inline-flex"
          >
            3FE DEV<ArrowUpRight className="size-3" aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center gap-3 md:gap-7">
          <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-600 md:flex" aria-label={language === 'it' ? 'Navigazione principale' : 'Main navigation'}>
            <a className="transition-colors hover:text-gray-950" href="#products">{labels.products}</a>
            <a className="transition-colors hover:text-gray-950" href="#projects">{labels.projects}</a>
            <a className="transition-colors hover:text-gray-950" href="#approach">{labels.approach}</a>
            <a className="transition-colors hover:text-gray-950" href="#contact">{labels.contact}</a>
          </nav>
          <LanguageGlobe language={language} onClick={onToggleLanguage} />
        </div>
      </div>
    </header>
  );
}
