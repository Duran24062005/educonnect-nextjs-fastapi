// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing FastApi API&nbsp;
//           <Link href="http://127.0.0.1:8000/welcome/api/py/helloFastApi">
//             <code className="font-mono font-bold">api/index.py</code>
//           </Link>
//         </p>
//         <p className="fixed right-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing Next.js API&nbsp;
//           <Link href="/api/helloNextJs">
//             <code className="font-mono font-bold">app/api/helloNextJs</code>
//           </Link>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//       <p>hola mundo</p>
//     </main>
//   );
// }




// "use client"

// import { useState } from "react"
// import { Bell, Book, Calendar, ChevronDown, GraduationCap, LayoutDashboard, LogOut, MessageSquare, Settings, Users } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// export default function TeacherDashboard() {
//   const [activeTab, setActiveTab] = useState("overview")

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="hidden w-64 bg-white border-r md:block">
//         <div className="p-4 border-b">
//           <h2 className="text-xl font-bold text-primary">EduConnect</h2>
//         </div>
//         <nav className="p-4 space-y-2">
//           <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("overview")}>
//             <LayoutDashboard className="w-4 h-4 mr-2" />
//             Vista General
//           </Button>
//           <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("students")}>
//             <Users className="w-4 h-4 mr-2" />
//             Estudiantes
//           </Button>
//           <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("courses")}>
//             <Book className="w-4 h-4 mr-2" />
//             Cursos
//           </Button>
//           <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("calendar")}>
//             <Calendar className="w-4 h-4 mr-2" />
//             Calendario
//           </Button>
//           <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab("messages")}>
//             <MessageSquare className="w-4 h-4 mr-2" />
//             Mensajes
//           </Button>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white border-b">
//           <div className="flex items-center justify-between px-4 py-3">
//             <div className="flex items-center gap-2">
//               <Input className="w-64" placeholder="Buscar..." type="search" />
//             </div>
//             <div className="flex items-center gap-4">
//               <Button variant="ghost" size="icon">
//                 <Bell className="w-5 h-5" />
//               </Button>
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" className="flex items-center gap-2">
//                     <Avatar className="w-8 h-8">
//                       <AvatarImage src="/placeholder.svg" />
//                       <AvatarFallback>PR</AvatarFallback>
//                     </Avatar>
//                     <span>Prof. Rodríguez</span>
//                     <ChevronDown className="w-4 h-4" />
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end">
//                   <DropdownMenuItem>
//                     <Settings className="w-4 h-4 mr-2" />
//                     Configuración
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <LogOut className="w-4 h-4 mr-2" />
//                     Cerrar Sesión
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="p-6">
//           <Tabs value={activeTab} onValueChange={setActiveTab}>
//             <TabsList>
//               <TabsTrigger value="overview">Vista General</TabsTrigger>
//               <TabsTrigger value="students">Estudiantes</TabsTrigger>
//               <TabsTrigger value="courses">Cursos</TabsTrigger>
//               <TabsTrigger value="calendar">Calendario</TabsTrigger>
//               <TabsTrigger value="messages">Mensajes</TabsTrigger>
//             </TabsList>
//             <div className="mt-6">
//               <TabsContent value="overview">
//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                   <Card>
//                     <CardHeader className="flex flex-row items-center gap-4">
//                       <Users className="w-8 h-8 text-primary" />
//                       <div>
//                         <CardTitle>Total Estudiantes</CardTitle>
//                         <CardDescription>Estudiantes activos</CardDescription>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-3xl font-bold">156</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center gap-4">
//                       <Book className="w-8 h-8 text-primary" />
//                       <div>
//                         <CardTitle>Cursos Activos</CardTitle>
//                         <CardDescription>Cursos en progreso</CardDescription>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-3xl font-bold">8</p>
//                     </CardContent>
//                   </Card>
//                   <Card>
//                     <CardHeader className="flex flex-row items-center gap-4">
//                       <GraduationCap className="w-8 h-8 text-primary" />
//                       <div>
//                         <CardTitle>Promedio General</CardTitle>
//                         <CardDescription>Todos los cursos</CardDescription>
//                       </div>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-3xl font-bold">85%</p>
//                     </CardContent>
//                   </Card>
//                 </div>

