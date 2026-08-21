/**
 * Contenido editorial de la web. Centralizado para poder revisarlo y editarlo
 * sin tocar los componentes.
 */

export const site = {
  name: 'Irene Fernández',
  role: 'CEO de EssensUp',
  tagline:
    'Irene Fernández ayuda a las empresas a transformar tecnología, organizaciones y talento para convertir el cambio en resultados reales.',
  credential:
    'CEO de EssensUp, ingeniera informática y ejecutiva con más de 17 años de experiencia en transformación digital y SAP.',
  email: 'Irene.fernandez@essensup.com',
  linkedin: 'https://www.linkedin.com/',
  essensup: 'https://www.essensup.com',
  newsletter: {
    name: 'Notas estratégicas sobre transformación SAP',
    description:
      'Un tema central, un análisis claro, una postura y un aprendizaje práctico. Cada tres o cuatro semanas. Sin novedades corporativas ni actualizaciones técnicas.',
  },
} as const

export const nav = [
  { label: 'Inicio', to: '/' },
  { label: 'Visión', to: '/vision' },
  { label: 'Experiencia', to: '/experiencia' },
  { label: 'Ideas', to: '/ideas' },
  { label: 'Participaciones', to: '/participaciones' },
  { label: 'Sobre mí', to: '/sobre-mi' },
] as const

export const hero = {
  headline: 'Transformar una empresa no consiste solo en implantar tecnología.',
  subtitle:
    'Soy Irene Fernández, CEO de EssensUp. Ayudo a organizaciones y equipos directivos a convertir la transformación tecnológica en mejores procesos, más talento y resultados sostenibles.',
  primary: { label: 'Conocer mi visión', to: '/vision' },
  secondary: { label: 'Invitarme a participar', to: '/contacto?motivo=evento' },
}

export const authority = [
  {
    figure: '17+',
    label: 'años en transformación digital y SAP',
    context:
      'De consultora funcional a dirección de programas: he vivido el ciclo completo de una transformación, no solo su fase de venta.',
  },
  {
    figure: '20+',
    label: 'implementaciones SAP S/4HANA',
    context:
      'Suficientes proyectos para reconocer pronto los patrones que anticipan un desvío de plazo, coste o adopción.',
  },
  {
    figure: '10+',
    label: 'países y cinco continentes',
    context:
      'Programas internacionales con equipos multiculturales, husos horarios distintos y modelos operativos que no se parecen entre sí.',
  },
  {
    figure: 'CEO',
    label: 'de EssensUp',
    context:
      'Dirijo una consultora especializada en transformación digital y proyectos SAP para el mid-market.',
  },
  {
    figure: '3',
    label: 'proyectos empresariales impulsados',
    context:
      'EssensUp, Seisap Academy y Dennova: consultoría, desarrollo de talento SAP e innovación.',
  },
  {
    figure: '60%',
    label: 'del equipo son mujeres, también liderando',
    context:
      'No es una cifra de informe: es el resultado de decisiones concretas de contratación, promoción y formación.',
  },
]

export const manifesto = [
  'La tecnología no transforma empresas. Las transforman las personas cuando entienden para qué sirve la tecnología.',
  'Un proyecto no termina cuando el sistema arranca. Termina cuando el negocio funciona mejor.',
  'La diversidad no es una declaración corporativa. Es una forma de construir organizaciones con más capacidad para competir.',
]

export const workAreas = [
  {
    number: '01',
    title: 'Transformación y tecnología',
    description:
      'Decisiones sobre ERP, SAP, digitalización, adopción y evolución operativa.',
  },
  {
    number: '02',
    title: 'Liderazgo y organizaciones',
    description:
      'Gestión del cambio, cultura, talento tecnológico y desarrollo de equipos.',
  },
  {
    number: '03',
    title: 'Consejo y visión empresarial',
    description:
      'Crecimiento, gobierno, innovación, diversidad y construcción de compañías sostenibles.',
  },
]

