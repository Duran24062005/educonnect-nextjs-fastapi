// import React from 'react';
// import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

// const months = ['priner periodo', 'segundo periodo', 'tercer periodo', 'cuarto periodo', 'total'];
// const values = [15, 12, 4, 6, 40, 5, 60];

// const chartData = {
//   labels: months,
//   datasets: [
//     {
//       fill: true,
//       label: 'Shot Views',
//       data: values,
//       borderColor: '#10B981',
//       backgroundColor: 'rgba(16, 185, 129, 0.1)',
//       tension: 0.4,
//       pointRadius: 0,
//       borderWidth: 2,
//     },
//   ],
// };

// const chartOptions = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     legend: {
//       display: false,
//     },
//     tooltip: {
//       backgroundColor: '#1F2937',
//       titleColor: '#fff',
//       bodyColor: '#fff',
//       padding: 12,
//       borderColor: '#374151',
//       borderWidth: 1,
//       displayColors: false,
//     },
//   },
//   scales: {
//     x: {
//       grid: {
//         display: false,
//       },
//       border: {
//         display: false,
//       },
//       ticks: {
//         color: '#6B7280',
//         font: {
//           size: 12,
//         },
//       },
//     },
//     y: {
//       grid: {
//         color: '#374151',
//         drawBorder: false,
//       },
//       border: {
//         display: false,
//       },
//       ticks: {
//         color: '#6B7280',
//         font: {
//           size: 12,
//         },
//         callback: (value: number) => value,
//       },
//     },
//   },
// };

// export function Dashboard() {
//   return (
//     <div className="flex-1 p-8 bg-gray-900">
//       <div className="mb-8">
//         <h1 className="text-3xl font-semibold text-white mb-2">Hello, Welcome Back Prof. Alexi</h1>
//         <p className="text-gray-400 text-lg">Good vibes</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-gray-800 rounded-xl p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl text-white">Shot views</h2>
//             <select className="bg-gray-700 text-gray-300 rounded-lg px-3 py-1 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500">
//               <option value="">Primer periodo</option>
//               <option value="">Segundo Periodo</option>
//               <option value="">Tercer Periodo</option>
//               <option value="">Cuarto Periodo</option>
//               <option value="">Total</option>
//             </select>
//           </div>
          
//           <div className="h-64">
//             <Line data={chartData} options={chartOptions} />
//           </div>
//         </div>

//         <div className="bg-gray-800 rounded-xl p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl text-white">Most viewed</h2>
//             <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
//               Last week
//             </span>
//           </div>

//           <div className="space-y-6">
//             <div>
//               <div className="flex items-baseline gap-2">
//                 <span className="text-6xl font-semibold text-white">60%</span>
//                 <div className="flex items-center text-emerald-400">
//                   <ArrowUpRight className="h-4 w-4" />
//                   <span className="text-sm">2.5%</span>
//                 </div>
//               </div>
//               <div className="text-gray-400 mt-2">Last views in month</div>
//             </div>

//             <div>
//               <div className="flex items-baseline gap-2">
//                 <span className="text-6xl font-semibold text-white">60K</span>
//                 <div className="flex items-center text-red-400">
//                   <ArrowDownRight className="h-4 w-4" />
//                   <span className="text-sm">0.8%</span>
//                 </div>
//               </div>
//               <div className="text-gray-400 mt-2">Total views</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BellIcon, CogIcon, HelpCircleIcon, ArrowDownIcon, ArrowUpIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// Datos de ejemplo para el gráfico
const chartData = {
  labels: ['Primer Periodo', 'Sungundo Periodo', 'Tercer Periodo', 'Cuarto Periodo', 'Total'],
  datasets: [
    {
      label: 'Rendimiento',
      data: [6.3, 8.4, 5.5, 9.2, 4.0],
      borderColor: '#4ade80',
      backgroundColor: '#4ade80',
      tension: 0.3,
    },
  ],
}

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  scales: {
    x: {
      grid: {
        color: '#404758',
      },
      ticks: {
        color: '#9da4b5',
      },
    },
    y: {
      grid: {
        color: '#404758',
      },
      ticks: {
        color: '#9da4b5',
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#2a3447',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#2a3447',
      borderWidth: 1,
      cornerRadius: 8,
    },
  },
}

const estudiantes = [
  { id: 1, nombre: 'Ana García', promedio: 9.5, estado: 'excelente', tendencia: 2.5 },
  { id: 2, nombre: 'Carlos Pérez', promedio: 7.8, estado: 'mejorable', tendencia: -0.8 },
  { id: 3, nombre: 'María Rodríguez', promedio: 8.9, estado: 'excelente', tendencia: 1.5 },
  { id: 4, nombre: 'Juan López', promedio: 6.5, estado: 'bajo', tendencia: -1.2 },
  { id: 5, nombre: 'Camilo Miranda', promedio: 8.2, estado: 'excelente', tendencia: 3.0 },
  { id: 6, nombre: 'Jose Antonio', promedio: 7.5, estado: 'mejorable', tendencia: 0.5 },
  { id: 7, nombre: 'Danilo Contreras', promedio: 9.1, estado: 'excelente', tendencia: 1.8 },
  { id: 8, nombre: 'Juan Andres', promedio: 6.8, estado: 'bajo', tendencia: -0.9 },
]

