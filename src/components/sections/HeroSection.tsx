import { SITE_CONFIG } from '@/config/site';

interface HeroSectionProps {
  language: 'en' | 'it';
}

export function HeroSection({ language }: HeroSectionProps) {
  const { hero, logo, name, tagline } = SITE_CONFIG;
  const content = hero.description[language];

  const stats = [
    { value: '7+', label: language === 'en' ? 'Apps Live' : 'App Online' },
    { value: '∞', label: language === 'en' ? 'Ideas Ahead' : 'Idee in Arrivo' },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <img 
            src={logo.url} 
            alt={logo.alt} 
            className="h-16 md:h-20 mx-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          {name}
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-[#28a745] mb-6">
          {tagline[language]}
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10">
          {content.part1}
          <a 
            href={hero.any3dpUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#28a745] hover:text-[#218838] font-semibold"
          >
            {content.linkText}
          </a>
          {content.part2}
        </p>
        
        {/* Stats row */}
        <div className="flex justify-center gap-8 md:gap-16 pt-8 border-t border-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#28a745]">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
