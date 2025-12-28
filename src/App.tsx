import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/sections/HeroSection';
import { BuilderSection } from './components/sections/BuilderSection';
import { AppsSection } from './components/sections/AppsSection';
import { Philosophy } from './components/Philosophy';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { StatusPage } from './pages/StatusPage';

type Language = 'en' | 'it';

function LandingPage() {
  const [language, setLanguage] = useState<Language>('it');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'it' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onToggleLanguage={toggleLanguage} />
      <HeroSection language={language} />
      <BuilderSection language={language} />
      <AppsSection language={language} />
      <Philosophy language={language} />
      <CTA language={language} />
      <Footer language={language} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/status" element={<StatusPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
