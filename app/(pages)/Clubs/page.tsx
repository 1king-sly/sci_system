import Image from 'next/image'
import React from 'react'
import Club from '@/public/club.jpg'

export default function page() {
  return (
    <div className=' my-4 overflow-hidden'>
        <div className='w-screen relative h-[40vh] bg-gray-50  text-center font-serif'>
            <Image src={Club} alt='Club' className='object-cover h-full w-full absolute'></Image>
            <div className='my-20 items-center justify-center absolute  w-full h-full text-white '>
              <h1 className='text-xl font'>COMPARE, CHOOSE, ENJOY</h1>
              <h1 className='text-6xl font-bold'>Our top SCI <br />clubs</h1>
            </div>
        </div>
    </div>
  )
}
