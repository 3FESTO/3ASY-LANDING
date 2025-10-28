import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/sections/HeroSection';
import { AppsSection } from './components/sections/AppsSection';
import { Philosophy } from './components/Philosophy';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

type Language = 'en' | 'it';

function App() {
  const [language, setLanguage] = useState<Language>('it');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'it' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onToggleLanguage={toggleLanguage} />
      <HeroSection language={language} />
      <AppsSection language={language} />
      <Philosophy language={language} />
      <CTA language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
