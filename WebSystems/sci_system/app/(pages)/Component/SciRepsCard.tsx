import React from 'react'
import Image from 'next/image'
import FRep from '@/public/IMG_20230708_191918_585.jpg'
import MRep from '@/public/Profile.jpg'

export default function RepsCard() {
  return (
    <>
        <div className='flex w-full h-[50vh] justify-evenly gap-6 m-20'>
            <div className=' rounded-lg border w-full'>
            <Image src={MRep} alt='Male Rep' height={300} width={400} className='w-full h-full object-cover border rounded-lg'></Image>
            </div>
            <p className='mr-40 w-full my-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quis dicta vitae reprehenderit fugit. Illo omnis, odit enim debitis excepturi sunt assumenda praesentium quisquam! Ipsam quidem asperiores error beatae totam.</p>
        </div>
        <div className='flex w-full h-[50vh] justify-evenly gap-6 m-20'>
            <p className=' w-full my-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quis dicta vitae reprehenderit fugit. Illo omnis, odit enim debitis excepturi sunt assumenda praesentium quisquam! Ipsam quidem asperiores error beatae totam.</p>
            <div className=' rounded-lg border w-full mr-40'>
                <Image src={FRep} alt='Female rep' height={300} width={400} className='w-full h-full object-cover border rounded-lg'></Image>
            </div>
        </div> 
    </>
     )
}
