import { apps } from '@/data/apps';
import { AppCard } from '@/components/AppCard';
import { ComingSoonCard } from '@/components/ComingSoonCard';

interface AppsSectionProps {
  language: 'en' | 'it';
}

export function AppsSection({ language }: AppsSectionProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} language={language} />
        ))}
        <ComingSoonCard language={language} />
      </div>
    </section>
  );
}
