import { useState } from "react"
import { Students } from "./Students"
import { Dashboard } from "./layout/Dasboard"


export const Grades = () => {

  const [ change, setChange ] = useState()
  const cards = [
    { 
      id: 6,
      name: "Sexto",
      description: "Desarrolladora Frontend con experiencia en React y Vue.js",
      image: "https://picsum.photos/200/300",
      temas: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
      ]
    },
    {
      id: 7,
      name: "Septimo",
      description:
      "Ingeniero de Backend especializado en Node.js y bases de datos NoSQL",
      image: "https://picsum.photos/200/300",
      temas: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
      ]

    },
    {
      id: 8,
      name: "Octavo",
      description:
      "Ingeniero de Backend especializado en Node.js y bases de datos NoSQL",
      image: "https://picsum.photos/200/300",
      temas: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
      ]

    },
    {
      id: 9,
      name: "Noveno",
      description:
      "Ingeniero de Backend especializado en Node.js y bases de datos NoSQL",
      image: "https://picsum.photos/200/300",
      temas: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
      ]

    },
    {
      id: 10,
      name: "decimo",
      description:
      "Diseñadora UX/UI con un enfoque en accesibilidad y diseño inclusivo",
      image: "https://picsum.photos/200/300",
      temas: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
      ]

    },
    {
      id: 11,
      name: "Undecimo",
      description:
      "DevOps Engineer con experiencia en AWS y Docker",
      image: "https://picsum.photos/200/300",
      temas: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" },
      ]

    },
  ]

  const getStudentByGrade = (stdn) => {

  }


  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-tr from-blue-600 to-yellow-400 w-60 m-auto">Grados</h1>
        <div className="grid grid-cols-3 md:grid-cols lg:grid-cols-4 gap-2">
          {/* {console.log(cards)} */}
            {cards.map((card, index) => (
            <button key={index} onClick={ () => setChange(<Dashboard grad={6}/>) } className="bg-slate-900 shadow-md rounded-lg overflow-hidden">
              <div className="py-6 flex justify-between">
                <h2 className="text-xl font-bold m-auto text-slate-200">{card.name}</h2>
                <div className="rounded-full text-slate-400 w-12 h-12">
                  <img src={card.image} alt={card.name} className="-ml-16 w-16 h-16 rounded-md" />
                </div>
                {/* <p className="text-slate-200 text-sm m-auto">Temas</p>
                <p className="text-slate-300">{card.description}</p>
                <ul>
                  {card.temas.map((tema, ind) => (
                    <li key={ind} className="text-slate-400">{tema.name}</li>
                  ))}
                </ul> */}
              </div>
            </button>
            ))}
        </div>
          { change }
    </div>
  )
}
