import { apps } from '@/data/apps';
import { AppCard } from '@/components/AppCard';
import { ComingSoonCard } from '@/components/ComingSoonCard';

interface AppsSectionProps {
  language: 'en' | 'it';
}

export function AppsSection({ language }: AppsSectionProps) {
  const titles = {
    en: 'Case Studies',
    it: 'Case Study'
  };
  
  const subtitles = {
    en: 'Some of our 3ASYAPPS solutions in action',
    it: 'Alcune delle nostre soluzioni 3ASYAPPS in azione'
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {titles[language]}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitles[language]}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} language={language} />
          ))}
          <ComingSoonCard language={language} />
        </div>
      </div>
    </section>
  );
}
