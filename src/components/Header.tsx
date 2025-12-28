import { Link } from 'react-router-dom';
import { LanguageGlobe } from './LanguageGlobe';

interface HeaderProps {
  language: 'en' | 'it';
  onToggleLanguage: () => void;
}

export function Header({ language, onToggleLanguage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">◆ ▲</span>
          <span className="text-xl md:text-2xl font-bold text-gray-900">3ASY</span>
          <Link 
            to="/status" 
            className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 rounded transition-colors ml-2"
          >
            status
          </Link>
        </div>
        
        <LanguageGlobe language={language} onClick={onToggleLanguage} />
      </div>
    </header>
  );
}
