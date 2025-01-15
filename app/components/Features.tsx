import { GraduationCap, ClipboardList, Users, BarChart, MessageCircle, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: <GraduationCap className="h-8 w-8 mb-2" />,
    title: 'Gestión Académica',
    description: 'Sistema integral para administrar perfiles de estudiantes, notas y materias con facilidad.'
  },
  {
    icon: <ClipboardList className="h-8 w-8 mb-2" />,
    title: 'Portal Docente',
    description: 'Herramientas especializadas para que los maestros gestionen calificaciones y generen informes personalizados.'
  },
  {
    icon: <Users className="h-8 w-8 mb-2" />,
    title: 'Portal Familiar',
    description: 'Acceso seguro para padres para monitorear el progreso académico y mantener comunicación directa con los maestros.'
  },
  {
    icon: <BarChart className="h-8 w-8 mb-2" />,
    title: 'Análisis y Reportes',
    description: 'Generación de informes detallados y análisis estadísticos para seguimiento del rendimiento académico.'
  },
  {
    icon: <MessageCircle className="h-8 w-8 mb-2" />,
    title: 'Comunicación Efectiva',
    description: 'Canales de comunicación integrados que conectan a toda la comunidad educativa en tiempo real.'
  },
  {
    icon: <Globe className="h-8 w-8 mb-2" />,
    title: 'Acceso Universal',
    description: 'Plataforma accesible desde cualquier dispositivo, permitiendo la gestión educativa en cualquier momento y lugar.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="Alexi_Dg text-3xl md:text-4xl mb-4 text-center">Características Principales</h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Descubre todas las herramientas que EduConnect ofrece para transformar la gestión educativa en una experiencia eficiente y colaborativa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-xl">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

