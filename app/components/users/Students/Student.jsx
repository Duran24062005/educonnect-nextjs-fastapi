import { useState } from "react"
// import { Footer } from "../../components/Footer"
// import { Header } from "../../components/Header"
import { Teachers } from "./components/Teachers"
import { Fathers } from "./components/Fathers"
import { Grades } from "./components/Grades"

// import { SideStack } from "../SideStack"



export const Student = () => {

    const [ active, setActive ] = useState(<Grades/>)

  return (
    <div className="my-20">
        {/* <Header /> */}
        {/* <SideStack /> */}
        <div className="grid grid-flow-col gap-3 bg-gray-300 px-4 p-2">
            <button onClick={ () => setActive(<Teachers />) } className="text-center bg-blue-300 border-blue-600 border-2 rounded-lg px-1 hover:bg-blue-500 hover:text-white">
                Maestros
            </button>
            <button onClick={ () => setActive(<Fathers />) } className="text-center bg-blue-300 border-blue-600 border-2 rounded-lg px-1 hover:bg-blue-500 hover:text-white">
                Padres
            </button>
            <button onClick={ () => setActive(<Grades />) } className="text-center bg-blue-300 border-blue-600 border-2 rounded-lg px-1 hover:bg-blue-500 hover:text-white">
                Grados
            </button>
        </div>
        <div className="my-4">
            { active }
        </div>
        {/* <Footer /> */}
    </div>
  )
}
