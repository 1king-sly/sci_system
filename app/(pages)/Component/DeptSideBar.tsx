'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { useState } from 'react';

export default function DeptSideBar() {
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
        name:'Introduction',href:'/department#Introduction',id:'Introduction',
    },
        {
        name:'Programs',href:'/department#Programs',id:'Programs',
    },
        {
        name:'Mission and Vision',href:'/department#Mission',id:'Mission',
    },
        {
        name:'Staff',href:'/department#Staff',id:'Staff',
    },
        {
        name:'Student Representatives',href:'/department#Student-Representatives',id:'Student-Representatives',
    },
]
  return (
    <div className="col-span-1 max-[768px]:hidden">
    <div className="px-4 py-4 mx-auto ">
    <div className="  h-full fixed">
    
    <div className="text-center  mb-4 items-center justify-center gap-2">

    {links.map((link) => {
                if (link.name === 'Programs') {
          
                    return (
                      <div>
                      <div
                          className={clsx(`cursor-pointer w-full px-2 py-1 rounded-md flex h-auto items-center justify-center text-sm hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 gap-2 text-gray-800`, {'bg-sky-100 text-blue-600': pathName === link.href,})}
                          key={link.name}
                      >
                          <div className='flex-col'>
                              <div className='flex gap-2' onClick={() => scrollToSection(link.id)}>
                              <Link href={link.href} className="mb-2 mr-4 text-sm font-bold  tracking-wider uppercase" key={link.name} onClick={() => scrollToSection(link.id)}>{link.name}</Link>
                                <ChevronDownIcon className='mb-2 w-6 max-[425px]:w-4 ml-16' onClick={toggleVisible} ></ChevronDownIcon>
                              </div>
                              <div className={clsx(`text-center`,!visible && 'hidden')}>
                                <h1 className=' mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900' id='C.Science' >Bsc. Computer Science</h1>
                                <h1 className=' mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900' id='ETS' >ETS</h1>
                                <h1 className=' mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900' id='C.Forensics'>Computer Forensics</h1>
                                <h1 className=' mb-3 mr-4 border-2 p-2 rounded-lg hover:bg-gray-900' id='C.Forensics'>Msc. Computer Science</h1></div>
                          </div>
                      </div>
                      </div>
                    );
                  }
        return (
                <div
                    className={clsx(`cursor-pointer w-full rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`, {
                        'bg-sky-100 text-blue-600': pathName === link.href,
                    })}
                    key={link.name} onClick={() => scrollToSection(link.id)}
                >
                    <Link href={link.href} className="mb-2 mr-4 text-sm font-bold  tracking-wider uppercase" key={link.name} onClick={() => scrollToSection(link.id)}>{link.name}</Link>
                </div>
        );
    })}
</div>
</div>
</div>
</div>
  )
}
