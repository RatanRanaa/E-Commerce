import React, { useContext, useState } from 'react'
import { ProductsContext } from '../Global/ProductsContext'

const Product = () => {
  const { products } = useContext(ProductsContext)
  const [query, setQuery] = useState("")
  return (
    <>
        <div className=' h-screen mt-10'>
            <div className=' pt-8 flex items-center justify-center'>
                <input className='  w-96 px-5 h-8 border-spacing-2 border-2 border-black text-black py-4' 
                type="text"
                placeholder='Search...'
                onChange={(e)=> setQuery(e.target.value)} />
            </div>
            <div>
              <div className=' grid md:grid-cols-3 sm:grid-cols-2 gap-4 py-8 px-4 items-center justify-center'>
                {products.filter((product)=> product.name.toLowerCase().includes(query)).map((product)=>{
                  return <div key={product.id}>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                          <img className="w-full h-60" src={product.image} alt={product.name} />
                          <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.name}</div>
                            <div className=' flex items-center justify-between'>
                            <div>
                          <p className="text-gray-700 text-base">
                              ${product.Price}
                            </p>
                          </div>
                          <div className="px-6 py-4">
                              <button
                                className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600"
                                // onClick={() => onAddToCart(product)}
                              >
                                Add to cart
                              </button>
                            </div>
                            </div>
                          </div>
                        </div>
                  </div>
                })}
              </div>
            </div>
        </div>
    </>
  )
}

export default Product
