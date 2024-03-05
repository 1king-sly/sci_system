'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { useState } from 'react';

export default function DeptSideBar() {

    const pathName = usePathname();
    const [visible, SetVisible] = useState(false);

    const toggleVisible = () =>{
        SetVisible(prev => !prev);
    }
    
    const links = [
        {
        name:'Introduction',href:'#Introduction',
    },
        {
        name:'Programs',href:'#Programs',
    },
        {
        name:'Mission and Vision',href:'#Mission',
    },
        {
        name:'Staff',href:'#Staff',
    },
        {
        name:'Student Representatives',href:'#Student-Representatives',
    },
]
  return (
    <div className="col-span-1">
    <div className="px-4 py-8 fixed  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-10 lg:py-10">
    <div className="  h-full ">
    
    {/* <div className='w-[20vw] mt-10 h-full flex flex-col  fixed items-center'> */}
    <div className="text-center  mb-4 items-center justify-center gap-2">

    {links.map((link) => {
                if (link.name === 'Programs') {
          
                    return (
                      <div>
                      <Link
                          className={clsx(`w-full px-2 py-1 rounded-md flex h-auto items-center justify-center text-sm hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 text-gray-800`, {'bg-sky-100 text-blue-600': pathName === link.href,})}
                          key={link.name}
                          href={link.href}
                      >
                          <div className='flex-col'>
                              <div className='flex gap-2'>
                                <h6 className="mb-2 mr-4 text-sm font-bold  tracking-wider uppercase">{link.name}</h6>{/*mr-4*/}
                                <ChevronDownIcon className='mb-2 w-6 max-[425px]:w-4 ml-16' onClick={toggleVisible} ></ChevronDownIcon>
                              </div>
                              <div className={clsx(`text-center`,!visible && 'hidden')}>
                                <h1 className=' mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900' id='C.Science' >Bsc. Computer Science</h1>
                                <h1 className=' mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900' id='ETS' >ETS</h1>
                                <h1 className=' mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900' id='C.Forensics'>Computer Forensics</h1>
                                <h1 className=' mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900' id='C.Forensics'>Msc. Computer Science</h1></div>
                          </div>
                      </Link>
                      </div>
                    );
                  }
        return (
                <Link
                    className={clsx(`w-full rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`, {
                        'bg-sky-100 text-blue-600': pathName === link.href,
                    })}
                    href={link.href}
                >
                    <h6 className="mb-2 mr-4 text-sm font-bold  tracking-wider uppercase">{link.name}</h6>{/*mr-4*/}
                </Link>
        );
    })}
{/* </div> */}
</div>
</div>
</div>
</div>
// </div>

  )
}
