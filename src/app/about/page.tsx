import Breadcrumb from "@/components/breadcrumb"
import Image from "next/image"


export default function Page() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ]

  return (
    <div>
         <div className="p-4">
             <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className=' flex justify-evenly mt-8 mb-9'>
                <Image
            src="/about-1.png"
            alt='About 1'
            height={300}
            width={600}
            
            />

            <Image
            src="/about-2.png"
            alt='about 2'
            height={500}
            width={500}
            />
            </div>
            <div className="flex justify-center mt-11 mb-9 space-y-6">
                <Image
                src="/about-3.png"
                alt='about 3'
                height={800}
                width={800}/>
            </div>
            <div className="flex justify-center mt-11 mb-5 ">
                <Image
                src="/about-4.png"
                alt='about 4'
                height={800}
                width={800}/>
            </div>
            <div className="flex justify-center mt-14 mb-9 ">
                <Image
                src="/about-5.png"
                alt='about 5'
                height={800}
                width={800}/>
            </div>
    </div>
  )
}