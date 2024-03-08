'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import COD from '@/public/Profile.jpg'

export default function CODCard() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='flex w-full h-[50vh] justify-evenly gap-6 m-20'>
    <div 
      className=' relative rounded-lg border w-full'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={COD} alt='Male Rep' height={300} width={400} className='w-full h-full object-cover border rounded-lg'></Image>
      <div className={`border rounded-b-lg absolute bottom-0 w-full text-center py-2 bg-white ${isHovered ? 'opacity-80 transition-opacity duration-300 ease-in-out' : 'opacity-0'}`}>
        <h1>Dr. Jasper Ondulo</h1>
        <h1>C.O.D Computer Science</h1>
        <h1>PHD. </h1>
      </div>
    </div>
    <div className='mr-40 w-full my-auto'>
    <h1 className='text-4xl font-serif font-bold max-[425px]:text-2xl'>About Computer Science Department</h1>
    <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quis dicta vitae reprehenderit fugit. Illo omnis, odit enim debitis excepturi sunt assumenda praesentium quisquam! Ipsam quidem asperiores error beatae totam.</p>
    </div>
    </div>
  )
}
