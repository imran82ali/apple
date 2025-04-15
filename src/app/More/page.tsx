// import { Badge } from "@/components/ui/badge"
// import {ShoppingCart } from 'lucide-react'
import Button from '@mui/material/Button';
import HeroImage from '../../../public/laptop3.avif';

import Image from 'next/image';

export default function Hero() {
    return (
      <section className="gap-y-1 lg:flex-row py-8">
          {/* left Div */}
          <div className="flex- py-1 ">
            {/* <Badge className="py-3 rounded-md bg-blue-100  text-blue-700 hover:bg-blue-100">Sale 70%</Badge> */}
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
            MacBook Air is the world’s most popular laptop for a reason. Actually, for a lot of reasons. It delivers up to 18 hours of battery life.1 The M4 chip unlocks a whole new level of performance for work and play. Apple Intelligence is built in to help you get things done effortlessly.2 And it now comes in a stunning Sky Blue color. With the perfectly portable MacBook Air, you’ll be ready to take on just about anything, anywhere.
            </p>
            

          
          </div>
          
          {/* Right Div */}
          
      </section>
      )
  }