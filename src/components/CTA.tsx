interface CTAProps {
  language: 'en' | 'it';
}

export function CTA({ language }: CTAProps) {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Do you have a project in mind?' : 'Hai un progetto in mente?'}
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
            {language === 'en'
              ? 'Our passion for innovation leads us to constantly explore new technological frontiers. If you have an idea that could benefit from our experience in 3D, software development, AI, blockchain or enterprise systems, let\'s talk about it. Let\'s transform your vision into reality together.'
              : 'La nostra passione per l\'innovazione ci porta ad esplorare costantemente nuove frontiere tecnologiche. Se hai un\'idea che potrebbe beneficiare della nostra esperienza in 3D, sviluppo software, AI, blockchain o sistemi enterprise, parliamone. Trasformiamo insieme la tua visione in realtà.'}
          </p>
          
          <a
            href="mailto:info@3festo.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-base md:text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>📧</span>
            <span>{language === 'en' ? 'Start the conversation' : 'Avvia la conversazione'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
