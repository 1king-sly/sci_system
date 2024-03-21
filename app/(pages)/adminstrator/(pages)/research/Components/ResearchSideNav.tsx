import React from 'react'
import clsx from 'clsx';
import Link from 'next/link';

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
    <div className="px-4 py-4 mx-auto max-[1025px]:px-2">
    <div className="  h-full fixed">
    <div className="text-center  mb-4 items-center justify-center gap-2">

    {links.map((link) => {
        return (
                <div key={link.name}
                    className={clsx(`cursor-pointer w-full rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`,)}
                >
                    <Link href={link.href} className="mb-2 mr-4 text-sm font-bold  tracking-wider">{link.name}</Link>
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
