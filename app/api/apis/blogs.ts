import { apiFetch, resolveApiAssetUrl } from "@/lib/api"
import type { BlogPost } from "./types"

function normalizeTeacher(teacher: unknown) {
  if (Array.isArray(teacher)) {
    return teacher[0] ?? null
  }

  if (teacher && typeof teacher === "object") {
    return teacher as BlogPost["teacher"]
  }

  return null
}

function normalizeBlogPost(post: BlogPost) {
  return {
    ...post,
    imageUrl: resolveApiAssetUrl(post.imageUrl) ?? "/assets/img/Fondo2.jpg",
    teacher: normalizeTeacher(post.teacher),
  }
}

export async function fetchBlogs() {
  const posts = await apiFetch<BlogPost[]>("/posts/")
  return posts.map(normalizeBlogPost)
}

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
export async function CreateBlogs(prevState: unknown, formData: FormData) {
  const teacherId = String(formData.get("teacher_id") ?? 2)

  if (!formData) {
    return { success: false, message: 'No se recibieron datos del formulario' }
  }

  const title = formData.get('title')
  const content = formData.get('content')
  const image = formData.get("image") ?? formData.get("file")

  if (!title || !content) {
    return { success: false, message: 'El titulo y el contenido son requeridos' }
  }

  try {
    const payload = new FormData()
    payload.append("title", String(title))
    payload.append("content", String(content))
    payload.append("teacher_id", teacherId)

    if (image instanceof File) {
      payload.append("image", image)
    }

    await apiFetch("/posts/create", {
      method: "POST",
      body: payload,
    })

    return { success: true, message: 'Formulario enviado con éxito' }
  } catch (error) {
    return { success: false, message: 'Error al enviar el formulario' }
  }
}
