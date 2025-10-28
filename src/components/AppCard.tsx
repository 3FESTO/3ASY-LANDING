import { type App } from '../data/apps';

interface AppCardProps {
  app: App;
  language: 'en' | 'it';
}

export function AppCard({ app, language }: AppCardProps) {
  return (
    <div className="group bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 hover:border-[#28a745] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="flex flex-col flex-1">
        {/* Icon */}
        <div className="text-5xl md:text-6xl mb-4">{app.icon}</div>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{app.title}</h3>
        
        {/* Subtitle */}
        <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          {app.subtitle[language]}
        </p>
        
        {/* Description */}
        <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
          {app.description[language]}
        </p>
        
        {/* Features */}
        <ul className="space-y-2 mb-6 flex-1">
          {app.features[language].map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="text-[#28a745] mr-2 mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* CTA Button - Always at bottom */}
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#28a745] hover:bg-[#218838] text-white text-sm font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg mt-auto"
        >
          <span>{app.ctaText[language]}</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}
