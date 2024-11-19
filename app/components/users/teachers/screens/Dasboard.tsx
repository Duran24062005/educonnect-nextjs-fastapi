import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const values = [15, 12, 4, 6, 40, 5, 60, 20, 50, 30, 30, 40];

const chartData = {
  labels: months,
  datasets: [
    {
      fill: true,
      label: 'Shot Views',
      data: values,
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#1F2937',
      titleColor: '#fff',
      bodyColor: '#fff',
      padding: 12,
      borderColor: '#374151',
      borderWidth: 1,
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: '#6B7280',
        font: {
          size: 12,
        },
      },
    },
    y: {
      grid: {
        color: '#374151',
        drawBorder: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: '#6B7280',
        font: {
          size: 12,
        },
        callback: (value: number) => value + 'k',
      },
    },
  },
};

export function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-gray-900">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white mb-2">Welcome Back</h1>
        <p className="text-gray-400 text-lg">Hello, welcome to Alexi</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-white">Shot views</h2>
            <select className="bg-gray-700 text-gray-300 rounded-lg px-3 py-1 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Primer periodo</option>
              <option value="">Segundo Periodo</option>
              <option value="">Tercer Periodo</option>
              <option value="">Cuarto Periodo</option>
              <option value="">Total</option>
            </select>
          </div>
          
          <div className="h-64">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-white">Most viewed</h2>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
              Last week
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-semibold text-white">60%</span>
                <div className="flex items-center text-emerald-400">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm">2.5%</span>
                </div>
              </div>
              <div className="text-gray-400 mt-2">Last views in month</div>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-semibold text-white">60K</span>
                <div className="flex items-center text-red-400">
                  <ArrowDownRight className="h-4 w-4" />
                  <span className="text-sm">0.8%</span>
                </div>
              </div>
              <div className="text-gray-400 mt-2">Total views</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}