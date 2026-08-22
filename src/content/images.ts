/**
 * Banco temporal de imágenes.
 *
 * Estas URLs son referencias visuales provisionales para maquetación.
 * Cuando tengamos las fotografías reales de Irene, sustituir únicamente `src`
 * por los archivos locales correspondientes dentro de /public/images.
 */
export const imageSlots = {
  hero: {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=85',
    alt: 'Retrato profesional de Irene Fernández',
    local: '/images/irene/irene-hero.webp',
    purpose: 'Hero principal de la portada',
  },
  portrait: {
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
    alt: 'Retrato editorial profesional',
    local: '/images/irene/irene-portrait.webp',
    purpose: 'Bloque Sobre mí / perfil editorial',
  },
  speaking: {
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=85',
    alt: 'Ponencia ante una audiencia profesional',
    local: '/images/irene/irene-speaking.webp',
    purpose: 'Participaciones, eventos y conferencias',
  },
  meeting: {
    src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
    alt: 'Equipo directivo en una reunión de trabajo',
    local: '/images/irene/irene-meeting.webp',
    purpose: 'Transformación, liderazgo y casos',
  },
  detail: {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
    alt: 'Trabajo estratégico en entorno profesional',
    local: '/images/irene/irene-detail.webp',
    purpose: 'Bloques editoriales secundarios',
  },
} as const
