import { useEffect, useState } from 'react'
import { fetchCourses } from '@/app/api/apis/courses'
import AsideHomeSkeleton from '@/app/components/home/skeletons/AsideHomeSkeleton'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const AsideHome = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCourses();
        setData(response);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <AsideHomeSkeleton />;

  const dta = [70, 20, 30, 85, 30, 55, 25];

  const chartData = {
    labels: ['Ingles', 'Matemáticas', 'Sociales', 'Naturales', 'Edu. Fisica', 'Artistica', 'Español'],
    datasets: [{
      label: 'Promedio por Materia',
      data: dta,
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
      <div className="px-4 py-3 bg-slate-700 w-72 m-auto rounded-md">
        <h2 className="text-center text-slate-200">Estudiantes Activos</h2>
        <p className="text-center text-slate-200">1,234</p>
      </div>

      <div className="px-4 py-3 bg-slate-700 w-72 m-auto rounded-md">
        <h2 className="text-center text-slate-200">Promedio General</h2>
        <p className="text-center text-slate-200">8.7</p>
      </div>

      <div className="px-4 py-3 bg-slate-700 w-72 m-auto rounded-md">
        <h2 className="text-center text-slate-200">Materias Activas</h2>
        <p className="text-center text-slate-200">{data}</p>
      </div>

      <div className="px-1 pt-3 h-52 bg-slate-700 xl:w-72 xl:h-60 xl:m-auto rounded-md">
        <h2 className="text-center text-slate-200">Rendimiento académico</h2>
        <div className="w-full h-full">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
      
    </div>
  )
}
