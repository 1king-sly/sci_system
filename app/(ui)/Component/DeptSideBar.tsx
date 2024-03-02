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
    <div className='w-full h-full mx-5 my-3'>
          {/* <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-20"> */}
    {links.map((link, index) => {
        // const LinkIcon = link.icon;
        if (link.name === 'Programs'){
            return (
                <div>
                    <Link
                    className={clsx(`w-full px-2 py-1 rounded-md flex h-auto items-center justify-center text-sm hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 text-gray-800`, {'bg-sky-100 text-blue-600': pathName === link.href,})}
                    key={link.name}
                    href={link.href}
                    >
                    <div className='flex-col'>
                        <div className='flex gap-6'>
                            <h1 className='mb-2 mr-4 text-lg leading-5 tracking-wider uppercase' >{link.name}</h1>
                            <ChevronDownIcon className='mb-2 mr-4 w-6 max-[425px]:w-4' onClick={toggleVisible} ></ChevronDownIcon>
                        </div>
                        <div className={clsx(``,!visible && 'hidden')}>
                        <h1 className='text-sm my-2 mx-2 mb-2' id='C.Science' >* C.Science</h1>
                        <h1 className='text-sm my-2 mx-2 mb-2' id='ETS' >* ETS</h1>
                        <h1 className='text-sm my-2 mx-2 mb-2' id='C.Forensics'>* C.Forensics</h1></div>
                    </div>
                </Link>
                <div className='w-full border-b border-solid border-gray-400'></div>
            </div>
            )
        }
        return (
            <React.Fragment key={link.name}>
                <Link
                    className={clsx(`w-full px-2 py-1 rounded-md flex h-full items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`, {
                        'bg-sky-100 text-blue-600': pathName === link.href,
                    })}
                    href={link.href}
                >
                    <p className='mb-2 mr-4 text-lg leading-5 tracking-wider uppercase'>{link.name}</p>
                </Link>
                
                {index !== links.length - 0 && 
                <div className='w-full border-b border-solid border-gray-400'></div>
                }
            </React.Fragment>
        );
    })}
{/* </div> */}
</div>
  )
}
