import Image from "next/image";
import logo from '../assets/react.svg';
import user from '../assets/img/estudiante.jpeg';
import EduConnectLogo from "../assets/img/EduConectLogo.png";
import { BellIcon, CogIcon, HelpCircleIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

export const Header = () => {
  return (
    <>
      <header className="bg-slate-900 text-white p-4 lg:px-8 md:p-1 fixed top-0 right-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex'>
            <Image className='w-12 rounded-full logo-logo' src={ EduConnectLogo } alt="" />
            <h1 className="lg:text-2xl md:text-xl font-bold m-2 Logo">EduConnect</h1>
            <Image src={ logo } alt="" />
          </div>
          <div className='flex justify-between'>
            <button className='flex'>
              <Button variant="ghost" size="icon" className="text-gray-300">
                <BellIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300">
                <CogIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300">
                <HelpCircleIcon className="h-5 w-5" />
              </Button>
              <h2 className='text-md mr-2 mt-3'>Alexi Duran Gómez</h2>
              <Image className='w-12 h-12 rounded-full' src={ user } alt=""/>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
