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
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>
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
    <section id={id} className={`${toneClasses[tone]} py-20 md:py-28 ${className}`}>
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
      <span aria-hidden className="h-px w-8 bg-current opacity-50" />
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
    <header
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow ? (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className="mt-5 text-3xl leading-[1.15] md:text-[2.6rem]">{title}</h2>
      {intro ? (
        <p className="mt-5 text-lg leading-relaxed text-ink-700 [.bg-night-900_&]:text-bone-300">
          {intro}
        </p>
      ) : null}
    </header>
  )
}

const buttonBase =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold tracking-[0.08em] uppercase transition-colors duration-200'

const buttonVariants = {
  primary: 'bg-petrol-600 text-bone-50 hover:bg-petrol-700',
  outline:
    'border border-night-900/25 text-night-900 hover:border-night-900 hover:bg-night-900 hover:text-bone-50',
  outlineLight:
    'border border-bone-100/35 text-bone-100 hover:border-bone-100 hover:bg-bone-100 hover:text-night-900',
  terra: 'bg-terra-500 text-bone-50 hover:bg-terra-600',
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
      className={`border-l pl-6 text-xl leading-relaxed md:text-2xl md:leading-[1.5] ${
        tone === 'night'
          ? 'border-terra-500 text-bone-100'
          : 'border-terra-500 text-night-900'
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
    <header className="bg-night-900 pt-32 pb-20 text-bone-100 md:pt-40 md:pb-28">
      <Container>
        <div className="max-w-4xl">
          <Eyebrow tone="bone">{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl leading-[1.1] md:text-6xl md:leading-[1.05]">
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
      className={`h-3.5 w-3.5 ${className}`}
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
