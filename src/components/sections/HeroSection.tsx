import { SITE_CONFIG } from '@/config/site';

interface HeroSectionProps {
  language: 'en' | 'it';
}

export function HeroSection({ language }: HeroSectionProps) {
  const { hero, logo, name, tagline } = SITE_CONFIG;
  const content = hero.description[language];

  const stats = [
    { value: '5', label: language === 'en' ? 'Products' : 'Prodotti' },
    { value: '∞', label: language === 'en' ? 'Ideas Ahead' : 'Idee in Arrivo' },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-160 h-160 bg-[#28a745]/10 rounded-full blur-3xl animate-glow pointer-events-none" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Industry badge */}
          <a
            href={hero.any3dpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#28a745]/30 bg-[#28a745]/5 text-xs md:text-sm font-semibold text-gray-700 hover:bg-[#28a745]/10 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#28a745] animate-pulse" />
            {language === 'en' ? 'From the makers of ANY3DP' : 'Dai creatori di ANY3DP'}
          </a>

          <div className="mb-6">
            <img
              src={logo.url}
              alt={logo.alt}
              className="h-12 sm:h-16 md:h-20 max-w-[80%] mx-auto object-contain animate-float"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shine">
            {name}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-[#28a745] mb-6">
            {tagline[language]}
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
            {content.part1}
            <a
              href={hero.any3dpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#28a745] hover:text-[#218838] font-semibold"
            >
              {content.linkText}
            </a>
            {content.part2.split('\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-10 md:gap-16 pt-8 border-t border-gray-200/80">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#28a745]">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
