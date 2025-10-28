import { SITE_CONFIG } from '@/config/site';

interface HeroSectionProps {
  language: 'en' | 'it';
}

export function HeroSection({ language }: HeroSectionProps) {
  const { hero, logo, name, tagline } = SITE_CONFIG;
  const content = hero.description[language];

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
        <p className="text-xl md:text-2xl font-semibold text-emerald-600 mb-6">
          {tagline[language]}
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {content.part1}
          <a 
            href={hero.any3dpUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            {content.linkText}
          </a>
          {content.part2}
        </p>
      </div>
    </section>
  );
}
