'use client'
import Image from 'next/image';
import React, { use } from 'react';
import logo from '@/public/logo.png'
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AuthForm from './AuthForm';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function NavBar1() {
  const pathname = usePathname();
  const [viewAuth, setViewAuth] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible((prevVisible) => !prevVisible);
  }
  const closeDropDown = () => {
    setVisible(!toggleVisible);
  }
  
  const toggleAuthForm = () => {
    setViewAuth((prev) => !prev);
  }
  const closeAuthMenu = () =>{
    setViewAuth(!toggleAuthForm);
  }
  return (
    <>
    <div className='w-full flex items-center h-[20vh] font-serif z-50 bg-gray-900 max-[768px]:hidden'>
      <div className='w-full h-full mx-auto py-5 px-4  md:px-4 lg:px-8 flex items-center'> {/*sm:max-w-xl md:max-w-full lg:max-w-screen-xl*/}

        <div className='flex justify-start w-1/3 cursor-pointer'>
          <Link href='/'>
            <Image src={logo} alt='Logo'  className='cursor-pointer ' onClick={closeAuthMenu}></Image>
          </Link>
        </div>
        <div className='lg:gap-4 max-[1024px]:gap-1 flex lg:flex-1 max-[1024px]:flex-auto flex-row justify-evenly  text-sm text-white space-x-8 max-[1024px]:space-x-2 lg:flex'>
        <Link href="/"> 
          <h1 onClick={closeAuthMenu} className={clsx(`cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full`,{'after:w-full': pathname === '/'})}>HOME</h1>
        </Link>
        <Link href="/department">
          <h1 onClick={closeAuthMenu} className={clsx(`cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full`,{'after:w-full': pathname === '/department'})}>DEPARTMENT</h1>
        </Link>
        <Link href="/club">
          <h1 onClick={closeAuthMenu} className={clsx(`cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full`,{'after:w-full': pathname==='/club'})}>CLUBS</h1>
        </Link>
        <Link href="/events">
          <h1 onClick={closeAuthMenu} className={clsx(`cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full`,{'after:w-full': pathname === '/events'})}>EVENTS</h1>
        </Link>
        <Link href="/research">
          <h1 onClick={closeAuthMenu} className={clsx(`cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full`,{'after:w-full': pathname === '/research'})}>RESEARCH</h1>
        </Link>
        {/* <Link href="#"> */}
          <h1 className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-white after:block after:duration-500 hover:after:w-full'
          onClick={toggleAuthForm}
          >LOGIN</h1>
        {/* </Link> */}
        </div>
      </div>
    </div>
    <div className={clsx(`my-[25vh] fixed top-0 left-0 w-full  flex items-start justify-center bg-transparent z-50 `, !viewAuth && 'hidden')}>{/*h-full*/}
    <div className='flex flex-col items-center justify-center'>
      <XMarkIcon className='cursor-pointer h-10 w-10 min-[769px]:hidden bg-white' onClick={closeAuthMenu}></XMarkIcon>
      <AuthForm></AuthForm>
      </div>
    </div>

    {/* Mobile NavBar */}
    <div className="min-[769px]:hidden">
          {/* Mobile menu dropdown */}
          <div className="top-4 left-0 w-full">
            <div className="bg-gray-900 border rounded shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="inline-flex items-center">
                    <Image src={logo} alt='Logo'  className='cursor-pointer '></Image>
                  </Link> 
                </div>
                <div>
                <button title="Open Menu" className={clsx(`p-2 mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline`, visible && `hidden`)}
                onClick={toggleVisible}>
                  <svg className="w-6 text-white" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                    <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                    <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                  </svg>
                </button>
                  <button aria-label="Close Menu" title="Close Menu" className={clsx(`p-2 mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline`, !visible && `hidden`)}
                  onClick={toggleVisible}
                  >
                    <svg className="w-6 text-white" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>


              <nav className={clsx(`w-full h-[480px] flex flex-col items-center justify-center bg-slate-900 z-50 relative p-10 rounded-md transition-all ease-in-out duration-300 `, !visible && 'hidden')}>
                <ul className="space-y-4 z-[1000]">
                  <li><Link href="/" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" onClick={() => {closeAuthMenu();closeDropDown();}}>HOME</Link> </li>    
                  <li><Link href="/department" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" onClick={() => {closeAuthMenu();closeDropDown();}}>DEPARTMENT</Link> </li>
                  <li><Link href="/club" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" onClick={() => {closeAuthMenu();closeDropDown();}}>CLUBS</Link> </li>
                  <li><Link href="/events" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" onClick={() => {closeAuthMenu();closeDropDown();}}>EVENTS</Link> </li>
                  <li><Link href="/research" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" onClick={() => {closeAuthMenu();closeDropDown();}}>RESEARCH</Link> </li>
                  <li>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      onClick={() => {
                        toggleAuthForm();
                        closeDropDown();
                      }}
                    >
                      Login
                    </Link> 
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    </>
  )
}
