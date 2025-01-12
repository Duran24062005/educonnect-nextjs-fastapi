'use client';

import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';

export default function CreateBlog() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    // Asegurar que todos los campos estén correctamente definidos
    formData.append('teacher_id', 1); // Teacher ID como número en formato de cadena
    formData.append('title', data.title);
    formData.append('content', data.content);

    if (image) {
      formData.append('image', image);
    } else {
      console.error('La imagen es obligatoria.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/posts/create', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Detalles del error:', errorDetails);
        throw new Error('Error al crear el post');
      }

      const result = await response.json();
      alert(`El Post ${result.title} creado correctamente`);
      console.log('Post creado:', result);
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="bg-[#1B1E2B] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto p-6 rounded-xl overflow-hidden bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-[#00FFC2]/20">
        <h2 className="text-2xl font-bold text-white mb-6">Crear Nuevo Post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-white">Título</Label>
            <Input
              id="title"
              placeholder="Introduce el título del post"
              {...register('title', { required: 'El título es obligatorio' })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
            />
            {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="content" className="text-white">Contenido</Label>
            <Textarea
              id="content"
              placeholder="Escribe el contenido del post..."
              {...register('content', { required: 'El contenido es obligatorio' })}
              className="min-h-[200px] bg-white/5 border-whit/*}e/10 text-white placeholder:text-white/50"
            />
            {errors.content && <span className="text-red-500 text-sm">{errors.content.message}</span>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="image" className="text-white">Imagen del Post</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  handleImageChange(e);
                  setValue('image', e.target.files?.[0]);
                }}
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
  );
}

