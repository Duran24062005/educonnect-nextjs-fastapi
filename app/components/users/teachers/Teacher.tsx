import { useState } from "react" 
import { Users, LayoutDashboard, SquareLibrary, UsersRound, NotebookText, Menu, X } from 'lucide-react' 
import { Dashboard } from "./screens/Dasboard" 
import { Teachers } from "./screens/Teachers" 
import { Fathers } from "./screens/Fathers" 
import { Students } from "./screens/Students" 
import { Grades } from "./screens/Grades" 
import { Blogs } from "./screens/Blogs" 
import { NavButton } from "./components/NavLink"

export default function Teacher() { 
  
  const [activ, setActive] = useState(<Dashboard />) 
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
      <div className="min-h-screen pt-16">
          {/* Menu Button - Fixed position below header */}
          <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="fixed top-20 left-4 z-40 lg:hidden bg-slate-800 text-white p-2 rounded-lg"
              aria-label="Toggle menu"
          >
              <Menu size={20} />
          </button>

          {/* Sidebar */}
          <aside className={`
              fixed top-20 bottom-20 left-4 z-30 
              w-48 bg-slate-800 rounded-xl shadow-lg
              transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
              lg:block
          `}>
              <nav className="flex flex-col space-y-2 p-3">
                  <NavButton onClick={() => setActive(<Dashboard />)} icon={<LayoutDashboard size={20} />} label="Dashboard" active={activ.type === Dashboard} />
                  <NavButton onClick={() => setActive(<Grades />)} icon={<SquareLibrary size={20} />} label="Grados" active={activ.type === Grades} />
                  <NavButton onClick={() => setActive(<Blogs />)} icon={<NotebookText size={20} />} label="Blog" active={activ.type === Blogs} />
                  <NavButton onClick={() => setActive(<Teachers />)} icon={<Users size={20} />} label="Maestros" active={activ.type === Teachers} />
                  <NavButton onClick={() => setActive(<Fathers />)} icon={<UsersRound size={20} />} label="Padres" active={activ.type === Fathers} />
                  <NavButton onClick={() => setActive(<Students />)} icon={<UsersRound size={20} />} label="Estudiantes" active={activ.type === Students} />
              </nav>
          </aside>

          {/* Main Content */}
          <main className="pl-4 lg:pl-56 pr-4">
              {activ}
          </main>
      </div>
  )
}

