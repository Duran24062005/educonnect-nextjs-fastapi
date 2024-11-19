import { students } from '../../../../data/students'

export const Students = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Estudiantes</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {students.map((student, index) => (
          <div key={index} className='bg-slate-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105'>
            <img 
              src={student.imageUrl} 
              alt={`Foto de ${student.name} ${student.lastname}`} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-slate-200">{student.firstname} {student.lastname}</h2>
              <p className="text-slate-400">{student.email}</p>
              <p className="text-slate-400">{student.phone}</p>
              <p className="text-slate-400">Padre: {student.parent}</p>
              <p className="text-slate-400">{student.grade}</p>
              <p className="text-slate-300 mt-2">Edad: {student.age}</p>
              { student.activo && 
              <div className="bg-green-500 mt-2 rounded-lg w-2 h-2"></div>
               }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}