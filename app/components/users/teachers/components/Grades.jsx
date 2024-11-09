import { useState } from "react"
import { Students } from "./Students"

export const Grades = () => {

  const [ change, setChange ] = useState('')
  const cards = [
    { 
      id: 6,
      name: "Sexto",
      description: "Desarrolladora Frontend con experiencia en React y Vue.js"
    },
    {
      id: 7,
      name: "Septimo",
      description:
      "Ingeniero de Backend especializado en Node.js y bases de datos NoSQL"

    },
    {
      id: 10,
      name: "decimo",
      description:
      "Diseñadora UX/UI con un enfoque en accesibilidad y diseño inclusivo"

    },
    {
      id: 11,
      name: "Undecimo",
      description:
      "DevOps Engineer con experiencia en AWS y Docker"

    },
  ]



  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-tr from-blue-600 to-yellow-400 w-60 m-auto">Grados</h1>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* {console.log(cards)} */}
            {cards.map((card, index) => (
            <button key={index} onClick={ () => setChange(<Students />) } className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="py-6">
                <h2 className="text-xl font-bold m-auto text-gray-800">{card.name}</h2>
                {/* <p className="text-gray-600">{card.description}</p> */}
              </div>
            </button>
            ))}
        </div>
          { change }
    </div>
  )
}
