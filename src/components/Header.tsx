import { LanguageGlobe } from './LanguageGlobe';

interface HeaderProps {
  language: 'en' | 'it';
  onToggleLanguage: () => void;
}

export function Header({ language, onToggleLanguage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/80">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl text-[#28a745]">◆ ▲</span>
          <span className="text-xl md:text-2xl font-bold text-gray-900">3ASY</span>
          <span className="hidden sm:inline text-xs text-gray-400 border-l border-gray-200 pl-3">
            by{' '}
            <a href="https://www.3festo.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#28a745] font-semibold">3FE</a>
          </span>
        </div>

        <LanguageGlobe language={language} onClick={onToggleLanguage} />
      </div>
    </header>
  );
}
