'use client'
import Link from 'next/link';
import React from 'react'

export default function Sidenav() {


  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const links =[
    {
    name:'Upcoming Events',href:'/events/#upcoming',id:'upcoming'
  },
    {
    name:'General Announcements',href:'/events/#general',id:'general'
  },
    {
    name:'GDSC Events',href:'/events/#gdsc',id:'gdsc'
  },
    {
    name:'Health IT Events',href:'/events/#healthIT',id:'healthIT'
  },
    {
    name:'ACS Events',href:'/events/#acs',id:'acs'
  },
  
]
  return (
    <div className="col-span-1">
    <div className="px-4 py-8  fixed sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-10 lg:py-10">
    <div className="  h-full ">

<div className="text-center  mb-4 items-center justify-center gap-2">

        {links.map((link)=>{

          return (
            <Link
            className='cursor-pointer w-full rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2'
            key={link.name} onClick={() => scrollToSection(link.id)}
            href={link.href}
        >

            <h1 key={link.name} className='mb-2 mr-4 text-sm font-bold  tracking-wider uppercase' onClick={() => scrollToSection(link.id)}>{link.name}</h1>
            </Link>
          )

        })}
      </div>
    
    
    </div>
    </div>
    </div>
  )
}
