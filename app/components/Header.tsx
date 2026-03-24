import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="py-4 px-6 flex justify-between items-center">
      <h1 className="Logo text-2xl">EduConnect</h1>
      <nav className="hidden md:flex space-x-4">
        <a href="#features" className="hover:text-primary-foreground">Features</a>
        <a href="#about" className="hover:text-primary-foreground">About</a>
        <a href="#contact" className="hover:text-primary-foreground">Contact</a>
      </nav>
      <Button asChild variant="ghost" className="hidden md:inline-flex">
        <Link href="/login">Ingresar</Link>
      </Button>
      <Button variant="ghost" className="md:hidden" aria-label="Abrir menu">
        <Menu className="h-6 w-6" />
      </Button>
    </header>
  )
}
