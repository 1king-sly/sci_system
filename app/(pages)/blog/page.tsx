import React from 'react'
import Image from 'next/image'
import Banner from '@/public/pexels-pixabay-33045.jpg'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function page() {
  return (
    <div className='w-full h-full'>
        <div className='md:h-[20vh] w-full border-b-2 mx-auto items-center'>
            <h1 className='md:text-9xl font-bold text-center text-5xl'>THE BLOG</h1>
        </div>
        <div className='lg:flex lg:grid-cols-2 md:mx-10 mx-5 lg:border-b-2'>
            <div className='md:w-full lg:w-2/3 lg:px-10 lg:py-10 md:py-5 py-3 lg:border-r-2 gap-4'>
                <div className='w-full '>
                    <Image src={Banner} alt='Blog-Banner'  className=' rounded-lg'></Image>
                </div>
                <h1>January 11, 2024</h1>
                <h1 className='text-3xl font-serif font-bold'>Latest Blog Title</h1>
                <p className='opacity-95 '>Blog slug
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat nam quasi quia repudiandae exercitationem ducimus quos dolorum accusantium voluptate odit non molestias sunt odio, molestiae iure nostrum vitae itaque! 
                </p>
                <Link href='/blog/'>
                    <h1 className='hover:underline hover:duration-300'>Read More -&gt;</h1>
                </Link>
            </div>
            {/* SideBar */}
            <div className='md:w-full lg:w-1/3 lg:px-10 lg:py-10'>
                <h1 className='text-2xl font-bold font-serif lg:px-2'>Latest Blogs</h1>
                <div className='w-full grid grid-cols-2  mb-5 border-b-2'>
                    <Image src={Banner} alt='blogBanner' height={150} width={200} className='m-2 mb-6 rounded'></Image>
                    <div className='flex flex-col gap-2 m-2'>
                        <h1>January 11, 2024</h1>
                        <h1 className='text-2xl font-serif font-bold'>Blog Title</h1>
                    </div>
                </div>
                <div className='w-full  grid grid-cols-2  my-5 border-b-2'>
                    <Image src={Banner} alt='blogBanner' height={150} width={200} className='m-2 mb-6 rounded'></Image>
                    <div className='flex flex-col gap-2 m-2'>
                        <h1>January 11, 2024</h1>
                        <h1 className='text-2xl font-serif font-bold'>Blog Title</h1>
                    </div>
                </div>
                <div className='w-full  grid grid-cols-2  my-5 border-b-2'>
                    <Image src={Banner} alt='blogBanner' height={150} width={200} className='m-2 mb-6 rounded'></Image>
                    <div className='flex flex-col gap-2 m-2'>
                        <h1>January 11, 2024</h1>
                        <h1 className='text-2xl font-serif font-bold'>Blog Title</h1>
                    </div>
                </div>
                <div className='w-full  grid grid-cols-2  my-5 border-b-2'>
                    <Image src={Banner} alt='blogBanner' height={150} width={200} className='m-2 mb-6 rounded'></Image>
                    <div className='flex flex-col gap-2 m-2'>
                        <h1>January 11, 2024</h1>
                        <h1 className='text-2xl font-serif font-bold'>Blog Title</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className=' lg:mx-20 md:mx-10 mx-5 lg:my-10'>
            <h1 className='text-xl font-serif mb-5 '>Past Blogs</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-full lg:border-r-2 py-5 md:pr-5 '>
                    <div className='w-full '>
                        <Image src={Banner} alt='Blog-Banner'  className=' rounded-lg'></Image>
                    </div>
                    <h1 className='opacity-95 '>January 11, 2024</h1>
                    <h1 className='text-3xl font-serif font-bold'>Blog Title</h1>
                    <p className='opacity-95 '>Blog slug
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat nam quasi quia repudiandae exercitationem ducimus quos dolorum accusantium voluptate odit non molestias sunt odio, molestiae iure nostrum vitae itaque! 
                    </p>
                </div>
                <div className='w-full lg:border-r-2 py-5 md:pr-5 '>
                    <div className='w-full'>
                        <Image src={Banner} alt='Blog-Banner'  className=' rounded-lg'></Image>
                    </div>
                    <h1 className='opacity-95 '>January 11, 2024</h1>
                    <h1 className='text-3xl font-serif font-bold'>Blog Title</h1>
                    <p className='opacity-95 '>Blog slug
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat nam quasi quia repudiandae exercitationem ducimus quos dolorum accusantium voluptate odit non molestias sunt odio, molestiae iure nostrum vitae itaque! 
                    </p>
                </div>
                <div className='w-full lg:border-r-2 py-5 md:pr-5 '>
                    <div className='w-full'>
                        <Image src={Banner} alt='Blog-Banner'  className=' rounded-lg'></Image>
                    </div>
                    <h1 className='opacity-95 '>January 11, 2024</h1>
                    <h1 className='text-3xl font-serif font-bold'>Blog Title</h1>
                    <p className='opacity-95 '>Blog slug
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat nam quasi quia repudiandae exercitationem ducimus quos dolorum accusantium voluptate odit non molestias sunt odio, molestiae iure nostrum vitae itaque! 
                    </p>
                </div>
                <div className='w-full lg:border-r-2 py-5 md:pr-5 '>
                    <div className='w-full '>
                        <Image src={Banner} alt='Blog-Banner'  className=' rounded-lg'></Image>
                    </div>
                    <h1 className='opacity-95 '>January 11, 2024</h1>
                    <h1 className='text-3xl font-serif font-bold'>Blog Title</h1>
                    <p className='opacity-95 '>Blog slug
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat nam quasi quia repudiandae exercitationem ducimus quos dolorum accusantium voluptate odit non molestias sunt odio, molestiae iure nostrum vitae itaque! 
                    </p>
                </div>
        </div>
        </div>
    </div>
  )
}
