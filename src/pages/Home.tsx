import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ButtonLink,
  Container,
  Eyebrow,
  Quote,
  Section,
  SectionHeading,
} from '../components/ui'
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
    <section className="relative overflow-hidden bg-night-900 pt-36 pb-24 text-bone-100 md:pt-44 md:pb-32">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-b from-petrol-700/25 to-transparent lg:block"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-terra-500/10 blur-3xl"
      />
      <Container className="relative">
        <div className="max-w-4xl">
          <Eyebrow tone="bone">
            {site.name} · {site.role}
          </Eyebrow>
          <h1 className="mt-8 text-4xl leading-[1.08] md:text-6xl lg:text-7xl lg:leading-[1.04]">
            Transformar una empresa no consiste solo en{' '}
            <span className="italic text-petrol-100">implantar tecnología</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone-300 md:text-xl md:leading-relaxed">
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
        </div>
      </Container>
    </section>
  )
}

function Authority() {
  return (
    <Section tone="bone">
      <SectionHeading
        eyebrow="Sobre qué se sostiene"
        title="Credenciales con contexto, no cifras decorativas"
        intro="Cada dato responde a la misma pregunta: qué demuestra sobre mi criterio para acompañar una transformación."
      />
      <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {authority.map((item) => (
          <div key={item.label} className="border-t border-bone-300 pt-6">
            <p className="font-display text-5xl leading-none text-petrol-600">
              {item.figure}
            </p>
            <p className="mt-4 font-display text-lg text-night-900">{item.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.context}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Manifesto() {
  return (
    <Section tone="night">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow tone="bone">Mi punto de vista</Eyebrow>
          <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
            Tres ideas que ordenan todo lo demás
          </h2>
          <Link
            to="/vision"
            className="mt-8 inline-flex items-center gap-2 border-b border-terra-500 pb-1 text-xs font-bold tracking-[0.14em] uppercase transition-colors hover:text-terra-500"
          >
            Leer mi visión completa <ArrowRight />
          </Link>
        </div>
        <div className="space-y-10 lg:col-span-8">
          {manifesto.map((line, i) => (
            <div key={line} className="flex gap-6">
              <span className="eyebrow mt-2 shrink-0 text-petrol-500">
                0{i + 1}
              </span>
              <Quote tone="night">{line}</Quote>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function WorkAreas() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Tres ámbitos de trabajo"
        title="Dónde aporto criterio"
        intro="No son servicios de una consultora individual: son los terrenos donde mi experiencia cambia la calidad de una decisión."
      />
      <div className="mt-14 grid gap-px overflow-hidden border border-bone-200 bg-bone-200 md:grid-cols-3">
        {workAreas.map((area) => (
          <article
            key={area.title}
            className="group bg-bone-50 p-8 transition-colors duration-300 hover:bg-bone-100 md:p-10"
          >
            <p className="eyebrow text-terra-600">{area.number}</p>
            <h3 className="mt-6 text-2xl leading-snug">{area.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">
              {area.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function CasesInAction() {
  return (
    <Section tone="bone">
      <SectionHeading
        eyebrow="Experiencia en acción"
        title="Situaciones reales, decisiones concretas"
        intro="No una lista de clientes. Cinco tipos de problema que he dirigido, con la decisión que tomé y lo que aprendí."
      />
      <div className="mt-14 space-y-px bg-bone-300">
        {cases.map((item, i) => (
          <article key={item.title} className="bg-bone-100 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="eyebrow text-petrol-600">Caso 0{i + 1}</p>
                <h3 className="mt-4 text-2xl leading-snug">{item.title}</h3>
              </div>
              <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                {[
                  ['Reto', item.challenge],
                  ['Decisión', item.decision],
                  ['Resultado', item.result],
                  ['Aprendizaje', item.learning],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="eyebrow text-terra-600">{label}</dt>
                    <dd className="mt-2.5 text-sm leading-relaxed text-ink-700">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
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
      <SectionHeading
        eyebrow="Pensamiento y actualidad"
        title="Una selección, no un archivo cronológico"
        intro="Pocas piezas, pero con una tesis propia. El objetivo es propiedad intelectual reconocible, no volumen de publicaciones."
      />
      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        <article className="lg:col-span-7">
          <div className="flex h-full flex-col border border-bone-200 bg-bone-100 p-8 md:p-10">
            <p className="eyebrow text-terra-600">Artículo principal</p>
            <h3 className="mt-6 text-3xl leading-tight md:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-ink-700">
              {featured.standfirst}
            </p>
            <div className="mt-auto pt-8">
              <Link
                to="/ideas"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-petrol-600 uppercase transition-colors hover:text-night-900"
              >
                Leer la pieza <ArrowRight />
              </Link>
            </div>
          </div>
        </article>
        <div className="lg:col-span-5">
          <ul className="divide-y divide-bone-200 border-t border-bone-200">
            {rest.map((item) => (
              <li key={item.title} className="py-6">
                <p className="eyebrow text-petrol-600">{item.format}</p>
                <h4 className="mt-3 text-xl leading-snug">
                  <Link to="/ideas" className="hover:text-petrol-600">
                    {item.title}
                  </Link>
                </h4>
                <p className="mt-2 text-sm text-ink-500">
                  {item.collection} · {item.readingTime}
                </p>
              </li>
            ))}
          </ul>
          <Link
            to="/ideas"
            className="mt-8 inline-flex items-center gap-2 border-b border-terra-500 pb-1 text-xs font-bold tracking-[0.14em] uppercase transition-colors hover:text-terra-600"
          >
            Todas las ideas <ArrowRight />
          </Link>
        </div>
      </div>
    </Section>
  )
}

function Closing() {
  return (
    <Section tone="night">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl leading-tight md:text-5xl md:leading-[1.15]">
          {closing.quote}
        </h2>
        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">
          {closing.ctas.map((cta) => (
            <Link
              key={cta.label}
              to={cta.to}
              className="group flex flex-col justify-between gap-6 bg-night-900 p-7 text-left transition-colors hover:bg-night-800"
            >
              <span className="font-display text-xl leading-snug text-bone-100">
                {cta.label}
              </span>
              <span className="eyebrow flex items-center gap-2 text-petrol-500 transition-colors group-hover:text-terra-500">
                Escribir <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-bone-300">
          Mi marca personal y EssensUp están conectadas, pero no cuentan lo mismo:{' '}
          <a
            href={site.essensup}
            target="_blank"
            rel="noreferrer"
            className="border-b border-terra-500 pb-0.5 text-bone-100 hover:text-terra-500"
          >
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
