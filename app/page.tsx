'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import NavBar1 from "./(ui)/Component/NavBar1";
import NavBar from "./(ui)/Component/NavBar";
import pic from '@/public/students.png'
import pic2 from '@/public/club.jpg'
import pic3 from '@/public/students.png'
import Header from "./(ui)/Component/Header";
import SideBar from "./(ui)/Component/SideBar";
import { usePathname } from "next/navigation";
import Programmes from "./(ui)/Component/Programmes";
import EventsCard from "./(ui)/Component/EventsCard";

export default function Home() {

  const datas = [
    {image:pic,desc:'First picture'
  },
    {image:pic2,desc:'Second picture'
  },
    {image:pic3,desc:'Third picture'
  },
];

  const pathname = usePathname()

  const [currentDataIndex, setCurrentDataIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDataIndex((prevIndex:number) => (prevIndex + 1) % datas.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [datas.length]);
  return (
    <>

 <div className='w-full h-full flex gap-10 flex-col'>

{/* Hero Section */}
<div className='w-full h-[70vh] relative  '>
<Image src={datas[currentDataIndex].image} alt='hero-images' className=' w-full h-full object-cover  ' /> 
<h1 className='w-full h-full flex items-center text-4xl text-purple-900 ps-20 absolute inset-0'>{datas[currentDataIndex].desc}</h1>
<div className='w-full h-full bg-sky-900 opacity-20 absolute inset-0'></div>   

</div>

{/* About section */}
<div className="w-full min-h-[320px] flex max-[420px]:flex-col gap-3 justify-around px-20 mt-4 ">

  <div className="w-1/4 h-full">
  <Image src={pic} alt='hero-images' className=' w-full h-full object-cover ' /> 
  </div>
  <div className="w-2/3 h-full flex items-center ">

    <p>Computer Science is a technical course offered....</p>
 
  </div>

</div>

{/* Cards sections */}

<div className='w-full h-[420px] flex max-[420px]:flex-col px-20 '>

  <div className='w-2/3 h-full'>
    <Programmes/>
  </div>
  <div className='w-1/4 h-full flex ' >
    <EventsCard/>
  </div>


</div>

{/* Footer */}
<div className='w-full  min-h-[320px] bg-gray-400 '>
   
</div>
    </div>
  
    </>
  );
}
