import Link from 'next/link'
import React from 'react'
import Image, { StaticImageData } from "next/image";


export default function ProgramCard({name,desc,link,image}:{name:string,desc:string,link:string,image:StaticImageData}) {
  return (

    <Link href={link}>
         <div className='w-[200px] h-[200px] flex flex-col items-center justify-center relative bg-purple-500 '>
        
         <h1 className='absolute w-full h-full flex items-center text-xl  ps-20 z-30'>{name}
         </h1>
            
            <Image src={image} alt='Card image' className='w-full h-full absolute object-cover'/>
            <p className='hidden hover:block'>{desc}</p>
            <div className='w-full h-full bg-purple-500 opacity-25  absolute z-25'></div>


        </div>
    </Link>
   
  )
}
