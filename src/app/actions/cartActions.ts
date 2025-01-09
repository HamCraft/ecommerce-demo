/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

import { revalidatePath } from 'next/cache'
import { fullProduct } from '../interface'

export async function addToCart(product: fullProduct) {
  // In a real application, you might want to store this in a database
  // For now, we'll just revalidate the page
  revalidatePath('/product/[slug]')
  return { success: true, message: 'Product added to cart' }
}

