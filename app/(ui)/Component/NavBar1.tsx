'use client'
import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png'
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AuthForm from './AuthForm';

export default function NavBar1() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible((prevVisible) => !prevVisible);
  }
  return (
    <>
    <div className='w-full flex items-center h-[30vh] md:h-auto font-serif z-50 fixed bg-gray-900 '>
      <div className='w-full h-full mx-auto py-5 px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center'>

        <div className='flex justify-start w-1/3 cursor-pointer'>
          <Link href='/'>
            <Image src={logo} alt='Logo'  className='cursor-pointer '></Image>
          </Link>
        </div>
        <div className='gap-4 flex-1 justify-evenly hidden text-sm text-white space-x-8 lg:flex'>
        <Link href="/"> 
          <h1 className={clsx(`cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full`,{'after:w-full': pathname === '/'})}>HOME</h1>
        </Link>
        <Link href="/department">
          <h1 className={clsx(`cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full`,{'after:w-full': pathname === '/department'})}>DEPARTMENT</h1>
        </Link>
        <Link href="/clubs">
          <h1 className={clsx(`cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full`,{'after:w-full': pathname==='/clubs'})}>CLUBS</h1>
        </Link>
        <Link href="blog">
          <h1 className={clsx(`cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full`,{'after:w-full': pathname === '/blog'})}>BLOG</h1>
        </Link>
        {/* <Link href="#"> */}
          <h1 className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full'
          onClick={toggleVisible}
          >LOGIN</h1>
        {/* </Link> */}
        </div>
      </div>
    </div>
    <div className={clsx(`my-[25vh] fixed top-0 left-0 w-full h-full flex items-start justify-center bg-transparent z-50`, !visible && 'hidden')}>
    <AuthForm></AuthForm>
    </div>
    </>
  )
}
