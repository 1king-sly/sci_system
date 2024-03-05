'use client'
import React from 'react'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Sidenav() {
  const pathName = usePathname();

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const links =[
    {
      name:'CLUBS INFO',href:'/club/#clubsInfo',id:'clubsInfo'
    },
    {
    name:'GDSC CLUB',href:'/club/#GDSCclub',id:'GDSCclub'
  },
    {
    name:'Health IT',href:'/club/#HealthIt',id:'HealthIt'
  },
    {
    name:'ACS CLUB',href:'/club/#ACSclub',id:'ACSclub'
  },
    {
    name:'IOT CLUB',href:'/events/#IOTClub',id:'IOTclub'
  },
  
]
  return (
    <div className="col-span-1">
    <div className="px-4 py-8   sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-10 lg:py-10">
    {/* <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-20"> */}
    <div className="  h-full ">
    {/* <div className='w-[20vw] mt-10 h-full flex  fixed justify-center'>
      <div className='w-4/5 h-full flex flex-col gap-3 '> */}
    <div className="text-center  mb-4 items-center justify-center gap-2">

        {links.map((link)=>{

          return (
            <div
            className={clsx(`cursor-pointer w-full rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`, {
                'bg-sky-100 text-blue-600': pathName === link.href,
            })}
            key={link.name} onClick={() => scrollToSection(link.id)}
        >

            <a key={link.name} className='mb-2 mr-4 text-sm font-bold  tracking-wider uppercase' onClick={() => scrollToSection(link.id)}>{link.name}</a>
            </div>

          )

        })}
      </div>
    
      </div>
      </div>  
    </div>
  )
}
