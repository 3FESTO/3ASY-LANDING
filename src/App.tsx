import { useState } from 'react';
import { apps } from './data/apps';
import { Header } from './components/Header';
import { AppCard } from './components/AppCard';
import { Philosophy } from './components/Philosophy';
import { CTA } from './components/CTA';

type Language = 'en' | 'it';

function App() {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'it' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header language={language} onToggleLanguage={toggleLanguage} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {language === 'en' ? '3D Future Experience' : 'Esperienza Futura 3D'}
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          {language === 'en' 
            ? 'Discover our suite of innovative applications designed to transform your business'
            : 'Scopri la nostra suite di applicazioni innovative progettate per trasformare il tuo business'}
        </p>
      </section>

      {/* Apps Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} language={language} />
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <Philosophy language={language} />

      {/* CTA Section */}
      <CTA language={language} />

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© 2025 3FESTO - All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
