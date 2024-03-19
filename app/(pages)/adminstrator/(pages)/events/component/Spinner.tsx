import React from 'react'
import loader from '@/public/loading.gif'
import Image from 'next/image';

export default function Spinner() {
  return (
<div className='flex w-full h-full items-center justify-center text-lg '>
      <Image src={loader} className='w-12 h-12'  alt='Loading...'/>

    </div>  )
}
