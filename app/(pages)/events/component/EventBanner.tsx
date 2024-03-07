import Image from 'next/image'
import React from 'react'
import Banner from '@/public/slideshow3.jpg'

export default function EventBanner() {
  return (
    <>
    <div  className="relative flex flex-col justify-center text-center">
      <Image src={Banner} alt='Banner' className="absolute  object-cover w-full h-full"></Image>
      <div className="relative bg-gray-900 bg-opacity-75 ">
        <div className="px-4 py-16 ">
          
            <div className="px-4 py-16">
              <h2 className=" mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
               EVENT BANNER
              </h2>
            </div>

        </div>
      </div>
     </div>
    </>
  )
}
