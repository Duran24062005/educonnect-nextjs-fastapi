'use client'
// import { Header } from "../components/components/Header";
import Image from "next/image";
import { HomeComponent } from "../components/home/HomeComponent";
import { UserProfile } from "./UserProfile";
import { Footer } from "../components/components/Footer";
import { JSX, useState } from "react";
import user from '@/public/assets/img/estudiante.jpeg';
import EduConnectLogo from "@/public/assets/img/EduConectLogo.png";
import logo from "@/public/assets/react.svg";

export default function Platform() {

  const [ change, setChange ] = useState(<HomeComponent />)
  const [ isChnge, setIsChange ] = useState();

  const changeState = (screen) => {
    setChange(screen)
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
            <button onClick={ () => changeState(<UserProfile />) } className='flex'>
              <h2 className='text-md mr-2 mt-3'>Alexi</h2>
              <Image className='w-12 h-12 rounded-full' src={ user } alt="" />
            </button>
          </div>
        </div>
      </header>

      { change }

      <Footer />
    </div>
  );
}

