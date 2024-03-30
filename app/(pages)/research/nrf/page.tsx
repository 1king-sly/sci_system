'use client'
import React, { useState, useEffect } from 'react';
import CreateResearch from '../Components/CreateResearch'
import Search from '@/app/(pages)/Component/Search'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/public/research.jpg'
import clsx from 'clsx'
import { fetchResearchs } from '@/app/lib/actions';
import { Status,ResearchType } from '@prisma/client';



export default function Page({searchParams}:{searchParams:string}) {
  const params = new URLSearchParams(searchParams);
  const q = params.get('query') || '';
  const [visible,setVisible] = useState(false)
  const [researchs,setResearchs]= useState<{
    id: number;
    title:string,
    slug:string
  }[]>([]); 

  const toggleVisible = () => {
    setVisible((prevVisible) => !prevVisible);
  }

  const fetchResearch = async ()=>{
    const data = await fetchResearchs('URF',q)

    if(data && data.length > 0){
      setResearchs(data)

    }
  }

  useEffect(() => {
    fetchResearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>

    <div className={clsx(`w-full h-full`,{'hidden':!visible})} >

      <CreateResearch type='NRF'/>

    </div>
    <div className={clsx(`my-10 mx-10`,{'hidden':visible})}>
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
            Part VII of the ST&I Act, 2013, stipulates that the Fund will constitute a sum of money amounting to 2% of the country&lsquo;s Gross Domestic Product every year and such other monies designated for the Fund by Parliament, donations, endowment or grants or gifts designated for the Fund.<button className='p-2 rounded-full text-white bg-sky-300 m-2' onClick={toggleVisible}>Propose Research</button> 
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
            <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-2xl leading-tight">
                Projects
            </h2>
            <div className="text-end">
                <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                    
                        <Search/>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="button" onClick={()=>fetchResearch()}>
                            Filter
                        </button>
                    </form>
                </div>
            </div>
           {researchs !== null ? (
             researchs.map((research) => (
            <div className='border-2 my-5' key={research.id}>
            <Link href={`/${research.slug}`} >
            <h1 className='hover:text-sky-300 p-2'>{research.title}
            </h1>
            <p className='hover:text-sky-300 px-2'>Read More -&#62;</p>
            </Link>
                </div>
            ))
        ) : (
          <p>Loading research projects...</p>
                   
        )}

            </div>
        </div>
    </div>
    </>
  )
}

