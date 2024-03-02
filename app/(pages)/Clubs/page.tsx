import Image from 'next/image'
import React from 'react'
import Club from '@/public/club.jpg'
import ClubsCard from '@/app/(ui)/Component/ClubsCard'

export default function page() {
  return (
    <div className=' my-4 overflow-hidden'>
        <div className='w-screen relative h-[40vh]  text-center font-serif'>
            <Image src={Club} alt='Club' className='object-cover h-full w-full absolute'></Image>
            <div className='my-10 items-center justify-center absolute  w-full h-full text-white '>
              <h1 className='text-xl font'>COMPARE, CHOOSE, ENJOY</h1>
              <h1 className='text-6xl font-bold'>Our top SCI <br />clubs</h1>
            </div>
            <div className='absolute bottom-0 items-center justify-center'>
        <ClubsCard></ClubsCard>
        </div>
        </div>

    </div>
  )
}
