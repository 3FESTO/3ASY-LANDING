import { SITE_CONFIG } from '@/config/site';

interface PhilosophyProps {
  language: 'en' | 'it';
}

export function Philosophy({ language }: PhilosophyProps) {
  const { philosophy } = SITE_CONFIG;

  const pillars = language === 'en' 
    ? [
        { icon: '⚡', title: 'Ship Fast', desc: 'Ideas to production in days, not months' },
        { icon: '🎯', title: 'Solve Real', desc: 'Every app born from actual pain points' },
        { icon: '🤖', title: 'AI-First', desc: 'Automation at the core of everything' },
      ]
    : [
        { icon: '⚡', title: 'Veloci', desc: 'Dall\'idea alla produzione in giorni, non mesi' },
        { icon: '🎯', title: 'Problemi Reali', desc: 'Ogni app nasce da bisogni veri' },
        { icon: '🤖', title: 'AI-First', desc: 'Automazione al centro di tutto' },
      ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            {philosophy.title[language]}
          </h2>
          
          {/* Pillars */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-10">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl mb-2">{pillar.icon}</div>
                <div className="font-bold text-gray-900 text-sm md:text-base">{pillar.title}</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">{pillar.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100">
            <p>{philosophy.content[language]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
