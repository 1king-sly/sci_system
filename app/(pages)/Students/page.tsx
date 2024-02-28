import Image from 'next/image'
import React from 'react'
import RepsCard from '@/app/(ui)/Component/SciRepsCard'
import ClassRepsCard from '@/app/(ui)/Component/ClassRepsCard'

export default function page() {
  return (
    <div className='w-full overflow-hidden bg-gray-200'>
        <div className=' mx-20 mt-10 max-[425px]:mx-6'>
          <h1 className='text-4xl font-serif font-bold max-[425px]:text-2xl'>Students Page</h1>
        </div>
        <RepsCard></RepsCard>
        <ClassRepsCard></ClassRepsCard>
    </div>
  )
}
