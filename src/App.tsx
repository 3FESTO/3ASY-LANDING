import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/sections/HeroSection';
import { AppsSection } from './components/sections/AppsSection';
import { Philosophy } from './components/Philosophy';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
// StatusPage kept as backup, not routed
// import { StatusPage } from './pages/StatusPage';

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage initialLanguage="it" />} />
        <Route path="/en/*" element={<LandingPage initialLanguage="en" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