export const cases = [
  {
    title: 'Transformar un ERP sin perder de vista el negocio',
    challenge:
      'Un programa S/4HANA planteado como un proyecto de sistemas, con el comité de dirección pendiente solo de la fecha de arranque.',
    decision:
      'Traducir el alcance técnico a decisiones de negocio y obligar a que cada proceso tuviera un responsable funcional con capacidad de decidir.',
    result:
      'El proyecto pasó de discutirse en clave de desarrollos a discutirse en clave de procesos, con prioridades acordadas por dirección.',
    learning:
      'Cuando el negocio no reconoce sus procesos en el diseño, la implantación se convierte en una negociación permanente.',
  },
  {
    title: 'Recuperar proyectos con retrasos, sobrecostes o baja adopción',
    challenge:
      'Implantaciones bloqueadas: plan cumplido en el papel, pero usuarios trabajando en paralelo con hojas de cálculo.',
    decision:
      'Parar, diagnosticar la causa real —normalmente gobierno y decisión, no software— y reordenar el plan alrededor de la adopción.',
    result:
      'Recuperación del control del programa y un calendario creíble, sostenido por decisiones tomadas y no por voluntarismo.',
    learning:
      'Casi ningún proyecto se retrasa por un motivo técnico. Se retrasa porque nadie decide a tiempo.',
  },
  {
    title: 'Construir equipos tecnológicos diversos y de alto rendimiento',
    challenge:
      'Un mercado SAP tensionado, con perfiles escasos y una cultura sectorial que estrecha el embudo de candidatas.',
    decision:
      'Contratar por criterio y capacidad de aprendizaje, formar internamente y abrir de verdad las posiciones de liderazgo.',
    result:
      'Un equipo donde más del 60 % son mujeres, también en responsabilidad, con rotación baja para el sector.',
    learning:
      'La diversidad no llega sola: se diseña en el proceso de selección, en la promoción y en cómo se reparten los proyectos.',
  },
  {
    title: 'Escalar una consultora boutique manteniendo cercanía',
    challenge:
      'Crecer sin convertirse en una firma más, compitiendo con grandes por marca y músculo comercial.',
    decision:
      'Sostener seniority real en cada proyecto y renunciar a oportunidades que exigían diluir el equipo.',
    result:
      'Crecimiento sostenido con relación directa entre cliente y personas que deciden, no capas de gestión.',
    learning:
      'La escala mal entendida destruye exactamente aquello por lo que te eligen.',
  },
  {
    title: 'Formar talento para capacidades SAP difíciles de encontrar',
    challenge:
      'Capacidades críticas que el mercado no ofrece al ritmo que exigen los proyectos.',
    decision:
      'Crear un itinerario propio de formación —Seisap Academy— conectado a proyectos reales, no a certificaciones sueltas.',
    result:
      'Cantera propia de consultores capaces de incorporarse a programas complejos con acompañamiento senior.',
    learning:
      'Si tu capacidad depende del mercado, tu crecimiento depende de la suerte.',
  },
]

export const convictions = [
  {
    number: '01',
    title: 'La transformación empieza en el negocio, no en la herramienta.',
    position:
      'Un ERP no define una estrategia: la ejecuta. La primera conversación no debería ser sobre módulos, sino sobre qué debe funcionar mejor en la compañía y cómo se medirá.',
    observed:
      'He visto comités de dirección aprobar inversiones millonarias sin haber acordado antes qué procesos quieren cambiar y cuáles quieren proteger.',
    mistake:
      'Delegar la transformación en el área de sistemas y en el partner, y aparecer solo en los comités de seguimiento cuando ya hay desviación.',
    different:
      'Definir tres o cuatro resultados de negocio esperados, ponerles responsable y usarlos como criterio para cada decisión de alcance.',
  },
  {
    number: '02',
    title: 'La adopción es parte del proyecto, no una actividad posterior.',
    position:
      'La gestión del cambio no es un paquete de formación al final del plan. Es una línea de trabajo con presupuesto, responsable e indicadores desde el primer día.',
    observed:
      'Sistemas técnicamente correctos con usuarios que siguen trabajando fuera de ellos porque nadie explicó para qué servía el cambio.',
    mistake:
      'Medir el éxito por la fecha de arranque en lugar de por el uso real y la calidad del dato en los meses siguientes.',
    different:
      'Incorporar usuarios clave en el diseño, medir adopción como un KPI del programa y sostener acompañamiento después del arranque.',
  },
  {
    number: '03',
    title: 'La tecnología necesita liderazgo y talento.',
    position:
      'La diferencia entre dos proyectos con el mismo software es el criterio de las personas que lo dirigen. Seniority real, no volumen de perfiles.',
    observed:
      'Equipos numerosos sin nadie con autoridad para decir “esto no se debe hacer así” a tiempo.',
    mistake:
      'Comprar capacidad por horas y descubrir tarde que faltaba quien tomara decisiones difíciles.',
    different:
      'Exigir seniority en las fases de decisión, dar continuidad a los equipos y desarrollar capacidad interna en paralelo al proyecto.',
  },
  {
    number: '04',
    title: 'La diversidad mejora la capacidad de decidir y transformar.',
    position:
      'Equipos con miradas distintas detectan antes los riesgos y cuestionan los supuestos cómodos. Es una ventaja de gestión, no un mensaje institucional.',
    observed:
      'Comités homogéneos que llegan rápido al consenso y tarde a los problemas.',
    mistake:
      'Reducir la diversidad a una cifra en el informe anual, sin tocar la selección, la promoción ni el reparto de proyectos.',
    different:
      'Revisar quién decide, quién dirige los proyectos visibles y quién tiene acceso a formación y exposición ante el cliente.',
  },
]

