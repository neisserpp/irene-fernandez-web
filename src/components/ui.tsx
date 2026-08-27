import type { ReactNode } from "react";
import { Link } from 'react-router-dom'

type Tone = "light" | "bone" | "night";

const toneClasses: Record<Tone, string> = {
  light: "bg-bone-50 text-ink-900",
  bone: "bg-bone-100 text-ink-900",
  night: "bg-night-900 text-bone-100",
};

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full min-w-0 max-w-[1320px] px-5 sm:px-6 md:px-10 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  tone = "light",
  id,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${toneClasses[tone]} relative overflow-hidden py-20 md:py-28 lg:py-32 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "petrol",
}: {
  children: ReactNode;
  tone?: "petrol" | "terra" | "bone";
}) {
  const color =
    tone === "terra"
      ? "text-terra-600"
      : tone === "bone"
        ? "text-bone-300"
        : "text-petrol-600";
  return (
    <p className={`eyebrow flex items-center gap-3 ${color}`}>
      <span aria-hidden className="h-1 w-9 rounded-full bg-current opacity-70" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "petrol",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "petrol" | "terra" | "bone";
  align?: "left" | "center";
}) {
  return (
    <header className={`max-w-4xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className="editorial-rule mt-5 text-3xl leading-[1.12] md:text-[2.75rem] lg:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700 [.bg-night-900_&]:text-bone-300 md:text-xl">
          {intro}
        </p>
      ) : null}
    </header>
  );
}

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-300 focus-visible:ring-2 focus-visible:ring-terra-500 focus-visible:ring-offset-2";

const buttonVariants = {
  primary:
    "bg-gradient-to-br from-petrol-500 to-petrol-700 text-bone-50 shadow-[0_10px_24px_rgba(31,79,70,0.28)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(31,79,70,0.36)]",
  outline:
    "border border-night-900/25 text-night-900 hover:-translate-y-0.5 hover:border-night-900 hover:bg-night-900 hover:text-bone-50",
  outlineLight:
    "border border-bone-100/35 text-bone-100 hover:-translate-y-0.5 hover:border-bone-100 hover:bg-bone-100 hover:text-night-900",
  terra: "bg-gradient-to-br from-terra-500 to-terra-700 text-bone-50 shadow-[0_10px_24px_rgba(115,61,78,0.28)] hover:-translate-y-0.5 hover:shadow-lg",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  external,
}: {
  to: string
  children: ReactNode
  variant?: ButtonVariant
  external?: boolean
}) {
  const className = `${buttonBase} ${buttonVariants[variant]}`
  if (external) return <a href={to} target="_blank" rel="noreferrer" className={className}>{children}</a>
  return <Link to={to} className={className}>{children}</Link>
}

export function Quote({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "night";
}) {
  return (
    <blockquote
      className={`border-l-4 pl-6 text-xl leading-relaxed md:text-2xl md:leading-[1.5] ${
        tone === "night" ? "border-terra-500 text-bone-100" : "border-terra-600 text-night-900"
      }`}
    >
      {children}
    </blockquote>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <header className="grain slash-panel wave-foot relative overflow-hidden bg-night-900 pt-32 pb-28 text-bone-100 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36">
      <div
        aria-hidden
        className="deco-orb -right-24 top-12 h-80 w-80 bg-petrol-600/15 blur-3xl"
      />
      <div
        aria-hidden
        className="deco-orb bottom-16 left-[18%] h-40 w-40 bg-terra-600/10 blur-2xl"
      />
      <Container className="relative z-10">
        <div className="max-w-5xl">
          <Eyebrow tone="bone">{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.06] md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone-300 md:text-xl">
              {intro}
            </p>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className={`h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <path
        d="M3 10h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
