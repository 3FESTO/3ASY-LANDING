import { useState } from 'react';
import { type App, statusMeta } from '../data/apps';

interface AppCardProps {
  app: App;
  language: 'en' | 'it';
  variant?: 'featured' | 'compact';
}

export function AppCard({ app, language, variant = 'compact' }: AppCardProps) {
  const [showModal, setShowModal] = useState(false);
  const meta = statusMeta[app.status];
  const featured = variant === 'featured';

  const statusPill = (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${meta.soft} ${meta.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
      {meta.label[language]}
    </span>
  );

  return (
    <>
      <article
        className={`group relative overflow-hidden bg-white border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 ${
          featured
            ? 'rounded-3xl grid md:grid-cols-[1.05fr_1.4fr] hover:-translate-y-1'
            : 'rounded-2xl flex flex-col h-full p-6 hover:-translate-y-1.5'
        }`}
      >
        {featured ? (
          <>
            {/* Visual panel */}
            <div className={`relative bg-linear-to-br ${meta.gradient} p-8 md:p-10 flex flex-col justify-between text-white min-h-[220px]`}>
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                  {app.appType}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-white/15 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {meta.label[language]}
                </span>
              </div>
              <div className="relative">
                <div className="text-7xl md:text-8xl mb-4 drop-shadow-sm">{app.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold">{app.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-wide text-white/80 mt-1">
                  {app.subtitle[language]}
                </p>
              </div>
            </div>

            {/* Content panel */}
            <div className="p-8 md:p-10 flex flex-col">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                {app.description[language]}
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                {app.features[language].map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className={`mr-2 mt-0.5 ${meta.text}`}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 bg-linear-to-r ${meta.gradient} text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5`}
                >
                  <span>{app.ctaText[language]}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                {app.hasDetails && (
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-5 py-3 border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 text-sm font-semibold rounded-xl transition-colors"
                  >
                    {language === 'en' ? 'Details' : 'Dettagli'}
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${meta.gradient}`} />

            <div className="flex items-start justify-between mb-4">
              <div className="text-5xl">{app.icon}</div>
              {statusPill}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{app.title}</h3>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
              {app.subtitle[language]}
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
              {app.description[language]}
            </p>

            <ul className="space-y-2 mb-6 flex-1">
              {app.features[language].map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600">
                  <span className={`mr-2 mt-0.5 ${meta.text}`}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-2 mt-auto">
              {app.hasDetails && (
                <button
                  onClick={() => setShowModal(true)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 text-sm font-semibold rounded-xl transition-colors"
                >
                  {language === 'en' ? 'Details' : 'Dettagli'}
                </button>
              )}
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r ${meta.gradient} text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg`}
              >
                <span>{language === 'en' ? 'Open' : 'Apri'}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </>
        )}
      </article>

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
            <div className={`bg-linear-to-r ${meta.gradient} p-6 rounded-t-2xl shrink-0`}>
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
                  aria-label={language === 'en' ? 'Close' : 'Chiudi'}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1 overscroll-contain scrollbar-thin">
              {/* Highlights */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">
                  {language === 'en' ? '✨ Key Features' : '✨ Funzionalità Chiave'}
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
              <div className={`rounded-xl p-5 border ${meta.soft}`}>
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
            <div className="p-6 border-t border-gray-100 shrink-0 bg-white rounded-b-2xl">
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center px-6 py-4 bg-linear-to-r ${meta.gradient} text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
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
