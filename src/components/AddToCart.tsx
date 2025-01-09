'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/app/context/CartContext'
import { fullProduct } from '@/app/interface'
import { addToCart } from '@/app/actions/cartActions'

export default function AddToCartButton({ product }: { product: fullProduct }) {
  const { addToCart: addToCartContext } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      const result = await addToCart(product)
      if (result.success) {
        addToCartContext(product)
      }
    } catch (error) {
      console.error('Failed to add product to cart', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleAddToCart} disabled={isLoading}>
      {isLoading ? 'Adding...' : 'Add To Cart'}
    </Button>
  )
}

