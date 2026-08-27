import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "./content/site";

const BASE_URL = "https://irenefernandezprados.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

type PageSeo = {
  title: string;
  description: string;
  eyebrow: string;
  type?: "WebPage" | "ProfilePage";
};

const pages: Record<string, PageSeo> = {
  "/": {
    title: "Irene Fernández Prados | CEO de EssensUp, SAP y transformación digital",
    description:
      "Irene Fernández Prados, CEO de EssensUp e ingeniera informática. Más de 17 años liderando transformación digital, SAP, liderazgo y estrategia empresarial.",
    eyebrow: "Inicio",
  },
  "/vision": {
    title: "Irene Fernández Prados | Visión sobre transformación digital, SAP y liderazgo",
    description:
      "Conoce la visión de Irene Fernández Prados sobre transformación digital, SAP, liderazgo, talento y las decisiones que hacen funcionar mejor una empresa.",
    eyebrow: "Visión",
  },
  "/experiencia": {
    title: "Irene Fernández Prados | Experiencia en SAP, transformación digital y dirección",
    description:
      "Conoce la trayectoria de Irene Fernández Prados: más de 17 años en SAP y transformación digital, dirección de programas y creación de EssensUp.",
    eyebrow: "Experiencia",
  },
  "/ideas": {
    title: "Irene Fernández Prados | Ideas sobre SAP, liderazgo y transformación empresarial",
    description:
      "Lee las ideas de Irene Fernández Prados sobre transformación SAP, liderazgo, talento, diversidad y estrategia empresarial desde proyectos reales.",
    eyebrow: "Ideas",
  },
  "/participaciones": {
    title: "Irene Fernández Prados | Participaciones, conferencias y advisory",
    description:
      "Conoce las conferencias, conversaciones ejecutivas, consejos y advisory en los que Irene Fernández Prados aporta experiencia en tecnología, SAP y liderazgo.",
    eyebrow: "Participaciones",
  },
  "/sobre-mi": {
    title: "Irene Fernández Prados | Perfil profesional, liderazgo y trayectoria",
    description:
      "Conoce a Irene Fernández Prados, ingeniera informática, ejecutiva y CEO de EssensUp, y su enfoque sobre liderazgo, transformación y construcción de compañías.",
    eyebrow: "Sobre mí",
    type: "ProfilePage",
  },
  "/contacto": {
    title: "Irene Fernández Prados | Contacto profesional y colaboraciones",
    description:
      "Contacta con Irene Fernández Prados para consejos, conferencias, colaboraciones, advisory o conversaciones sobre transformación digital y SAP.",
    eyebrow: "Contacto",
  },
};

function upsertMeta(nameOrProperty: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${nameOrProperty}="${key}"]`);
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

    document.documentElement.lang = "es";
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", isIndexable ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" : "noindex, follow");
    upsertMeta("name", "author", site.name);
    upsertMeta("name", "theme-color", "#0e1b2a");

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:locale", "es_ES");
    upsertMeta("property", "og:site_name", site.name);
    upsertMeta("property", "og:image", DEFAULT_IMAGE);
    upsertMeta("property", "og:image:alt", `${site.name} — ${page?.eyebrow ?? "perfil profesional"}`);
    upsertMeta("property", "og:image:type", "image/png");
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", DEFAULT_IMAGE);
    upsertMeta("name", "twitter:image:alt", `${site.name} — ${page?.eyebrow ?? "perfil profesional"}`);

    upsertLink("canonical", canonicalUrl);

    const personId = `${BASE_URL}/#person`;
    const websiteId = `${BASE_URL}/#website`;
    const graph: Record<string, unknown>[] = [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: BASE_URL,
        name: site.name,
        inLanguage: "es-ES",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        jobTitle: "CEO de EssensUp",
        description: site.credential,
        url: BASE_URL,
        image: `${BASE_URL}/images/irene/irene-hero.webp`,
        sameAs: [site.linkedin],
        worksFor: {
          "@type": "Organization",
          name: "EssensUp",
          url: site.essensup,
        },
        knowsAbout: [
          "Transformación digital",
          "SAP",
          "SAP S/4HANA",
          "Liderazgo empresarial",
          "Gestión del cambio",
          "Talento tecnológico",
          "Estrategia empresarial",
          "Diversidad e inclusión",
        ],
      },
      {
        "@type": page?.type ?? "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: "es-ES",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/irene/irene-hero.webp`,
        },
        ...(pathname === "/" ? { mainEntity: { "@id": personId } } : {}),
      },
    ];

    if (page?.type === "ProfilePage") {
      graph[2] = {
        ...graph[2],
        mainEntity: { "@id": personId },
      };
    }

    if (pathname !== "/" && page) {
      graph.push({
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.eyebrow,
            item: canonicalUrl,
          },
        ],
      });
    }

    setJsonLd({ "@context": "https://schema.org", "@graph": graph });
  }, [pathname]);

  return null;
}