export function Dashboard() {
  const [gradoSeleccionado, setGradoSeleccionado] = useState('9')
  const [materiaSeleccionada, setMateriaSeleccionada] = useState('Matemáticas')

  return (
    <div className="min-h-screen bg-[#1a1f2e] text-gray-100 p-4 mb-20">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Hello, Welcome Back Prof. Alexi</h1>
            <p className="text-gray-400">Good vibes</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Select defaultValue="2023-T1">
            <SelectTrigger className="w-[180px] bg-[#2a3447] border-0 text-gray-300">
              <SelectValue placeholder="Seleccione período" />
            </SelectTrigger>
            <SelectContent className="bg-[#2a3447] border-[#2a3447]">
              <SelectItem value="2023-T1">2023 - Trimestre 1</SelectItem>
              <SelectItem value="2023-T2">2023 - Trimestre 2</SelectItem>
              <SelectItem value="2023-T3">2023 - Trimestre 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Filtros Globales</h2>
          <div className="flex space-x-4">
            <Select value={gradoSeleccionado} onValueChange={setGradoSeleccionado}>
              <SelectTrigger className="w-[180px] bg-[#2a3447] border-0 text-gray-300">
                <SelectValue placeholder="Seleccione grado" />
              </SelectTrigger>
              <SelectContent className="bg-[#2a3447] border-[#2a3447]">
                <SelectItem value="7">7º Grado</SelectItem>
                <SelectItem value="8">8º Grado</SelectItem>
                <SelectItem value="9">9º Grado</SelectItem>
              </SelectContent>
            </Select>
            <Select value={materiaSeleccionada} onValueChange={setMateriaSeleccionada}>
              <SelectTrigger className="w-[180px] bg-[#2a3447] border-0 text-gray-300">
                <SelectValue placeholder="Seleccione materia" />
              </SelectTrigger>
              <SelectContent className="bg-[#2a3447] border-[#2a3447]">
                <SelectItem value="Matemáticas">Matemáticas</SelectItem>
                <SelectItem value="Ciencias">Ciencias</SelectItem>
                <SelectItem value="Literatura">Literatura</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-56 mb-6">
        <Card className="mb-6 bg-[#232b3e] border-0 lg:w-[700px]">
          <CardHeader>
            <CardTitle className="text-gray-100">{`Rendimiento en ${materiaSeleccionada} - ${gradoSeleccionado}º Grado`}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
        <div className='lg:w-[400px] lg:pl[1000px]'>
          <h2 className="text-lg font-semibold mb-2">Resumen General</h2>
          <div className="grid grid-cols-1 gap-4">
            <Card className="bg-[#232b3e] border-0">
              <CardContent className="p-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold">60%</span>
                  <div className="flex items-center text-emerald-400">
                    <ArrowUpIcon className="h-4 w-4" />
                    <span>2.5%</span>
                  </div>
                </div>
                <p className="text-gray-400 mt-2">Promedio general</p>
              </CardContent>
            </Card>
            <Card className="bg-[#232b3e] border-0">
              <CardContent className="p-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold">85%</span>
                  <div className="flex items-center text-red-400">
                    <ArrowDownIcon className="h-4 w-4" />
                    <span>0.8%</span>
                  </div>
                </div>
                <p className="text-gray-400 mt-2">Asistencia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Card className="bg-[#232b3e] border-0">
        <CardHeader>
          <CardTitle className="text-gray-100">Detalles de Rendimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead className="text-gray-300">Nombre del Estudiante</TableHead>
                <TableHead className="text-gray-300">Promedio Trimestral</TableHead>
                <TableHead className="text-gray-300">Estado</TableHead>
                <TableHead className="text-gray-300">Tendencia</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {estudiantes.map((estudiante) => (
                <TableRow key={estudiante.id} className="border-gray-700">
                  <TableCell className="text-gray-300">{estudiante.nombre}</TableCell>
                  <TableCell className="text-gray-300">{estudiante.promedio}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${estudiante.estado === 'excelente' ? 'bg-emerald-400/20 text-emerald-400' : 
                        estudiante.estado === 'mejorable' ? 'bg-yellow-400/20 text-yellow-400' : 
                        'bg-red-400/20 text-red-400'}`}>
                      {estudiante.estado}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      {estudiante.tendencia > 0 ? (
                        <ArrowUpIcon className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <ArrowDownIcon className="h-4 w-4 text-red-400" />
                      )}
                      <span className={estudiante.tendencia > 0 ? 'text-emerald-400' : 'text-red-400'}>
                        {Math.abs(estudiante.tendencia)}%
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}