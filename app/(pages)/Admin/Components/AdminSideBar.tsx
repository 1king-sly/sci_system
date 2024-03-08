'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { useState } from 'react';

export default function AdminSideBar() {
    const pathName = usePathname();
    
    const links = [
        {
        name:'Analytics',href:'/Admin/Analytics',
    },
        {
        name:'Events',href:'/Admin/EventsDashboard',
    },
        {
        name:'Members',href:'/Admin/Members',
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
                    className={clsx(`cursor-pointer w-full rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`, {})}
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
