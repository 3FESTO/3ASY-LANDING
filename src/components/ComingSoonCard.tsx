import { SITE_CONFIG } from '@/config/site';

interface ComingSoonCardProps {
  language: 'en' | 'it';
}

export function ComingSoonCard({ language }: ComingSoonCardProps) {
  const { comingSoon } = SITE_CONFIG;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300">
      <div className="text-6xl mb-6">{comingSoon.icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {comingSoon.title[language]}
      </h3>
      <p className="text-sm font-semibold text-gray-500 mb-4">
        {comingSoon.subtitle[language]}
      </p>
      <p className="text-gray-600 leading-relaxed">
        {comingSoon.description[language]}
      </p>
    </div>
  );
}
