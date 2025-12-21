import { SITE_CONFIG } from '@/config/site';

interface FooterProps {
  language: 'en' | 'it';
}

export function Footer({ language }: FooterProps) {
  const { company, footer } = SITE_CONFIG;

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 mb-2">
          3ASYAPPS by{' '}
          <a 
            href={company.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#28a745] hover:text-[#218838] font-semibold"
          >
            {company.name.replace(' SRL', '')} - {company.tagline}
          </a>
        </p>
        <p className="text-sm text-gray-500">
          © 2025 {company.name} - {footer.copyright[language]} |{' '}
          <a href={`mailto:${company.email}`} className="text-[#28a745] hover:text-[#218838]">
            {company.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
