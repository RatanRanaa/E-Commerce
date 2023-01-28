import React, { createContext, useState } from 'react'

import pizza from "../assets/pizza.jpeg"
import cholabatura from '../assets/chola batura.jpeg'
import cholachawal from '../assets/chole chawal.jpg'
import dahibhalla from '../assets/dahi bhalla.jpeg'
import burger from '../assets/Burger.jpeg'
import momos from '../assets/momos.jpg'
import noodles from '../assets/noodles.jpg'
import samosa from '../assets/samosa.jpeg'
import tikki from '../assets/tikki.jpeg'
import bread from '../assets/bread.jpg'

export const ProductsContext = createContext()

const ProductsContextProvider = (props) => {
    const [ products ] = useState ([
        {id: 1, name: 'pizza', price: 150, image: pizza, status: 'star'},
        {id: 2, name: 'cholabatura', price: 50, image: cholabatura, status: 'star'},
        {id: 3, name: 'cholachawal', price: 50, image: cholachawal, status: 'star'},
        {id: 4, name: 'dahibhalla', price: 50, image: dahibhalla, status: 'star'},
        {id: 5, name: 'burger', price: 50, image: burger, status: 'star'},
        {id: 6, name: 'momos', price: 50, image: momos, status: 'star'},
        {id: 7, name: 'noodles', price: 50, image: noodles, status: 'star'},
        {id: 8, name: 'samosa', price: 50, image: samosa, status: 'star'},
        {id: 9, name: 'tikki', price: 50, image: tikki, status: 'star'},
        {id: 10, name: 'bread', price: 50, image: bread, status: 'star'},
    ])
  return (
    <ProductsContext.Provider value={{products: [ ...products ]}}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
