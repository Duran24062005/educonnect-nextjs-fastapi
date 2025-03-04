// import React from 'react'
// import { students } from './data'

// export const Dashboard = (grade: number) => {

//   // if (grade == 6){
//   //   response(grade);
//   // } else if (grade == 7){

//   // } else if (grade == 10){

//   // } else if (grade == 11){

//   // }
//   // func tion result(par: number) {
//   //   const N1 = document.getElementById('N1');
//   //   const N2 = document.getElementById('N2');
//   //   const N3 = document.getElementById('N3');
//   //   const N4 = document.getElementById('N4');
    

//   //   let promedio = N1 + N2 + N3 + N4 / 4;
//   // }
//   return (
//     <div className='flex justify-center'>
//       {/* <nav className='m-4 mb-8'>
//         <ul>
//           {students.map((student, index) => (
//             <li key={index}>{index+1} - {student.name}</li>
//           ))
//           }
//         </ul>
//       </nav>
//       <div>
//         <nav className='m-4 mb-8'>
//         <ul>
//           {students.map((student, index) => (
//             <li key={index} className='border border-red-100'>{student.id} - {student.name}</li>
//           ))
//           }
//         </ul>
//       </nav>
//       </div> */}
//       <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center text-slate-300">Tabla de Estudientes</h1>
//       <div className="overflow-x-auto">
//         <table className="table-auto border-collapse border border-gray-200 w-full mb-8">
//           <thead>
//             <tr className="bg-slate-400">
//               <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Grado</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Matematicás N1</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Matematicás N2</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Matematicás N3</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Matematicás N4</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Total Notas</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               students.map( (student, index) => (
//                 <tr key={index} className='text-gray-300'>
//                   <td className="border border-gray-200 px-4 py-2 bg-slate-900">{index + 1}</td>
//                   <td className="border border-gray-200 px-4 py-2 bg-slate-900">{student.name}</td>
//                   <td className="border border-gray-200 px-4 py-2 bg-slate-900">{student.grade_id}</td>
//                   <td className="border border-gray-200 px-4 py-2 bg-slate-900">
//                     <input 
//                       className='focus:outline-none bg-slate-900 w-32' 
//                       type="number" 
//                       max={10.0}
//                       min={0}
//                       title="Ingrese una calificación de Matemáticas N1" 
//                       placeholder="Calificación"
//                       id='N1'
//                     />
//                   </td>
//                   <td className="border border-gray-200 px-4 py-2 bg-slate-900">
//                     <input 
//                       className='focus:outline-none bg-slate-900 w-32' 
//                       type="number" 
//                       max={10.0}
//                       min={0}
//                       title="Ingrese una calificación de Matemáticas N1" 
//                       placeholder="Calificación"
//                       id='N2'
//                     />
//                   </td>
//                   <td className="border border-gray-200 px-4 py-2 bg-slate-900">
//                     <input 
//                       className='focus:outline-none bg-slate-900 w-32' 
//                       type="number" 
//                       max={10.0}
//                       min={0}
//                       title="Ingrese una calificación de Matemáticas N1" 
//                       placeholder="Calificación"
//                       id='N3'
//                     />
//                   </td>
//                   <td className="border border-gray-200 px-4 py-2 bg-slate-900">
//                     <input 
//                       className='focus:outline-none bg-slate-900 w-32' 
//                       type="number" 
//                       max={10.0}
//                       min={0}
//                       title="Ingrese una calificación de Matemáticas N1" 
//                       placeholder="Calificación"
//                       id='N4'
//                     />
//                   </td>
//                   <td className="border border-gray-200 px-4 py-2 bg-slate-900">{}</td>
//                 </tr>

//               )
//              )
//             }
//           </tbody>
//           <tfoot>
//             <tr className="bg-gray-400">
//               <td className="border border-gray-300 px-4 py-2 text-center" colSpan={8}>
//                 Primer periodo
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     </div>
//     </div>
//   )
// }



import React, { useState } from 'react';
import { students } from './data';