export const trajectory = [
  {
    title: 'Ingeniera informática',
    description: 'Base técnica: entender de verdad lo que hay debajo del sistema.',
  },
  {
    title: 'Functional Consultant',
    description: 'Traducir procesos de negocio a soluciones y decisiones de diseño.',
  },
  {
    title: 'Project Manager',
    description: 'Plazos, alcance, equipos y las conversaciones incómodas a tiempo.',
  },
  {
    title: 'Dirección de programas y transformaciones',
    description: 'Programas internacionales, varios países, múltiples áreas y comités.',
  },
  {
    title: 'Creación y liderazgo de EssensUp',
    description: 'Pasar de dirigir proyectos a construir y dirigir una compañía.',
  },
  {
    title: 'Formación, talento e innovación',
    description: 'Seisap Academy y Dennova: capacidades propias y nuevas iniciativas.',
  },
]

export const learnings = [
  'Cómo traducir tecnología a decisiones de negocio.',
  'Cómo dirigir proyectos internacionales y equipos multidisciplinares.',
  'Cómo detectar por qué una transformación se bloquea.',
  'Cómo construir una organización experta sin perder agilidad.',
  'Cómo hacer crecer talento femenino en un entorno tecnológico.',
]

export const ecosystem = {
  main: {
    name: 'EssensUp',
    role: 'Transformación digital y proyectos SAP',
    description:
      'Consultora especializada en el mid-market. Equipo senior, relación directa con el cliente y foco en S/4HANA y suites avanzadas. Es mi principal credencial empresarial.',
    href: site.essensup,
  },
  others: [
    {
      name: 'Seisap Academy',
      role: 'Desarrollo de talento y capacidades SAP',
      description:
        'Formación conectada a proyectos reales para cubrir capacidades que el mercado no ofrece.',
    },
    {
      name: 'Dennova',
      role: 'Innovación y nuevas iniciativas empresariales',
      description:
        'Espacio para explorar nuevos modelos y llevar ideas a compañías que funcionen.',
    },
  ],
}

export const boardTopics = [
  'Transformación digital.',
  'Tecnología y operaciones.',
  'Talento y cultura.',
  'Diversidad e inclusión.',
  'Crecimiento de empresas de servicios profesionales.',
]

export const talks = [
  'La transformación más allá de la tecnología.',
  'Qué aprende una CEO después de 17 años en SAP.',
  'Liderar proyectos complejos sin perder a las personas.',
  'Mujeres, talento y liderazgo en el sector tecnológico.',
  'Diversidad LGTBIQ+ y empresa.',
  'Construir una consultora especializada en un mercado dominado por grandes firmas.',
]

export const advisory = [
  'Roadmaps de transformación.',
  'Proyectos SAP en riesgo.',
  'Decisiones de adopción y cambio.',
  'Organización y capacidades internas.',
  'Evaluación de programas complejos.',
]

export const pressKit = [
  { label: 'Biografía corta, media y extensa', detail: 'Listas para publicar, en español e inglés.' },
  { label: 'Temáticas para intervenciones', detail: 'Enfoques y formatos según tipo de audiencia.' },
  { label: 'Fotografías oficiales', detail: 'Retrato y planos de escenario en alta resolución.' },
  { label: 'Kit de prensa descargable', detail: 'Todo el material en un único archivo.' },
]

export const appearances = [
  { type: 'Entrevista', title: 'Qué falla realmente en las migraciones a S/4HANA', outlet: 'Medio especializado' },
  { type: 'Mesa redonda', title: 'Transformación digital en el mid-market español', outlet: 'Foro ejecutivo' },
  { type: 'Ponencia', title: 'Seniority frente a volumen en proyectos SAP', outlet: 'Congreso sectorial' },
  { type: 'Podcast', title: 'Liderar tecnología sin perder a las personas', outlet: 'Programa de negocio' },
]

export const testimonials = [
  {
    quote:
      'Aporta criterio antes que soluciones: pregunta lo que nadie estaba preguntando en el comité.',
    author: 'Director de Transformación',
    role: 'Compañía industrial mid-market',
  },
  {
    quote:
      'Nos dijo con claridad qué no debíamos hacer. Eso nos ahorró meses de proyecto.',
    author: 'CFO',
    role: 'Grupo de distribución',
  },
]

export type Collection =
  | 'Transformación y SAP'
  | 'Liderazgo y empresa'
  | 'Talento y cultura'
  | 'Diversidad e impacto'

