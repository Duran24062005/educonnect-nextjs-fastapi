import { useState, useEffect } from 'react'
import { fetchStudents } from '@/app/api/apis/students'
import Image from 'next/image'

export const Students = () => {

  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  console.log(students)


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetchStudents()
        if (Array.isArray(response)) {
          setStudents(response)
        } else {
          setError('Datos inválidos recibidos del servidor')
        }
      } catch (err) {
        console.error('Error fetching students: ', err)
        setError('No se pudo cargar la lista de estudiantes')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="text-center text-white">Cargando estudiantes...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Estudiantes</h1>
      </div>
      {students.length === 0 ? (
        <p className="text-center text-slate-400">No hay estudiantes registrados.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student) => (
            <div
              key={student.id} // Usar 'id' si está disponible
              className="bg-slate-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={student.imageUrl || '/default-image.png'} // Imagen por defecto si falta
                alt={`Foto de ${student.firstname || 'Estudiante'}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-slate-200">
                  {student.first_name} {student.last_name}
                </h2>
                <p className="text-slate-400">{student.email || 'Sin correo'}</p>
                <p className="text-slate-400">{student.phone || 'Sin teléfono'}</p>
                <p className="text-slate-400">Padre: {student.father || 'Desconocido'}</p>
                <p className="text-slate-400">{student.course.name || 'Sin grado'}</p>
                <p className="text-slate-300 mt-2">Edad: 
                  {
                    (() => {
                      if (student.birth_date) {
                        const birthDate = new Date(student.birth_date);
                        const today = new Date();
                        let age = today.getFullYear() - birthDate.getFullYear();

                        // Verifica si el cumpleaños ya pasó este año
                        const hasBirthdayPassed =
                          today.getMonth() > birthDate.getMonth() ||
                          (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

                        if (!hasBirthdayPassed) {
                          age -= 1; // Resta un año si el cumpleaños no ha pasado
                        }

                        return ' '+age;
                      }
                      return 'N/A'; // Si no hay fecha de nacimiento
                    })()
                  }
                </p>
                {student.activo && (
                  <div className="bg-green-500 mt-2 rounded-lg w-2 h-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
