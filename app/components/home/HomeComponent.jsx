import { AsideHome } from '@/app/components/home/AsideHome'
import { BlogComponent } from '@/app/components/home/BlogComponent'

export const HomeComponent = () => {
  return (
    <div className="flex-grow flex flex-col lg:flex-row lg:overflow-hidden">
        <aside className="w-full lg:w-80 flex-shrink-0 overflow-y-auto bg-gray-100 lg:fixed mt-14 h-full">
          <AsideHome />
        </aside>

        <main className="flex-grow flex flex-col pt-4 lg:pt-0">
          <h2 className="text-2xl font-bold text-center lg:text-center lg:ml-80 pt-4 lg:pt-24 mb-4">
            Bienvenido a la plataforma
          </h2>
          <div className="flex-grow overflow-y-auto lg:ml-80 px-4 sm:mb-32 lg:px-0">
            <BlogComponent />
          </div>
        </main>
      </div>
  )
}
