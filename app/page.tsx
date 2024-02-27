'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import NavBar from "./(ui)/Component/NavBar";
import pic from '@/public/students.png'
import pic2 from '@/public/bg.jpg'
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
    <div className="w-screen h-[23vh] flex flex-col   ">
    <NavBar/>
    </div>
    <Header/>

    {/* Hero Section */}
    <div className='w-screen h-screen relative'>
    <Image src={datas[currentDataIndex].image} alt='hero-images' className=' w-full h-full object-cover absolute ' /> 
    <h1 className='absolute w-full h-full flex items-center text-4xl text-purple-900 ps-20'>{datas[currentDataIndex].desc}</h1>
    <div className='w-full h-full absolute inset-0 bg-purple-500 opacity-20'></div>   

    </div>

{/* About section */}
    <div className="w-screen h-[320px] flex max-[420px]:flex-col gap-3 justify-around px-20 mt-4 ">

      <div className="w-1/4 h-full">
      <Image src={pic} alt='hero-images' className=' w-full h-full object-cover ' /> 
      </div>
      <div className="w-2/3 h-full flex items-center ">

        <p>Computer Science is a technical course offered....</p>
     
      </div>

    </div>

    {/* Cards sections */}

    <div className='w-screen h-[420px] flex max-[420px]:flex-col px-20 '>

      <div className='w-2/3 h-full'>
        <Programmes/>
      </div>
      <div className='w-1/4 h-full flex ' >
        <EventsCard/>
      </div>


    </div>

    {/* Footer */}
    <div className='w-screen h-[320px] bg-gray-900'>

    </div>
    </>
  );
}
