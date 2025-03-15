import type React from "react"
import { School, Mail, Phone, MapPin, Globe } from "lucide-react"

const Settings_S: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      <div className="bg-slate-800 shadow-lg rounded-lg overflow-hidden mb-6 border border-slate-700">
        <div className="p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-200 mb-4">School Information</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <School className="w-5 h-5 text-indigo-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-400">School Name</p>
                <p className="text-base text-slate-200">Institución Educativa Antequera</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-indigo-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-400">Email</p>
                <p className="text-base text-slate-200">@eduante.edu</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-indigo-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-400">Phone</p>
                <p className="text-base text-slate-200">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-indigo-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-400">Address</p>
                <p className="text-base text-slate-200">123 Education Street, Academic City, AC 12345</p>
              </div>
            </div>
            <div className="flex items-start">
              <Globe className="w-5 h-5 text-indigo-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-400">Website</p>
                <p className="text-base text-slate-200">www.insteduantequera.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 shadow-lg rounded-lg overflow-hidden mb-6 border border-slate-700">
        <div className="p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-200 mb-4">Grading Scale</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Percentage Range
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-800 divide-y divide-slate-700">
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-200">A</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-300">90-100%</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-300">Excellent</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-200">B</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-300">80-89%</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-300">Good</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-200">C</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-300">70-79%</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-300">Satisfactory</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-200">D</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-300">60-69%</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-300">Needs Improvement</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-200">F</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-300">0-59%</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-300">Failing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 shadow-lg rounded-lg overflow-hidden border border-slate-700">
        <div className="p-4 sm:p-6">
          <h2 className="text-xl font-semibold text-slate-200 mb-4">Academic Year</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-slate-400">Current Academic Year</p>
              <p className="text-base text-slate-200">2024-2025</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">Start Date</p>
              <p className="text-base text-slate-200">September 1, 2024</p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">End Date</p>
              <p className="text-base text-slate-200">June 30, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings_S

