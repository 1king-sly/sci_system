'use client'
import React, { useState } from 'react';
import clsx from 'clsx'
import Image from 'next/image'
import profile from '@/public/ProfilePic.jpeg'

export default function Profile() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible((prev) => !prev)
    };
  return (
    <>
    <div className=' mx-auto shadow-lg rounded-md flex flex-col w-96 h-96  items-center justify-center'>
       <div className=' h-24 flex items-center justify-center  gap-4 px-2'>
           <div className='h-20 w-20 rounded-full shadow-md overflow-hidden relative'>
               <Image 
               src={profile} 
               alt='profile'
               layout="fill"
               objectFit="cover"
               />
           </div>    
       </div>
       <div className=' gap-3 flex flex-col ' >
           <div className='border bg-white outline-sky-400 px-2 py-1 rounded-md my-2'>
               <h1>Clarence Laria</h1>
           </div>
           <div className='border bg-white outline-sky-400 px-2 py-1 rounded-md my-2'>
               <h1>clarencelaria@gmail.com</h1>
           </div>
           
       </div>
       <div className='mt-2 w-full flex justify-center '>
           <button className='w-4/5 text-white bg-sky-300 rounded-md p-1' 
           onClick={toggleVisible}
           >Edit Profile</button>
       </div>
 </div>
 <div className={clsx(`mx-auto shadow-lg rounded-md flex flex-col w-96 h-auto  items-center justify-center`, !visible && "hidden")}>
       <div className=' h-24 flex items-center justify-center  gap-4 px-2'>
           <div className='h-20 w-20 rounded-full shadow-md overflow-hidden relative'>
               <Image 
               src={profile} 
               alt='profile'
               layout="fill"
               objectFit="cover"
               />
           </div>    
       </div>
       <div className=' gap-3 flex flex-col ' >
            <label htmlFor='Clarence Laria' className='text-sm'>Name</label>
            <input placeholder='Clarence Laria' name='Clarence Laria' title='Clarence Laria' id='Clarence Laria' aria-label='Clarence Laria' className='bg-white outline-sky-400 mb-2 border px-2 py-1 rounded-md'/>
            <label htmlFor='email' className='text-sm'>Email</label>
            <input placeholder='clarencelaria@gmail.com' name='email' title='email' id='email' aria-label='email' className='bg-white outline-sky-400 mb-2 border px-2 py-1 rounded-md'/>

            <label htmlFor='password' className='text-sm'>Change Password</label>
            <input placeholder='password' name='password' title='password' id='password' aria-label='password' className='bg-white outline-sky-400 mb-2 border px-2 py-1 rounded-md'/>
            <label htmlFor='password' className='text-sm'>Confirm Password</label>
            <input placeholder='password' name='password' title='password' id='password' aria-label='password' className='bg-white outline-sky-400 mb-2 border px-2 py-1 rounded-md'/>
           
       </div>
       <div className='mt-2 w-full flex justify-center '>
           <button className='w-4/5 text-white bg-sky-300 rounded-md p-1' 
           >Update</button>
       </div>
 </div>    
</>
  )
}
