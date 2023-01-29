import React from 'react'

const Contact = () => {
  return (
    <>
        <div class="h-screen w-screen bg-indigo-500 flex justify-center items-center">
            <div class="bg-white p-6 rounded-lg">
                <h2 class="text-2xl font-medium mb-2 text-center text-indigo-800">VIP Contact</h2>
                <form>
                <label class="block mb-2">
                    <span class="text-gray-800 items-center justify-center flex">Name</span>
                    <div class="mt-2">
                    <input type="text" class="form-input text-center border-2 border-black py-1 px-16 w-full " placeholder="Jane Smith"/>
                    </div>
                </label>
                <label class="block mb-2">
                    <span class="text-gray-800 items-center justify-center flex">Email</span>
                    <div class="mt-2">
                    <input type="email" class="form-input text-center border-2 border-black py-1 px-16 w-full " placeholder="jane@example.com"/>
                    </div>
                </label>
                <label class="block mb-2">
                    <span class="text-gray-800 items-center justify-center flex">Phone</span>
                    <div class="mt-2">
                    <input type="tel" class="form-input text-center border-2 border-black py-1 px-16 w-full " placeholder="XXX-XXX-XXXX"/>
                    </div>
                </label>
                <label class="block mb-2">
                    <span class="text-gray-800 items-center justify-center flex">Message</span>
                    <div class="mt-2">
                    <textarea class="form-input text-center border-2 border-black py-1 px-16 w-full " placeholder="Your message here"></textarea>
                    </div>
                </label>
                <div class="flex justify-center">
                    <button class="bg-indigo-800 text-white p-2 rounded-md items-center justify-center flex">Submit</button>
                </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
