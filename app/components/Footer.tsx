import { Github, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="py-8 px-6 bg-slate-300 text-primary-foreground">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="Logo text-xl">EduConnect</h3>
          <p className="icono mb-2">Educación y software</p>
          <ul>
            <li className="flex items-center">
              <Facebook size={15} /><a href="https://www.facebook.com/alexis.duran.54772728" className="ml-2 text-slate-500 hover:text-white">  Facebook</a>
            </li>
            <li className="flex items-center">
              <Github size={15} /><a href="https://github.com/Duran24062005" className="ml-2 text-slate-500 hover:text-white">  GitHub</a>
            </li>
            <li className="flex items-center">
              <Instagram size={15} /><a href="https://www.instagram.com/alexis_duran_dg/" className="ml-2 text-slate-500 hover:text-white"> Instagram</a>
            </li>
            <li className="flex items-center">
              <Linkedin size={15} /><a href="https://www.linkedin.com/in/alexi-duran-gomez-6b17042a3/" className="ml-2 text-slate-500 hover:text-white">  LinkedIn</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg mb-2">Contact Us</h4>
          <p>Email: alexisdg051@gmail.com</p>
          <p>Phone: +57(321) 612-3545</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p><span className="Alexi_Dg">Alexi Dg</span>&copy; 2024 EduConnect. All rights reserved.</p>
      </div>
    </footer>
  )
}
