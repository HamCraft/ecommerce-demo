import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Exclusive</h2>
            <h3 className="text-lg">Subscribe</h3>
            <p>Get 10% off your first order</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-white"
              />
              <Button variant="outline" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Support</h2>
            <address className="not-italic">
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.
            </address>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Account</h2>
            <nav className="flex flex-col space-y-2">
              <Link href="/account" className="hover:underline">My Account</Link>
              <Link href="/login" className="hover:underline">Login / Register</Link>
              <Link href="/cart" className="hover:underline">Cart</Link>
              <Link href="/wishlist" className="hover:underline">Wishlist</Link>
              <Link href="/shop" className="hover:underline">Shop</Link>
            </nav>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Quick Link</h2>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline">Terms Of Use</Link>
              <Link href="/faq" className="hover:underline">FAQ</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </nav>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Download App</h2>
            <p className="text-sm text-gray-300">Save $3 with App New User Only</p>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24">
                <Image
                  src="/placeholder.svg"
                  alt="QR Code"
                  width={96}
                  height={96}
                  className="bg-white p-2"
                />
              </div>
              <div className="space-y-2">
                <Image
                  src="/placeholder.svg"
                  alt="Get it on Google Play"
                  width={120}
                  height={36}
                />
                <Image
                  src="/placeholder.svg"
                  alt="Download on the App Store"
                  width={120}
                  height={36}
                />
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  )
}

