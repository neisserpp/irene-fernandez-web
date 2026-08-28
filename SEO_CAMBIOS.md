# SEO técnico reforzado — Irene Fernández Prados

## Cambios incluidos
- SEO prerenderizado para las 7 rutas indexables.
- Titles y meta descriptions únicos por URL, orientados a la marca personal.
- `robots` y `googlebot` configurados para permitir indexación en las 7 rutas.
- Canonical absoluto y único por ruta.
- Open Graph completo: URL, imagen, dimensiones, tipo y descripción.
- Twitter Cards completas.
- JSON-LD unificado para `WebSite`, `Person`, `Organization`, `WebPage`, `ProfilePage`, `CollectionPage` y `ContactPage` según corresponda.
- Entidad central `Irene Fernández Prados` conectada con EssensUp y LinkedIn mediante relaciones Schema.org.
- `knowsAbout` reforzado con SAP, S/4HANA, ERP, transformación digital, liderazgo, gestión del cambio, talento y estrategia.
- Eliminada del marcado estructurado la referencia a las imágenes locales vacías; el marcado usa el OG publicado y real.
- `llms.txt` añadido como recurso complementario para agentes/LLM. No sustituye robots.txt ni sitemap y no es una garantía de ranking en Google.
- Sitemap y robots.txt conservados con las 7 URLs.

## Verificación
El prerenderizador se ejecutó sobre un HTML de prueba y generó correctamente:
- `/`
- `/vision`
- `/experiencia`
- `/ideas`
- `/participaciones`
- `/sobre-mi`
- `/contacto`

Cada salida comprobada contiene su title, robots indexable y canonical correspondiente.

## Importante
Este paquete no contiene `node_modules` ni una build `dist` final. En el equipo local:

```bash
npm install
npm run build
```

Después despliega la nueva build.

Google no permite garantizar una posición #1: el ranking depende también de autoridad, enlaces, contenido, competencia, señales externas y tiempo. Este paquete deja reforzada la base técnica y semántica para que Google pueda entender e indexar el sitio correctamente.
