import React from 'react'
import clsx from 'clsx';

export default function ResearchSideNav() {
  const links = [
    {
    name:'What we do',href:'/department#Whatwedo',id:'Whatwedo',
},
    {
    name:'Research Areas',href:'/department#ResearchArea',id:'ResearchArea',
},
    {
    name:'Interdisciplinary Programmes',href:'/department#Interdisplinary',id:'Interdisplinary',
},
    {
    name:'Find Funding',href:'/department#Funding',id:'Funding',
},
    {
    name:'Getting Started with Proposals',href:'/department#Proposals',id:'Proposals',
},
{
  name:'Featured Projects',href:'/department#Projects',id:'Projects',
},
]
  return (
    <>

  <div className="col-span-1">
    <div className="px-2 py-8 fixed  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:px-3 lg:py-10">
    <div className="  h-full ">
    <div className="text-center  mb-4 items-center justify-center gap-2">

    {links.map((link) => {
        return (
                <div
                    className={clsx(`cursor-pointer w-full rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`,)}
                >
                    <a className="mb-2 mr-4 text-sm font-bold  tracking-wider uppercase" key={link.name} >{link.name}</a>
                </div>
        );
    })}
</div>
</div>
</div>
</div>
    </>
    )
}
