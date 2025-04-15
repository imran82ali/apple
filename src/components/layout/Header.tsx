import Link from 'next/link';
import logo from '../../../public/apple.svg';
import Image from 'next/image';
// import AllProduct from '@/app/products/page'

// import {Search, ShoppingCart } from 'lucide-react'
// import {Search } from 'lucide-react'
// import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <div className="flex justify-between items-center py-6 px-20"> 
        
        <Link href="/">         
            <Image className="w-5 h-5"  src={logo} alt='imran82ali'/> 
        </Link>

        <ul className='flex gap-x-3'>
            <li className='text-sm'> 
            <Link href="/"> Store </Link>
            </li>
            <li className='text-sm'> 
            <Link href="/"> Mac </Link>
            </li>
            <li className='text-sm'> 
            <Link href="/"> iPad </Link>
            </li>
            <li className='text-sm'> 
            <Link href="/"> Watch </Link>
            </li>
            <li className='text-sm'> 
            <Link href="/"> Vision </Link>
            </li>
            <li className='text-sm'> 
            <Link href="/"> Support </Link>
            </li>
        </ul>
        {/* <Search className='h-6 w-6' /> */}
        {/* <Input className="w-1/3" placeholder="What you are looking for"/> */}
        <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
            {/* <ShoppingCart className='h-6 w-6' /> */}
        </div>
    </div>
    )
}