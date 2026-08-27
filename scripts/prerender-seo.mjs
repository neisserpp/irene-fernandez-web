import fs from 'node:fs'
import path from 'node:path'

const DIST = path.resolve('dist')
const BASE_URL = 'https://irenefernandezprados.com'
const IMAGE = `${BASE_URL}/images/irene/irene-hero.webp`
const OG_IMAGE = `${BASE_URL}/og-image.png`

const pages = {
  '/': {
    title: 'Irene Fernández Prados | CEO de EssensUp, SAP y transformación digital',
    description: 'Irene Fernández Prados, CEO de EssensUp e ingeniera informática. Más de 17 años liderando transformación digital, SAP, liderazgo y estrategia empresarial.',
    eyebrow: 'Inicio',
    type: 'WebPage',
  },
  '/vision': {
    title: 'Irene Fernández Prados | Visión sobre transformación digital, SAP y liderazgo',
    description: 'Conoce la visión de Irene Fernández Prados sobre transformación digital, SAP, liderazgo, talento y las decisiones que hacen funcionar mejor una empresa.',
    eyebrow: 'Visión',
    type: 'WebPage',
  },
  '/experiencia': {
    title: 'Irene Fernández Prados | Experiencia en SAP, transformación digital y dirección',
    description: 'Conoce la trayectoria de Irene Fernández Prados: más de 17 años en SAP y transformación digital, dirección de programas y creación de EssensUp.',
    eyebrow: 'Experiencia',
    type: 'WebPage',
  },
  '/ideas': {
    title: 'Irene Fernández Prados | Ideas sobre SAP, liderazgo y transformación empresarial',
    description: 'Lee las ideas de Irene Fernández Prados sobre transformación SAP, liderazgo, talento, diversidad y estrategia empresarial desde proyectos reales.',
    eyebrow: 'Ideas',
    type: 'WebPage',
  },
  '/participaciones': {
    title: 'Irene Fernández Prados | Participaciones, conferencias y advisory',
    description: 'Conoce las conferencias, conversaciones ejecutivas, consejos y advisory en los que Irene Fernández Prados aporta experiencia en tecnología, SAP y liderazgo.',
    eyebrow: 'Participaciones',
    type: 'WebPage',
  },
  '/sobre-mi': {
    title: 'Irene Fernández Prados | Perfil profesional, liderazgo y trayectoria',
    description: 'Conoce a Irene Fernández Prados, ingeniera informática, ejecutiva y CEO de EssensUp, y su enfoque sobre liderazgo, transformación y construcción de compañías.',
    eyebrow: 'Sobre mí',
    type: 'ProfilePage',
  },
  '/contacto': {
    title: 'Irene Fernández Prados | Contacto profesional y colaboraciones',
    description: 'Contacta con Irene Fernández Prados para consejos, conferencias, colaboraciones, advisory o conversaciones sobre transformación digital y SAP.',
    eyebrow: 'Contacto',
    type: 'WebPage',
  },
}

function escapeJsonForHtml(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

function graphFor(route, page) {
  const canonical = `${BASE_URL}${route === '/' ? '/' : route}`
  const personId = `${BASE_URL}/#person`
  const websiteId = `${BASE_URL}/#website`

  const graph = [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${BASE_URL}/`,
      name: 'Irene Fernández Prados',
      inLanguage: 'es-ES',
      publisher: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: 'Irene Fernández Prados',
      url: `${BASE_URL}/`,
      image: IMAGE,
      jobTitle: 'CEO de EssensUp',
      description: 'CEO de EssensUp, ingeniera informática y ejecutiva con más de 17 años de experiencia en transformación digital y SAP.',
      sameAs: ['https://www.linkedin.com/in/irenefernandezprados/'],
      worksFor: {
        '@type': 'Organization',
        name: 'EssensUp',
        url: 'https://www.essensup.com',
      },
      knowsAbout: [
        'Transformación digital',
        'SAP',
        'SAP S/4HANA',
        'Liderazgo empresarial',
        'Gestión del cambio',
        'Talento tecnológico',
        'Estrategia empresarial',
        'Diversidad e inclusión',
      ],
    },
    {
      '@type': page.type,
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: 'es-ES',
      isPartOf: { '@id': websiteId },
      about: { '@id': personId },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: IMAGE,
      },
      ...(route === '/' || page.type === 'ProfilePage'
        ? { mainEntity: { '@id': personId } }
        : {}),
    },
  ]

  if (route !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: page.eyebrow, item: canonical },
      ],
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

function replaceMeta(html, attr, key, content) {
  const escapedKey = key.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')
  const regex = new RegExp(`<meta\\s+${attr}=["']${escapedKey}["'][^>]*>`, 'i')
  const tag = `<meta ${attr}="${key}" content="${content.replace(/"/g, '&quot;')}">`
  return regex.test(html) ? html.replace(regex, tag) : html.replace('</head>', `  ${tag}\n  </head>`)
}

function replaceLink(html, rel, href) {
  const regex = new RegExp(`<link\\s+rel=["']${rel}["'][^>]*>`, 'i')
  const tag = `<link rel="${rel}" href="${href}">`
  return regex.test(html) ? html.replace(regex, tag) : html.replace('</head>', `  ${tag}\n  </head>`)
}

function replaceTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`)
}

function replaceJsonLd(html, data) {
  const json = escapeJsonForHtml(data)
  const block = `<script type="application/ld+json">${json}</script>`
  const regex = /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi
  return regex.test(html) ? html.replace(regex, block) : html.replace('</head>', `  ${block}\n  </head>`)
}

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  throw new Error('No existe dist/index.html. Ejecuta vite build antes de este script.')
}

const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')

for (const [route, page] of Object.entries(pages)) {
  const canonical = `${BASE_URL}${route === '/' ? '/' : route}`
  let html = baseHtml
  html = replaceTitle(html, page.title)
  html = replaceMeta(html, 'name', 'description', page.description)
  html = replaceMeta(html, 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
  html = replaceMeta(html, 'name', 'author', 'Irene Fernández Prados')
  html = replaceMeta(html, 'property', 'og:title', page.title)
  html = replaceMeta(html, 'property', 'og:description', page.description)
  html = replaceMeta(html, 'property', 'og:type', 'website')
  html = replaceMeta(html, 'property', 'og:url', canonical)
  html = replaceMeta(html, 'property', 'og:site_name', 'Irene Fernández Prados')
  html = replaceMeta(html, 'property', 'og:image', OG_IMAGE)
  html = replaceMeta(html, 'property', 'og:image:alt', `Irene Fernández Prados — ${page.eyebrow}`)
  html = replaceMeta(html, 'name', 'twitter:title', page.title)
  html = replaceMeta(html, 'name', 'twitter:description', page.description)
  html = replaceMeta(html, 'name', 'twitter:image', OG_IMAGE)
  html = replaceMeta(html, 'name', 'twitter:image:alt', `Irene Fernández Prados — ${page.eyebrow}`)
  html = replaceLink(html, 'canonical', canonical)
  html = replaceJsonLd(html, graphFor(route, page))

  const outputDir = route === '/' ? DIST : path.join(DIST, route.slice(1))
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'index.html'), html)
}

console.log(`SEO prerendered for ${Object.keys(pages).length} routes.`)
