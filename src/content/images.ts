/**
 * Banco de imágenes de Irene.
 *
 * Las fotografías reales son opcionales para el contenido editorial.
 * Los slots conservan rutas locales definitivas para poder incorporar fotografías
 * propias sin cambiar la estructura de los componentes.
 */
export const imageSlots = {
  hero: {
    src: '',
    alt: 'Fotografía profesional de Irene Fernández Prados',
    local: '/images/irene/irene-hero.webp',
    purpose: 'Hero principal de la portada',
  },
  portrait: {
    src: '',
    alt: 'Retrato profesional de Irene Fernández Prados',
    local: '/images/irene/irene-portrait.webp',
    purpose: 'Bloque Sobre mí / perfil editorial',
  },
  speaking: {
    src: '',
    alt: 'Irene Fernández Prados durante una ponencia o evento profesional',
    local: '/images/irene/irene-speaking.webp',
    purpose: 'Participaciones, eventos y conferencias',
  },
  meeting: {
    src: '',
    alt: 'Irene Fernández Prados en una reunión o entorno de trabajo',
    local: '/images/irene/irene-meeting.webp',
    purpose: 'Transformación, liderazgo y casos',
  },
  detail: {
    src: '',
    alt: 'Detalle editorial relacionado con transformación y liderazgo',
    local: '/images/irene/irene-detail.webp',
    purpose: 'Bloques editoriales secundarios',
  },
} as const
