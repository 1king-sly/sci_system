import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png'

export default function NavBar1() {
  return (
    <div className='w-full flex items-center h-[12vh] font-serif z-50 fixed bg-sky-400'>
      <div className='w-full h-full px:4 md:px-8 flex items-center'>

        <div className='flex justify-start w-1/3 cursor-pointer'>
        <Image src={logo} alt='Logo'  className='cursor-pointer object-cover h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 bg-white'></Image>
        </div>
        <div className='gap-4 flex-1 flex justify-evenly md:text-lg lg:text-xl text-white text-xs '>
        <h1 className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full'>HOME</h1>
        <h1 className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full'>DEPARTMENT</h1>
        <h1 className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full'>CLUBS</h1>
        <h1 className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full'>BLOG</h1>
        <h1 className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full'>LOGIN</h1>
        </div>
      </div>
    </div>
  )
}
