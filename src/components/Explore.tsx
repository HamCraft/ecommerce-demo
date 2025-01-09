
import Link from "next/link";
import { simplifiedProduct } from "../app/interface";
// import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { client } from "@/app/lib/sanity";
import { ArrowLeft, ArrowRight } from "lucide-react";


async function getData() {
  const query = `*[_type == "product"][0...8] | order(_createdAt desc) {
  _id,
    price,
    name,
    discountPercentage,
    priceWithoutDiscount,
    rating,
    ratingCount,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images.asset->url,
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function Explore() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Newest products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div> */}
        <div className="flex justify-between items-center p-6">
        <div>
          <span className="text-red-600 px-2 py-1 text-xl rounded flex items-center space-x-2">
              <Image
              src="/red_rectangle.png"
              width={10}
              height={10}
              alt="red rectangle"
            />
            <span>Our Products</span>
          </span>

          <h2 className="text-2xl font-bold ">Exlore Products</h2>
        </div>
        <div className='flex space-x-3'>
       <ArrowLeft className='bg-slate-100 rounded-2xl size-9'/>
       <ArrowRight className='bg-slate-100 rounded-2xl size-9'/>
        </div>
      </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageUrl}
                  alt="Product image"
                  className="w-full h-full object-fill object-center lg:h-full lg:w-full"
                  width={300}
                  height={300}
                />
              </div>
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
          -     {product.discountPercentage}%
                </span>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="flex space-x-3 mt-2">
              <p className="text-md font-medium text-red-600 line-through">
                  ${product.priceWithoutDiscount}
                </p>
                <p className="text-md font-medium text-gray-900">
                  ${product.price}
                </p>
                </div>
              <div className=" text-yellow-400">
              {'★'.repeat(product.rating)} 
                <span className="text-black p-1">
                 ({product.ratingCount})
                 </span>
                 </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center mt-4 '>
          <Link href="/all">
  <button className='bg-red-600 text-white p-3'>
    View All Products
  </button></Link>
</div>
      </div>
    </div>
  );
}