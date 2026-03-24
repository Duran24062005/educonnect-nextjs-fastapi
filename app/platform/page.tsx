'use client'
import Image from "next/image";
import { HomeComponent } from "../components/home/HomeComponent";
import { UserProfile } from "./UserProfile";
import { JSX, useState } from "react";
import user from '@/public/assets/img/estudiante.jpeg';
import EduConnectLogo from "@/public/assets/img/EduConectLogo.png";
import logo from "@/public/assets/react.svg";
import { Button } from "@/components/ui/button"
import ProfileModal from "./components/UserModal";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";


export default function Platform() {

  const [activeScreen, setActiveScreen] = useState(<HomeComponent />)
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const changeState = (screen: JSX.Element) => {
    setActiveScreen(screen)
  }

  return (
    <div className="Home min-h-screen flex flex-col">
      <header className="bg-slate-900 text-white p-4 lg:px-8 md:p-1 fixed top-0 right-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex cursor-pointer' onClick={()=>changeState(<HomeComponent />)}>
            <Image className='w-12 rounded-full logo-logo' src={ EduConnectLogo } alt="" />
            <h1 className="text-2xl font-bold m-2 Logo">EduConnect</h1>
            <Image src={ logo } alt="" />
          </div>
          <div className='flex'>
            <button onClick={ () => changeState(<UserProfile />) } >
              <h2 className='text-md mr-2 mt-3'>Alexi</h2>
            </button>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full"
              title="Profile Dropdown"
              onClick={() => setIsProfileOpen((current) => !current)}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.src} alt="@usuario" />
              </Avatar>
            </Button>
          </div>
        </div>
      </header>

      {isProfileOpen && (
        <ProfileModal onClose={() => setIsProfileOpen(false)} />
      ) }
      {activeScreen}
    </div>
  );
}
