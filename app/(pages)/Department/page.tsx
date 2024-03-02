import React from 'react'
import SideBar from '@/app/(ui)/Component/SideBar'

export default function page() {
  return (
    <>
        <div className='w-full'>
            <div className="bg-sky-300 bg-opacity-100 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-h-screen-xl md:px-24 lg:px-8 lg:py-10">
        
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-10 sm:text-center sm:mb-0">
            
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                DEPARTMENT PAGE </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
                </div>
                {/* <div>
                <a
                    href="/"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    Get started
                </a>
                </div>  */}
            </div>
            </div>
        
            </div>

            <SideBar></SideBar>
        </div>
    </>
  )
}
