import type { imageSlots } from '../content/images'

type ImageSlot = (typeof imageSlots)[keyof typeof imageSlots]

type ImageFrameProps = {
  slot: ImageSlot
  className?: string
  priority?: boolean
  aspect?: 'portrait' | 'landscape' | 'wide'
  overlay?: boolean
}

/**
 * Marco editorial para fotografías.
 *
 * Mientras no estén cargadas las fotografías reales, no se muestran imágenes
 * externas ni fotos de stock: se mantiene un placeholder de marca con la ruta
 * local definitiva para facilitar la sustitución posterior.
 */
export default function ImageFrame({
  slot,
  className = '',
  aspect = 'portrait',
}: ImageFrameProps) {
  const ratio =
    aspect === 'landscape'
      ? 'aspect-[4/3]'
      : aspect === 'wide'
        ? 'aspect-[16/9]'
        : 'aspect-[4/5]'

  return (
    <figure className={`image-frame ${ratio} ${className}`}>
      {slot.src ? (
        <img
          src={slot.src}
          alt={slot.alt}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="image-placeholder" aria-label={`Espacio reservado para ${slot.purpose}`}>
          <span aria-hidden className="image-placeholder__shape image-placeholder__shape--one" />
          <span aria-hidden className="image-placeholder__shape image-placeholder__shape--two" />
          <div className="image-placeholder__content">
            <span className="eyebrow text-bone-100">Fotografía de Irene</span>
            <span className="mt-3 block max-w-[220px] font-display text-xl leading-tight text-bone-50">
              {slot.purpose}
            </span>
            <span className="mt-5 block border-t border-white/15 pt-3 text-[9px] font-bold tracking-[0.14em] text-bone-300 uppercase">
              {slot.local}
            </span>
          </div>
        </div>
      )}
    </figure>
  )
}
