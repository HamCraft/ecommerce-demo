import Breadcrumb from "@/components/breadcrumb"
import Image from "next/image"


export default function Page() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <div>
         <div className="p-4">
             <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className=' flex  mt-8 mb-9'>
                <Image
            src="/contact-1.png"
            alt='contact 1'
            height={500}
            width={500}
            />

            <Image
            src="/contact-2.png"
            alt='contact 2'
            height={500}
            width={1000}
            />



            </div>
    </div>
  )
}