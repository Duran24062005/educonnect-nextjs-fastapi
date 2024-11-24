import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { TabsContent } from '@radix-ui/react-tabs'
import { Book, Calendar, GraduationCap } from 'lucide-react'
import React from 'react'

export const Dashboard = () => {
  return (
    <div className="mt-6">
              <TabsContent value="overview">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Book className="w-8 h-8 text-primary" />
                      <div>
                        <CardTitle>Cursos Activos</CardTitle>
                        <CardDescription>Total de cursos matriculados</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">6</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <Calendar className="w-8 h-8 text-primary" />
                      <div>
                        <CardTitle>Tareas Pendientes</CardTitle>
                        <CardDescription>Tareas por entregar</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">4</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <GraduationCap className="w-8 h-8 text-primary" />
                      <div>
                        <CardTitle>Promedio General</CardTitle>
                        <CardDescription>Todos los cursos</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">88%</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-6 mt-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Próximas Clases</CardTitle>
                      <CardDescription>Horario para hoy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { time: "08:00 AM", course: "Matemáticas", teacher: "Prof. Rodríguez" },
                          { time: "10:30 AM", course: "Literatura", teacher: "Prof. Gómez" },
                          { time: "02:00 PM", course: "Física", teacher: "Prof. Martínez" },
                        ].map((class_, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{class_.course}</p>
                              <p className="text-sm text-gray-500">{class_.teacher}</p>
                            </div>
                            <p className="text-sm">{class_.time}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tareas Próximas</CardTitle>
                      <CardDescription>Entregas pendientes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { title: "Ensayo de Literatura", course: "Literatura", due: "Mañana" },
                          { title: "Problemas de Física", course: "Física", due: "En 2 días" },
                          { title: "Proyecto de Historia", course: "Historia", due: "En 1 semana" },
                        ].map((task, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">{task.title}</p>
                              <p className="text-sm text-gray-500">{task.course}</p>
                            </div>
                            <p className="text-sm">{task.due}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </div>
  )
}
