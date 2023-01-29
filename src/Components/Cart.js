import React, { useContext } from 'react'
import { CartContext } from '../Global/CartContext'

const Cart = () => {
    const { shoppingCart, totalPrice, dispatch, qty  } = useContext(CartContext)
  return (
    <>
    <div className='  mt-8 py-4 grid md:grid-cols-3 gap-6 items-center justify-center px-5'>
      
      {shoppingCart.length > 0 ?
      shoppingCart.map(cart => (
        <div key={cart.id}>
            <div className="bg-white rounded-lg overflow-hidden">
                <img src={cart.image} className="w-full h-60" alt="Product"/>
                <div className="p-6">
                    <h2 className="text-lg font-medium">{cart.name}</h2>
                    <div className="flex items-center mt-2">
                    <h3 className="text-lg font-medium">${cart.price}.00</h3>
                    <div className="ml-auto">
                        <button onClick={()=>dispatch({type: "DEC", id: cart.id, cart})} className="bg-blue-500 text-white px-2 py-1 rounded-lg">-</button>
                        <span className="px-2">Qty: {cart.qty}</span>
                        <button onClick={()=>dispatch({type: "INC", id: cart.id, cart})} className="bg-blue-500 text-white px-2 py-1 rounded-lg">+</button>
                    </div>
                    </div>
                    <div className=' flex items-center justify-between'>
                    <button onClick={()=>dispatch({ type: "DELETE", id: cart.id, cart})} className="bg-red-500 text-white px-2 py-1 rounded-lg mt-4">Delete</button>
                    <span className="bg-blue-500 text-white px-6 py-1 rounded-lg mt-4">{cart.price * cart.qty}</span>
                    </div>
                </div>
              </div>
        </div>
      ))
    :
    "Sorry Your Cart is Currently Empty"}
    </div>
    <div className=' '>
    {
      shoppingCart.length > 0 ?
      <div className=' flex mb-5 items-center justify-center flex-col text-4xl border-2 border-black'>
        <h1 className=' py-4 underline underline-offset-8'> Qty: {qty}</h1>
        <h1 className=' py-4 underline underline-offset-8'> Price : ${totalPrice}</h1>
        <button class="bg-indigo-800 text-white p-2 my-4 rounded-md items-center justify-center flex">Buy Now</button>
      </div>
      :
      ""
    }
  </div>
  </>
    
  )
}

export default Cart
