import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'

const Navbar = () => {
    const {qty} = useContext(CartContext)
    const [toggle, setToggle] = useState(false)
  return (
    <>
     <div className=' w-full h-12 bg-black shadow-2xl z-10 fixed top-0'>
            <div className=' flex items-center justify-between px-20'>
                <div>
                    <i className="cursor-pointer bg-cover bg-center rounded-3xl p-2 text-white text-2xl fa-solid fa-house"></i>
                </div>
                <div className=' text-white cursor-pointer'>
                    <div className=' hidden md:block'>
                        <div className=' flex items-center justify-center'>
                            <div className=' px-6 hover:underline hover:underline-offset-8 font-medium text-[20px] decoration-3  underline underline-offset-2 '>
                                <Link to="/"><h1>Home</h1></Link>
                            </div>
                            <div className=' px-6 hover:underline hover:underline-offset-8 font-medium text-[20px] decoration-3  underline underline-offset-2 '>
                                <Link to="/product"><h1>Product</h1></Link>
                            </div>
                            <div className=' px-6 hover:underline hover:underline-offset-8 font-medium text-[20px] decoration-3  underline underline-offset-2 '>
                                <Link to="/cart"><h1>Cart-item {qty}</h1></Link>
                            </div>
                            <div className=' px-6 hover:underline hover:underline-offset-8 font-medium text-[20px] decoration-3  underline underline-offset-2 '>
                                <h1>Contact</h1>
                            </div>
                        </div>
                    </div>
                    <h1 onClick={()=>setToggle(!toggle)}>{toggle ? <i className="fa-solid fa-xmark md:hidden"></i> : <i className="fa-solid fa-bars md:hidden"></i>}</h1>
                </div>
            </div>
            <div className={toggle ?' w-full bg-black top-0 h-74 text-white text-center p-10 md:hidden': "hidden md:hidden"}>
                <div className=' pb-6 hover:underline hover:underline-offset-8 font-medium text-[20px] decoration-3  cursor-pointer underline un2erline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>Home</h1>
                </div>
                <div className=' pb-6 hover:underline hover:underline-offset-8 font-medium text-[20px] decoration-3  cursor-pointer underline un2erline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>Projects</h1>
                </div>
                <div className=' pb-6 hover:underline hover:underline-offset-8 font-medium text-[20px] decoration-3  cursor-pointer underline un2erline-offset-8'>
                    <Link to="/cart"><h1 onClick={()=>setToggle(!toggle)}>Cart-item {qty}</h1></Link>
                </div>
                <div className=' pb-6 hover:underline hover:underline-offset-8 font-medium text-[20px] decoration-3  cursor-pointer underline un2erline-offset-8'>
                    <h1 onClick={()=>setToggle(!toggle)}>Contact</h1>
                </div>
            </div>
        </div>
        <hr className=' bg-red-800 h-4' />
    </>
  )
}

export default Navbar
