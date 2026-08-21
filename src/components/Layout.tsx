import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../content/site'
import { ArrowRight, Container } from './ui'

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-bone-200 bg-bone-50/95 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          to="/"
          className={`font-display text-lg tracking-tight md:text-xl ${
            solid ? 'text-night-900' : 'text-bone-100'
          }`}
        >
          Irene Fernández Prados
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm transition-opacity ${
                  solid ? 'text-ink-700' : 'text-bone-200'
                } ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'} ${
                  isActive
                    ? 'border-b border-terra-500 pb-0.5'
                    : 'border-b border-transparent pb-0.5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-[0.14em] uppercase transition-colors ${
              solid
                ? 'bg-night-900 text-bone-50 hover:bg-petrol-700'
                : 'border border-bone-100/40 text-bone-100 hover:bg-bone-100 hover:text-night-900'
            }`}
          >
            Hablemos <ArrowRight />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menú"
          className={`lg:hidden ${solid ? 'text-night-900' : 'text-bone-100'}`}
        >
          <span className="eyebrow">{open ? 'Cerrar' : 'Menú'}</span>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-bone-200 bg-bone-50 lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `border-b border-bone-200 py-3.5 font-display text-2xl ${
                    isActive ? 'text-petrol-600' : 'text-night-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-night-900 px-5 py-4 text-xs font-bold tracking-[0.14em] text-bone-50 uppercase"
            >
              Hablemos <ArrowRight />
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-night-950 pt-20 pb-10 text-bone-300">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl text-bone-100"> Fernández</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.credential}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block border-b border-terra-500 pb-0.5 text-sm text-bone-100 transition-colors hover:text-terra-500"
            >
              {site.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-petrol-500">Navegación</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-bone-100">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contacto" className="transition-colors hover:text-bone-100">
                  Hablemos
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-petrol-500">Newsletter</p>
            <p className="mt-5 font-display text-lg text-bone-100">
              {site.newsletter.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed">{site.newsletter.description}</p>
            <Link
              to="/ideas#newsletter"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-bone-100 uppercase transition-colors hover:text-terra-500"
            >
              Suscribirse <ArrowRight />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Irene Fernández Prados. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-6">
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone-100">
              LinkedIn
            </a>
            <a href={site.essensup} target="_blank" rel="noreferrer" className="hover:text-bone-100">
              essensup.com
            </a>
            <Link to="/contacto" className="hover:text-bone-100">
              Contacto
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
