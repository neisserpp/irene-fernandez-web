import { useState } from "react";
import type { imageSlots } from "../content/images";

type ImageSlot = (typeof imageSlots)[keyof typeof imageSlots];

type ImageFrameProps = {
  slot: ImageSlot;
  className?: string;
  priority?: boolean;
  aspect?: "portrait" | "landscape" | "wide";
  overlay?: boolean;
};

export default function ImageFrame({
  slot,
  className = "",
  priority = false,
  aspect = "portrait",
  overlay = false,
}: ImageFrameProps) {
  const [imageError, setImageError] = useState(false);

  const ratio =
    aspect === "landscape"
      ? "aspect-[4/3]"
      : aspect === "wide"
        ? "aspect-[16/9]"
        : "aspect-[4/5]";

  const imageSrc = slot.src || slot.local;
  const showImage = Boolean(imageSrc) && !imageError;

  return (
    <figure className={`image-frame ${ratio} ${className}`}>
      {showImage ? (
        <>
          <img
            src={imageSrc}
            alt={slot.alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onError={() => setImageError(true)}
          />
          {overlay && <span className="image-frame__veil" aria-hidden="true" />}
        </>
      ) : (
        <div
          className="image-placeholder"
          aria-label={`Espacio reservado para ${slot.purpose}`}
        >
          <span
            aria-hidden
            className="image-placeholder__shape image-placeholder__shape--one"
          />
          <span
            aria-hidden
            className="image-placeholder__shape image-placeholder__shape--two"
          />
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
  );
}