export type Format = 'Punto de vista' | 'Desde la experiencia' | 'Conversaciones'

export const collections: Collection[] = [
  'Transformación y SAP',
  'Liderazgo y empresa',
  'Talento y cultura',
  'Diversidad e impacto',
]

export const formats: { name: Format; description: string }[] = [
  { name: 'Punto de vista', description: 'Artículos con una tesis propia.' },
  { name: 'Desde la experiencia', description: 'Aprendizajes de proyectos y liderazgo.' },
  { name: 'Conversaciones', description: 'Entrevistas con ejecutivos, clientes o referentes.' },
]

export type Idea = {
  title: string
  standfirst: string
  collection: Collection
  format: Format
  readingTime: string
  featured?: boolean
}

export const ideas: Idea[] = [
  {
    title: 'Cuándo migrar a S/4HANA (y cuándo no es el momento)',
    standfirst:
      'La pregunta no es técnica ni de calendario de soporte: es qué decisiones de negocio quieres poder tomar dentro de tres años.',
    collection: 'Transformación y SAP',
    format: 'Punto de vista',
    readingTime: '6 min',
    featured: true,
  },
  {
    title: 'Señales de alarma en una implantación SAP',
    standfirst:
      'Siete indicios que aparecen mucho antes que la primera desviación oficial del plan.',
    collection: 'Transformación y SAP',
    format: 'Desde la experiencia',
    readingTime: '5 min',
  },
  {
    title: 'Seniority frente a volumen',
    standfirst:
      'Por qué un equipo pequeño con criterio rinde más que una estructura grande sin capacidad de decidir.',
    collection: 'Liderazgo y empresa',
    format: 'Punto de vista',
    readingTime: '4 min',
  },
  {
    title: 'Lo que aprendí liderando proyectos complejos en varios países',
    standfirst:
      'La distancia cultural explica más desviaciones de plan que la complejidad funcional.',
    collection: 'Liderazgo y empresa',
    format: 'Desde la experiencia',
    readingTime: '7 min',
  },
  {
    title: 'Cómo evitar sobrecostes sin recortar alcance por sorpresa',
    standfirst:
      'El sobrecoste casi nunca nace en la estimación: nace en las decisiones que se posponen.',
    collection: 'Transformación y SAP',
    format: 'Punto de vista',
    readingTime: '5 min',
  },
  {
    title: 'Cómo gestionar equipos SAP en un mercado tensionado',
    standfirst:
      'Retener no es pagar más: es dar proyectos con sentido, criterio propio y continuidad.',
    collection: 'Talento y cultura',
    format: 'Desde la experiencia',
    readingTime: '6 min',
  },
  {
    title: 'Formar talento cuando el mercado no lo ofrece',
    standfirst:
      'Qué aprendimos construyendo una cantera propia de consultores SAP desde cero.',
    collection: 'Talento y cultura',
    format: 'Desde la experiencia',
    readingTime: '5 min',
  },
  {
    title: 'Diversidad y capacidad de decidir',
    standfirst:
      'Cómo cambia un comité cuando deja de estar formado por personas con la misma trayectoria.',
    collection: 'Diversidad e impacto',
    format: 'Punto de vista',
    readingTime: '4 min',
  },
  {
    title: 'Conversación con un CFO sobre decisiones de ERP',
    standfirst:
      'Qué espera realmente la dirección financiera de un partner tecnológico.',
    collection: 'Liderazgo y empresa',
    format: 'Conversaciones',
    readingTime: '9 min',
  },
  {
    title: 'Conversación sobre liderazgo femenino en tecnología',
    standfirst:
      'Dos trayectorias distintas y una misma conclusión sobre la promoción interna.',
    collection: 'Diversidad e impacto',
    format: 'Conversaciones',
    readingTime: '8 min',
  },
]

export const contactReasons = [
  { id: 'consejo', label: 'Consejo o comité asesor' },
  { id: 'evento', label: 'Conferencia, entrevista o evento' },
  { id: 'colaboracion', label: 'Colaboración empresarial' },
  { id: 'essensup', label: 'Proyecto de transformación con EssensUp' },
  { id: 'otra', label: 'Otra propuesta' },
] as const

export const closing = {
  quote:
    'Las transformaciones importantes empiezan con una conversación honesta sobre lo que debe cambiar.',
  ctas: [
    { label: 'Proponer una colaboración', to: '/contacto?motivo=colaboracion' },
    { label: 'Invitarme a un consejo, evento o conversación', to: '/contacto?motivo=consejo' },
    { label: 'Hablar con EssensUp sobre un proyecto', to: '/contacto?motivo=essensup' },
  ],
}
