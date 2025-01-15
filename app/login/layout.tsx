import "./global.css";
import { Inter } from "next/font/google";
require('dotenv').config({
    path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LogIn",
  description: "This is a Front-end in Next.js for the EduConnect application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
