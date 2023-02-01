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
                    <Link to="/"><i className="cursor-pointer bg-cover bg-center rounded-3xl p-2 text-white text-2xl fa-solid fa-house"></i></Link>
                </div>
                <div className=' text-white cursor-pointer'>
                    <div className=' hidden md:block'>
                        <div className=' flex items-center justify-center'>
                            <div className=' px-6  font-medium text-[20px] decoration-3'>
                                <Link to="/"><h1><i className="fa-solid fa-burger text-2xl hover:text-gray-400"></i></h1></Link>
                            </div>
                            <div className=' px-6  font-medium text-[20px] decoration-3 '>
                                <Link to="/product"><h1><i className="fa-solid fa-cookie-bite text-2xl hover:text-gray-400"></i></h1></Link>
                            </div>
                            <div className=' px-6 font-medium text-[20px] decoration-3 '>
                                <Link to="/cart"><h1><i className="fa-solid fa-sitemap text-2xl hover:text-gray-400"></i> {qty}</h1></Link>
                            </div>
                            <div className=' px-6  font-medium text-[20px] decoration-3 '>
                                <Link to="/contact"><h1><i className="fa-solid fa-address-book text-2xl hover:text-gray-400"></i></h1></Link>
                            </div>
                            <div className=' px-6  font-medium text-[20px] decoration-3 '>
                                <Link to="/signin"><h1><i className="fa-solid fa-gears text-2xl hover:text-gray-400"></i></h1></Link>
                            </div>
                        </div>
                    </div>
                    <h1 onClick={()=>setToggle(!toggle)}>{toggle ? 
                    <i className="fa-solid fa-xmark md:hidden"> <span className=' px-2'>{qty}</span></i> : <i className="fa-solid fa-bars md:hidden"><span className=' px-2'>{qty}</span></i>}</h1>
                </div>
            </div>
            <div className={toggle ?' w-full bg-black top-0 h-74 text-white text-center p-10 md:hidden': "hidden md:hidden"}>
                <div className=' pb-12 font-medium text-[40px] decoration-3  cursor-pointer'>
                    <Link to="/"><h1 onClick={()=>setToggle(!toggle)}><i className="fa-solid fa-burger hover:text-gray-400"></i></h1></Link>
                </div>
                <div className=' pb-12 font-medium text-[40px] decoration-3  cursor-pointer'>
                    <Link to="/product"><h1 onClick={()=>setToggle(!toggle)}><i className="fa-solid fa-cookie-bite hover:text-gray-400"></i></h1></Link>
                </div>
                <div className=' pb-12 font-medium text-[40px] decoration-3  cursor-pointer'>
                    <Link to="/cart"><h1 onClick={()=>setToggle(!toggle)}><i className="fa-solid fa-sitemap hover:text-gray-400"></i> {qty}</h1></Link>
                </div>
                <div className=' pb-12 font-medium text-[40px] decoration-3  cursor-pointer'>
                    <Link to="/contact"><h1 onClick={()=>setToggle(!toggle)}><i className="fa-solid fa-address-book hover:text-gray-400"></i></h1></Link>
                </div>
                <div className=' pb-12 font-medium text-[40px] decoration-3  cursor-pointer'>
                    <Link to="/signin"><h1 onClick={()=>setToggle(!toggle)}><i className="fa-solid fa-gears hover:text-gray-400"></i></h1></Link>
                </div>
            </div>
        </div>
        {/* <hr className=' bg-red-800 h-4' /> */}
    </>
  )
}

export default Navbar