//                 <div className="grid gap-6 mt-6 md:grid-cols-2">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Próximas Clases</CardTitle>
//                       <CardDescription>Clases programadas para hoy</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4">
//                         {[
//                           { time: "08:00 AM", course: "Matemáticas", group: "9°A" },
//                           { time: "10:30 AM", course: "Física", group: "10°B" },
//                           { time: "02:00 PM", course: "Química", group: "11°A" },
//                         ].map((class_, index) => (
//                           <div key={index} className="flex items-center justify-between">
//                             <div>
//                               <p className="font-medium">{class_.course}</p>
//                               <p className="text-sm text-gray-500">{class_.group}</p>
//                             </div>
//                             <p className="text-sm">{class_.time}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Tareas Pendientes</CardTitle>
//                       <CardDescription>Tareas por calificar</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4">
//                         {[
//                           { title: "Proyecto Final", course: "Física 10°B", due: "Hoy" },
//                           { title: "Examen Parcial", course: "Matemáticas 9°A", due: "Mañana" },
//                           { title: "Laboratorio", course: "Química 11°A", due: "En 2 días" },
//                         ].map((task, index) => (
//                           <div key={index} className="flex items-center justify-between">
//                             <div>
//                               <p className="font-medium">{task.title}</p>
//                               <p className="text-sm text-gray-500">{task.course}</p>
//                             </div>
//                             <p className="text-sm">{task.due}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </TabsContent>

//               <TabsContent value="students">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Lista de Estudiantes</CardTitle>
//                     <CardDescription>Gestiona tus estudiantes por curso</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {[
//                         { name: "Ana García", grade: "9°A", average: "92%" },
//                         { name: "Carlos López", grade: "9°A", average: "88%" },
//                         { name: "María Rodríguez", grade: "10°B", average: "95%" },
//                         { name: "Juan Pérez", grade: "11°A", average: "87%" },
//                       ].map((student, index) => (
//                         <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
//                           <div className="flex items-center gap-4">
//                             <Avatar>
//                               <AvatarFallback>{student.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
//                             </Avatar>
//                             <div>
//                               <p className="font-medium">{student.name}</p>
//                               <p className="text-sm text-gray-500">Grado: {student.grade}</p>
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <p className="font-medium">Promedio</p>
//                             <p className="text-sm text-gray-500">{student.average}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="courses">
//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                   {[
//                     { name: "Matemáticas", grade: "9°A", students: 32 },
//                     { name: "Física", grade: "10°B", students: 28 },
//                     { name: "Química", grade: "11°A", students: 30 },
//                   ].map((course, index) => (
//                     <Card key={index}>
//                       <CardHeader>
//                         <CardTitle>{course.name}</CardTitle>
//                         <CardDescription>Grado: {course.grade}</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-sm text-gray-500">{course.students} estudiantes</p>
//                         <div className="mt-4">
//                           <Button className="w-full">Ver Detalles</Button>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>

//               <TabsContent value="calendar">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Calendario Académico</CardTitle>
//                     <CardDescription>Eventos y fechas importantes</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {[
//                         { date: "15 Nov", event: "Entrega de Notas", type: "Académico" },
//                         { date: "20 Nov", event: "Reunión de Padres", type: "Reunión" },
//                         { date: "25 Nov", event: "Exámenes Finales", type: "Evaluación" },
//                       ].map((event, index) => (
//                         <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
//                           <div>
//                             <p className="font-medium">{event.event}</p>
//                             <p className="text-sm text-gray-500">{event.type}</p>
//                           </div>
//                           <p className="text-sm font-medium">{event.date}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="messages">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Mensajes</CardTitle>
//                     <CardDescription>Comunicaciones recientes</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {[
//                         { from: "María González", subject: "Consulta sobre tarea", time: "Hace 1 hora" },
//                         { from: "Pedro Sánchez", subject: "Permiso de ausencia", time: "Hace 3 horas" },
//                         { from: "Ana Torres", subject: "Reunión de padres", time: "Ayer" },
//                       ].map((message, index) => (
//                         <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
//                           <div className="flex items-center gap-4">
//                             <Avatar>
//                               <AvatarFallback>{message.from.split(" ").map(n => n[0]).join("")}</AvatarFallback>
//                             </Avatar>
//                             <div>
//                               <p className="font-medium">{message.from}</p>
//                               <p className="text-sm text-gray-500">{message.subject}</p>
//                             </div>
//                           </div>
//                           <p className="text-sm text-gray-500">{message.time}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             </div>
//           </Tabs>
//         </main>
//       </div>
//     </div>
//   )
// }














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
