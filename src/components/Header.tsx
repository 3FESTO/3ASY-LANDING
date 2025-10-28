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
        </div>
        
        <button
          onClick={onToggleLanguage}
          className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors shadow-sm"
        >
          {language === 'it' ? 'EN' : 'IT'}
        </button>
      </div>
    </header>
  );
}
