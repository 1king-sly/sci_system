import Image from 'next/image'
import React from 'react'
import Banner from '@/public/slideshow3.jpg'

export default function EventBanner() {
  return (
    <>
    <div  className="relative flex flex-col justify-center text-center">
      <Image src={Banner} alt='Banner' className="absolute rounded-3xl object-cover w-full h-full"></Image>
      <div className="rounded-3xl relative bg-gray-900 bg-opacity-50 ">
        <div className="px-4 py-16 ">
          
            <div className="px-4 py-16">
            </div>

        </div>
      </div>
     </div>
    </>
  )
}
