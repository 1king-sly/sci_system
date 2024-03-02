'use client'
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
    name:'HealthIT Events',href:'/events/#healthIT',id:'healthIT'
  },
    {
    name:'ACS Events',href:'/events/#acs',id:'acs'
  },
  
]
  return (
    <div className='w-[20vw] mt-10 h-full flex  fixed justify-center'>

      <div className='w-4/5 h-full flex flex-col gap-3 '>

        {links.map((link)=>{

          return (

            <a key={link.name} className='cursor-pointer' onClick={() => scrollToSection(link.id)}>{link.name}</a>

          )

        })}
      </div>
    
    
    </div>
  )
}
