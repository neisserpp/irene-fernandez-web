import fs from 'node:fs'
import path from 'node:path'

const DIST = path.resolve('dist')
const BASE_URL = 'https://irenefernandezprados.com'
const OG_IMAGE = `${BASE_URL}/og-image.png`

const site = {
  name: 'Irene Fernández Prados',
  tagline: 'Irene Fernández Prados ayuda a las empresas a transformar tecnología, organizaciones y talento para convertir el cambio en resultados reales.',
  credential: 'CEO de EssensUp, ingeniera informática y ejecutiva con más de 17 años de experiencia en transformación digital y SAP.',
  email: 'Irene.fernandez@essensup.com',
  linkedin: 'https://www.linkedin.com/in/irenefernandezprados/',
  essensup: 'https://www.essensup.com',
}

const pages = {
  '/': {
    title: 'Irene Fernández Prados | CEO de EssensUp y SAP',
    description: 'Irene Fernández Prados, CEO de EssensUp e ingeniera informática, especializada en SAP, transformación digital, liderazgo y estrategia empresarial.',
    eyebrow: 'Inicio',
    type: 'WebPage',
  },
  '/vision': {
    title: 'Irene Fernández Prados | Transformación digital y liderazgo',
    description: 'La visión de Irene Fernández Prados sobre transformación digital, SAP, liderazgo, talento y las decisiones que convierten el cambio en resultados empresariales.',
    eyebrow: 'Visión',
    type: 'WebPage',
  },
  '/experiencia': {
    title: 'Irene Fernández Prados | Experiencia en SAP y dirección',
    description: 'Trayectoria de Irene Fernández Prados en SAP y transformación digital: dirección de programas, proyectos internacionales y creación de EssensUp.',
    eyebrow: 'Experiencia',
    type: 'WebPage',
  },
  '/ideas': {
    title: 'Irene Fernández Prados | Ideas sobre SAP y liderazgo',
    description: 'Ideas y análisis de Irene Fernández Prados sobre SAP, transformación empresarial, liderazgo, talento y diversidad desde la experiencia profesional.',
    eyebrow: 'Ideas',
    type: 'CollectionPage',
  },
  '/participaciones': {
    title: 'Irene Fernández Prados | Conferencias y advisory',
    description: 'Conferencias, conversaciones ejecutivas, consejos y advisory de Irene Fernández Prados sobre tecnología, SAP, transformación y liderazgo empresarial.',
    eyebrow: 'Participaciones',
    type: 'CollectionPage',
  },
  '/sobre-mi': {
    title: 'Irene Fernández Prados | Perfil profesional y trayectoria',
    description: 'Perfil profesional de Irene Fernández Prados: ingeniera informática, CEO de EssensUp y ejecutiva especializada en transformación digital, SAP y liderazgo.',
    eyebrow: 'Sobre mí',
    type: 'ProfilePage',
  },
  '/contacto': {
    title: 'Irene Fernández Prados | Contacto profesional',
    description: 'Contacta con Irene Fernández Prados para conferencias, consejos, colaboraciones, advisory y conversaciones sobre transformación digital y SAP.',
    eyebrow: 'Contacto',
    type: 'ContactPage',
  },
}

function escapeJsonForHtml(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

function graphFor(route, page) {
  const canonical = `${BASE_URL}${route === '/' ? '/' : route}`
  const personId = `${BASE_URL}/#person`
  const websiteId = `${BASE_URL}/#website`
  const organizationId = `${BASE_URL}/#essensup`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${BASE_URL}/`,
        name: site.name,
        description: site.tagline,
        inLanguage: 'es-ES',
        publisher: { '@id': personId },
      },
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'EssensUp',
        url: site.essensup,
        description: 'Consultora especializada en transformación digital y proyectos SAP.',
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: site.name,
        givenName: 'Irene',
        familyName: 'Fernández Prados',
        url: `${BASE_URL}/`,
        jobTitle: 'CEO de EssensUp',
        description: site.credential,
        email: site.email,
        sameAs: [site.linkedin],
        worksFor: { '@id': organizationId },
        knowsAbout: [
          'Transformación digital',
          'SAP',
          'SAP S/4HANA',
          'ERP',
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
        author: { '@id': personId },
        about: { '@id': personId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: OG_IMAGE,
          width: 1200,
          height: 630,
        },
        ...(route === '/' || page.type === 'ProfilePage'
          ? { mainEntity: { '@id': personId } }
          : {}),
      },
    ],
  }
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
  const robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  let html = baseHtml
  html = replaceTitle(html, page.title)
  html = replaceMeta(html, 'name', 'description', page.description)
  html = replaceMeta(html, 'name', 'robots', robots)
  html = replaceMeta(html, 'name', 'googlebot', robots)
  html = replaceMeta(html, 'name', 'author', site.name)
  html = replaceMeta(html, 'property', 'og:title', page.title)
  html = replaceMeta(html, 'property', 'og:description', page.description)
  html = replaceMeta(html, 'property', 'og:type', 'website')
  html = replaceMeta(html, 'property', 'og:url', canonical)
  html = replaceMeta(html, 'property', 'og:locale', 'es_ES')
  html = replaceMeta(html, 'property', 'og:site_name', site.name)
  html = replaceMeta(html, 'property', 'og:image', OG_IMAGE)
  html = replaceMeta(html, 'property', 'og:image:secure_url', OG_IMAGE)
  html = replaceMeta(html, 'property', 'og:image:alt', `Irene Fernández Prados — ${page.eyebrow}`)
  html = replaceMeta(html, 'property', 'og:image:type', 'image/png')
  html = replaceMeta(html, 'property', 'og:image:width', '1200')
  html = replaceMeta(html, 'property', 'og:image:height', '630')
  html = replaceMeta(html, 'name', 'twitter:card', 'summary_large_image')
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
