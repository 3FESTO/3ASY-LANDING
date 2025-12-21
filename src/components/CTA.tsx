import { SITE_CONFIG } from '@/config/site';

interface CTAProps {
  language: 'en' | 'it';
}

export function CTA({ language }: CTAProps) {
  const { cta, company } = SITE_CONFIG;

  const options = {
    en: [
      { icon: '⚡', title: 'Use It', desc: 'Start free. Upgrade when you grow.' },
      { icon: '🤝', title: 'Partner Up', desc: 'White-label. Resell. Integrate.' },
      { icon: '💰', title: 'Invest', desc: 'Early stage. Big vision. Real revenue.' }
    ],
    it: [
      { icon: '⚡', title: 'Usalo', desc: 'Inizia gratis. Scala quando cresci.' },
      { icon: '🤝', title: 'Partner', desc: 'White-label. Rivendita. Integrazione.' },
      { icon: '💰', title: 'Investi', desc: 'Early stage. Grande visione. Revenue reale.' }
    ]
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#28a745]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#28a745]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {cta.title[language]}
            </h2>
            
            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              {cta.description[language]}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {options[language].map((option, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-[#28a745]/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{option.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-gray-400 text-sm">{option.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#28a745] to-[#34ce57] hover:from-[#218838] hover:to-[#28a745] text-white text-base md:text-lg font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-[#28a745]/50 hover:-translate-y-1 group"
            >
              <span className="text-2xl">📧</span>
              <span>{cta.buttonText[language]}</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
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
            <p className="text-gray-400 text-sm mt-4">{company.email}</p>
            
            {/* Pricing hints */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-gray-500">
              <span className="bg-white/5 px-3 py-1 rounded-full">
                {language === 'en' ? '◆ Free tier available' : '◆ Piano gratuito disponibile'}
              </span>
              <span className="bg-white/5 px-3 py-1 rounded-full">
                {language === 'en' ? '◆ All-in €99.90/mo' : '◆ All-in €99,90/mese'}
              </span>
              <span className="bg-white/5 px-3 py-1 rounded-full">
                {language === 'en' ? '◆ White-label from €999/mo' : '◆ White-label da €999/mese'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
