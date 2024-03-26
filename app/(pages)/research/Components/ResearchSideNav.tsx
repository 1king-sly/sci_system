'use client'
import React,{useState} from 'react'
import clsx from 'clsx';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ResearchSideNav() {
    const [visible, setVisible] = useState(false)
    const toggleResearch = () => {
        setVisible((prev) => !prev);
    }
  const links = [
    {
    name:'Research',href:'/department#Whatwedo',id:'Whatwedo',
},
    {
    name:'Collaborations',href:'/department#ResearchArea',id:'ResearchArea',
},
]
  return (
    <>

  <div className="col-span-1 w-full">
    <div className="px-4 py-4 mx-auto max-[1025px]:px-2">
    <div className="h-full fixed">
    <div className="text-center  mb-4 items-center justify-center gap-2">

    {links.map((link) => {
        if(link.name === 'Research'){
            return (
                <div key={link.name}
                    className={clsx(`cursor-pointer w-full px-2 py-1 rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`,)}
                >
                    <div className='flex-col w-full'>
                        <div className='flex gap-10'>
                            <h1 className="mb-2 mr-4 text-sm font-bold  tracking-wider" key={link.name} >{link.name}</h1>
                            <ChevronDownIcon className='w-6 h-6' onClick={toggleResearch}/>
                        </div>
                        <div className={clsx(`text-center w-full`, !visible && 'hidden')}>
                            <Link href='/research/urf'><h1 className='mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900'>URF</h1></Link>
                            <Link href='/research/nrf'><h1 className='mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900'>NRF</h1></Link>
                            <Link href='/research/irf'><h1 className='mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900'>IRF</h1></Link>
                        </div>
                    </div>
                </div>
            );
        }
        return (
                <div key={link.name}
                    className={clsx(`cursor-pointer w-full rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`,)}
                >
                    <Link href='/research/collaborations'><h1 className="mb-2 mr-4 text-sm font-bold  tracking-wider" key={link.name} >{link.name}</h1></Link>
                </div>
        );
    })}
</div>
</div>
</div>
</div>
    </>
    )
}
