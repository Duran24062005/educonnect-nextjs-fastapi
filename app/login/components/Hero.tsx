import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="Alexi_Dg text-4xl md:text-6xl mb-6">Welcome to EduConnect</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Discover a new way to manage your tasks and boost your productivity with our innovative web application.
      </p>
      <Button size="lg"><a href='http://localhost:3000/'>Get Starter</a></Button>
    </section>
  )
}

