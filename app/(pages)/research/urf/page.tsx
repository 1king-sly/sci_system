import React from 'react'
<<<<<<< HEAD
import CreateResearch from '../Components/CreateResearch'

export default function page() {
  return (
   <>
   <CreateResearch type='URF'/>
   </>
=======
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/public/research.jpg'

export default function page() {
  return (
    <>
    <div className='my-10 mx-10'>
        <h1 className='text-3xl font-bold my-5 uppercase'>University Research Fund (URF)</h1>
        <p>
            Step into the world of university research funding, where innovation and exploration are nurtured. University research funds serve as vital resources that propel cutting-edge research initiatives within academic institutions. 
            These funds are tailored to support the diverse array of research projects conducted by faculty, researchers, and students across various disciplines. From groundbreaking scientific discoveries to insightful social science inquiries and innovative technological advancements, university research funding fuels the pursuit of knowledge and fosters academic excellence. Join us as we delve into the dynamic landscape of university research funding and uncover the transformative impact it has on shaping the future of education and scholarship.                        
        </p>
        <div className='py-5'>
            <h1 className='text-3xl font-bold uppercase mb-5'>Latest Projects</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the URF Research project</h1>
                    </Link>
                </div>
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the URF Research project</h1>
                    </Link>
                </div>                
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the URF Research project</h1>
                    </Link>
                </div>                
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the URF Research project</h1>
                    </Link>
                </div>
            </div>
        </div>
        <div className='w-full h-auto my-5 border-2'>
            <div className='p-5'>
                <h1 className='text-3xl font-bold  mb-5'>All URF Projects</h1>
                <div className='border-2 my-5'>
                    <Link href={''}>
                    <h1 className='hover:text-sky-300 p-2'>Research/ Project Name.
                    A Psychosocial Approach  Towards   Risk and Readiness  Assessment of Vulnerable  Communities in  Responding To  Covid 19 Pandemic  in Kakamega County  (Research and Innovation Projects)
                    </h1>
                    <p className='hover:text-sky-300 px-2'>Read More -&#62;</p>
                    </Link>
                </div>
                <div className='border-2 my-5'>
                    <Link href={''}>
                    <h1 className='hover:text-sky-300 p-2'>Research/ Project Name.
                    A Psychosocial Approach  Towards   Risk and Readiness  Assessment of Vulnerable  Communities in  Responding To  Covid 19 Pandemic  in Kakamega County  (Research and Innovation Projects)
                    </h1>
                    <p className='hover:text-sky-300 px-2'>Read More -&#62;</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
>>>>>>> c29252bd3a44b1d61f16a81e7bf9f3ec292e9caf
  )
}



