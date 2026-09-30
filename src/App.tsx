import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/sections/HeroSection';
import { AppsSection } from './components/sections/AppsSection';
import { Philosophy } from './components/Philosophy';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

type Language = 'en' | 'it';

interface LandingPageProps {
  initialLanguage?: Language;
}

export function LandingPage({ initialLanguage = 'it' }: LandingPageProps) {
  const [language] = useState<Language>(initialLanguage);

  const toggleLanguage = () => {
    window.location.assign(language === 'it' ? '/en/' : '/');
  };

  return (
    <div id="top" className="min-h-screen bg-white">
      <a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-20 rounded bg-gray-950 px-4 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0">
        {language === 'it' ? 'Vai al contenuto' : 'Skip to content'}
      </a>
      <Header language={language} onToggleLanguage={toggleLanguage} />
      <main id="main-content">
        <HeroSection language={language} />
        <AppsSection language={language} />
        <Philosophy language={language} />
        <CTA language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

function App() {
  const language = typeof window !== 'undefined' && window.location.pathname.startsWith('/en') ? 'en' : 'it';
  return <LandingPage initialLanguage={language} />;
}

export default App;
