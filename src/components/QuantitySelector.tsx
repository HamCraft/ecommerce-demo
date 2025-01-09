'use client'

import { ChevronUp, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (newQuantity: number) => void
  min?: number
  max?: number
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99
}: QuantitySelectorProps) {
  const increment = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1)
    }
  }

  return (
    <div className="inline-flex flex-col border rounded-md">
      <Button
        variant="ghost"
        size="icon"
        className="h-6 px-2 py-1 hover:bg-gray-100"
        onClick={increment}
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
      <div className="px-4 py-1 text-center">
        {String(quantity).padStart(2, '0')}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 px-2 py-1 hover:bg-gray-100"
        onClick={decrement}
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  )
}

