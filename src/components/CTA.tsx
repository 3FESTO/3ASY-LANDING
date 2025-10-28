interface CTAProps {
  language: 'en' | 'it';
}

export function CTA({ language }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {language === 'en' ? 'Ready to Transform Your Business?' : 'Pronto a Trasformare il Tuo Business?'}
        </h2>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          {language === 'en'
            ? 'Get in touch with our team to discover how our solutions can help you achieve your goals.'
            : 'Mettiti in contatto con il nostro team per scoprire come le nostre soluzioni possono aiutarti a raggiungere i tuoi obiettivi.'}
        </p>
        
        <a
          href="mailto:info@3festo.com"
          className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50"
        >
          <span>✉️</span>
          <span>{language === 'en' ? 'Contact Us' : 'Contattaci'}</span>
        </a>
      </div>
    </section>
  );
}
