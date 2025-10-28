import { type App } from '../data/apps';

interface AppCardProps {
  app: App;
  language: 'en' | 'it';
}

export function AppCard({ app, language }: AppCardProps) {
  return (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="text-6xl mb-6">{app.icon}</div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
        
        {/* Description */}
        <p className="text-slate-300 mb-6 leading-relaxed">
          {app.description[language]}
        </p>
        
        {/* CTA Button */}
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50"
        >
          <span>{language === 'en' ? 'Explore' : 'Esplora'}</span>
          <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
}
