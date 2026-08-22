import { useEffect, useState } from 'react'
import Reveal from '../components/Reveal'
import ImageFrame from '../components/ImageFrame'
import { imageSlots } from '../content/images'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight, Container, Eyebrow, Section } from '../components/ui'
import { contactReasons, site } from '../content/site'

type ReasonId = (typeof contactReasons)[number]['id']

const reasonDetail: Record<ReasonId, { routedTo: string; note: string }> = {
  consejo: {
    routedTo: 'Llega directamente a Irene',
    note: 'Cuéntame el tipo de compañía, el momento en el que está y qué materias esperas que aporte al consejo o comité.',
  },
  evento: {
    routedTo: 'Llega a Irene y a la agenda de intervenciones',
    note: 'Indica fecha, formato (ponencia, mesa redonda, entrevista), audiencia esperada y tema que te interesa.',
  },
  colaboracion: {
    routedTo: 'Llega directamente a Irene',
    note: 'Explica brevemente la propuesta y por qué crees que encaja con mis ámbitos de trabajo.',
  },
  essensup: {
    routedTo: 'Llega al equipo de EssensUp',
    note: 'Si necesitas un proyecto de transformación o SAP, lo verá el equipo que puede darte una respuesta concreta.',
  },
  otra: {
    routedTo: 'Se revisa y se dirige a quien corresponda',
    note: 'Cuéntame qué tienes en mente y buscamos el camino adecuado.',
  },
}

export default function Contacto() {
  const [params] = useSearchParams()
  const [reason, setReason] = useState<ReasonId | null>(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const motivo = params.get('motivo')
    if (motivo && contactReasons.some((r) => r.id === motivo)) {
      setReason(motivo as ReasonId)
    }
  }, [params])

  return (
    <>
      <header className="grain relative overflow-hidden bg-night-900 pt-32 pb-20 text-bone-100 md:pt-40 md:pb-24 lg:pt-44">
        <div aria-hidden className="absolute right-0 top-0 h-full w-1/3 border-l border-white/10" />
        <Container className="relative">
          <Reveal direction="left">
          <div className="max-w-4xl">
            <Eyebrow tone="bone">Hablemos</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.1] md:text-6xl md:leading-[1.05]">
              Empecemos por el motivo. Así llega a la persona adecuada.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-bone-300">
              Prefiero una conversación honesta a un formulario frío. Si te resulta
              más cómodo, escríbeme directamente a{' '}
              <a
                href={`mailto:${site.email}`}
                className="border-b border-terra-500 pb-0.5 text-bone-100 hover:text-terra-500"
              >
                {site.email}
              </a>
              .
            </p>
          </div>
          </Reveal>
        </Container>
      </header>

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal><p className="eyebrow text-petrol-600">Paso 1 · Motivo del contacto</p>
            <div className="mt-6 space-y-px bg-bone-200">
              {contactReasons.map((option) => {
                const active = reason === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setReason(option.id)}
                    aria-pressed={active}
                    className={`flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors ${
                      active
                        ? 'bg-night-900 text-bone-50'
                        : 'bg-bone-50 text-night-900 hover:bg-bone-100'
                    }`}
                  >
                    <span className="font-display text-xl leading-snug">
                      {option.label}
                    </span>
                    <span
                      className={`eyebrow shrink-0 ${
                        active ? 'text-terra-500' : 'text-ink-500'
                      }`}
                    >
                      {active ? 'Seleccionado' : 'Elegir'}
                    </span>
                  </button>
                )
              })}
            </div></Reveal>

            {reason ? (
              <Reveal direction="up"><form
                className="mt-12 border-t border-bone-200 pt-10"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <p className="eyebrow text-petrol-600">Paso 2 · Tu propuesta</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-700">
                  {reasonDetail[reason].note}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <Field id="nombre" label="Nombre y apellidos" required />
                  <Field id="empresa" label="Empresa" required />
                  <Field id="cargo" label="Cargo" />
                  <Field id="email" label="Correo profesional" type="email" required />
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="mensaje"
                    className="eyebrow block text-ink-500"
                  >
                    Contexto y propuesta
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    required
                    className="mt-3 w-full border-b border-bone-300 bg-transparent pb-3 text-base text-ink-900 focus:border-petrol-600 focus:outline-none"
                  />
                </div>

                <label className="mt-8 flex items-start gap-3 text-xs leading-relaxed text-ink-700">
                  <input type="checkbox" required className="mt-0.5 accent-petrol-600" />
                  He leído y acepto el tratamiento de mis datos para gestionar esta
                  solicitud.
                </label>

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center gap-2 bg-petrol-600 px-7 py-4 text-xs font-bold tracking-[0.14em] text-bone-50 uppercase transition-colors hover:bg-petrol-700"
                >
                  Enviar propuesta <ArrowRight />
                </button>

                {sent ? (
                  <p className="mt-6 border-l border-petrol-500 bg-bone-100 px-5 py-4 text-sm text-ink-900">
                    Gracias. {reasonDetail[reason].routedTo.toLowerCase()} y recibirás
                    respuesta con una propuesta de conversación.
                  </p>
                ) : null}
              </form></Reveal>
            ) : (
              <p className="mt-10 text-sm text-ink-500">
                Elige un motivo para continuar. Cada opción dirige la oportunidad a la
                persona adecuada.
              </p>
            )}
          </div>

          <aside className="lg:col-span-5">
            <Reveal direction="right">
              <ImageFrame slot={imageSlots.portrait} aspect="portrait" className="mb-8 max-h-[520px]" />
            </Reveal>
            <div className="magnetic-card bg-bone-100 p-8 md:p-10">
              <p className="eyebrow text-terra-600">Cómo se gestiona</p>
              <ul className="mt-6 divide-y divide-bone-300 border-t border-bone-300">
                {contactReasons.map((option) => (
                  <li key={option.id} className="py-4">
                    <p className="font-display text-lg leading-snug text-night-900">
                      {option.label}
                    </p>
                    <p className="mt-1 text-sm text-ink-700">
                      {reasonDetail[option.id].routedTo}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 bg-night-900 p-8 text-bone-100 md:p-10">
              <p className="eyebrow text-petrol-500">Contacto directo</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 block font-display text-2xl hover:text-terra-500"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-bone-300 hover:text-bone-100"
              >
                LinkedIn <ArrowRight />
              </a>
              <p className="mt-8 text-sm leading-relaxed text-bone-300">
                Para proyectos de transformación y SAP, EssensUp responde por la
                ejecución:{' '}
                <a
                  href={site.essensup}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-terra-500 pb-0.5 text-bone-100 hover:text-terra-500"
                >
                  essensup.com
                </a>
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}

function Field({
  id,
  label,
  type = 'text',
  required,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-ink-500">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-bone-300 bg-transparent pb-3 text-base text-ink-900 focus:border-petrol-600 focus:outline-none"
      />
    </div>
  )
}
