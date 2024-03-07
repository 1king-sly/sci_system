import React from 'react'
import Image from 'next/image'
import Profile from '@/public/Profile.jpg'

export default function MembersCard() {
  return (
    <>
        <div className='grid grid-cols-3 w-full gap-6'>
            <div className='h-auto bg-gray-50 my-10 rounded-lg border '>
                <div className='p-2 w-full h-[30vh] rounded-lg'>
                    <Image src={Profile} alt='Rep-Photo' className='w-full h-full object-cover border rounded-lg'></Image>
                </div>
                <div className='text-center my-3'>
                    <h2 className='py-2'>Dr. Clarence Laria</h2>
                    <h2 className='py-2'>PHD. Information Technology</h2>
                    <h2 className='py-2'>Role</h2>
                </div>
            </div> 
            <div className='h-auto bg-gray-50 my-10 rounded-lg border '>
                <div className='p-2 w-full h-[30vh] rounded-lg'>
                    <Image src={Profile} alt='Rep-Photo' className='w-full h-full object-cover border rounded-lg'></Image>
                </div>
                <div className='text-center my-3'>
                    <h2 className='py-2'>Dr. Byrone Kingsly</h2>
                    <h2 className='py-2'>PHD. Computer Science</h2>
                    <h2 className='py-2'>Role</h2>
                </div>
            </div> 
            <div className='h-auto bg-gray-50 my-10 rounded-lg border '>
                <div className='p-2 w-full h-[30vh] rounded-lg'>
                    <Image src={Profile} alt='Rep-Photo' className='w-full h-full object-cover border rounded-lg'></Image>
                </div>
                <div className='text-center my-3'>
                    <h2 className='py-2'>Dr. Valencia Nabiswa</h2>
                    <h2 className='py-2'>PHD. Machine Learning</h2>
                    <h2 className='py-2'>Role</h2>
                </div>
            </div> 
        </div> 
        </> 
        )
}
