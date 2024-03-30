import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/public/irf.jpeg'

export default function page() {
  return (
    <>
    <div className='my-10 mx-10'>
        <h1 className='text-3xl font-bold my-5 uppercase'>International Research Fund (IRF)</h1>
        <p>                        
            Welcome to the realm of international research funding, where boundaries are transcended and collaboration knows no limits. At the heart of this endeavor lies a robust financial resource designed to support research ventures spanning across international borders. 
            Established by governments, non-governmental organizations (NGOs), international bodies, philanthropic foundations, and private entities, these funds are dedicated to fostering collaborative research endeavors aimed at tackling global challenges head-on. Join us on a journey of discovery as we explore the opportunities and impact of international research funding.
        </p>
        <div className='py-5'>
            <h1 className='text-3xl font-bold uppercase mb-5'>Latest Projects</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the IRF Research project</h1>
                    </Link>
                </div>
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the IRF Research project</h1>
                    </Link>
                </div>                
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the IRF Research project</h1>
                    </Link>
                </div>                
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the IRF Research project</h1>
                    </Link>
                </div>
            </div>
        </div>
        <div className='w-full h-auto my-5 border-2'>
            <div className='p-5'>
                <h1 className='text-3xl font-bold  mb-5'>All IRF Projects</h1>
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
  )
}

