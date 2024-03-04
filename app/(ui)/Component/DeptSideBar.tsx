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
        name:'Staff',href:'#Staff',
    },
        {
        name:'Student Representatives',href:'#Student-Representatives',
    },
]
  return (
    <div className='w-[20vw] mt-10 h-full flex flex-col  fixed items-center'>
    {links.map((link) => {
        return (
                <Link
                    className={clsx(`w-4/5 px-2 py-1 rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`, {
                        'bg-sky-100 text-blue-600': pathName === link.href,
                    })}
                    href={link.href}
                >
                    {link.name}
                </Link>
        );
    })}
{/* </div> */}
</div>
  )
}
