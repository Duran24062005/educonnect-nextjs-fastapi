import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const AsideHome = () => {
  const chartData = {
    labels: ['Matemáticas', 'Sociales', 'Naturales', 'Historia', 'Arte'],
    datasets: [{
      label: 'Promedio por Materia',
      data: [75, 82, 30, 85, 30, 57],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 245, 0.8)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(153, 102, 245, 1)'
      ],
      borderWidth: 1
    }]
  }

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      }
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4 pt-8">
      <div className="px-4 py-3 bg-gray-200 w-72 m-auto rounded-md">
        <h2 className="text-center">Estudiantes Activos</h2>
        <p className="text-center">1,234</p>
      </div>

      <div className="px-4 py-3 bg-gray-200 w-72 m-auto rounded-md">
        <h2 className="text-center">Promedio General</h2>
        <p className="text-center">8.7</p>
      </div>

      <div className="px-4 py-3 bg-gray-200 w-72 m-auto rounded-md">
        <h2 className="text-center">Materias Activas</h2>
        <p className="text-center">8</p>
      </div>

      <div className="px-4 py-3 bg-gray-200 xl:w-72 xl:m-auto rounded-md">
        <h2 className="text-center">Rendimiento académico</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
      
    </div>
  )
}