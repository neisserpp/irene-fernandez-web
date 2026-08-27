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
import { cases, ecosystem, learnings, trajectory } from "../content/site";

export default function Experiencia() {
  return (
    <>
      <PageHeader
        eyebrow="Experiencia"
        title="De especialista técnica a empresaria"
        intro="No un currículum cronológico, sino la evolución de un criterio: qué he dirigido, qué he construido y qué he aprendido en el camino."
      />

      <Section>
        <SectionHeading
          eyebrow="Recorrido"
          title="Cada etapa añadió una capa de criterio"
        />
        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trajectory.map((step, i) => (
            <Reveal key={step.title} delay={i * 55}>
              <li className="group magnetic-card h-full rounded-[20px] border border-bone-200 bg-bone-50 p-8">
                <p className="eyebrow text-terra-600">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-xl leading-snug">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="night" className="grain wave-foot">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Qué he aprendido"
              tone="bone"
              title="Más importante que enumerar puestos"
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <ImageFrame
                slot={imageSlots.meeting}
                aspect="landscape"
                className="mb-8 ml-auto max-w-xl"
              />
            </Reveal>
            <ul className="divide-y divide-white/10 border-t border-white/10">
              {learnings.map((item) => (
                <li key={item} className="flex gap-5 py-6">
                  <span aria-hidden className="mt-3 h-1 w-8 shrink-0 rounded-full bg-terra-500" />
                  <p className="font-display text-xl leading-snug font-semibold text-bone-100">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="bone">
        <SectionHeading
          eyebrow="Experiencia en acción"
          title="Cinco situaciones que resumen mi trabajo"
          intro="Reto, decisión, resultado y aprendizaje. Sin logos ni promesas genéricas."
        />
        <div className="mt-14 space-y-4">
          {cases.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <article className="magnetic-card rounded-[20px] border border-bone-300/80 bg-bone-50 p-8 md:p-10">
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <p className="eyebrow text-petrol-600">Caso 0{i + 1}</p>
                    <h3 className="mt-4 text-2xl leading-snug">{item.title}</h3>
                  </div>
                  <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
                    {[
                      ["Reto", item.challenge],
                      ["Decisión", item.decision],
                      ["Resultado", item.result],
                      ["Aprendizaje", item.learning],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="eyebrow text-terra-600">{label}</dt>
                        <dd className="mt-2.5 text-sm leading-relaxed text-ink-700">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Ecosistema empresarial"
          title="Una compañía principal y dos proyectos que amplían el perfil"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <article className="rounded-[20px_0_0_20px] bg-night-900 p-9 text-bone-100 md:p-12 lg:col-span-7 max-lg:rounded-[20px]">
            <p className="eyebrow text-petrol-500">Credencial principal</p>
            <h3 className="mt-6 font-display text-4xl">{ecosystem.main.name}</h3>
            <p className="mt-3 text-sm tracking-wide text-terra-500 uppercase">
              {ecosystem.main.role}
            </p>
            <p className="mt-6 text-base leading-relaxed text-bone-300">
              {ecosystem.main.description}
            </p>
            <a
              href={ecosystem.main.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b border-terra-500 pb-1 text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:text-terra-500"
            >
              Ver EssensUp <ArrowRight />
            </a>
          </article>

          <div className="space-y-4 lg:col-span-5">
            {ecosystem.others.map((item) => (
              <article
                key={item.name}
                className="rounded-[0_20px_20px_0] border border-bone-200 bg-bone-100 p-8 max-lg:rounded-[20px]"
              >
                <h3 className="font-display text-2xl">{item.name}</h3>
                <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-petrol-600 uppercase">
                  {item.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-700">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="bone">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-xl text-2xl leading-snug md:text-3xl">
            ¿Buscas a alguien con experiencia técnica, criterio empresarial y capacidad de
            liderar personas?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/participaciones">Ámbitos de contribución</ButtonLink>
            <ButtonLink to="/contacto" variant="outline">
              Hablemos
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
