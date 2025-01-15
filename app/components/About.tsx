'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Users, GraduationCap, FileText, UsersIcon, Clock, BarChart, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function About() {
  const [activeTab, setActiveTab] = useState('features')

  const features = [
    {
      title: 'Gestión de Estudiantes',
      icon: <Users className="h-6 w-6" />,
      items: [
        'Crear perfiles de estudiantes con información detallada',
        'Actualizar datos de estudiantes',
        'Eliminar registros de estudiantes cuando sea necesario'
      ]
    },
    {
      title: 'Gestión de Notas y Materias',
      icon: <Book className="h-6 w-6" />,
      items: [
        'Registrar y actualizar notas por materia y grado',
        'Acceso rápido a los registros de calificaciones',
        'Creación y administración de perfiles de materias'
      ]
    },
    {
      title: 'Portal de Maestros',
      icon: <GraduationCap className="h-6 w-6" />,
      items: [
        'Acceso exclusivo para maestros',
        'Facilidad para crear, modificar y eliminar calificaciones',
        'Generación de informes personalizados'
      ]
    },
    {
      title: 'Consultas y Reportes',
      icon: <FileText className="h-6 w-6" />,
      items: [
        'Consulta de informes académicos detallados por estudiante',
        'Generación de informes de progreso académico',
        'Acceso a estadísticas y análisis educativos'
      ]
    },
    {
      title: 'Portal para Padres',
      icon: <UsersIcon className="h-6 w-6" />,
      items: [
        'Acceso seguro para padres',
        'Consulta de notas y progreso académico de sus hijos',
        'Comunicación directa con los maestros'
      ]
    }
  ]

  const benefits = [
    {
      title: 'Centralización de la Información',
      icon: <Globe className="h-6 w-6" />,
      description: 'EduConnect centraliza toda la información académica en una plataforma accesible desde cualquier lugar y en cualquier momento, eliminando la necesidad de documentos físicos y simplificando la gestión de datos.'
    },
    {
      title: 'Mejora la Comunicación',
      icon: <Users className="h-6 w-6" />,
      description: 'Facilita la comunicación entre maestros, estudiantes y padres, lo que promueve una colaboración más estrecha y una comprensión más profunda del progreso académico.'
    },
    {
      title: 'Ahorro de Tiempo y Recursos',
      icon: <Clock className="h-6 w-6" />,
      description: 'Al automatizar procesos como la gestión de notas y la generación de informes, EduConnect ahorra tiempo y recursos tanto a maestros como a personal administrativo.'
    },
    {
      title: 'Análisis y Seguimiento',
      icon: <BarChart className="h-6 w-6" />,
      description: 'Ofrece herramientas de análisis y seguimiento que permiten a los maestros identificar áreas de mejora y tomar decisiones informadas para mejorar el rendimiento académico de los estudiantes.'
    },
    {
      title: 'Acceso Universal',
      icon: <Globe className="h-6 w-6" />,
      description: 'La plataforma está diseñada para ser accesible desde cualquier dispositivo con conexión a Internet, lo que garantiza que todos los usuarios puedan acceder a la información relevante en cualquier momento y lugar.'
    }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-8 text-center font-bold text-primary Logo">Sobre EduConnect</h2>
        
        <Card className="mb-12">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              EduConnect es una plataforma educativa integral diseñada para facilitar la gestión académica y mejorar la comunicación entre estudiantes, maestros y padres. Esta solución innovadora ofrece una amplia gama de funcionalidades diseñadas para optimizar el proceso educativo y proporcionar una experiencia enriquecedora para todos los usuarios.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="features" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="features">Funcionalidades Clave</TabsTrigger>
            <TabsTrigger value="benefits">Ventajas y Beneficios</TabsTrigger>
          </TabsList>
          <TabsContent value="features">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {features.map((feature, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl font-semibold">
                      {feature.icon}
                      <span className="ml-2">{feature.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="benefits">
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-xl font-semibold">
                      {benefit.icon}
                      <span className="ml-2">{benefit.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}


