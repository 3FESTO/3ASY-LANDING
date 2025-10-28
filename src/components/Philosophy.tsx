import { SITE_CONFIG } from '@/config/site';

interface PhilosophyProps {
  language: 'en' | 'it';
}

export function Philosophy({ language }: PhilosophyProps) {
  const { philosophy } = SITE_CONFIG;

  return (
    <section className="bg-gradient-to-br from-gray-50 to-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            {philosophy.title[language]}
          </h2>
          
          <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
            <p>{philosophy.content[language]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
