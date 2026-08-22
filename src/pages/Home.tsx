import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ImageFrame from '../components/ImageFrame'
import {
  ArrowRight,
  ButtonLink,
  Container,
  Eyebrow,
  Quote,
  Section,
  SectionHeading,
} from '../components/ui'
import { imageSlots } from '../content/images'
import {
  authority,
  cases,
  closing,
  hero,
  ideas,
  manifesto,
  site,
  workAreas,
} from '../content/site'

function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-night-900 pt-32 pb-16 text-bone-100 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(31,79,70,0.22),transparent_34%),radial-gradient(circle_at_8%_80%,rgba(115,61,78,0.20),transparent_30%)]" />
      <div aria-hidden className="absolute right-0 top-0 hidden h-full w-[35%] border-l border-white/10 lg:block" />
      <Container className="relative">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <Eyebrow tone="bone">{site.name} · {site.role}</Eyebrow>
              <h1 className="mt-7 max-w-5xl text-[2.65rem] leading-[1.03] tracking-[-0.025em] sm:text-5xl md:text-6xl lg:text-[5.25rem]">
                Transformar una empresa no consiste solo en{' '}
                <span className="italic text-petrol-100">implantar tecnología</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone-300 md:text-xl">
                {hero.subtitle}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to={hero.primary.to}>
                  {hero.primary.label} <ArrowRight />
                </ButtonLink>
                <ButtonLink to={hero.secondary.to} variant="outlineLight">
                  {hero.secondary.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={160} className="lg:col-span-5 lg:pl-8">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div aria-hidden className="absolute -right-4 -top-4 h-24 w-24 border border-terra-500/60" />
              <ImageFrame slot={imageSlots.hero} priority aspect="portrait" className="relative z-10" />
              <div className="absolute -bottom-6 -left-5 z-20 max-w-[230px] border border-white/15 bg-night-900/95 p-5 backdrop-blur-md">
                <p className="eyebrow text-terra-500">Criterio · liderazgo · transformación</p>
                <p className="mt-3 font-display text-lg leading-snug text-bone-100">
                  Tecnología al servicio de decisiones que sí cambian el negocio.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function Authority() {
  return (
    <Section tone="bone" className="site-grid">
      <Reveal>
        <SectionHeading
          eyebrow="Sobre qué se sostiene"
          title="Credenciales con contexto, no cifras decorativas"
          intro="Cada dato responde a la misma pregunta: qué demuestra sobre mi criterio para acompañar una transformación."
        />
      </Reveal>
      <div className="mt-14 grid gap-px border border-bone-300 bg-bone-300 md:grid-cols-2 lg:grid-cols-3">
        {authority.map((item, i) => (
          <Reveal key={item.label} delay={i * 60}>
            <article className="group magnetic-card h-full bg-bone-100 p-7 md:p-9">
              <p className="number-mark font-display text-5xl leading-none text-petrol-600 md:text-6xl">
                {item.figure}
              </p>
              <p className="mt-5 font-display text-lg leading-snug text-night-900">{item.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.context}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Manifesto() {
  return (
    <Section tone="night" className="grain">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal direction="left" className="lg:col-span-4">
          <Eyebrow tone="bone">Mi punto de vista</Eyebrow>
          <h2 className="mt-6 text-3xl leading-tight md:text-4xl lg:text-5xl">
            Tres ideas que ordenan todo lo demás
          </h2>
          <Link
            to="/vision"
            className="group mt-8 inline-flex items-center gap-2 border-b border-terra-500 pb-1 text-xs font-bold tracking-[0.14em] uppercase transition-colors hover:text-terra-500"
          >
            Leer mi visión completa <ArrowRight />
          </Link>
        </Reveal>
        <div className="space-y-10 lg:col-span-8">
          {manifesto.map((line, i) => (
            <Reveal key={line} delay={i * 90} direction="right">
              <div className="flex gap-6 border-b border-white/10 pb-10 last:border-0">
                <span className="eyebrow mt-2 shrink-0 text-terra-500">0{i + 1}</span>
                <Quote tone="night">{line}</Quote>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

function WorkAreas() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Tres ámbitos de trabajo"
          title="Dónde aporto criterio"
          intro="No son servicios de una consultora individual: son los terrenos donde mi experiencia cambia la calidad de una decisión."
        />
      </Reveal>
      <div className="mt-14 grid gap-px overflow-hidden border border-bone-200 bg-bone-200 md:grid-cols-3">
        {workAreas.map((area, i) => (
          <Reveal key={area.title} delay={i * 80}>
            <article className="group magnetic-card relative h-full overflow-hidden bg-bone-50 p-8 md:p-10">
              <span aria-hidden className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-terra-100 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <p className="eyebrow text-terra-600">{area.number}</p>
                <h3 className="mt-6 text-2xl leading-snug">{area.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-700">{area.description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-petrol-600 uppercase">
                  Ver enfoque <ArrowRight />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function CasesInAction() {
  return (
    <Section tone="bone">
      <Reveal>
        <SectionHeading
          eyebrow="Experiencia en acción"
          title="Situaciones reales, decisiones concretas"
          intro="No una lista de clientes. Cinco tipos de problema que he dirigido, con la decisión que tomé y lo que aprendí."
        />
      </Reveal>
      <div className="mt-14 space-y-3">
        {cases.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <details className="group overflow-hidden border border-bone-300 bg-bone-100 transition-colors open:bg-bone-50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-7 md:p-9 [&::-webkit-details-marker]:hidden">
                <div className="flex items-start gap-5">
                  <span className="eyebrow mt-1 text-terra-600">Caso 0{i + 1}</span>
                  <h3 className="max-w-3xl font-display text-xl leading-snug md:text-2xl">{item.title}</h3>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-bone-300 text-xl text-petrol-600 transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="grid gap-8 border-t border-bone-200 px-7 pb-8 pt-7 md:grid-cols-2 md:px-9 md:pb-10 lg:grid-cols-4">
                {[
                  ['Reto', item.challenge],
                  ['Decisión', item.decision],
                  ['Resultado', item.result],
                  ['Aprendizaje', item.learning],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="eyebrow text-terra-600">{label}</p>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-700">{value}</p>
                  </div>
                ))}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Thinking() {
  const featured = ideas.find((i) => i.featured) ?? ideas[0]
  const rest = ideas.filter((i) => i !== featured).slice(0, 3)

  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Pensamiento y actualidad"
          title="Una selección, no un archivo cronológico"
          intro="Pocas piezas, pero con una tesis propia. El objetivo es propiedad intelectual reconocible, no volumen de publicaciones."
        />
      </Reveal>
      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        <Reveal direction="left" className="lg:col-span-7">
          <article className="magnetic-card flex h-full flex-col border border-bone-200 bg-bone-100 p-8 md:p-10">
            <div className="flex items-start justify-between gap-5">
              <p className="eyebrow text-terra-600">Artículo principal</p>
              <span className="eyebrow text-ink-500">{featured.readingTime}</span>
            </div>
            <h3 className="mt-6 text-3xl leading-tight md:text-4xl">{featured.title}</h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700">{featured.standfirst}</p>
            <div className="mt-10 border-t border-bone-300 pt-7">
              <Link
                to="/ideas"
                className="group inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-petrol-600 uppercase transition-colors hover:text-terra-600"
              >
                Leer la pieza <ArrowRight />
              </Link>
            </div>
          </article>
        </Reveal>
        <Reveal direction="right" className="lg:col-span-5">
          <ul className="divide-y divide-bone-200 border-y border-bone-200">
            {rest.map((item) => (
              <li key={item.title} className="group py-6">
                <Link to="/ideas" className="block">
                  <div className="flex items-center justify-between gap-4">
                    <p className="eyebrow text-petrol-600">{item.format}</p>
                    <ArrowRight className="text-terra-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h4 className="mt-3 text-xl leading-snug transition-colors group-hover:text-petrol-600">{item.title}</h4>
                  <p className="mt-2 text-sm text-ink-500">{item.collection} · {item.readingTime}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/ideas"
            className="group mt-8 inline-flex items-center gap-2 border-b border-terra-500 pb-1 text-xs font-bold tracking-[0.14em] uppercase transition-colors hover:text-terra-600"
          >
            Todas las ideas <ArrowRight />
          </Link>
        </Reveal>
      </div>
    </Section>
  )
}

function Closing() {
  return (
    <Section tone="night" className="grain">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <Eyebrow tone="bone">Siguiente conversación</Eyebrow>
          <h2 className="mt-6 text-3xl leading-tight md:text-5xl md:leading-[1.15]">{closing.quote}</h2>
        </Reveal>
        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">
          {closing.ctas.map((cta, i) => (
            <Reveal key={cta.label} delay={i * 70}>
              <Link
                to={cta.to}
                className="group flex h-full flex-col justify-between gap-8 bg-night-900 p-7 text-left transition-colors hover:bg-night-800 md:p-8"
              >
                <span className="font-display text-xl leading-snug text-bone-100">{cta.label}</span>
                <span className="eyebrow flex items-center gap-2 text-petrol-500 transition-colors group-hover:text-terra-500">
                  Escribir <ArrowRight />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-bone-300">
          Mi marca personal y EssensUp están conectadas, pero no cuentan lo mismo:{' '}
          <a href={site.essensup} target="_blank" rel="noreferrer" className="border-b border-terra-500 pb-0.5 text-bone-100 hover:text-terra-500">
            essensup.com
          </a>{' '}
          responde por la ejecución de proyectos.
        </p>
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Authority />
      <Manifesto />
      <WorkAreas />
      <CasesInAction />
      <Thinking />
      <Closing />
    </>
  )
}
