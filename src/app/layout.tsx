import './globals.css'
import { Inter } from 'next/font/google'
import  Header  from '@/components/layout/Header';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'imran82ali',
  description: 'imran82ali@gmail.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className=' px-20'> 
        {children}
        </main>
        </body>
    </html>
  )
}