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
    const data = await fetchResearchs('IRF',q)

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

<CreateResearch type='IRF'/>

</div>
<div className={clsx(`my-10 mx-10`,{'hidden':visible})}>
        <h1 className='text-3xl font-bold my-5 uppercase'>International Research Fund (IRF)</h1>
        <p>                        
            Welcome to the realm of international research funding, where boundaries are transcended and collaboration knows no limits. At the heart of this endeavor lies a robust financial resource designed to support research ventures spanning across international borders. 
            Established by governments, non-governmental organizations (NGOs), international bodies, philanthropic foundations, and private entities, these funds are dedicated to fostering collaborative research endeavors aimed at tackling global challenges head-on. Join us on a journey of discovery as we explore the opportunities and impact of international research funding. <button className='p-2 rounded-full text-white bg-sky-300 m-2' onClick={toggleVisible}>Propose Research</button>             
        </p>
        
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

