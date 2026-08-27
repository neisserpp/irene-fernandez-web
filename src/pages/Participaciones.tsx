import Reveal from "../components/Reveal";
import ImageFrame from "../components/ImageFrame";
import { imageSlots } from "../content/images";
import {
  ArrowRight,
  ButtonLink,
  PageHeader,
  Section,
  SectionHeading,
} from "../components/ui";
import {
  advisory,
  appearances,
  boardTopics,
  pressKit,
  talks,
  testimonials,
} from "../content/site";

export default function Participaciones() {
  return (
    <>
      <PageHeader
        eyebrow="Participaciones"
        title="Para qué pueden contar conmigo"
        intro="Consejos y comités asesores, conversaciones ejecutivas y advisory selectivo. Contribución con criterio, no horas de consultoría."
      />

      <Section>
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Cómo se materializa"
              title="Una presencia pública que también construye autoridad"
              intro="Conferencias, conversaciones y consejos donde la experiencia de Irene se convierte en criterio útil para otros equipos directivos."
            />
          </div>
          <Reveal direction="right" className="lg:col-span-5">
            <ImageFrame slot={imageSlots.speaking} aspect="landscape" />
          </Reveal>
        </div>
        <SectionHeading
          eyebrow="Ámbitos de contribución"
          title="Tres formas de aportar, con distinto nivel de implicación"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal>
            <article className="h-full rounded-[20px] border border-bone-200 bg-bone-50 p-8 md:p-10">
              <p className="eyebrow text-terra-600">01</p>
              <h3 className="mt-5 text-2xl leading-snug">Consejos y comités asesores</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                Aporto criterio en las materias donde tengo experiencia directa de dirección:
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-900">
                {boardTopics.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-petrol-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={70}>
            <article className="h-full rounded-[20px] border border-bone-200 bg-bone-50 p-8 md:p-10">
              <p className="eyebrow text-terra-600">02</p>
              <h3 className="mt-5 text-2xl leading-snug">
                Conferencias y conversaciones ejecutivas
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                Intervenciones con tesis propia, pensadas para comités de dirección y foros
                profesionales:
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-900">
                {talks.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-petrol-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={70}>
            <article className="h-full rounded-[20px] border border-bone-200 bg-bone-50 p-8 md:p-10">
              <p className="eyebrow text-terra-600">03</p>
              <h3 className="mt-5 text-2xl leading-snug">Advisory estratégico</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                Participación selectiva, en momentos donde una decisión cambia el resultado
                del programa:
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-900">
                {advisory.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-petrol-500" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </Section>

      <Section tone="night" className="grain wave-foot">
        <SectionHeading
          eyebrow="Prensa, eventos y conversaciones"
          tone="bone"
          title="Material listo para organizadores y medios"
          intro="Si estás preparando un evento, un reportaje o una entrevista, aquí tienes lo necesario para trabajar sin esperas."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ul className="divide-y divide-white/10 border-t border-white/10">
              {pressKit.map((item) => (
                <li key={item.label} className="py-6">
                  <p className="font-display text-xl font-semibold text-bone-100">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-bone-300">{item.detail}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contacto?motivo=evento" variant="terra">
                Formulario de invitaciones <ArrowRight />
              </ButtonLink>
              <ButtonLink to="/contacto?motivo=evento" variant="outlineLight">
                Solicitar kit de prensa
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="eyebrow text-petrol-500">Entrevistas y apariciones</p>
            <ul className="mt-6 divide-y divide-white/10 border-t border-white/10">
              {appearances.map((item) => (
                <li key={item.title} className="flex gap-5 py-5">
                  <span className="eyebrow mt-1.5 w-28 shrink-0 text-terra-500">
                    {item.type}
                  </span>
                  <div>
                    <p className="font-display text-lg leading-snug font-semibold text-bone-100">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-bone-300">{item.outlet}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="bone">
        <SectionHeading
          eyebrow="Qué dicen quienes han trabajado conmigo"
          title="Testimonios breves, de personas con criterio"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-[20px] border border-bone-300/70 bg-bone-50 p-9 md:p-10"
            >
              <p className="font-display text-2xl leading-snug text-night-900">
                “{t.quote}”
              </p>
              <footer className="mt-6 text-sm text-ink-700">
                <span className="font-bold text-night-900">{t.author}</span> · {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>
    </>
  );
}
