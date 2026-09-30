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
    title: '3ASY — Software per HR e property manager | 3FE DEV',
    description: 'La linea software di 3FE DEV, il team di sviluppo di 3FESTO: due prodotti operativi, 3HR e 3BNB, e due piccoli progetti pubblici. Made in Bologna.',
    keywords: '3ASY, 3FESTO, software HR, timesheet da calendario, gestione presenze, marginalità risorse, rendicontazione affitti brevi, property manager, automazione aziendale, software italiano',
    imageAlt: '3ASY di 3FE DEV: due prodotti software e due progetti pubblici',
    locale: 'it_IT',
    alternateLocale: 'en_US',
  },
  {
    language: 'en',
    path: '/en/',
    output: resolve(outputDirectory, 'en', 'index.html'),
    title: '3ASY — Software for HR and property managers | 3FE DEV',
    description: 'The software line by 3FE DEV, the development team at 3FESTO: two operational products, 3HR and 3BNB, and two small public projects. Made in Bologna.',
    keywords: '3ASY, 3FESTO, HR software, calendar timesheets, attendance management, resource profitability, short-term rental reporting, property managers, business automation, Italian software',
    imageAlt: '3ASY by 3FE DEV: two software products and two public projects',
    locale: 'en_US',
    alternateLocale: 'it_IT',
  },
];

const productData = {
  it: [
    ['3HR', 'BusinessApplication', 'Presenze, timesheet da calendario, ferie, device aziendali e marginalità per risorsa.', 'https://www.3hr.it/'],
    ['3BNB', 'BusinessApplication', 'Rendicontazione mensile per property manager con documenti normalizzati, regole esplicite e PDF per il proprietario.', 'https://bnb.3asy.app/'],
  ],
  en: [
    ['3HR', 'BusinessApplication', 'Attendance, calendar-based timesheets, leave, company devices and profitability by resource.', 'https://www.3hr.it/'],
    ['3BNB', 'BusinessApplication', 'Monthly reporting for property managers with normalized documents, explicit rules and owner-ready PDFs.', 'https://bnb.3asy.app/'],
  ],
};

const projectData = {
  it: [
    ['3ASYRESEARCH', 'EducationApplication', 'Paper scientifici trasformati in spiegazioni accessibili e strumenti interattivi.', 'https://research.3asy.app/'],
    ['3ASYGIT', 'DeveloperApplication', 'Contribuzioni GitHub trasformate in città 3D, sistemi solari e circuiti.', 'https://git.3asy.app/'],
  ],
  en: [
    ['3ASYRESEARCH', 'EducationApplication', 'Scientific papers transformed into accessible explanations and interactive tools.', 'https://research.3asy.app/'],
    ['3ASYGIT', 'DeveloperApplication', 'GitHub contributions transformed into 3D cities, solar systems and speed circuits.', 'https://git.3asy.app/'],
  ],
};

function applicationList(items, name, organizationId, options = {}) {
  return {
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map(([applicationName, applicationCategory, description, url], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: applicationName,
        applicationCategory,
        operatingSystem: 'Web',
        description,
        url,
        publisher: { '@id': organizationId },
        ...options,
      },
    })),
  };
}

function structuredData(page, canonicalUrl) {
  const organizationId = 'https://www.3festo.com/#organization';
  const studioId = 'https://www.3asy.it/#3fe-dev';
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
        knowsAbout: ['Artificial intelligence', 'Additive manufacturing', 'HR automation', 'Business process automation'],
        sameAs: ['https://www.any3dp.com/', 'https://github.com/3FESTO/3ASY-LANDING'],
        subOrganization: { '@id': studioId },
        brand: { '@id': brandId },
      },
      {
        '@type': 'Organization',
        '@id': studioId,
        name: '3FE DEV',
        url: 'https://www.3asy.it/',
        description: page.language === 'it' ? 'Il team di sviluppo software di 3FESTO.' : 'The software development team at 3FESTO.',
        parentOrganization: { '@id': organizationId },
        brand: { '@id': brandId },
      },
      {
        '@type': 'Brand',
        '@id': brandId,
        name: '3ASY',
        url: 'https://www.3asy.it/',
        slogan: page.language === 'it' ? 'Strumenti digitali, costruiti su problemi reali' : 'Digital tools, built around real problems',
        parentOrganization: { '@id': studioId },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: 'https://www.3asy.it/',
        name: '3ASY',
        inLanguage: ['it', 'en'],
        publisher: { '@id': studioId },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: page.title,
        description: page.description,
        inLanguage: page.language,
        isPartOf: { '@id': websiteId },
        about: [{ '@id': brandId }, { '@id': studioId }, { '@id': organizationId }],
        dateModified: '2026-09-30',
        mainEntity: [
          applicationList(
            productData[page.language],
            page.language === 'it' ? 'I due prodotti 3ASY' : 'The two 3ASY products',
            studioId,
          ),
          applicationList(
            projectData[page.language],
            page.language === 'it' ? 'I due progetti pubblici 3ASY' : 'The two public 3ASY projects',
            studioId,
            { isAccessibleForFree: true },
          ),
        ],
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
