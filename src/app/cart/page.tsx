import Breadcrumb from "@/components/breadcrumb"
import Image from "next/image"


export default function Page() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ]

  return (
    <div>
         <div className="p-4">
             <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className=' flex justify-center mt-8 mb-9'>
                <Image
            src="/cart-checkout.png"
            alt='Checkout'
            height={1000}
            width={1000}
            />
            </div>


    </div>
  )
}