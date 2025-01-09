/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useCart } from '@/app/context/CartContext'
import { Button } from '@/components/ui/button'
import QuantitySelector from "@/components/QuantitySelector"
import { urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function CartPage() {
  const { cart, addToCart, removeFromCart, getCartTotal } = useCart()

  const updateQuantity = (productId: string, currentProduct: any, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      const updatedProduct = { ...currentProduct, quantity: newQuantity }
      addToCart(updatedProduct)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-4 gap-4 mb-4 text-sm font-semibold text-gray-600 border-b pb-4">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>

      <div className="divide-y">
        {cart.map((item) => (
          <div key={item._id} className="grid grid-cols-4 gap-4 py-4 items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-gray-500 hover:text-red-500"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-4">
                {item.images && (
                  <Image
                    src={urlFor(item.images).url()}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                )}
                <span className="font-medium">{item.name}</span>
              </div>
            </div>
            <div>${item.price}</div>
            <div>
              <QuantitySelector
                quantity={item.quantity}
                onQuantityChange={(newQuantity) => updateQuantity(item._id, item, newQuantity)}
              />
            </div>
            <div className="font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-8">
        <Link href="/">
          <Button variant="outline">Return To Shop</Button>
        </Link>
        <div className="flex items-center gap-8">
          <div className="text-lg">
            Total: <span className="font-bold">${getCartTotal().toFixed(2)}</span>
          </div>
          <Button>Update Cart</Button>

        </div>
      </div>

      <div className=' flex justify-center mt-12 mb-3'>
        <Image
        src="/frame-checkout.png"
        alt='Customer-Help'
        height={1000}
        width={1000}
        />
      </div>
    </div>
  )
}

