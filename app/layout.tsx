import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduConnect - Plataforma Educativa Integral',
  description: 'Plataforma educativa integral diseñada para facilitar la gestión académica y mejorar la comunicación entre estudiantes, maestros y padres.',
  keywords: ['educación', 'gestión académica', 'plataforma educativa', 'estudiantes', 'maestros', 'padres'],
  authors: [{ name: 'EduConnect Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
