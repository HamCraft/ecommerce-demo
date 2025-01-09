import Explore from '@/components/Explore';
import Month from '@/components/Month';
import NavSection from '@/components/NavSection';
import Newest from '@/components/Newest';
import { ArrowLeft, ArrowRight} from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';


export const dynamic = "force-dynamic";



export default function Home() {

  return (

  
    
 <div className="min-h-screen bg-white text-black">

<NavSection/>
<div className="flex justify-between items-center p-6">
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

          <h2 className="text-2xl font-bold ">Flash Sales</h2>
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
<Newest/>
  
<Link href="/all">
<div className='flex justify-center items-center '>
  <button className='bg-red-600 text-white p-3'>
    View All Products
  </button>
</div>
</Link>

<div className=' flex justify-center mt-8 p-6'>
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
          <Link href="/all">
        <button className='bg-red-600 text-white p-2 text-lg'>
                 View All
              </button>
              </Link>
        </div>
      </div>
      </div>
      <Month/>

    <div className=' flex justify-center mt-8 mb-3'>
  <Image
  src="/music.png"
  alt='Music ad'
  height={1000}
  width={1000}
  />
</div>

<Explore/>

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
