import { useMemo, useState } from 'react'
import {
  ArrowRight,
  PageHeader,
  Section,
  SectionHeading,
} from '../components/ui'
import {
  collections,
  formats,
  ideas,
  site,
  type Collection,
  type Format,
} from '../content/site'

type CollectionFilter = Collection | 'Todas'
type FormatFilter = Format | 'Todos'

export default function Ideas() {
  const [collection, setCollection] = useState<CollectionFilter>('Todas')
  const [format, setFormat] = useState<FormatFilter>('Todos')

  const filtered = useMemo(
    () =>
      ideas.filter(
        (idea) =>
          (collection === 'Todas' || idea.collection === collection) &&
          (format === 'Todos' || idea.format === format),
      ),
    [collection, format],
  )

  const featured = ideas.find((i) => i.featured)

  return (
    <>
      <PageHeader
        eyebrow="Ideas"
        title="Cuaderno de transformación"
        intro="Pocas piezas, pero con una postura. Análisis sobre transformación y SAP, liderazgo, talento y diversidad escritos desde proyectos reales."
      />

      {featured ? (
        <Section>
          <article className="grid gap-10 border border-bone-200 bg-bone-100 p-8 md:p-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow text-terra-600">Pieza destacada</p>
              <p className="mt-4 text-sm text-ink-500">
                {featured.collection}
                <br />
                {featured.format} · {featured.readingTime}
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-3xl leading-tight md:text-[2.75rem] md:leading-[1.12]">
                {featured.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
                {featured.standfirst}
              </p>
              <button
                type="button"
                className="mt-8 inline-flex items-center gap-2 border-b border-terra-500 pb-1 text-xs font-bold tracking-[0.14em] uppercase transition-colors hover:text-terra-600"
              >
                Leer la pieza <ArrowRight />
              </button>
            </div>
          </article>
        </Section>
      ) : null}

      <Section tone="bone">
        <SectionHeading
          eyebrow="Cómo está organizado"
          title="Cuatro colecciones y tres formatos"
          intro="El objetivo no es convertirme en un medio de comunicación, sino generar propiedad intelectual reconocible."
        />

        <div className="mt-12 grid gap-px bg-bone-300 md:grid-cols-3">
          {formats.map((f) => (
            <div key={f.name} className="bg-bone-100 p-8">
              <h3 className="font-display text-xl">{f.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-6">
          <FilterRow
            label="Colección"
            options={['Todas', ...collections]}
            value={collection}
            onChange={(v) => setCollection(v as CollectionFilter)}
          />
          <FilterRow
            label="Formato"
            options={['Todos', ...formats.map((f) => f.name)]}
            value={format}
            onChange={(v) => setFormat(v as FormatFilter)}
          />
        </div>

        <ul className="mt-12 divide-y divide-bone-300 border-t border-bone-300">
          {filtered.map((idea) => (
            <li key={idea.title} className="group py-8">
              <div className="grid gap-4 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <p className="eyebrow text-petrol-600">{idea.format}</p>
                  <p className="mt-2 text-sm text-ink-500">
                    {idea.collection} · {idea.readingTime}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="text-2xl leading-snug transition-colors group-hover:text-petrol-600">
                    {idea.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-700">
                    {idea.standfirst}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {filtered.length === 0 ? (
          <p className="mt-10 text-sm text-ink-500">
            Todavía no hay piezas publicadas con esta combinación.
          </p>
        ) : null}
      </Section>

      <Section tone="night" id="newsletter">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Newsletter"
              tone="bone"
              title={site.newsletter.name}
              intro={site.newsletter.description}
            />
            <p className="mt-8 text-sm text-bone-300">
              Pensada para CEO, CFO, COO, directores de transformación y CIO
              estratégicos que tienen que decidir sobre su ERP.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form
              className="border border-white/15 p-8 md:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="eyebrow block text-petrol-500" htmlFor="nl-email">
                Correo profesional
              </label>
              <input
                id="nl-email"
                type="email"
                required
                placeholder="nombre@empresa.com"
                className="mt-4 w-full border-b border-white/25 bg-transparent pb-3 text-lg text-bone-100 placeholder:text-bone-300/50 focus:border-terra-500 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-terra-500 px-6 py-4 text-xs font-bold tracking-[0.14em] text-bone-50 uppercase transition-colors hover:bg-terra-600"
              >
                Recibir las notas <ArrowRight />
              </button>
              <p className="mt-5 text-xs leading-relaxed text-bone-300">
                Sin novedades corporativas ni actualizaciones técnicas de SAP. Puedes
                darte de baja en cualquier momento.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="eyebrow mr-2 text-ink-500">{label}</span>
      {options.map((option) => {
        const active = option === value
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`px-4 py-2 text-sm transition-colors ${
              active
                ? 'bg-night-900 text-bone-50'
                : 'border border-bone-300 text-ink-700 hover:border-night-900'
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
