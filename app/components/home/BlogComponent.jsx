import { useState, useEffect } from 'react'
import Image from "next/image"
import { Calendar, User, ChevronRight, X } from 'lucide-react'
import { blogPosts } from '@/app/data/Blogs.js'
import { fetchBlogs } from '@/app/api/apis/blogs'
import BlogSkeleton from './skeletons/BlogSkeleton'

export const BlogComponent = () => {
  const [selectedPost, setSelectedPost] = useState(null)
  const [filter, setFilter] = useState("")
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async() => {
            setLoading(true)
            setError(null)
            try{
                const data = await fetchBlogs()
                setBlogs(data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching blogs: ')
                setError('No se pudo cargar la lista de Blogs')
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])

  const openModal = (post) => {
    setSelectedPost(post)
  }

  const closeModal = () => {
    setSelectedPost(null)
  }

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
    if (!isSearchVisible) {
      setTimeout(() => document.getElementById('searchInput')?.focus(), 100)
    } else {
      setFilter("")
    }
  }

  const filterBlogs = blogs.filter((blog) => 
    blog.title.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(blogs, filterBlogs)

  if (loading) {
    return <BlogSkeleton />
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>
  }


  return (
    <div className="container mx-auto px-1">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <h2 className="text-white text-2xl font-semibold whitespace-nowrap">Últimas Publicaciones</h2>
          <div className="w-full sm:w-auto max-w-md">
            <div className="flex transition-all duration-300 ease-in-out rounded-md overflow-hidden">
              {isSearchVisible && (
                <input 
                  id="searchInput"
                  type="text" 
                  className="flex-grow px-3 py-2 focus:outline-none transition-all duration-300 ease-in-out" 
                  placeholder="Buscar Post"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
              )}
              <button onClick={toggleSearch} className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 flex items-center justify-center">
                <span className="sr-only">{isSearchVisible ? "Cerrar búsqueda" : "Buscar"}</span>
                {isSearchVisible ? 'X' : '🔍'}
              </button>
            </div>
          </div>
        </div>
      </div>
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-lg p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <PostDetail {...selectedPost} onClose={closeModal} />
          </div>
        </div>
      )}
      
      <div className="grid gap-8 col-span-1 lg:mx-32 mb-24">
        {filterBlogs.map((post) => (
          <article key={post.id} className="bg-slate-900 rounded-lg shadow-lg shadow-green-300 overflow-hidden">
            <Image
              src={post.imageUrl} 
              alt={`Imagen para ${post.title}`} 
              className="w-full lg:h-80 object-cover"
              width={100}
              height={24}
              priority
            />
            <div className="p-6">
              <h3 className="text-slate-200 text-xl font-semibold mb-1">{post.title}</h3>
              <p className="text-slate-400 mb-2">{post.content}</p>
              <div className="flex items-center text-sm text-gray-500 mb-1">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">Prof. {post.teacher.first_name}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{new Date(post.created_at).toLocaleDateString()}</span>
                <span>{new Date(post.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <button 
                onClick={() => openModal(post)}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Leer más
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

const PostDetail = ({ id, title, content, teacher, created_at, imageUrl, onClose }) => {
  return (
    <div className="relative " key={id}>
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X className="h-6 w-6" />
      </button>
      <Image src={imageUrl} 
      width={100}
      height={24}
      priority
      alt={title} className="w-full h-96 object-cover mb-4 rounded-lg" />
      <h1 className="text-slate-200 text-2xl font-bold mb-2">{title}</h1>
      <p className="text-slate-400 mb-4">{content}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <User className="h-4 w-4 mr-1" />
        <span className="mr-4">Prof. {teacher.first_name}</span>
        <Calendar className="h-4 w-4 mr-1" />
        <span>{new Date(created_at).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </div>
  )
}