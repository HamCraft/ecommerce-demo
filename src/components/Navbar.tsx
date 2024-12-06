
import { ChevronDown, Heart, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'


export default function Navbar() {
  return (
    <div>
<div className="bg-black text-white text-sm flex items-center justify-between px-4 py-2">
     
     <div className="flex-1 flex justify-center items-center">
       <span>
         Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
       </span>
       <Link
         href="#"
         className="ml-2 text-white font-semibold underline hover:text-gray-300"
       >
         Shop Now
       </Link>
     </div>

     
     <div className="pr-6">
         <button className="flex items-center text-white hover:text-gray-300 space-x-1">
           <span>English</span>
           <ChevronDown size={16} />
         </button>
       </div>
   </div>


   <header className="border-b border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                Exclusive
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
                <Link href="/signup" className="hover:text-gray-300">
                  Sign Up
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="What are you looking for?"
                    className="w-64 bg-slate-100" />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-black-400" />
                </div>
                <Link
                href="/wishlist">
                <Heart className="h-6 w-6" />
                </Link>
                <Link
                href="/cart"
                >
                <ShoppingCart className="h-6 w-6" />
                </Link>
                
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}
