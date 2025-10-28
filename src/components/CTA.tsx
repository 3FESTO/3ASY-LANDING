import { SITE_CONFIG } from '@/config/site';

interface CTAProps {
  language: 'en' | 'it';
}

export function CTA({ language }: CTAProps) {
  const { cta, company } = SITE_CONFIG;

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {cta.title[language]}
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
            {cta.description[language]}
          </p>
          
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#28a745] hover:bg-[#218838] text-white text-base md:text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>📧</span>
            <span>{cta.buttonText[language]}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
