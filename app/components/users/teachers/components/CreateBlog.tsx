'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from 'lucide-react'

export default function CreateBlog() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const formData = new FormData()
    formData.append('teacher_id', '2') // Assuming teacher_id is always 2
    formData.append('title', title)
    formData.append('content', content)
    if (image) {
      formData.append('image', image)
    }
    
    try {
      const response = await fetch('http://127.0.0.1:8000/posts/create/', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Error al crear el post')
      }

      const data = await response.json()
      console.log('Post creado:', data)
      // Here you could add logic to handle successful post creation
      // For example, clearing the form or showing a success message
    } catch (error) {
      console.error('Error al crear el post:', error)
      // Here you could add logic to handle errors
      // For example, showing an error message to the user
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  return (
    <div className="bg-[#1B1E2B] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto p-6 rounded-xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-[#00FFC2]/20">
        <h2 className="text-2xl font-bold text-white mb-6">Crear Nuevo Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-white">Título</Label>
            <Input
              id="title"
              placeholder="Introduce el título del post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content" className="text-white">Contenido</Label>
            <Textarea
              id="content"
              placeholder="Escribe el contenido del post..."
              className="min-h-[200px] bg-white/5 border-white/10 text-white placeholder:text-white/50"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image" className="text-white">Imagen del Post</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                ref={fileInputRef}
              />
              <Button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-white/5 border border-white/10 text-white hover:bg-white/10"
              >
                <Upload className="h-4 w-4 mr-2" />
                Subir Imagen
              </Button>
              {image && (
                <span className="text-white text-sm truncate">
                  {image.name}
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="w-full sm:w-auto bg-[#00FFC2] text-[#1B1E2B] hover:bg-[#00FFC2]/90"
            >
              Publicar Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

