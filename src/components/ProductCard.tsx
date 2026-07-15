import {
  ArrowUpRight,
  Boxes,
  CalendarCheck,
  Check,
  FlaskConical,
  GitBranch,
  KeyRound,
  type LucideIcon,
  UsersRound,
} from 'lucide-react';
import type { App, AppTheme } from '@/data/apps';

interface ProductCardProps {
  app: App;
  language: 'en' | 'it';
  variant: 'flagship' | 'story' | 'compact';
}

const themes: Record<AppTheme, {
  panel: string;
  pale: string;
  border: string;
  text: string;
  button: string;
  shadow: string;
}> = {
  blue: {
    panel: 'bg-[#0b5ee8]',
    pale: 'bg-[#edf5ff]',
    border: 'border-[#9fc7ff]',
    text: 'text-[#0756d4]',
    button: 'bg-[#0b5ee8] hover:bg-[#084dbd]',
    shadow: 'shadow-[0_24px_70px_-34px_rgba(11,94,232,0.7)]',
  },
  yellow: {
    panel: 'bg-[#f5c518]',
    pale: 'bg-[#fff9dc]',
    border: 'border-[#e8c53e]',
    text: 'text-[#806300]',
    button: 'bg-[#171711] hover:bg-black',
    shadow: 'shadow-[0_24px_70px_-34px_rgba(170,128,0,0.65)]',
  },
  purple: {
    panel: 'bg-[#7550c8]',
    pale: 'bg-[#f5f0ff]',
    border: 'border-[#c3afea]',
    text: 'text-[#6742b8]',
    button: 'bg-[#7550c8] hover:bg-[#6040aa]',
    shadow: 'shadow-[0_24px_70px_-34px_rgba(117,80,200,0.7)]',
  },
  green: {
    panel: 'bg-[#28a745]',
    pale: 'bg-[#effaf1]',
    border: 'border-[#9bd4a7]',
    text: 'text-[#1f8437]',
    button: 'bg-[#218838] hover:bg-[#196b2b]',
    shadow: 'shadow-[0_20px_55px_-36px_rgba(40,167,69,0.7)]',
  },
};

const icons: Record<string, LucideIcon> = {
  '3asyhr': UsersRound,
  '3asybnb': KeyRound,
  '3asycad': Boxes,
  '3asyresearch': FlaskConical,
  '3asygit': GitBranch,
};

