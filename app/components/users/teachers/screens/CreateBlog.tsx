'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Upload } from 'lucide-react'
import type { File } from '@types/node'

export default function Component() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ title, content, image })
    // Handle form submission here
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  return (
    <div className="sbg-[#1B1E2B]">
      <div className="max-w-2x mx-auto buttom-12 rounded-xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-[#00FFC2]/20">
        <div className="p-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4 text-white hover:text-white/80"
            onClick={() => console.log('close')}
          >
            <X className="h-4 w-4" />
          </Button>
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
    </div>
  )
}