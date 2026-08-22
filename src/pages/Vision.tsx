import Reveal from '../components/Reveal'
import ImageFrame from '../components/ImageFrame'
import { imageSlots } from '../content/images'
import {
  ArrowRight,
  ButtonLink,
  PageHeader,
  Quote,
  Section,
  SectionHeading,
} from '../components/ui'
import { convictions, manifesto, workAreas } from '../content/site'

export default function Vision() {
  return (
    <>
      <PageHeader
        eyebrow="Mi visión"
        title="La tecnología no transforma empresas. Las transforman las personas."
        intro="Esta no es mi biografía: es mi tesis profesional. Cuatro convicciones formadas en más de 17 años dirigiendo transformaciones reales, con sus errores incluidos."
      />

      <Section tone="bone">
        <div className="grid gap-10 md:grid-cols-3">
          {manifesto.map((line, i) => (
            <Reveal key={line} delay={i * 70}>
              <div className="magnetic-card h-full border-t border-bone-300 pt-6">
              <p className="eyebrow text-terra-600">0{i + 1}</p>
              <p className="mt-5 font-display text-xl leading-snug text-night-900">
                {line}
              </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Cuatro convicciones"
          title="Qué defiendo y por qué"
          intro="Cada convicción con lo mismo: mi posición, lo que he observado en empresas reales, el error habitual y qué debería hacer distinto un equipo directivo."
        />

        <div className="mt-16 space-y-16">
          <Reveal direction="right"><ImageFrame slot={imageSlots.detail} aspect="wide" className="max-w-3xl ml-auto" /></Reveal>
          {convictions.map((c, i) => (
            <Reveal key={c.number} delay={i * 50}>
              <article className="grid gap-10 border-t border-bone-200 pt-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-display text-6xl leading-none text-bone-300">
                  {c.number}
                </p>
                <h3 className="mt-6 text-2xl leading-snug md:text-[1.75rem]">
                  {c.title}
                </h3>
              </div>

              <div className="space-y-8 lg:col-span-7">
                <div>
                  <p className="eyebrow text-petrol-600">Mi posición</p>
                  <p className="mt-3 text-lg leading-relaxed text-ink-900">
                    {c.position}
                  </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow text-terra-600">Qué he observado</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700">
                      {c.observed}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow text-terra-600">El error habitual</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700">
                      {c.mistake}
                    </p>
                  </div>
                </div>
                <div className="border-l border-petrol-500 bg-bone-100 p-6">
                  <p className="eyebrow text-petrol-600">
                    Qué debería hacer un equipo directivo
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-ink-900">
                    {c.different}
                  </p>
                </div>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="night">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Cómo se traduce"
              tone="bone"
              title="Tres ámbitos donde esta visión se aplica"
              intro="La misma idea, aplicada a decisiones distintas."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-white/10 border-t border-white/10">
              {workAreas.map((area) => (
                <li key={area.title} className="py-7">
                  <div className="flex gap-6">
                    <span className="eyebrow mt-1.5 text-petrol-500">
                      {area.number}
                    </span>
                    <div>
                      <h3 className="text-xl text-bone-100">{area.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-bone-300">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="bone">
        <div className="mx-auto max-w-3xl text-center">
          <Quote>
            Las transformaciones importantes empiezan con una conversación honesta
            sobre lo que debe cambiar.
          </Quote>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/participaciones">
              Ámbitos de contribución <ArrowRight />
            </ButtonLink>
            <ButtonLink to="/contacto" variant="outline">
              Hablemos
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}
