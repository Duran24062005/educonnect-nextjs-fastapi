import { Button } from '@/components/ui/button'
import LogoEdu from '@/public/assets/img/EduConectLogo.png'
import Image from "next/image"
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-12 pb-4 px-6 text-center">
      <div className='flex justify-center mb-4'>
        <Image
          src={ LogoEdu }
          alt="Logo de Educonect"
          className='w-56 h-56 items-center rounded-sm'
        />
      </div>
      <h1 className="Alexi_Dg text-4xl md:text-6xl mb-6">Welcome to EduConnect</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Revoluciona la experiencia educativa con nuestra plataforma integral. Conectamos estudiantes, maestros y padres en un ecosistema digital que transforma la gestión académica en una experiencia simple y eficiente.
      </p>
      <Button asChild size="lg">
        <Link href="/login">Comenzar</Link>
      </Button>
    </section>
  )
}
