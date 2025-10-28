import { useState } from 'react';
import { apps } from './data/apps';
import { Header } from './components/Header';
import { AppCard } from './components/AppCard';
import { Philosophy } from './components/Philosophy';
import { CTA } from './components/CTA';

type Language = 'en' | 'it';

function App() {
  const [language, setLanguage] = useState<Language>('it');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'it' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onToggleLanguage={toggleLanguage} />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img 
              src="https://www.3festo.com/images/homePage/3asyapps.png" 
              alt="3ASYAPPS Logo" 
              className="h-16 md:h-20 mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            3ASY
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-emerald-600 mb-6">
            OPERATIONS UTILITIES FOR BUSINESS
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {language === 'en' 
              ? 'Custom innovation - Our heart beats for 3D Future Experience with '
              : 'Innovazione su misura - Il nostro cuore batte per la 3D Future Experience con '}
            <a href="https://www.any3dp.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              ANY3DP
            </a>
            {language === 'en'
              ? ', but our DNA is innovative software development. When we identify a need, we don\'t look for solutions: we create them from scratch.'
              : ', ma il nostro DNA è lo sviluppo di software innovativo. Quando identifichiamo un\'esigenza, non cerchiamo soluzioni: le creiamo da zero.'}
          </p>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} language={language} />
          ))}
          
          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300">
            <div className="text-6xl mb-6">⏳</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'Coming Soon' : 'Prossimi Lanci'}
            </h3>
            <p className="text-sm font-semibold text-gray-500 mb-4">
              {language === 'en' ? 'IN DEVELOPMENT' : 'IN SVILUPPO'}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {language === 'en'
                ? 'New solutions are always in development. Our innovation pipeline never stops. Stay tuned for upcoming releases...'
                : 'Nuove soluzioni sono sempre in fase di sviluppo. La nostra pipeline di innovazione non si ferma mai. Stay tuned per i prossimi rilasci...'}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Philosophy language={language} />

      {/* CTA Section */}
      <CTA language={language} />

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-2">
            3ASYAPPS by{' '}
            <a 
              href="https://www.3festo.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              3Festo - 3D Future Experience
            </a>
          </p>
          <p className="text-sm text-gray-500">
            © 2025 3Festo S.r.l. - {language === 'en' ? 'All rights reserved' : 'Tutti i diritti riservati'} |{' '}
            <a href="mailto:info@3festo.com" className="text-emerald-600 hover:text-emerald-700">
              info@3festo.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
