"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";



const links = [
    { name: "Women's Fashion", href: "/Women" , },
    { name: "Men's Fashion", href: "/Men", },
    { name: "Electronics", href: "/Electronics" },
    { name: "Jewelery", href: "/Jewelery" },
  ];
  
  export default function NavSection() {
    const pathname = usePathname();
    return (
 <div>  
<div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 bg-gray-50 min-h-screen">
  {/* Sidebar */}
  <div className="w-full bg-white p-6 shadow-md border-r border-gray-200">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
    <ul className="space-y-3 text-sm font-medium">
      {links.map((link, idx) => (
        <li key={idx} className="cursor-pointer">
          {pathname === link.href ? (
            <Link
              href={link.href}
              className="text-lg font-semibold text-primary border-l-4 border-primary pl-3"
            >
              {link.name}
            </Link>
          ) : (
            <Link
              href={link.href}
              className="text-lg font-medium text-gray-600 hover:text-primary transition-colors duration-150 pl-3"
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
      <li className="cursor-pointer text-lg font-medium text-gray-600 hover:text-primary transition-colors duration-150 pl-3">
        Medicine
      </li>
      <li className="cursor-pointer text-lg font-medium text-gray-600 hover:text-primary transition-colors duration-150 pl-3">
        Sports & Outdoor
      </li>
      <li className="cursor-pointer text-lg font-medium text-gray-600 hover:text-primary transition-colors duration-150 pl-3">
        Baby&apos;s & Toys
      </li>
      <li className="cursor-pointer text-lg font-medium text-gray-600 hover:text-primary transition-colors duration-150 pl-3">
        Groceries & Pets
      </li>
      <li className="cursor-pointer text-lg font-medium text-gray-600 hover:text-primary transition-colors duration-150 pl-3">
        Health & Beauty
      </li>
    </ul>
  </div>

  {/* Main Banner Section */}
  <div className="flex justify-center items-center w-full bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 rounded-lg shadow-md p-6">
    <Image
      src="/main_banner.png"
      alt="Promotional Banner"
      className="object-cover rounded-lg shadow-lg"
      height={300}
      width={800}
    />
  </div>
</div>
</div>   
    )
  }
  