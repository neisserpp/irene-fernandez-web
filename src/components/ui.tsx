import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Tone = 'light' | 'bone' | 'night'

const toneClasses: Record<Tone, string> = {
  light: 'bg-bone-50 text-ink-900',
  bone: 'bg-bone-100 text-ink-900',
  night: 'bg-night-900 text-bone-100',
}

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

export function Section({
  children,
  tone = 'light',
  id,
  className = '',
}: {
  children: ReactNode
  tone?: Tone
  id?: string
  className?: string
}) {
  return (
    <section id={id} className={`${toneClasses[tone]} relative overflow-hidden py-20 md:py-28 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({
  children,
  tone = 'petrol',
}: {
  children: ReactNode
  tone?: 'petrol' | 'terra' | 'bone'
}) {
  const color =
    tone === 'terra'
      ? 'text-terra-600'
      : tone === 'bone'
        ? 'text-bone-300'
        : 'text-petrol-600'
  return (
    <p className={`eyebrow flex items-center gap-3 ${color}`}>
      <span aria-hidden className="h-px w-9 bg-current opacity-55" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'petrol',
  align = 'left',
}: {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  tone?: 'petrol' | 'terra' | 'bone'
  align?: 'left' | 'center'
}) {
  return (
    <header className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
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
  )
}

const buttonBase =
  'group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold tracking-[0.08em] uppercase transition-all duration-300 focus-visible:ring-2 focus-visible:ring-terra-500 focus-visible:ring-offset-2'

const buttonVariants = {
  primary: 'bg-petrol-600 text-bone-50 hover:-translate-y-0.5 hover:bg-petrol-700 hover:shadow-lg',
  outline:
    'border border-night-900/25 text-night-900 hover:-translate-y-0.5 hover:border-night-900 hover:bg-night-900 hover:text-bone-50',
  outlineLight:
    'border border-bone-100/35 text-bone-100 hover:-translate-y-0.5 hover:border-bone-100 hover:bg-bone-100 hover:text-night-900',
  terra: 'bg-terra-600 text-bone-50 hover:-translate-y-0.5 hover:bg-terra-700 hover:shadow-lg',
} as const

export type ButtonVariant = keyof typeof buttonVariants

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
  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export function Quote({
  children,
  tone = 'light',
}: {
  children: ReactNode
  tone?: 'light' | 'night'
}) {
  return (
    <blockquote
      className={`border-l-2 pl-6 text-xl leading-relaxed md:text-2xl md:leading-[1.5] ${
        tone === 'night' ? 'border-terra-500 text-bone-100' : 'border-terra-600 text-night-900'
      }`}
    >
      {children}
    </blockquote>
  )
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
}) {
  return (
    <header className="grain relative overflow-hidden bg-night-900 pt-32 pb-20 text-bone-100 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
      <div aria-hidden className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-petrol-600/15 blur-3xl" />
      <div aria-hidden className="absolute bottom-0 left-0 h-px w-1/2 bg-terra-600" />
      <Container className="relative">
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
  )
}

export function ArrowRight({ className = '' }: { className?: string }) {
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
        strokeLinecap="square"
      />
    </svg>
  )
}
