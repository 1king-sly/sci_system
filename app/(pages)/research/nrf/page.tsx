'use client'
import React, { useState, useEffect } from 'react';
import CreateResearch from '../Components/CreateResearch'
import Search from '@/app/(pages)/Component/Search'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/public/research.jpg'
import clsx from 'clsx'
import { fetchResearchs } from '@/app/lib/actions';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';



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
        <h1 className='text-3xl font-bold my-5 uppercase'>National Research Fund (NRF)</h1>        <p className='my-3'>
            The National Research Fund (NRF) is a State Corporation established under the Science Technology and Innovation (ST&I) Act No. 28, Section 32 of 2013. The Fund is mandated to facilitate research to advance Science, Technology and Innovation.
            Part VII of the ST&I Act, 2013, stipulates that the Fund will constitute a sum of money amounting to 2% of the country&lsquo;s Gross Domestic Product every year and such other monies designated for the Fund by Parliament, donations, endowment or grants or gifts designated for the Fund.<button className='p-2 rounded-full text-white bg-sky-300 m-2' onClick={toggleVisible}>Propose Research</button> 
        </p>
        <div className='py-5'>
                     <h1 className='text-3xl font-bold uppercase mb-5'>Researches Won</h1>
                     <div className='w-full my-5'>
                     <div className='bg-gray-900 text-white w-full h-10 relative'>
                         <h1 className='my-3 absolute text-xl px-5'>2023-2024</h1>
                         <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
                         <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
                     </div>
                     <div className={clsx(`flex-col mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
                         <Link href={''} className='my-1'><h1>September</h1></Link>
                         <Link href={''} className='my-1'><h1>June</h1></Link>
                         <Link href={''} className='my-1'><h1>May</h1></Link>
                         <Link href={''} className='my-1'><h1>January</h1></Link>
                     </div>
                     </div>
                     <div className='w-full my-5'>
                     <div className='bg-gray-900 text-white w-full h-10 relative'>
                         <h1 className='my-3 absolute text-xl px-5'>2022-2023</h1>
                         <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
                         <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
                     </div>
                     <div className={clsx(`mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
                         <Link href={''} className='my-1'><h1>September</h1></Link>
                         <Link href={''} className='my-1'><h1>June</h1></Link>
                         <Link href={''} className='my-1'><h1>May</h1></Link>
                         <Link href={''} className='my-1'><h1>January</h1></Link>
                     </div>
                     </div>
                     <div className='w-full my-5'>
                     <div className='bg-gray-900 text-white w-full h-10 relative'>
                         <h1 className='my-3 absolute text-xl px-5'>2021-2022</h1>
                         <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
                         <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
                     </div>
                     <div className={clsx(`mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
                         <Link href={''} className='my-1'><h1>September</h1></Link>
                         <Link href={''} className='my-1'><h1>June</h1></Link>
                         <Link href={''} className='my-1'><h1>May</h1></Link>
                         <Link href={''} className='my-1'><h1>January</h1></Link>
                     </div>
                     </div>
                     <div className='w-full my-5'>
                     <div className='bg-gray-900 text-white w-full h-10 relative'>
                         <h1 className='my-3 absolute text-xl px-5'>2020-2021</h1>
                         <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
                         <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
                     </div>
                     <div className={clsx(`mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
                         <Link href={''} className='my-1'><h1>January</h1></Link>
                        <Link href={''} className='my-1'><h1>September</h1></Link>
                         <Link href={''} className='my-1'><h1>June</h1></Link>
                         <Link href={''} className='my-1'><h1>May</h1></Link>
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
    </div>
    </>
  )
}

