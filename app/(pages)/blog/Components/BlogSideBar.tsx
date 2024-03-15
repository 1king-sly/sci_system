import React from 'react'
import Image from 'next/image'
import Banner from '@/public/pexels-pixabay-33045.jpg'

export default function BlogSideBar() {
  return (
    <div>
        <h1 className='text-2xl font-bold font-serif px-2'>Latest Blogs</h1>
        <div className='w-full py-5'>
            <div className='w-full  grid grid-cols-2 gap-4 mb-5 border-b-2'>
                <Image src={Banner} alt='blogBanner' height={150} width={200} className='m-2 mb-6 rounded'></Image>
                <div className='flex flex-col gap-2 m-2'>
                    <h1>January 11, 2024</h1>
                    <h1 className='md:text-2xl sm:text-base font-serif font-bold'>Blog Title</h1>
                </div>
            </div>
            <div className='w-full  grid grid-cols-2 gap-4 my-5 border-b-2'>
                <Image src={Banner} alt='blogBanner' height={150} width={200} className='m-2 mb-6 rounded'></Image>
                <div className='flex flex-col gap-2 m-2'>
                    <h1>January 11, 2024</h1>
                    <h1 className='md:text-2xl sm:text-base font-serif font-bold'>Blog Title</h1>
                </div>
            </div>
            <div className='w-full  grid grid-cols-2 gap-4 my-5 border-b-2'>
                <Image src={Banner} alt='blogBanner' height={150} width={200} className='m-2 mb-6 rounded'></Image>
                <div className='flex flex-col gap-2 m-2'>
                    <h1>January 11, 2024</h1>
                    <h1 className='md:text-2xl sm:text-base font-serif font-bold'>Blog Title</h1>
                </div>
            </div>
            <div className='w-full  grid grid-cols-2 gap-4 my-5 border-b-2'>
                <Image src={Banner} alt='blogBanner' height={150} width={200} className='m-2 mb-6 rounded'></Image>
                <div className='flex flex-col gap-2 m-2'>
                    <h1>January 11, 2024</h1>
                    <h1 className='md:text-2xl sm:text-base font-serif font-bold'>Blog Title</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
