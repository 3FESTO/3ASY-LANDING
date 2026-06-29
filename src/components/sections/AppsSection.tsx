import { apps, statusMeta, type AppStatus } from '@/data/apps';
import { AppCard } from '@/components/AppCard';
import { ComingSoonCard } from '@/components/ComingSoonCard';

interface AppsSectionProps {
  language: 'en' | 'it';
}

function GroupHeader({
  index,
  status,
  language
}: {
  index: string;
  status: AppStatus;
  language: 'en' | 'it';
}) {
  const meta = statusMeta[status];
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className={`text-sm font-bold ${meta.text}`}>{index}</span>
      <div className="flex items-baseline gap-3 flex-wrap">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">{meta.label[language]}</h3>
        <span className="text-sm text-gray-500">{meta.note[language]}</span>
      </div>
      <span className={`hidden sm:block flex-1 h-px bg-linear-to-r ${meta.gradient} opacity-20`} />
    </div>
  );
}

export function AppsSection({ language }: AppsSectionProps) {
  const titles = {
    en: 'Our 3ASY products',
    it: 'I nostri prodotti 3ASY'
  };

  const subtitles = {
    en: 'Not a pile of demos. Four distinct products, each at its own stage.',
    it: 'Non una pila di demo. Quattro prodotti distinti, ognuno al suo stadio.'
  };

  const byStatus = (status: AppStatus) => apps.filter((a) => a.status === status);

  return (
    <section id="products" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {titles[language]}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitles[language]}
          </p>
        </div>

        {/* 01 — In production (flagship) */}
        <div className="mb-16">
          <GroupHeader index="01" status="production" language={language} />
          {byStatus('production').map((app) => (
            <AppCard key={app.id} app={app} language={language} variant="featured" />
          ))}
        </div>

        {/* 02 — Long-term vision */}
        <div className="mb-16">
          <GroupHeader index="02" status="vision" language={language} />
          {byStatus('vision').map((app) => (
            <AppCard key={app.id} app={app} language={language} variant="featured" />
          ))}
        </div>

        {/* 03 — Public pilot & early stage */}
        <div>
          <GroupHeader index="03" status="pilot" language={language} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {byStatus('pilot').map((app) => (
              <AppCard key={app.id} app={app} language={language} variant="compact" />
            ))}
            {byStatus('early').map((app) => (
              <AppCard key={app.id} app={app} language={language} variant="compact" />
            ))}
            <ComingSoonCard language={language} />
          </div>
        </div>
      </div>
    </section>
  );
}
