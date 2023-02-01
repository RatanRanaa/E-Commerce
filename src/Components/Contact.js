import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-medium mb-2 text-center text-indigo-800">VIP Contact</h2>
                <form>
                <label className="block mb-2">
                    <span className="text-gray-800 items-center justify-center flex">Name</span>
                    <div className="mt-2">
                    <input type="text" className="form-input text-center border-2 border-black py-1 px-16 w-full " placeholder="Jane Smith"/>
                    </div>
                </label>
                <label className="block mb-2">
                    <span className="text-gray-800 items-center justify-center flex">Email</span>
                    <div className="mt-2">
                    <input type="email" className="form-input text-center border-2 border-black py-1 px-16 w-full " placeholder="jane@example.com"/>
                    </div>
                </label>
                <label className="block mb-2">
                    <span className="text-gray-800 items-center justify-center flex">Phone</span>
                    <div className="mt-2">
                    <input type="tel" className="form-input text-center border-2 border-black py-1 px-16 w-full " placeholder="XXX-XXX-XXXX"/>
                    </div>
                </label>
                <label className="block mb-2">
                    <span className="text-gray-800 items-center justify-center flex">Message</span>
                    <div className="mt-2">
                    <textarea className="form-input text-center border-2 border-black py-1 px-16 w-full " placeholder="Your message here"></textarea>
                    </div>
                </label>
                <div className="flex justify-center">
                    <button className="bg-gray-400 text-white p-2 px-4 rounded-md items-center justify-center flex">Submit</button>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
