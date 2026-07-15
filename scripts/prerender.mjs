import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const outputDirectory = resolve(root, 'dist');
const serverDirectory = resolve(root, '.prerender');
const templatePath = resolve(outputDirectory, 'index.html');
const serverEntryPath = resolve(serverDirectory, 'entry-server.js');

const [{ render }, template] = await Promise.all([
  import(pathToFileURL(serverEntryPath).href),
  readFile(templatePath, 'utf8'),
]);

const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error(`Prerender marker not found in ${templatePath}`);
}

const pages = [
  {
    language: 'it',
    path: '/',
    output: templatePath,
    title: '3ASY — Strumenti AI per il mondo reale | 3FESTO',
    description: 'La linea software AI di 3FESTO, dai creatori di ANY3DP. Cinque prodotti concreti: 3ASYHR, 3ASYBNB, 3ASYCAD, 3ASYGIT e 3ASYRESEARCH.',
    keywords: 'strumenti AI italiani, software HR, timesheet automatici, gestione ferie, marginalità risorse, rendicontazione affitti brevi, property manager, manifattura additiva, stampabilità 3D, lattice TPMS, ricerca interattiva',
    imageAlt: '3ASY, strumenti AI italiani per HR, affitti brevi, manifattura additiva e ricerca',
    locale: 'it_IT',
    alternateLocale: 'en_US',
  },
  {
    language: 'en',
    path: '/en/',
    output: resolve(outputDirectory, 'en', 'index.html'),
    title: '3ASY — AI tools for the real world | 3FESTO',
    description: 'The AI software line by 3FESTO, makers of ANY3DP. Five focused products: 3ASYHR, 3ASYBNB, 3ASYCAD, 3ASYGIT and 3ASYRESEARCH.',
    keywords: 'Italian AI tools, HR software, automatic timesheets, leave management, resource profitability, short-term rental reporting, property managers, additive manufacturing, 3D printability, TPMS lattice, interactive research',
    imageAlt: '3ASY, Italian AI tools for HR, short-term rentals, additive manufacturing and research',
    locale: 'en_US',
    alternateLocale: 'it_IT',
  },
];

const productData = {
  it: [
    ['3ASYHR', 'BusinessApplication', 'Presenze, timesheet automatici da calendario, ferie, device aziendali e marginalità reale per risorsa.', 'https://hr.3asy.app'],
    ['3ASYBNB', 'BusinessApplication', 'Rendicontazione mensile per property manager: documenti normalizzati, calcoli deterministici e PDF per il proprietario.', 'https://bnb.3asy.app'],
    ['3ASYCAD', 'DesignApplication', 'Ambiente browser per analisi di stampabilità, riparazione mesh, lattice TPMS e nesting nella manifattura additiva.', 'https://www.3asycad.com'],
    ['3ASYRESEARCH', 'EducationApplication', 'Paper scientifici trasformati in spiegazioni accessibili e strumenti interattivi.', 'https://research.3asy.app'],
    ['3ASYGIT', 'DeveloperApplication', 'Contribuzioni GitHub trasformate in città 3D, sistemi solari e circuiti.', 'https://git.3asy.app'],
  ],
  en: [
    ['3ASYHR', 'BusinessApplication', 'Attendance, automatic calendar-based timesheets, leave, company devices and real profitability by resource.', 'https://hr.3asy.app'],
    ['3ASYBNB', 'BusinessApplication', 'Monthly reporting for property managers: normalized documents, deterministic calculations and owner-ready PDFs.', 'https://bnb.3asy.app'],
    ['3ASYCAD', 'DesignApplication', 'Browser workspace for printability analysis, mesh repair, TPMS lattices and additive-manufacturing nesting.', 'https://www.3asycad.com'],
    ['3ASYRESEARCH', 'EducationApplication', 'Scientific papers transformed into accessible explanations and interactive tools.', 'https://research.3asy.app'],
    ['3ASYGIT', 'DeveloperApplication', 'GitHub contributions transformed into 3D cities, solar systems and speed circuits.', 'https://git.3asy.app'],
  ],
};

function structuredData(page, canonicalUrl) {
  const organizationId = 'https://www.3festo.com/#organization';
  const websiteId = 'https://www.3asy.it/#website';
  const brandId = 'https://www.3asy.it/#brand';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: '3FESTO SRL',
        url: 'https://www.3festo.com/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.3festo.com/images/homePage/3asyapps.png',
        },
        email: 'info@3festo.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Galleria Ugo Bassi 1',
          postalCode: '40121',
          addressLocality: 'Bologna',
          addressRegion: 'Emilia-Romagna',
          addressCountry: 'IT',
        },
        areaServed: ['Italy', 'Worldwide'],
        knowsAbout: ['Artificial intelligence', 'Additive manufacturing', 'HR automation', '3D geometry processing', 'Business process automation'],
        sameAs: ['https://www.any3dp.com/', 'https://github.com/3FESTO/3ASY-LANDING'],
        brand: { '@id': brandId },
      },
      {
        '@type': 'Brand',
        '@id': brandId,
        name: '3ASY',
        url: 'https://www.3asy.it/',
        slogan: page.language === 'it' ? 'Strumenti AI per il mondo reale' : 'AI tools for the real world',
        parentOrganization: { '@id': organizationId },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: 'https://www.3asy.it/',
        name: '3ASY',
        inLanguage: ['it', 'en'],
        publisher: { '@id': organizationId },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: page.title,
        description: page.description,
        inLanguage: page.language,
        isPartOf: { '@id': websiteId },
        about: [{ '@id': brandId }, { '@id': organizationId }],
        dateModified: '2026-07-15',
        mainEntity: {
          '@type': 'ItemList',
          name: page.language === 'it' ? 'Prodotti 3ASY' : '3ASY products',
          numberOfItems: 5,
          itemListElement: productData[page.language].map(([name, applicationCategory, description, url], index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'SoftwareApplication',
              name,
              applicationCategory,
              operatingSystem: 'Web',
              description,
              url,
              publisher: { '@id': organizationId },
            },
          })),
        },
      },
    ],
  };
}

function localizeHead(html, page) {
  const canonicalUrl = `https://www.3asy.it${page.path}`;
  const schema = JSON.stringify(structuredData(page, canonicalUrl)).replace(/</g, '\\u003c');

  return html
    .replace('<html lang="it">', `<html lang="${page.language}">`)
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${page.description}" />`)
    .replace(/<meta name="keywords" content="[^"]*" \/>/, `<meta name="keywords" content="${page.keywords}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${page.locale}" />`)
    .replace(/<meta property="og:locale:alternate" content="[^"]*" \/>/, `<meta property="og:locale:alternate" content="${page.alternateLocale}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${page.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${page.description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="${page.imageAlt}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${page.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${page.description}" />`)
    .replace(/<meta name="twitter:image:alt" content="[^"]*" \/>/, `<meta name="twitter:image:alt" content="${page.imageAlt}" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${schema}</script>`);
}

for (const page of pages) {
  const rendered = template.replace(marker, `<div id="root">${render(page.language)}</div>`);
  const html = localizeHead(rendered, page);

  await mkdir(resolve(page.output, '..'), { recursive: true });
  await writeFile(page.output, html);
}

await rm(serverDirectory, { recursive: true, force: true });

console.log('Prerendered / and /en/ into dist');