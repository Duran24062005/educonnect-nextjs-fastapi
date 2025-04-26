import Image from "next/image";
import { HomeComponent } from "../home/HomeComponent";
import logo from '@/public/assets/react.svg';
import user from '@/public/assets/img/estudiante.jpeg';
import EduConnectLogo from "@/public/assets/img/EduConectLogo.png";
import { BellIcon, CogIcon, HelpCircleIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react";

export const Header = () => {
    const [ change, setChange ] = useState(<HomeComponent />)
    const [ isChnge, setIsChange ] = useState(false);
  
    const changeState = (screen: JSX.Element) => {
      setChange(screen)
    }
  
    const changeProfile = (profile: boolean) => {
      setIsChange(profile)
    }
  return (
    <>
      <header className="bg-slate-900 text-white p-4 lg:px-8 md:p-1 fixed top-40 right-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex cursor-pointer' onClick={()=>changeState(<HomeComponent />)}>
            <Image className='w-12 rounded-full logo-logo' src={ EduConnectLogo } alt="" />
            <h1 className="text-2xl font-bold m-2 Logo">EduConnect</h1>
            <Image src={ logo } alt="" />
          </div>
          <div className='flex justify-between'>
            <button className='flex' title="Notifications and Settings">
              <Button variant="ghost" size="icon" className="text-gray-300">
                <BellIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300">
                <CogIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300">
                <HelpCircleIcon className="h-5 w-5" />
              </Button>
              <button onClick={ () => changeState(<UserProfile />) } >
                <h2 className='text-md mr-2 mt-3'>Alexi</h2>
              </button>
              <Image className='w-12 h-12 rounded-full' src={ user } alt=""/>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

