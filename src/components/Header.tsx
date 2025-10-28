interface HeaderProps {
  language: 'en' | 'it';
  onToggleLanguage: () => void;
}

export function Header({ language, onToggleLanguage }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-3xl">🔷</span>
          <span className="text-2xl font-bold text-white">3FESTO</span>
        </div>
        
        <button
          onClick={onToggleLanguage}
          className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
        >
          {language === 'en' ? '🇮🇹 IT' : '🇬🇧 EN'}
        </button>
      </div>
    </header>
  );
}
