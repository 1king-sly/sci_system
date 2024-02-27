'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function SideBar() {

    const pathName = usePathname();


    const links = [
        {
        name:'Computer Science',href:'/cse',icon:ChevronDownIcon
    },
        {
        name:'Students',href:'/students',icon:ChevronDownIcon
    },
        {
        name:'Course Description',href:'/desc',icon:ChevronDownIcon
    },
        {
        name:'Research',href:'/research',icon:ChevronDownIcon
    },
        {
        name:'Faculty and Staff',href:'/staff',icon:ChevronDownIcon
    },
        {
        name:'News',href:'/news',icon:ChevronDownIcon
    },
        {
        name:'Dev Communities',href:'/communities',icon:ChevronDownIcon
    },
        {
        name:'Computer Science',href:'/cse',icon:ChevronDownIcon
    },
]
  return (
    <div className='w-full h-full'>
    <div className='w-full h-8 bg-sky-400 mb-5'></div>
    {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
            <React.Fragment key={link.name}>
                <Link
                    className={clsx(`w-full px-2 py-1 flex h-full items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`, {
                        'bg-sky-100 text-blue-600': pathName === link.href,
                    })}
                    href={link.href}
                >
                    <p className='text-xs'>{link.name}</p>
                    <LinkIcon className='w-6 max-[425px]:w-4'></LinkIcon>
                </Link>
                
                {index !== links.length - 1 && 
                <div className='w-full border-b border-solid border-gray-400'></div>
                }
            </React.Fragment>
        );
    })}
</div>
  )
}
