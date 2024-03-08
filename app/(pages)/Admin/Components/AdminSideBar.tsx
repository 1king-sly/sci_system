'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { useState } from 'react';

export default function AdminSideBar() {
    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior:'smooth'})
        }
    }

    const pathName = usePathname();
    const [visible, SetVisible] = useState(false);

    const toggleVisible = () =>{
        SetVisible(prev => !prev);
    }
    
    const links = [
        {
        name:'Analytics',href:'/Analytics',
    },
        {
        name:'Events',href:'/events',
    },
        {
        name:'Members',href:'/members',
    },
]
  return (
    <div className="col-span-1 max-[768px]:hidden">
    <div className="px-4 py-8 fixed md:px-8 lg:px-10 lg:py-10">
    <div className="  h-full ">
    
    <div className="text-center  mb-4 items-center justify-center gap-2">

    {links.map((link) => {
        return (
                <div
                    className={clsx(`cursor-pointer w-full rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`, {
                        'bg-sky-100 text-blue-600': pathName === link.href,
                    })}
                    key={link.name}
                >
                    <Link href={link.href} className="mb-2 mr-4 text-sm font-bold  tracking-wider uppercase" key={link.name}>{link.name}</Link>
                </div>
        );
    })}
</div>
</div>
</div>
</div>
  )
}
