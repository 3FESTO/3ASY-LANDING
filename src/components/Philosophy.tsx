interface PhilosophyProps {
  language: 'en' | 'it';
}

export function Philosophy({ language }: PhilosophyProps) {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-emerald-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
            {language === 'en' ? 'Our Philosophy' : 'La nostra filosofia'}
          </h2>
          
          <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              {language === 'en'
                ? 'We are constantly searching for new challenges in the technology landscape. Innovation is not just our job, it\'s our passion. From 3D to AI, from blockchain to enterprise systems: we transform ideas into concrete and scalable solutions.'
                : 'Siamo costantemente alla ricerca di nuove sfide nel panorama tecnologico. L\'innovazione non è solo il nostro lavoro, è la nostra passione. Dal 3D all\'AI, dalla blockchain ai sistemi enterprise: trasformiamo idee in soluzioni concrete e scalabili.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
