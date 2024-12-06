
import {ChevronRight, ArrowLeft, ArrowRight} from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
  return (

  
    
    <div className="min-h-screen bg-white text-black">

{/* Left Sidebar */} {/* Main Banner Section */}
<div className="grid grid-cols-1 md:grid-cols-[1fr_3fr]">
  {/* Sidebar */}
  <div className="hidden md:block w-full bg-white p-4 border-r border-black">
    <ul className="space-y-4 text-sm font-medium mt-5">
      <li className="flex justify-between items-center cursor-pointer hover:text-gray-700">
        <span>Women&apos;s Fashion</span>
        <ChevronRight size={16} />
      </li>
      <li className="flex justify-between items-center cursor-pointer hover:text-gray-700">
        <span>Men&apos;s Fashion</span>
        <ChevronRight size={16} />
      </li>
      <li className="cursor-pointer hover:text-gray-700">Electronics</li>
      <li className="cursor-pointer hover:text-gray-700">Home & Lifestyle</li>
      <li className="cursor-pointer hover:text-gray-700">Medicine</li>
      <li className="cursor-pointer hover:text-gray-700">Sports & Outdoor</li>
      <li className="cursor-pointer hover:text-gray-700">Baby&apos;s & Toys</li>
      <li className="cursor-pointer hover:text-gray-700">Groceries & Pets</li>
      <li className="cursor-pointer hover:text-gray-700">Health & Beauty</li>
    </ul>
  </div>

  {/* Main Banner Section */}
  <div className="flex justify-center items-center w-full bg-gray-100">
    <Image
      src="/main_banner.png"
      alt="Promotional Banner"
      className="object-cover"
      height={300}
      width={800}
    />
  </div>
</div>



{/* Flash Sales Products*/}
<div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-red-600 px-2 py-1 text-xl rounded flex items-center space-x-2">
              <Image
              src="/red_rectangle.png"
              width={10}
              height={10}
              alt="red rectangle"
            />
            <span>Today&apos;s</span>
          </span>

          <h2 className="text-2xl font-bold mt-1">Flash Sales</h2>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="text-xl font-bold">03</span>
            <span>:</span>
            <span className="text-xl font-bold">23</span>
            <span>:</span>
            <span className="text-xl font-bold">19</span>
            <span>:</span>
            <span className="text-xl font-bold">56</span>
          </div>
        </div>
        <div className='flex space-x-3'>
       <ArrowLeft className='bg-slate-100 rounded-2xl size-9'/>
       <ArrowRight className='bg-slate-100 rounded-2xl size-9'/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            image: "/red-gamepad.png",
            title: "HAVIT HV-G92 Gamepad",
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88
          },
          {
            image: "/az-keyboard.png",
            title: "AK-900 Wired Keyboard",
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 4,
            reviews: 75
          },
          {
            image: "/msi-monitor.png",
            title: "IPS LCD Gaming Monitor",
            price: 370,
            originalPrice: 400,
            discount: 30,
            rating: 5,
            reviews: 99
          },
          {
            image: "/chair-png-30.png",
            title: "S-Series Comfort Chair",
            price: 375,
            originalPrice: 400,
            discount: 25,
            rating: 4,
            reviews: 99
          }
        ].map((product, index) => (
          <div key={index} className="border p-4 rounded-lg">
            
      <div className="relative flex justify-center items-center mb-2">
        <div className="h-[150px] w-[150px] flex justify-center items-center bg-gray-100 rounded ">
          <Link
          href="/productdetails">
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="object-contain"
          /></Link>
        </div>
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
          -{product.discount}%
        </span>
      </div>
      <h3 className="font-medium">{product.title}</h3>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-red-500 font-bold">${product.price}</span>
        <span className="text-gray-400 line-through">${product.originalPrice}</span>
      </div>
      <div className="flex items-center mt-1">
        <div className="flex text-yellow-400">
          {'★'.repeat(product.rating)}
          {'☆'.repeat(5 - product.rating)}
        </div>
        <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
      </div>
          </div>
        ))}
      </div>
    </div>
  

<div className='flex justify-center items-center mt-10 '>
  <button className='bg-red-600 text-white p-3'>
    View All Products
  </button>
</div>

<div className=' flex justify-center mt-8'>
  <Image
  src="/Catagories.png"
  alt='Catagories'
  height={1000}
  width={1000}
  />
</div>









<div className="max-w-7xl mx-auto px-4 py-8 mt-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-red-600 px-2 py-1 text-xl rounded flex items-center space-x-2">
              <Image
              src="/red_rectangle.png"
              width={10}
              height={10}
              alt="red rectangle"
            />
            <span>This Month</span>
          </span>

          <h2 className="text-2xl font-bold mt-1">Flash Sales</h2>
        </div>
        
        <div className=''>
        <button className='bg-red-600 text-white p-2 text-lg'>
                 View All
              </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            image: "/red-coat.png",
            title: "The North Coat",
            price: 120,
            originalPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 88
          },
          {
            image: "/gucci-bag.png",
            title: "Gucci duffle bag",
            price: 960,
            originalPrice: 1160,
            discount: 35,
            rating: 4,
            reviews: 75
          },
          {
            image: "/rgb-cooler.png",
            title: "RGB liquid cpu cooler",
            price: 370,
            originalPrice: 400,
            discount: 30,
            rating: 5,
            reviews: 99
          },
          {
            image: "/small-bookshelf.png",
            title: "Small Bookshelf",
            price: 375,
            originalPrice: 400,
            discount: 25,
            rating: 4,
            reviews: 99
          }
        ].map((product, index) => (
          <div key={index} className="border p-4 rounded-lg">
      <div className="relative flex justify-center items-center mb-2">
        <div className="h-[150px] w-[150px] flex justify-center items-center bg-gray-100 rounded">
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
          -{product.discount}%
        </span>
      </div>
      <h3 className="font-medium">{product.title}</h3>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-red-500 font-bold">${product.price}</span>
        <span className="text-gray-400 line-through">${product.originalPrice}</span>
      </div>
      <div className="flex items-center mt-1">
        <div className="flex text-yellow-400">
          {'★'.repeat(product.rating)}
          {'☆'.repeat(5 - product.rating)}
        </div>
        <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
      </div>
          </div>
        ))}
      </div>
    </div>

    <div className=' flex justify-center mt-8 mb-3'>
  <Image
  src="/music.png"
  alt='Music ad'
  height={1000}
  width={1000}
  />
</div>

<div className=' flex justify-center mt-8 mb-3'>
  <Image
  src="/our-products.png"
  alt='Our Products'
  height={1000}
  width={1000}
  />
</div>

<div className=' flex justify-center mt-8 mb-3'>
  <Image
  src="/featured.png"
  alt='Featured Products'
  height={1000}
  width={1000}
  />
</div>

<div className=' flex justify-center mt-8 mb-3'>
  <Image
  src="/help.png"
  alt='Customer-Help'
  height={1000}
  width={1000}
  />
</div>

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      




































      </div>
      
  );
}
