import { ButtonLink, Container, Eyebrow } from '../components/ui'

export default function NotFound() {
  return (
    <section className="bg-night-900 py-40 text-bone-100">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow tone="bone">Error 404</Eyebrow>
          <h1 className="mt-6 text-4xl leading-tight md:text-5xl">
            Esta página no existe.
          </h1>
          <p className="mt-6 text-lg text-bone-300">
            Puede que el enlace haya cambiado. Vuelve al inicio o escríbeme y lo
            resolvemos.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/">Volver al inicio</ButtonLink>
            <ButtonLink to="/contacto" variant="outlineLight">
              Hablemos
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
