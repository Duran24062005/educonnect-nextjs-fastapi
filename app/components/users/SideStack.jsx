

export const SideStack = () => {
  return (
    <div className="grid grid-flow-col gap-3 bg-gray-300 px-4 p-2">
        <button className="text-center bg-blue-300 border-blue-600 border-2 rounded-lg px-1 hover:bg-blue-500 hover:text-white">
          Maestros
        </button>
        <button className="text-center bg-blue-300 border-blue-600 border-2 rounded-lg px-1 hover:bg-blue-500 hover:text-white">
          Padres
        </button>
        <button className="text-center bg-blue-300 border-blue-600 border-2 rounded-lg px-1 hover:bg-blue-500 hover:text-white">
          Estudiantes
        </button>
        <button className="text-center bg-blue-300 border-blue-600 border-2 rounded-lg px-1 hover:bg-blue-500 hover:text-white">
          Grados
        </button>
    </div>
  )
}
