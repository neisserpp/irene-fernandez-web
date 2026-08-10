import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Experiencia from './pages/Experiencia'
import Ideas from './pages/Ideas'
import Participaciones from './pages/Participaciones'
import SobreMi from './pages/SobreMi'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/participaciones" element={<Participaciones />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
