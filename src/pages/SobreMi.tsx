import {
  ArrowRight,
  ButtonLink,
  PageHeader,
  Quote,
  Section,
  SectionHeading,
} from '../components/ui'

const blocks = [
  {
    number: '01',
    title: 'Qué me mueve',
    text: 'Ver cómo una organización empieza a funcionar mejor de verdad: decisiones más rápidas, equipos con menos ruido, personas que entienden para qué sirve lo que acaban de implantar. Ese momento es el que me sigue interesando después de 17 años.',
  },
  {
    number: '02',
    title: 'Cómo entiendo el liderazgo',
    text: 'Liderar es decidir a tiempo y sostener la decisión delante del equipo y del cliente. También es decir “esto no lo vamos a hacer así” cuando toca, aunque sea incómodo. No creo en el liderazgo que solo aparece en los éxitos.',
  },
  {
    number: '03',
    title: 'Por qué creé EssensUp',
    text: 'Porque había visto demasiados proyectos vendidos por perfiles senior y ejecutados por equipos sin experiencia. Quería una consultora donde quien decide esté en el proyecto: cercanía real, seniority real y responsabilidad sobre el resultado.',
  },
  {
    number: '04',
    title: 'Qué papel tienen la diversidad y la inclusión',
    text: 'Son una forma de construir compañía, no un capítulo del informe anual. Se ven en quién contratamos, a quién promocionamos, quién dirige los proyectos visibles y quién se siente con libertad para discrepar en una reunión.',
  },
  {
    number: '05',
    title: 'Qué intento cambiar en el sector',
    text: 'Que la conversación sobre tecnología deje de venderse con humo. Que el mid-market pueda acceder a criterio senior sin pagar estructura. Y que una mujer liderando tecnología deje de ser una excepción que hay que explicar.',
  },
]

export default function SobreMi() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre mí"
        title="Ingeniera, ejecutiva y empresaria. En ese orden y sin renunciar a nada."
        intro="Lo que sigue no es una autobiografía. Es lo que me parece relevante para que entiendas cómo trabajo y desde dónde decido."
      />

      <Section>
        <div className="space-y-14">
          {blocks.map((block) => (
            <article
              key={block.number}
              className="grid gap-8 border-t border-bone-200 pt-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <p className="eyebrow text-terra-600">{block.number}</p>
                <h2 className="mt-4 text-2xl leading-snug md:text-3xl">
                  {block.title}
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-ink-700 lg:col-span-8">
                {block.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="night">
        <div className="mx-auto max-w-3xl text-center">
          <Quote tone="night">
            Tiene experiencia técnica, ha construido empresa, posee criterio propio y
            sabe liderar personas.
          </Quote>
          <p className="mt-8 text-sm text-bone-300">
            Si al terminar de leer esta página piensas esto, la web está haciendo su
            trabajo.
          </p>
        </div>
      </Section>

      <Section tone="bone">
        <SectionHeading
          eyebrow="Siguiente paso"
          title="Dónde seguir"
          intro="Mi tesis profesional, el recorrido que la sostiene o directamente una conversación."
        />
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/vision">
            Mi visión <ArrowRight />
          </ButtonLink>
          <ButtonLink to="/experiencia" variant="outline">
            Experiencia
          </ButtonLink>
          <ButtonLink to="/contacto" variant="outline">
            Hablemos
          </ButtonLink>
        </div>
      </Section>
    </>
  )
}
