import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MoonIcon } from 'lucide-react'
import EduLogo  from "@/public/assets/img/EduConectLogo.png"

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-900/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={EduLogo}
            alt="EduConnect Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-[#ED82B4] to-blue-500 bg-clip-text text-transparent">
            AppDocs
          </span>
        </div>
        <Button variant="ghost" size="icon">
          <MoonIcon className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}

