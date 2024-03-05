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
