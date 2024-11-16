"use client"

import { useState } from "react"
import { Bell, Book, Calendar, ChevronDown, GraduationCap, LayoutDashboard, LogOut, MessageSquare, Settings, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden w-64 bg-white border-r md:block">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-primary">EduConnect</h2>
        </div>
        <nav className="p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("overview")}>
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Vista General
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("courses")}>
            <Book className="w-4 h-4 mr-2" />
            Mis Cursos
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("assignments")}>
            <Calendar className="w-4 h-4 mr-2" />
            Tareas
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("grades")}>
            <GraduationCap className="w-4 h-4 mr-2" />
            Calificaciones
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("messages")}>
            <MessageSquare className="w-4 h-4 mr-2" />
            Mensajes
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <Input className="w-64" placeholder="Buscar..." type="search" />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>AG</AvatarFallback>
                    </Avatar>
                    <span>Ana García</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Configuración
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="w-4 h-4 mr-2" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">Vista General</TabsTrigger>
              <TabsTrigger value="courses">Mis Cursos</TabsTrigger>
              <TabsTrigger value="assignments">Tareas</TabsTrigger>
              <TabsTrigger value="grades">Calificaciones</TabsTrigger>
              <TabsTrigger value="messages">Mensajes</TabsTrigger>
            </TabsList>
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

              <TabsContent value="courses">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: "Matemáticas", teacher: "Prof. Rodríguez", progress: 75 },
                    { name: "Literatura", teacher: "Prof. Gómez", progress: 60 },
                    { name: "Física", teacher: "Prof. Martínez", progress: 80 },
                    { name: "Historia", teacher: "Prof. Sánchez", progress: 70 },
                    { name: "Biología", teacher: "Prof. López", progress: 85 },
                    { name: "Inglés", teacher: "Prof. Smith", progress: 90 },
                  ].map((course, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{course.name}</CardTitle>
                        <CardDescription>{course.teacher}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Progreso del curso</span>
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="w-full" />
                        <Button className="w-full mt-4">Ver Detalles</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="assignments">
                <Card>
                  <CardHeader>
                    <CardTitle>Tareas Asignadas</CardTitle>
                    <CardDescription>Lista de todas las tareas pendientes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { title: "Ensayo de Literatura", course: "Literatura", due: "2023-11-20", status: "Pendiente" },
                        { title: "Problemas de Física", course: "Física", due: "2023-11-22", status: "En progreso" },
                        { title: "Proyecto de Historia", course: "Historia", due: "2023-11-25", status: "No iniciado" },
                        { title: "Ejercicios de Matemáticas", course: "Matemáticas", due: "2023-11-18", status: "Completado" },
                      ].map((task, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <p className="font-medium">{task.title}</p>
                            <p className="text-sm text-gray-500">{task.course}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm">Entrega: {task.due}</p>
                            <p className={`text-sm font-medium ${
                              task.status === "Completado" ? "text-green-500" :
                              task.status === "En progreso" ? "text-yellow-500" :
                              "text-red-500"
                            }`}>{task.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="grades">
                <Card>
                  <CardHeader>
                    <CardTitle>Calificaciones</CardTitle>
                    <CardDescription>Resumen de calificaciones por curso</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { course: "Matemáticas", grade: 85, letterGrade: "B" },
                        { course: "Literatura", grade: 92, letterGrade: "A" },
                        { course: "Física", grade: 88, letterGrade: "B+" },
                        { course: "Historia", grade: 78, letterGrade: "C+" },
                        { course: "Biología", grade: 90, letterGrade: "A-" },
                        { course: "Inglés", grade: 95, letterGrade: "A" },
                      ].map((grade, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <p className="font-medium">{grade.course}</p>
                          <div className="text-right">
                            <p className="text-2xl font-bold">{grade.grade}%</p>
                            <p className="text-sm text-gray-500">{grade.letterGrade}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="messages">
                <Card>
                  <CardHeader>
                    <CardTitle>Mensajes</CardTitle>
                    <CardDescription>Comunicaciones recientes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { from: "Prof. Rodríguez", subject: "Recordatorio: Entrega de proyecto", time: "Hace 2 horas" },
                        { from: "Secretaría Académica", subject: "Información sobre exámenes finales", time: "Ayer" },
                        { from: "Prof. Gómez", subject: "Calificación del ensayo", time: "Hace 2 días" },
                      ].map((message, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarFallback>{message.from.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{message.from}</p>
                              <p className="text-sm text-gray-500">{message.subject}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">{message.time}</p>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4">Ver Todos los Mensajes</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
