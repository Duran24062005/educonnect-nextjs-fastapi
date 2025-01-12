import React from 'react'
import { students } from './data'

export const Dashboard = (grade: number) => {

  if (grade == 6){
    response(grade);
  } else if (grade == 7){

  } else if (grade == 10){

  } else if (grade == 11){

  }
  function response(par: number) {
    alert(par)
  }
  return (
    <div className='flex justify-between'>
      {/* <nav className='m-4 mb-8'>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{index+1} - {student.name}</li>
          ))
          }
        </ul>
      </nav>
      <div>
        <nav className='m-4 mb-8'>
        <ul>
          {students.map((student, index) => (
            <li key={index} className='border border-red-100'>{student.id} - {student.name}</li>
          ))
          }
        </ul>
      </nav>
      </div> */}
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Tabla de Estudientes</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-200 w-full mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Edad</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Matematicás N1</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map( (student, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{student.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.age}</td>
                  <td className="border border-gray-500 px-4 py-2">
                    <input 
                      className='focus:outline-none bg-slate-900 w-32' 
                      type="number" 
                      max={10.0}
                      min={0}
                      title="Ingrese una calificación de Matemáticas N1" 
                      placeholder="Calificación"
                    />
                  </td>
                </tr>

              )
             )
            }
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center" colSpan={4}>
                Lista del Grado actual
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    </div>
  )
}
