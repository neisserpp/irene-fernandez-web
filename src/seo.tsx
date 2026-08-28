import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "./content/site";

const BASE_URL = "https://irenefernandezprados.com";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export type PageSeo = {
  title: string;
  description: string;
  eyebrow: string;
  type?: "WebPage" | "ProfilePage" | "CollectionPage" | "ContactPage";
};

/**
 * SEO editorial de cada URL indexable.
 * La misma configuración se replica en prerender-seo.mjs para que Google
 * reciba exactamente los mismos metadatos antes de ejecutar JavaScript.
 */
export const pages: Record<string, PageSeo> = {
  "/": {
    title: "Irene Fernández Prados | CEO de EssensUp y SAP",
    description:
      "Irene Fernández Prados, CEO de EssensUp e ingeniera informática, especializada en SAP, transformación digital, liderazgo y estrategia empresarial.",
    eyebrow: "Inicio",
  },
  "/vision": {
    title: "Irene Fernández Prados | Transformación digital y liderazgo",
    description:
      "La visión de Irene Fernández Prados sobre transformación digital, SAP, liderazgo, talento y las decisiones que convierten el cambio en resultados empresariales.",
    eyebrow: "Visión",
  },
  "/experiencia": {
    title: "Irene Fernández Prados | Experiencia en SAP y dirección",
    description:
      "Trayectoria de Irene Fernández Prados en SAP y transformación digital: dirección de programas, proyectos internacionales y creación de EssensUp.",
    eyebrow: "Experiencia",
  },
  "/ideas": {
    title: "Irene Fernández Prados | Ideas sobre SAP y liderazgo",
    description:
      "Ideas y análisis de Irene Fernández Prados sobre SAP, transformación empresarial, liderazgo, talento y diversidad desde la experiencia profesional.",
    eyebrow: "Ideas",
    type: "CollectionPage",
  },
  "/participaciones": {
    title: "Irene Fernández Prados | Conferencias y advisory",
    description:
      "Conferencias, conversaciones ejecutivas, consejos y advisory de Irene Fernández Prados sobre tecnología, SAP, transformación y liderazgo empresarial.",
    eyebrow: "Participaciones",
    type: "CollectionPage",
  },
  "/sobre-mi": {
    title: "Irene Fernández Prados | Perfil profesional y trayectoria",
    description:
      "Perfil profesional de Irene Fernández Prados: ingeniera informática, CEO de EssensUp y ejecutiva especializada en transformación digital, SAP y liderazgo.",
    eyebrow: "Sobre mí",
    type: "ProfilePage",
  },
  "/contacto": {
    title: "Irene Fernández Prados | Contacto profesional",
    description:
      "Contacta con Irene Fernández Prados para conferencias, consejos, colaboraciones, advisory y conversaciones sobre transformación digital y SAP.",
    eyebrow: "Contacto",
    type: "ContactPage",
  },
};

function upsertMeta(nameOrProperty: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${nameOrProperty}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(nameOrProperty, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function setJsonLd(data: unknown) {
  const id = "irene-seo-jsonld";
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function buildGraph(pathname: string, page: PageSeo | undefined) {
  const canonicalUrl = `${BASE_URL}${pathname === "/" ? "/" : pathname}`;
  const personId = `${BASE_URL}/#person`;
  const websiteId = `${BASE_URL}/#website`;
  const organizationId = `${BASE_URL}/#essensup`;
  const pageId = `${canonicalUrl}#webpage`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${BASE_URL}/`,
      name: site.name,
      description: site.tagline,
      inLanguage: "es-ES",
      publisher: { "@id": personId },
    },
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "EssensUp",
      url: site.essensup,
      description: "Consultora especializada en transformación digital y proyectos SAP.",
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      givenName: "Irene",
      familyName: "Fernández Prados",
      url: `${BASE_URL}/`,
      jobTitle: "CEO de EssensUp",
      description: site.credential,
      email: site.email,
      sameAs: [site.linkedin],
      worksFor: { "@id": organizationId },
      knowsAbout: [
        "Transformación digital",
        "SAP",
        "SAP S/4HANA",
        "ERP",
        "Liderazgo empresarial",
        "Gestión del cambio",
        "Talento tecnológico",
        "Estrategia empresarial",
        "Diversidad e inclusión",
      ],
    },
    {
      "@type": page?.type ?? "WebPage",
      "@id": pageId,
      url: canonicalUrl,
      name: page?.title ?? "Página no encontrada | Irene Fernández Prados",
      description:
        page?.description ??
        "La página solicitada no existe en la web de Irene Fernández Prados.",
      inLanguage: "es-ES",
      isPartOf: { "@id": websiteId },
      author: { "@id": personId },
      about: { "@id": personId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
      ...(pathname === "/" || page?.type === "ProfilePage"
        ? { mainEntity: { "@id": personId } }
        : {}),
    },
  ];

  return graph;
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname];
    const canonicalPath = page ? pathname : "/";
    const canonicalUrl = `${BASE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
    const isIndexable = Boolean(page);

    const title = page?.title ?? "Página no encontrada | Irene Fernández Prados";
    const description =
      page?.description ??
      "La página solicitada no existe en la web de Irene Fernández Prados.";
    const robots = isIndexable
      ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      : "noindex, follow";

    document.documentElement.lang = "es";
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "googlebot", robots);
    upsertMeta("name", "author", site.name);
    upsertMeta("name", "theme-color", "#0e1b2a");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:locale", "es_ES");
    upsertMeta("property", "og:site_name", site.name);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("property", "og:image:secure_url", OG_IMAGE);
    upsertMeta("property", "og:image:alt", `${site.name} — ${page?.eyebrow ?? "perfil profesional"}`);
    upsertMeta("property", "og:image:type", "image/png");
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", OG_IMAGE);
    upsertMeta("name", "twitter:image:alt", `${site.name} — ${page?.eyebrow ?? "perfil profesional"}`);

    upsertLink("canonical", canonicalUrl);

    setJsonLd({
      "@context": "https://schema.org",
      "@graph": buildGraph(pathname, page),
    });
  }, [pathname]);

  return null;
}
