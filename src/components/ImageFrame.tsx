import type { CSSProperties } from 'react'
import type { imageSlots } from '../content/images'

type ImageSlot = (typeof imageSlots)[keyof typeof imageSlots]

type ImageFrameProps = {
  slot: ImageSlot
  className?: string
  priority?: boolean
  aspect?: 'portrait' | 'landscape' | 'wide'
  overlay?: boolean
}

export default function ImageFrame({
  slot,
  className = '',
  priority = false,
  aspect = 'portrait',
  overlay = true,
}: ImageFrameProps) {
  const ratio =
    aspect === 'landscape'
      ? 'aspect-[4/3]'
      : aspect === 'wide'
        ? 'aspect-[16/9]'
        : 'aspect-[4/5]'

  const style: CSSProperties = { '--image-url': `url("${slot.src}")` } as CSSProperties

  return (
    <figure className={`image-frame ${ratio} ${className}`} style={style}>
      <img
        src={slot.src}
        alt={slot.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      {overlay ? <span aria-hidden className="image-frame__veil" /> : null}
      <figcaption className="image-frame__caption">
        <span>Imagen provisional</span>
        <span>{slot.local}</span>
      </figcaption>
    </figure>
  )
}
