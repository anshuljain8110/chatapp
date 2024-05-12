import React from 'react'
import { useFirebase } from '../../context/Firebase'
import { Link } from 'react-router-dom'

export default function Footer() {
    const firebase = useFirebase()
  return (
    

<footer className={`bg-white  shadow ${firebase.theme?"dark:bg-gray-900":""} `}>
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <svg xmlns="http://www.w3.org/2000/svg" className='h-8 mx-1' viewBox="0 0 512 512"><path fill={firebase.theme?"#ffffff":""} d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                <span className={`self-center text-2xl font-semibold whitespace-nowrap ${firebase.theme?"dark:text-white":""}`}>ChatPlane</span>
            </a>
            <ul className={`flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ${firebase.theme?"dark:text-gray-400":""}`}>
                <li>
                    <Link to="/chatapp/about" className="hover:underline me-4 md:me-6">About Us</Link>
                </li>
                <li>
                    <Link to="/chatwall" className="hover:underline me-4 md:me-6">Chat Now</Link>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className={`block text-sm text-gray-500 sm:text-center ${firebase.theme?"dark:text-gray-400":""}`}>© 2023 <p className="underline inline">ChatPlane™</p>. All Rights Reserved.</span>
    </div>
</footer>


  )
}
