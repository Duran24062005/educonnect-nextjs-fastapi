import { Button } from '@/components/ui/button'
import { Book, Calendar, GraduationCap, LayoutDashboard, MessageSquare } from 'lucide-react'
import React from 'react'

export const SideBar = () => {

    function setActiveTab(arg0: string): void {
        throw new Error('Function not implemented.')
    }

  return (
    <aside className="hidden w-64 bg-white border-r md:block">
        <div className="p-4 border-b">
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
  )
}














// import { Button } from '@/components/ui/button'
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
// import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
// import { Progress } from '@radix-ui/react-progress'
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
// import { Book, Calendar, GraduationCap } from 'lucide-react'
// import React from 'react'

// export const Dashboard = () => {
//   return (
//         <main className="p-6">

//               <TabsContent value="assignments">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Tareas Asignadas</CardTitle>
//                     <CardDescription>Lista de todas las tareas pendientes</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {[
//                         { title: "Ensayo de Literatura", course: "Literatura", due: "2023-11-20", status: "Pendiente" },
//                         { title: "Problemas de Física", course: "Física", due: "2023-11-22", status: "En progreso" },
//                         { title: "Proyecto de Historia", course: "Historia", due: "2023-11-25", status: "No iniciado" },
//                         { title: "Ejercicios de Matemáticas", course: "Matemáticas", due: "2023-11-18", status: "Completado" },
//                       ].map((task, index) => (
//                         <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
//                           <div>
//                             <p className="font-medium">{task.title}</p>
//                             <p className="text-sm text-gray-500">{task.course}</p>
//                           </div>
//                           <div className="text-right">
//                             <p className="text-sm">Entrega: {task.due}</p>
//                             <p className={`text-sm font-medium ${
//                               task.status === "Completado" ? "text-green-500" :
//                               task.status === "En progreso" ? "text-yellow-500" :
//                               "text-red-500"
//                             }`}>{task.status}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="grades">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Calificaciones</CardTitle>
//                     <CardDescription>Resumen de calificaciones por curso</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {[
//                         { course: "Matemáticas", grade: 85, letterGrade: "B" },
//                         { course: "Literatura", grade: 92, letterGrade: "A" },
//                         { course: "Física", grade: 88, letterGrade: "B+" },
//                         { course: "Historia", grade: 78, letterGrade: "C+" },
//                         { course: "Biología", grade: 90, letterGrade: "A-" },
//                         { course: "Inglés", grade: 95, letterGrade: "A" },
//                       ].map((grade, index) => (
//                         <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
//                           <p className="font-medium">{grade.course}</p>
//                           <div className="text-right">
//                             <p className="text-2xl font-bold">{grade.grade}%</p>
//                             <p className="text-sm text-gray-500">{grade.letterGrade}</p>
//                           </div>
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
//                         { from: "Prof. Rodríguez", subject: "Recordatorio: Entrega de proyecto", time: "Hace 2 horas" },
//                         { from: "Secretaría Académica", subject: "Información sobre exámenes finales", time: "Ayer" },
//                         { from: "Prof. Gómez", subject: "Calificación del ensayo", time: "Hace 2 días" },
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
//                     <Button className="w-full mt-4">Ver Todos los Mensajes</Button>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             </div>
//           </Tabs>
//         </main>
//   )
// }
