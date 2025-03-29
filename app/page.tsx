import Link from "next/link"
import {
  ChevronRight,
  Headphones,
  Languages,
  Mic2,
  Music,
  Radio,
  Users,
  AudioWaveformIcon as Waveform,
} from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Radio className="w-6 h-6 text-primary" />
            <span>Digital Radio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Servicios
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Quiénes Somos
            </Link>
            <Link href="#resources" className="text-sm font-medium hover:text-primary">
              Recursos
            </Link>
            <Link href="#packages" className="text-sm font-medium hover:text-primary">
              Paquetes
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Button asChild className="hidden md:flex">
            <Link href="#contact">Contáctanos</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Eleve la Audiencia de su Estación de Radio
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Somos un grupo de profesionales con 30 años de experiencia creando complementos auditivos que
                  transformarán la programación de su estación.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="#contact">
                    Contáctanos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#services">Nuestros Servicios</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 md:h-96">
                <Waveform className="w-full h-full text-primary/50" strokeWidth={0.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-6 shadow-lg">
                    <Radio className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ofrecemos soluciones completas para elevar la calidad y audiencia de su estación de radio
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Librerías Musicales</h3>
              <p className="text-center text-gray-500">
                Amplia colección de pistas de todos los géneros y duración ideales para la producción auditiva, con
                instrumentación en vivo y digital.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mic2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Banco de Voces</h3>
              <p className="text-center text-gray-500">
                El grupo de voces más grande del mercado con locutores y actores latinoamericanos y europeos en español,
                francés, inglés, portugués e italiano.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <Headphones className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Efectos de Sonido</h3>
              <p className="text-center text-gray-500">
                Efectos de sonido en alta definición que se han destacado en campañas publicitarias en Estados Unidos,
                Europa y todo el mundo.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Staff Creativo</h3>
              <p className="text-center text-gray-500">
                Creativos y escritores dispuestos a desarrollar las mejores ideas y conceptos originales que captan la
                atención del oyente.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <Languages className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Servicios Multilingües</h3>
              <p className="text-center text-gray-500">
                Producción en múltiples idiomas: español, inglés, francés, italiano y portugués para alcanzar audiencias
                internacionales.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <Radio className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Producción Completa</h3>
              <p className="text-center text-gray-500">
                Jingles, identificaciones, coros, cortinas, anuncios, promociones y comerciales para estaciones
                musicales y noticiosas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quiénes Somos</h2>
              <p className="text-gray-500 md:text-xl">
                Con una experiencia de 30 años formando parte de exitosas campañas de producción radiales con
                complementos de programación ideales para estaciones de radio.
              </p>
              <p className="text-gray-500 md:text-xl">
                Hemos participado en la creación de jingles, identificaciones, coros, cortinas, anuncios, promociones,
                comerciales y mucho más para estaciones musicales y noticiosas dentro y fuera de Panamá.
              </p>
              <p className="text-gray-500 md:text-xl">
                Nuestro objetivo es ayudarle a desarrollar increíbles complementos auditivos para el contenido de la
                programación de su estación radio, otorgándole más detalles que ayudarán a elevar su audiencia.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64 md:h-96 bg-primary/10 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Radio className="w-24 h-24 text-primary/30" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent text-white">
                  <h3 className="text-xl font-bold">30 años de experiencia</h3>
                  <p>Creando sonidos que capturan audiencias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Con Qué Contamos</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Los últimos adelantos técnicos y representaciones de las principales casas de producción
              </p>
            </div>
          </div>
          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <h3 className="text-xl font-bold">Librerías Musicales y de Efectos</h3>
                <p className="mt-2 text-gray-500">
                  Con la llegada del internet y la inteligencia artificial, hemos logrado unir fuerzas en la
                  representación de las casas productoras megatrax, universal music, BBC y otras más.
                </p>
                <p className="mt-2 text-gray-500">
                  Esto nos da la más amplia colección de pistas de todos los géneros y duración ideales para la
                  producción auditiva.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <h3 className="text-xl font-bold">Banco de Voces</h3>
                <p className="mt-2 text-gray-500">
                  Formamos parte del grupo de voces más grande del mercado de la producción, con todo tipo de voces de
                  todos los tonos, matices y géneros.
                </p>
                <p className="mt-2 text-gray-500">
                  Locutores, actores y voces latinoamericanas y europeas hablando en español, francés, inglés, portugués
                  e italiano.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <h3 className="text-xl font-bold">Staff Creativo y Productores</h3>
                <p className="mt-2 text-gray-500">
                  Un personal creativo que cuenta con escritores dispuestos a desarrollar las mejores ideas, en
                  conceptos agresivos y originales.
                </p>
                <p className="mt-2 text-gray-500">
                  Tecnología de punta en programas y herramientas digitales, monitores Yamaha para mezclas de audio
                  precisas y procesadores de efectos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Paquetes y Ofertas</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestros paquetes y ofertas buscan crear la oportunidad para que usted conozca nuestra capacidad de
                inventiva y producción
              </p>
            </div>
          </div>
          <div className="grid gap-6 mt-12 md:grid-cols-3">
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm border">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Paquete Básico</h3>
                <p className="text-gray-500">Ideal para estaciones pequeñas que buscan mejorar su sonido</p>
              </div>
              <div className="mt-6 space-y-2">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>5 Jingles personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>3 Identificaciones de estación</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Acceso a librería de efectos</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button className="w-full" asChild>
                  <Link href="#contact">Solicitar Información</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-primary text-primary-foreground rounded-lg shadow-sm border border-primary">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Paquete Profesional</h3>
                <p className="text-primary-foreground/80">Para estaciones que buscan destacar en su mercado</p>
              </div>
              <div className="mt-6 space-y-2">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>10 Jingles personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>5 Identificaciones de estación</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Cortinas para programas</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Acceso completo a librerías</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="#contact">Solicitar Información</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm border">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Paquete Premium</h3>
                <p className="text-gray-500">Solución completa para dominar su mercado</p>
              </div>
              <div className="mt-6 space-y-2">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Paquete completo personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Voces exclusivas</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Consultoría de programación</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Actualizaciones trimestrales</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <Button className="w-full" asChild>
                  <Link href="#contact">Solicitar Información</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl font-bold">No Es Para Asustarse</p>
            <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
              Nuestros precios y paquetes están ideados para que usted pueda trabajar con nosotros. Somos creyentes de
              superar retos con el menor esfuerzo necesario, y aunque dominamos muchos lenguajes, ideas, y conceptos la
              palabra imposible no la conocemos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contáctanos</h2>
              <p className="text-gray-500 md:text-xl">
                Para lograr obtener lo que su estación más le urge de nuestro apoyo, permítanos hacerle un par de
                preguntas:
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Cuestionario para producción:</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li className="text-gray-500">
                    La mayor audiencia de su estación actual se logra gracias programas musicales o programas hablados.
                  </li>
                  <li className="text-gray-500">
                    Cuenta su estación con espacios noticiosos y ser afirmativa su respuesta cuantos despachos se emiten
                    diariamente y en que horario.
                  </li>
                  <li className="text-gray-500">
                    La programación musical que su estación emite a que grupo objetivo desea llegar: jóvenes (que edad),
                    personas mayores (que edad). A que clase social esta dirigida: baja, media alta. De que sexo hombres
                    o mujeres.
                  </li>
                  <li className="text-gray-500">
                    En que idioma emite su estación de radio. En cuantas frecuencias emite diariamente y que emite en
                    cada frecuencia.
                  </li>
                  <li className="text-gray-500">
                    La emisión de su estación es automatizada o cuenta con operadores o locutores en turnos de cuánto
                    tiempo.
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nombre
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Ingrese su nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Apellido
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Ingrese su apellido"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Ingrese su email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="station-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nombre de la Estación
                  </label>
                  <input
                    id="station-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nombre de su estación de radio"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Describa sus necesidades y responda a las preguntas del cuestionario"
                  ></textarea>
                </div>
                <Button type="submit" size="lg">
                  Enviar Mensaje
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-50">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-bold">
                <Radio className="w-6 h-6 text-primary" />
                <span>Digital Radio</span>
              </div>
              <p className="text-gray-400">
                Profesionales con 30 años de experiencia en producción radial, ayudando a estaciones a elevar su
                audiencia.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Librerías Musicales
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Banco de Voces
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Efectos de Sonido
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">
                    Producción Completa
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="#resources" className="text-gray-400 hover:text-white">
                    Recursos
                  </Link>
                </li>
                <li>
                  <Link href="#packages" className="text-gray-400 hover:text-white">
                    Paquetes
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-gray-400">+507 123 4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-gray-400">info@digitalradio.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-400">Panamá, Panamá</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Digital Radio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

