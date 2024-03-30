import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/public/NRF2.png'

export default function page() {
  return (
    <>
    <div className='my-10 mx-10'>
        <h1 className='text-3xl font-bold my-5 uppercase'>National Research Fund (NRF)</h1>
        <p>
            Enter the realm of national research funding, where vision meets action and discoveries unfold. National research funds play a pivotal role in driving forward the frontiers of knowledge and innovation within a country&lsquo;s borders. 
            Established by governments, these funds provide crucial support for research endeavors that address national priorities, societal challenges, and economic competitiveness. From advancing scientific breakthroughs to informing public policy and fostering economic growth, national research funding serves as a catalyst for progress and prosperity. 
            Join us as we embark on a journey to explore the myriad opportunities and benefits that national research funding brings to individuals, institutions, and society as a whole.
            Enter the realm of national research funding, where vision meets action and discoveries unfold. National research funds play a pivotal role in driving forward the frontiers of knowledge and innovation within a country&lsquo;s borders. 
            Established by governments, these funds provide crucial support for research endeavors that address national priorities, societal challenges, and economic competitiveness. From advancing scientific breakthroughs to informing public policy and fostering economic growth, national research funding serves as a catalyst for progress and prosperity. 
            Join us as we embark on a journey to explore the myriad opportunities and benefits that national research funding brings to individuals, institutions, and society as a whole.
        </p>
        <p className='my-3'>
            The National Research Fund (NRF) is a State Corporation established under the Science Technology and Innovation (ST&I) Act No. 28, Section 32 of 2013. The Fund is mandated to facilitate research to advance Science, Technology and Innovation.
            Part VII of the ST&I Act, 2013, stipulates that the Fund will constitute a sum of money amounting to 2% of the country&lsquo;s Gross Domestic Product every year and such other monies designated for the Fund by Parliament, donations, endowment or grants or gifts designated for the Fund.
        </p>
        <div className='py-5'>
            <h1 className='text-3xl font-bold uppercase mb-5'>Latest Projects</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the NRF Research project</h1>
                    </Link>
                </div>
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the NRF Research project</h1>
                    </Link>
                </div>                
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the NRF Research project</h1>
                    </Link>
                </div>                
                <div className='w-full h-full lg:border-2 rounded-lg py-5  bg-white'>
                    <div className='w-full px-3'>
                        <Image src={Banner} alt='Blog-Banner' className='w-full h-full object-cover ' width={1400} height={1400} />
                    </div>
                    <Link href={'/research/urf/id'}>
                        <h1 className=' px-3 text-xl text-center font-semibold hover:font-bold'>Name of the the NRF Research project</h1>
                    </Link>
                </div>
            </div>
        </div>
        <div className='w-full h-auto my-5 border-2'>
            <div className='p-5'>
                <h1 className='text-3xl font-bold  mb-5'>All NRF Projects</h1>
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

