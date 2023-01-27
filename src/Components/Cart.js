import React, { useContext } from 'react'
import { CartContext } from '../Global/CartContext'

const Cart = () => {
    const { shoppingCart } = useContext(CartContext)
  return (
    <div className=' md:w-3/4 mt-8 py-4 grid md:grid-cols-2 gap-6 items-center justify-center px-5'>
      {shoppingCart.length > 0 ? 
      shoppingCart.map(cart => (
        <div key={cart.id} className=" ">
            <div class="bg-white rounded-lg overflow-hidden">
                <img src={cart.image} class="w-full h-60" alt="Product"/>
                <div class="p-6">
                    <h2 class="text-lg font-medium">{cart.name}</h2>
                    <div class="flex items-center mt-2">
                    <h3 class="text-lg font-medium">${cart.Price}</h3>
                    <div class="ml-auto">
                        <button class="bg-blue-500 text-white px-2 py-1 rounded-lg">+</button>
                        <span class="px-2">Qty: 1</span>
                        <button class="bg-blue-500 text-white px-2 py-1 rounded-lg">-</button>
                    </div>
                    </div>
                    <button class="bg-red-500 text-white px-2 py-1 rounded-lg mt-4">Delete</button>
                </div>
                </div>
        </div>
      ))
    :
    "Sorry Your Cart is Currently Empty"}
    </div>
  )
}

export default Cart
