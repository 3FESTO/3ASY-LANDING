import { useState } from 'react';

interface BuilderSectionProps {
  language: 'en' | 'it';
}

export function BuilderSection({ language }: BuilderSectionProps) {
  const [showWhitelabel, setShowWhitelabel] = useState(false);
  
  const content = {
    title: '3ASYBUILDER',
    subtitle: {
      en: 'AI-POWERED WEBSITE BUILDER',
      it: 'AI-POWERED WEBSITE BUILDER'
    },
    description: {
      en: 'Create professional websites in minutes with AI assistance. Describe your business and let our AI build everything: structure, content, design. No coding required - just natural conversation.',
      it: 'Crea siti web professionali in pochi minuti con l\'assistenza dell\'AI. Descrivi la tua attività e lascia che la nostra AI costruisca tutto: struttura, contenuti, design. Nessun codice richiesto - solo conversazione naturale.'
    },
    features: {
      en: [
        'AI-powered natural language building',
        'Professional templates for any business',
        'Responsive design automatic',
        'One-click HTML export'
      ],
      it: [
        'Costruzione in linguaggio naturale con AI',
        'Template professionali per ogni attività',
        'Design responsive automatico',
        'Export HTML con un click'
      ]
    },
    cta: {
      en: 'START BUILDING',
      it: 'INIZIA A COSTRUIRE'
    },
    url: 'https://builder.3asy.app'
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#28a745]/5 via-white to-[#28a745]/10"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-6xl">🏗️</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    {content.title}
                  </h2>
                </div>
                <p className="text-xl md:text-2xl font-semibold text-[#28a745] mb-4">
                  {content.subtitle[language]}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {content.description[language]}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.features[language].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <svg 
                      className="w-6 h-6 text-[#28a745] flex-shrink-0 mt-0.5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href={content.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#28a745] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#218838] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {content.cta[language]}
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </a>
                <p className="text-sm text-gray-500 mt-3">
                  {language === 'en' 
                    ? 'Free to start • Pro from €19.99/mo • ' 
                    : 'Gratis per iniziare • Pro da €19,99/mese • '}
                  <button 
                    onClick={() => setShowWhitelabel(true)}
                    className="text-[#28a745] hover:underline font-medium"
                  >
                    ◆ White-label
                  </button>
                </p>
              </div>
            </div>

            {/* Visual/Mockup */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                {/* Browser mockup */}
                <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  {/* Browser chrome */}
                  <div className="bg-gray-200 px-4 py-3 flex items-center gap-2 border-b border-gray-300">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 ml-4">
                      <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 flex items-center gap-2">
                        <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        builder.3asy.app
                      </div>
                    </div>
                  </div>
                  
                  {/* Content preview */}
                  <div className="p-6 space-y-4 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#28a745] rounded-lg flex items-center justify-center">
                        <span className="text-white text-xl">✨</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/6"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="h-16 bg-gradient-to-br from-[#28a745]/10 to-[#28a745]/5 rounded-lg border border-[#28a745]/20"></div>
                      <div className="h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg border border-gray-200"></div>
                    </div>
                    
                    <div className="flex items-center gap-2 pt-2">
                      <div className="h-8 bg-[#28a745] rounded px-4 flex-1"></div>
                      <div className="h-8 w-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* AI badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#28a745] to-[#34ce57] text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  AI POWERED
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-[#28a745]/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-[#28a745]/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* White-label Popup */}
      {showWhitelabel && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowWhitelabel(false)}
        >
          <div 
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-md w-full shadow-2xl animate-slideUp border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 text-center">
              <div className="text-5xl mb-4">◆</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {language === 'en' ? 'White-Label Solution' : 'Soluzione White-Label'}
              </h3>
              <div className="text-4xl font-bold text-[#28a745] mb-4">
                €999<span className="text-lg text-gray-400">/mo</span>
              </div>
              <ul className="text-left text-gray-300 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-[#28a745]">✓</span>
                  {language === 'en' ? 'Zero 3ASY branding' : 'Zero branding 3ASY'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#28a745]">✓</span>
                  {language === 'en' ? 'Your domain, your brand' : 'Il tuo dominio, il tuo brand'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#28a745]">✓</span>
                  {language === 'en' ? 'Full API access' : 'Accesso API completo'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#28a745]">✓</span>
                  {language === 'en' ? 'Only 3% on sales' : 'Solo 3% sulle vendite'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#28a745]">✓</span>
                  {language === 'en' ? 'Creator coaching included' : 'Affiancamento creators incluso'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#28a745]">✓</span>
                  {language === 'en' ? 'Priority support' : 'Supporto prioritario'}
                </li>
              </ul>
              <a
                href="mailto:info@3FESTO.com?subject=3ASYBUILDER White-Label"
                className="block w-full bg-[#28a745] hover:bg-[#218838] text-white font-bold py-3 rounded-xl transition-colors"
              >
                {language === 'en' ? 'Contact Us' : 'Contattaci'}
              </a>
              <button 
                onClick={() => setShowWhitelabel(false)}
                className="mt-4 text-gray-500 hover:text-white text-sm"
              >
                {language === 'en' ? 'Maybe later' : 'Magari dopo'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
