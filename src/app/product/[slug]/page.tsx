import { fullProduct } from "@/app/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Newest from "@/components/Newest";
import { Button } from "@/components/ui/button";
import { Truck } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCart";

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          discountPercentage,
          priceWithoutDiscount,
          rating,
          ratingCount,
          quantity,
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <span className="absolute top-40 left-5 bg-red-500 text-white px-2 py-1 text-lg rounded">
            {data.discountPercentage}%
          </span>
          <div>
            {data.images ? (
              <Image
                src={urlFor(data.images).url()} 
                alt={data.name || "Product Image"}
                width={500}
                height={500}
                className="rounded-lg"
                priority
              />
            ) : (
              <div className="h-64 w-full flex items-center justify-center bg-gray-100 text-gray-500">
                No Image Available
              </div>
            )}
          </div>
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="flex mb-0.5 text-slate-900">
                <Link href="/">Product / {data.name} </Link> 
              </span>
              <span className="mb-0.5 inline-block text-gray-500 mt-5">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-2 ">
              <Button variant={"ghost"} className="rounded-full gap-x-2  ">
                <div className=" text-yellow-400 ">
                  {'★'.repeat(data.rating)} 
                  <span className="text-black p-1">
                    ({data.ratingCount})
                  </span>
                </div>
              </Button>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.priceWithoutDiscount}
                </span>
              </div>
              <span className="flex text-sm text-red-600">
                {data.quantity} products left
              </span>
              <span className=" text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>

            <div className="flex gap-2.5 mt-4">
              <AddToCartButton product={data} />
              <Button variant={"secondary"}>Checkout Now</Button>
            </div>
          </div>
        </div>
      </div>
      <Newest/>
    </div>
  );
}

