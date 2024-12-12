'use server'
import { useEffect, useState } from "react";

export const fetchBlogs = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/posts/');
    if (!response.ok) throw new Error('Error al obtener los datos');
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
;}

// export function useBlogs(){

//     const [blogs, setBlogs] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(()=>{
//         const fetchData = async() => {
//             setLoading(true)
//             setError(null)
//             try{
//                 const data = await fetchBlogs()
//                 setBlogs(data)
//                 setLoading(false)
//             } catch (error) {
//                 console.error('Error fetching students: ', err)
//                 setError("No se pudo cargar la lista de estudiantes")
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchData();
//     }, [])
// }


// Function for create blogspost
// export const CreateBlogs = async (dato: FormData) => {
//   interface BlogDates {
//     teacher_id: number;
//     title: string;
//     content: string;
//     image: File | string;
//   }
//   try {
//     const response = await fetch('http://127.0.0.1:8000/posts/create/', {
//       method: 'POST',
//       headers: {},
//         body: JSON.stringify({title, content, image}: BlogDates),
        
//     });
//     if (!response.ok) throw new Error('Error al crear el post');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };


export async function CreateBlogs(prevState: any, formData: FormData) {
  let teacher_id = 2;

  if (!formData) {
    return { success: false, message: 'No se recibieron datos del formulario' }
  }

  const title = formData.get('title')
  const content = formData.get('content')
  const file = formData.get('file')
  const teacher = teacher_id

  if (!title || !content) {
    return { success: false, message: 'El titulo y el contenido son requeridos' }
  }

  // Aquí simularemos una petición a una API
  try {
    const response = await fetch('http://127.0.0.1:8000/posts/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, file, teacher }),
    })

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor')
    }

    return { success: true, message: 'Formulario enviado con éxito' }
  } catch (error) {
    return { success: false, message: 'Error al enviar el formulario' }
  }
}