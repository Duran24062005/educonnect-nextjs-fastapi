import { useState, useEffect } from 'react'
import { fetchTeachers } from '@/app/api/apis/teachers'
import Image from 'next/image'

export const Fathers = () => {
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  console.log(teachers)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetchTeachers()
        if (Array.isArray(response)) {
          setTeachers(response)
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
    return <div className="text-center text-white">Cargando padres...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Padres</h1>
      </div>
      {teachers.length === 0 ? (
        <p className="text-center text-slate-400">No hay padres registrados.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.id} // Usar 'id' si está disponible
              className="bg-slate-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={teacher.imageUrl || '/default-image.png'} // Imagen por defecto si falta
                alt={`Foto de ${teacher.first_name || 'Profesor'}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-slate-200">
                  {teacher.first_name} {teacher.last_name}
                </h2>
                <p className="text-slate-400">{teacher.email || 'Sin correo'}</p>
                <p className="text-slate-400">{teacher.phone || 'Sin teléfono'}</p>
                {/* <p className="text-slate-400">Padre: {teacher.parent || 'Desconocido'}</p> */}
                {/* <p className="text-slate-400">{teacher.grade || 'Sin grado'}</p> */}
                <p className="text-slate-300 mt-2">Edad: {teacher.age || 'N/A'}</p>
                {teacher.activo && (
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

