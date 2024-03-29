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
    <div className="px-4 py-4 mx-auto">
    <div className="  h-full fixed">
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
