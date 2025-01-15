// import { Inter } from "next/font/google";
// require('dotenv').config({
//     path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
// });

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Who we are",
//   description: "This is a page to inform about the EduConnect application",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }



import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "App Documentation",
  description: "Documentation and information about your Next.js and FastAPI application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#1B1E2B] text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  )
}
