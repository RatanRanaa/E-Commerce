import React, { useState,useEffect } from 'react'
import { auth, provider } from "./config"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
// import Home from './Home'

const SignIn = () => {

  const history = useNavigate()

    const [value, setValue] = useState("")

    const handleClick = () =>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
            history("/")
        })
    }

    const logout = () =>{
      localStorage.clear()
      window.location.reload()
    }
     
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    },[])

  return (
    <div className=' pt-16 h-screen w-screen bg-slate-300'>
        {value?
        // <Home/>
        // <button onClick={logout}>logout</button>
        <div className=' flex items-center justify-center h-96'>
        <div className="my-2">
        <button onClick={logout}
               className="w-full px-2 text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
               <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt=""/>
               <span className="dark:text-gray-300">
                   Logout
               </span>
            </button>
        </div>
        </div>
      :
      <div className=' flex items-center justify-center h-96'>
        <div className="my-2">
            <button onClick={handleClick}
               className="w-full px-2 text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
               <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt=""/>
               <span className="dark:text-gray-300">
                   Login with Google
               </span>
            </button>
        </div>
      </div>
      }
    </div>
  )
}

export default SignIn
