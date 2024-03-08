import Image from 'next/image'
import React from 'react'
import ProfilePic from "@/public/ProfilePic.jpeg"

export default function ClassRepsCard() {
  return (
  <>
    <div className='mx-20 my-10'>
      <div className=' mt-10 max-[425px]:mx-6'>
        <h1 className='text-4xl font-serif font-bold max-[425px]:text-2xl'>Class Representatives</h1>
      </div>
      <div className='grid grid-cols-4 w-full gap-6'>
        <div className='h-auto bg-gray-50 my-10 rounded-lg border '>
          <div className='p-2 w-full h-[30vh] rounded-lg'>
          <Image src={ProfilePic} alt='Rep-Photo' className='w-full h-full object-cover border rounded-lg'></Image>
          </div>
          <div className='text-center my-3'>
            <h2 className='py-2'>Clarence Laria</h2>
            <h2 className='py-2'>First Year Representative</h2>
            <h2 className='py-2'>Bsc. Information Technology</h2>
          </div>
        </div>
        <div className='h-auto bg-gray-50 my-10 rounded-lg border '>
          <div className='p-2 w-full h-[30vh] rounded-lg'>
          <Image src={ProfilePic} alt='Rep-Photo' className='w-full h-full object-cover border rounded-lg'></Image>
          </div>
          <div className='text-center my-3'>
            <h2 className='py-2'>Byrone Kinsly</h2>
            <h2 className='py-2'>Second Year Representative</h2>
            <h2 className='py-2'>Bsc. Computer Science</h2>
          </div>
        </div><div className='h-auto bg-gray-50 my-10 rounded-lg border '>
          <div className='p-2 w-full h-[30vh] rounded-lg'>
          <Image src={ProfilePic} alt='Rep-Photo' className='w-full h-full object-cover border rounded-lg'></Image>
          </div>
          <div className='text-center my-3'>
            <h2 className='py-2'>Valencia Nabiswa</h2>
            <h2 className='py-2'>Third Year Representative</h2>
            <h2 className='py-2'>Bsc. Computer Science</h2>
          </div>
        </div><div className='h-auto bg-gray-50 my-10 rounded-lg border '>
          <div className='p-2 w-full h-[30vh] rounded-lg'>
          <Image src={ProfilePic} alt='Rep-Photo' className='w-full h-full object-cover border rounded-lg'></Image>
          </div>
          <div className='text-center my-3'>
            <h2 className='py-2'>Clarence Laria</h2>
            <h2 className='py-2'>Forth Year Representative</h2>
            <h2 className='py-2'>Bsc. Information Technology</h2>
          </div>
        </div>
      </div>
      {/* <div className='mx-20 my-10 text-lg '>
        <h2 className='bg-gray-50 my-5 p-2 rounded-lg'>1st Year Class Representative</h2>
        <h2 className='bg-gray-50 my-5 p-2 rounded-lg'>2nd Year Class Representative</h2>
        <h2 className='bg-gray-50 my-5 p-2 rounded-lg'>3rd Year Class Representative</h2>
        <h2 className='bg-gray-50 my-5 p-2 rounded-lg'>4th Year Class Representative</h2>
      </div> */}
    </div>
  </>  
  )
}
