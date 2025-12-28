import { useState } from 'react';
import { type App } from '../data/apps';

interface AppCardProps {
  app: App;
  language: 'en' | 'it';
}

// Colori gradient per ogni app
const appGradients: Record<string, { header: string; cta: string; ctaHover: string; accent: string }> = {
  '3asyhr': {
    header: 'from-blue-500 to-indigo-600',
    cta: 'from-blue-500 to-indigo-600',
    ctaHover: 'hover:from-blue-600 hover:to-indigo-700',
    accent: 'blue'
  },
  '3asywhistle': {
    header: 'from-slate-700 to-slate-900',
    cta: 'from-slate-700 to-slate-900',
    ctaHover: 'hover:from-slate-800 hover:to-black',
    accent: 'slate'
  },
  '3asyperiod': {
    header: 'from-pink-500 to-purple-600',
    cta: 'from-pink-500 to-purple-600',
    ctaHover: 'hover:from-pink-600 hover:to-purple-700',
    accent: 'pink'
  },
  default: {
    header: 'from-[#28a745] to-emerald-600',
    cta: 'from-[#28a745] to-emerald-600',
    ctaHover: 'hover:from-[#218838] hover:to-emerald-700',
    accent: 'green'
  }
};

// Colori per autori
const authorColors: Record<string, string> = {
  'MicheleMikyMonti': 'bg-gradient-to-r from-[#28a745] to-emerald-500 text-white',
  'YURI': 'bg-gradient-to-r from-pink-500 to-purple-500 text-white',
  'UNKNOWN': 'bg-gray-200 text-gray-800',
  '0zone': 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white',
  'SETTIX': 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white'
};

export function AppCard({ app, language }: AppCardProps) {
  const [showModal, setShowModal] = useState(false);
  const gradient = appGradients[app.id] || appGradients.default;
  const authorColor = authorColors[app.author] || authorColors['MicheleMikyMonti'];

  return (
    <>
      <div className="group bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 hover:border-[#28a745] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative">
        
        {/* Author Tag */}
        <div className={`absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-bold ${authorColor} shadow-md`}>
          @{app.author}
        </div>
        
        {/* App Type Tag */}
        <div className="absolute top-4 right-4 px-2 py-1 rounded text-[10px] font-bold bg-gray-100 text-gray-600 border border-gray-200">
          {app.appType}
        </div>
        
        <div className="flex flex-col flex-1 pt-2">
          <div className="flex items-start justify-between mb-4">
            <div className="text-5xl md:text-6xl">{app.icon}</div>
            {app.hasDetails && (
              <button
                onClick={() => setShowModal(true)}
                className="text-gray-400 hover:text-[#28a745] transition-colors p-2 hover:bg-gray-100 rounded-full"
                title={language === 'en' ? 'View details' : 'Vedi dettagli'}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            )}
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{app.title}</h3>
          
          <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            {app.subtitle[language]}
          </p>
          
          <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
            {app.description[language]}
          </p>
          
          <ul className="space-y-2 mb-6 flex-1">
            {app.features[language].map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-[#28a745] mr-2 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex gap-2 mt-auto">
            {app.hasDetails && (
              <button
                onClick={() => setShowModal(true)}
                className="flex-1 px-4 py-3 border-2 border-[#28a745] text-[#28a745] hover:bg-[#28a745] hover:text-white text-sm font-semibold rounded-lg transition-all duration-300"
              >
                {language === 'en' ? 'DETAILS' : 'DETTAGLI'}
              </button>
            )}
            {app.isComingSoon ? (
              <span
                className={`inline-flex items-center justify-center px-4 py-3 bg-gray-300 text-gray-500 text-sm font-semibold rounded-lg cursor-not-allowed ${app.hasDetails ? 'flex-1' : 'w-full'}`}
              >
                <span>{app.ctaText[language]}</span>
                <span className="ml-2">🚀</span>
              </span>
            ) : (
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-4 py-3 bg-[#28a745] hover:bg-[#218838] text-white text-sm font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg ${app.hasDetails ? 'flex-1' : 'w-full'}`}
              >
                <span>{app.ctaText[language]}</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && app.details && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] shadow-2xl flex flex-col animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header - Fixed */}
            <div className={`bg-gradient-to-r ${gradient.header} p-6 rounded-t-2xl flex-shrink-0`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{app.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{app.title}</h3>
                    <p className="text-white/80 text-sm">{app.subtitle[language]}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1 overscroll-contain scrollbar-thin">
              {/* Dual View Showcase - Only for Period */}
              {app.id === '3asyperiod' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200">
                    <div className="text-3xl mb-2">👩</div>
                    <h4 className="font-bold text-gray-900">Her View</h4>
                    <p className="text-sm text-gray-600">
                      {language === 'en' ? 'Complete dashboard with analytics, calendar, mood tracking' : 'Dashboard completa con analytics, calendario, mood tracking'}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-4 border border-blue-200">
                    <div className="text-3xl mb-2">👨</div>
                    <h4 className="font-bold text-gray-900">Him View</h4>
                    <p className="text-sm text-gray-600">
                      {language === 'en' ? '8 essential cards: phase, days, mood, tips, fertility, gifts' : '8 card essenziali: fase, giorni, mood, tips, fertilità, regali'}
                    </p>
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">
                  {app.id === '3asyperiod' 
                    ? (language === 'en' ? '🔄 Cycle Phases' : '🔄 Le Fasi del Ciclo')
                    : (language === 'en' ? '✨ Key Features' : '✨ Funzionalità Chiave')
                  }
                </h4>
                <div className="space-y-2">
                  {app.details.highlights[language].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why It Matters */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span>💡</span>
                  {language === 'en' ? 'Why It Matters' : 'Perché È Importante'}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {app.details.whyItMatters[language]}
                </p>
              </div>
            </div>

            {/* Footer CTA - Fixed */}
            <div className="p-6 border-t border-gray-100 flex-shrink-0 bg-white rounded-b-2xl">
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center px-6 py-4 bg-gradient-to-r ${gradient.cta} ${gradient.ctaHover} text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
              >
                {app.ctaText[language]} →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
