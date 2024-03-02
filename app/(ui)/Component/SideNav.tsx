'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import clsx from 'clsx';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function SideNav() {
    const pathName = usePathname();
    const links = [
        {name: 'Introduction', href:'/Introduction'},
        {name: 'Courses', href:'#', icon: ChevronDownIcon},
        // {name: 'Student', href:'/Student'},
        {name: 'Staff', href:'/Staff'},
    ];

    const [visible, SetVisible] = useState(false);

    const toggleVisible = () => {
        SetVisible((prev) => !prev);
    }
  return (
    <div className='w-full mx-4 flex flex-col py-4 gap-3'>{/*hidden md:block*/}
        {links.map((link ) => {
        const LinkIcon = link.icon;

        
        if (link.name === 'Courses') {
          
          return (
            <div>
            <Link
                className={clsx(`w-full px-2 py-1 rounded-md flex h-auto items-center justify-center text-sm hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 text-gray-800`, {'bg-sky-100 text-blue-600': pathName === link.href,})}
                key={link.name}
                href={link.href}
            >
                <div className='flex-col'>
                    <div className='flex gap-2'>
                    <h1 className='text-sm' >{link.name}</h1>
                {/* <LinkIcon className='w-6 max-[425px]:w-4'></LinkIcon> */}
                    <ChevronDownIcon className='w-6 max-[425px]:w-4' onClick={toggleVisible} ></ChevronDownIcon>
                    </div>
                    <div className={clsx(``,!visible && 'hidden')}>
                    <h1 className='text-sm my-2 mx-2 ' id='C.Science' >* C.Science</h1>
                    <h1 className='text-sm my-2 mx-2' id='ETS' >* ETS</h1>
                    <h1 className='text-sm my-2 mx-2' id='C.Forensics'>* C.Forensics</h1></div>
                </div>
            </Link>
            </div>
          );
        }

        
        return (
            <div>
                <Link
                    className={clsx(`w-full px-2 py-1 rounded-md flex h-12 items-center justify-center text-sm hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 text-gray-800`, {'bg-sky-100 text-blue-600': pathName === link.href,})}
                    key={link.name}
                    href={link.href}
                >
                    <h1 className='text-sm'>{link.name}</h1>
                </Link>
            </div>
        );
      })}
    </div>
  )
}
