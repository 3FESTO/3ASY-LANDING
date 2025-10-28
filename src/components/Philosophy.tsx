interface PhilosophyProps {
  language: 'en' | 'it';
}

export function Philosophy({ language }: PhilosophyProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {language === 'en' ? 'Our Philosophy' : 'La Nostra Filosofia'}
          </h2>
          
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              {language === 'en'
                ? 'We believe in the power of technology to transform businesses and create meaningful experiences. Our suite of applications is designed with a focus on innovation, usability, and measurable results.'
                : 'Crediamo nel potere della tecnologia di trasformare le aziende e creare esperienze significative. La nostra suite di applicazioni è progettata con un focus su innovazione, usabilità e risultati misurabili.'}
            </p>
            
            <p>
              {language === 'en'
                ? 'Each product in the 3ASY ecosystem is built to solve real-world challenges, leveraging cutting-edge technologies and best practices in software development.'
                : 'Ogni prodotto nell\'ecosistema 3ASY è costruito per risolvere sfide del mondo reale, sfruttando tecnologie all\'avanguardia e best practice nello sviluppo software.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
