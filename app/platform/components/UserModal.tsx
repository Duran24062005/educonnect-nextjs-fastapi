import { User, Settings, LogOut } from 'lucide-react'

type ProfileModalProps = {
  onClose: () => void
}

export default function ProfileModal({ onClose }: ProfileModalProps) {

  return (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/20 pr-4 text-black" onClick={onClose}>
          <div className="bg-white rounded-lg p-4 w-64 shadow-lg" onClick={(event) => event.stopPropagation()}>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Perfil de Usuario</h2>
              <button onClick={onClose} className="text-sm text-slate-500 hover:text-slate-900">Cerrar</button>
            </div>
            <div className="mt-4">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Usuario</p>
                <p className="text-xs leading-none text-muted-foreground">usuario@ejemplo.com</p>
              </div>
              <div className="mt-4">
                <button className="flex items-center w-full p-2 hover:bg-gray-100">
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </button>
                <button className="flex items-center w-full p-2 hover:bg-gray-100">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configuración</span>
                </button>
                <button className="flex items-center w-full p-2 hover:bg-gray-100">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar sesión</span>
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}