function ProductLink({ app, language }: Pick<ProductCardProps, 'app' | 'language'>) {
  const theme = themes[app.theme];

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] px-5 py-3 text-sm font-bold text-white transition-colors ${theme.button}`}
    >
      {app.ctaText[language]}
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}

export function ProductCard({ app, language, variant }: ProductCardProps) {
  const theme = themes[app.theme];
  const Icon = icons[app.id] ?? Boxes;
  const isFlagship = variant === 'flagship';

  if (variant === 'compact') {
    return (
      <article className={`group grid min-h-44 grid-cols-[auto_1fr] gap-5 rounded-[8px] border bg-white p-5 transition-transform hover:-translate-y-1 ${theme.border} ${theme.shadow}`}>
        <div className={`flex size-12 items-center justify-center rounded-[6px] ${theme.pale} ${theme.text}`}>
          <Icon className="size-6" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
            <div>
              <p className={`mb-1 text-[11px] font-bold uppercase ${theme.text}`}>{app.tag[language]}</p>
              <h3 className="text-xl font-bold text-gray-950">{app.title}</h3>
            </div>
            <a href={app.url} target="_blank" rel="noopener noreferrer" aria-label={`${app.ctaText[language]}: ${app.title}`} className={`flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors ${theme.border} ${theme.text} hover:bg-gray-50`}>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <p className="text-sm leading-relaxed text-gray-600">{app.description[language]}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={`overflow-hidden rounded-[8px] border bg-white ${theme.border} ${theme.shadow}`}>
      <div className={isFlagship ? 'grid lg:grid-cols-[0.92fr_1.08fr]' : 'flex h-full flex-col'}>
        <div className={`relative overflow-hidden p-6 md:p-9 ${theme.panel} ${app.theme === 'yellow' ? 'text-[#171711]' : 'text-white'} ${isFlagship ? 'min-h-64 lg:min-h-[460px]' : 'min-h-52'}`}>
          <div className="product-orbit absolute -right-24 -top-24 size-72 rounded-full border border-current opacity-20" />
          <div className="product-orbit product-orbit-delayed absolute -bottom-32 -left-20 size-80 rounded-full border border-current opacity-15" />
          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[11px] font-bold uppercase tracking-widest opacity-80">{app.appType}</span>
              <span className="rounded-full border border-current px-3 py-1 text-[10px] font-bold uppercase opacity-90">{app.tag[language]}</span>
            </div>
            <div className="my-auto py-7 md:py-10">
              <Icon className={`${isFlagship ? 'size-16 md:size-20' : 'size-12 md:size-14'} mb-5 stroke-[1.4]`} aria-hidden="true" />
              <h3 className={`${isFlagship ? 'text-4xl md:text-6xl' : 'text-3xl md:text-4xl'} font-bold leading-none`}>{app.title}</h3>
              <p className="mt-3 text-xs font-bold uppercase tracking-wider opacity-80">{app.subtitle[language]}</p>
            </div>
            {app.milestone && (
              <div className="flex items-end justify-between gap-5 border-t border-current pt-5">
                <div>
                  <p className="text-[10px] font-bold uppercase opacity-65">{app.milestone.eyebrow[language]}</p>
                  <p className="mt-1 text-2xl font-bold">{app.milestone.value[language]}</p>
                </div>
                <CalendarCheck className="size-7 opacity-70" aria-hidden="true" />
              </div>
            )}
          </div>
        </div>
        <div className={`flex flex-1 flex-col p-6 md:p-9 ${theme.pale}`}>
          {isFlagship && (
            <div className="mb-7 grid grid-cols-3 gap-3 border-b border-blue-200 pb-7">
              <div><strong className="block text-2xl text-gray-950">1</strong><span className="text-xs text-gray-600">{language === 'it' ? 'anno sul campo' : 'year in use'}</span></div>
              <div><strong className="block text-2xl text-gray-950">30+</strong><span className="text-xs text-gray-600">{language === 'it' ? 'risorse' : 'people'}</span></div>
              <div><strong className="block text-2xl text-gray-950">50+</strong><span className="text-xs text-gray-600">{language === 'it' ? 'ore/mese eliminate' : 'hours/month saved'}</span></div>
            </div>
          )}
          <div className={`mb-5 border-l-2 pl-4 ${theme.border}`}>
            <p className={`mb-1 text-[10px] font-bold uppercase ${theme.text}`}>
              {language === 'it' ? 'Da dove nasce' : 'Where it started'}
            </p>
            <p className="text-sm leading-relaxed text-gray-600">{app.origin[language]}</p>
          </div>
          <p className={`${isFlagship ? 'text-lg md:text-2xl' : 'text-base md:text-lg'} leading-relaxed text-gray-800`}>{app.description[language]}</p>
          <p className={`mb-3 mt-6 text-[10px] font-bold uppercase ${theme.text}`}>
            {language === 'it' ? 'Cosa fa oggi' : 'What it does today'}
          </p>
          <ul className={`${isFlagship ? 'grid grid-cols-2 gap-x-3 gap-y-4' : 'space-y-3'} mb-7`}>
            {app.features[language].map((feature) => (
              <li key={feature} className={`flex items-start text-gray-700 ${isFlagship ? 'gap-2 text-xs leading-relaxed md:gap-3 md:text-sm' : 'gap-3 text-sm leading-relaxed'}`}>
                <span className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${theme.panel} ${app.theme === 'yellow' ? 'text-gray-950' : 'text-white'}`}>
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-auto"><ProductLink app={app} language={language} /></div>
        </div>
      </div>
    </article>
  );
}