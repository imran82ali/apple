// import { Badge } from "@/components/ui/badge"
// import {ShoppingCart } from 'lucide-react'
import Link from 'next/link';
import Button from '@mui/material/Button';
import HeroImage from '../../../public/laptop3.avif';

import Image from 'next/image';

export default function Hero() {
    return (
      <section className="gap-y-1 lg:flex-row py-8">
          {/* left Div */}
          <div className="flex- py-1 ">
            {/* <Badge className="py-3 rounded-md bg-blue-100  text-blue-700 hover:bg-blue-100">Sale 70%</Badge> */}
            <h1 className="scroll-m-10 text-4xl font-extrabold lg:text-5xl mt-6 text-center">
                MacbookPro
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
                A work of Smart.
            </p>
            <div className="flex justify-center-safe flex- py-10 gap-4">
                <Link href="/More"> 
                    <Button variant="contained">Learn More</Button>
                </Link>
                <Button variant="outlined">Buy</Button>
            </div>

          <div className="flex justify-center-safe flex- py-10 ">        
                <Image className=" h-[400px] w-[800px] mt-[-50px]" src={HeroImage} alt='heroimage'/>
          </div>

            <h1 className="text-xl leading-7 [&:not(:first-child)]:mt-6 text-center
      bg-gradient-to-r from-yellow-100 to-pink-900
      bg-clip-text text-transparent">Built for Apple Intelligence.</h1>

          </div>
          
          {/* Right Div */}
          
      </section>
      )
  }