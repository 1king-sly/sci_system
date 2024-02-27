import React from 'react';
import Image from 'next/image';
import header from '@/public/bg.jpg';

export default function Header() {
  return (
    <div className='relative w-full h-[25vh]'>
      <Image src={header} alt='Header background' className='w-full h-full object-cover' />
      <div className='absolute inset-0 flex items-center  w-3/5 justify-around text-5xl font-bold text-sky-400'>
        <h1>COMPUTER SCIENCE</h1>
      </div>
    </div>
  );
}
