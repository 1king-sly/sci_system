import React from 'react'
import Image from 'next/image'
import logo from '@/public/mlogo.png'
import nav from '@/public/navBar.png'

export default function NavBar() {
  return (
    <div className='w-full h-[20vh] flex flex-row fixed z-50 bg-white  '>
      
        <Image src={nav} alt='top-bar' className=' w-full h-full object-cover relative' />

        <div className='w-full flex flex-1   absolute h-[20vh] px-4 '>

          <div className='w-2/5 h-full'>

          <Image  src={logo} alt='logo' className=' w-full h-full object-contain '/>
          </div>
          <div className='h-full flex flex-col flex-1 justify-between text-black pr-28  '>

            <div className='w-full flex justify-between h-1/2 items-center text-white'>
              
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
            </div>
            <div className='w-full flex justify-between'>
              
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
            </div>
          </div>

        </div>
    </div>
  )
}