export const Dashboard = (grade: number) => {
  // State to store grades for each student
  const [grades, setGrades] = useState<{ [key: string]: { [key: string]: number } }>({});

  // Function to handle grade input changes
  const handleGradeChange = (studentId: number, gradeType: string, value: string) => {
    const numValue = value ? parseFloat(value) : 0;
    
    setGrades(prevGrades => ({
      ...prevGrades,
      [studentId]: {
        ...prevGrades[studentId],
        [gradeType]: numValue
      }
    }));
  };

  // Function to calculate average for a student
  const calculateAverage = (studentId: number) => {
    if (!grades[studentId]) return '-';
    
    const studentGrades = Object.values(grades[studentId]);
    if (studentGrades.length === 0) return '-';
    
    const sum = studentGrades.reduce((acc, curr) => acc + curr, 0);
    const average = sum / studentGrades.length;
    return average.toFixed(2);
  };

  return (
    <div className="w-full max-w-full px-4 py-6">
      <h1 className="text-xl sm:text-2xl font-bold text-center text-slate-300">Tabla de Estudiantes</h1>
      <p className='mb-4 text-center text-slate-500'>Sistema de Calificaciones</p>

      {/* Card view for small screens */}
      <div className="block sm:hidden space-y-4">
        {students.map((student, index) => (
          <div key={index} className="bg-slate-900 rounded-lg p-4 text-gray-300">
            <div className="flex justify-between mb-2">
              <span className="font-bold">
                {index + 1}. {student.name}
              </span>
              <span className="font-bold">Prom: {calculateAverage(student.id)}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["N1", "N2", "N3", "N4"].map((gradeType) => (
                <div key={gradeType} className="flex justify-between items-center">
                  <label className="text-sm">Matemáticas {gradeType}:</label>
                  <input
                    className="focus:outline-none bg-slate-800 rounded px-2 py-1 w-16 text-right"
                    type="number"
                    max={10.0}
                    min={0}
                    step="0.1"
                    title={`Ingrese una calificación de Matemáticas ${gradeType}`}
                    placeholder="---"
                    value={grades[student.id]?.[gradeType] || ""}
                    onChange={(e) => handleGradeChange(student.id, gradeType, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="bg-gray-400 text-center py-2 rounded">Primer periodo</div>
      </div>

      {/* Table view for larger screens */}
      <div className="hidden sm:block">
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-slate-700">
                <th className="border border-slate-600 px-3 py-2 text-left text-xs md:text-sm text-slate-300">ID</th>
                <th className="border border-slate-600 px-3 py-2 text-left text-xs md:text-sm text-slate-300">
                  Nombre
                </th>
                <th className="border border-slate-600 px-3 py-2 text-left text-xs md:text-sm text-slate-300">
                  Mat. N1
                </th>
                <th className="border border-slate-600 px-3 py-2 text-left text-xs md:text-sm text-slate-300">
                  Mat. N2
                </th>
                <th className="border border-slate-600 px-3 py-2 text-left text-xs md:text-sm text-slate-300">
                  Mat. N3
                </th>
                <th className="border border-slate-600 px-3 py-2 text-left text-xs md:text-sm text-slate-300">
                  Mat. N4
                </th>
                <th className="border border-slate-600 px-3 py-2 text-left text-xs md:text-sm text-slate-300">
                  Promedio
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="text-gray-300 hover:bg-slate-800">
                  <td className="border border-slate-700 px-3 py-2 bg-slate-900 text-xs md:text-sm">{index + 1}</td>
                  <td className="border border-slate-700 px-3 py-2 bg-slate-900 text-xs md:text-sm">{student.name}</td>
                  {["N1", "N2", "N3", "N4"].map((gradeType) => (
                    <td key={gradeType} className="border border-slate-700 px-3 py-2 bg-slate-900">
                      <input
                        className="focus:outline-none bg-slate-900 w-full text-xs md:text-sm"
                        type="number"
                        max={10.0}
                        min={0}
                        step="0.1"
                        title={`Ingrese una calificación de Matemáticas ${gradeType}`}
                        placeholder="---"
                        value={grades[student.id]?.[gradeType] || ""}
                        onChange={(e) => handleGradeChange(student.id, gradeType, e.target.value)}
                      />
                    </td>
                  ))}
                  <td className="border border-slate-700 px-3 py-2 bg-slate-900 text-center text-xs md:text-sm">
                    {calculateAverage(student.id)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-400">
                <td className="border border-gray-500 px-3 py-2 text-center text-xs md:text-sm" colSpan={7}>
                  Primer periodo
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;