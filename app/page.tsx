'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import NavBar1 from "./(ui)/Component/NavBar1";
import NavBar from "./(ui)/Component/NavBar";
import pic from '@/public/students.png'
import pic2 from '@/public/club.jpg'
import pic3 from '@/public/students.png'
import profile from '@/public/dr.ondulo.jpg'
import Header from "./(ui)/Component/Header";
import SideBar from "./(ui)/Component/SideBar";
import { usePathname } from "next/navigation";
import Programmes from "./(ui)/Component/Programmes";
import EventsCard from "./(ui)/Component/EventsCard";
import Dean from '@/public/dotanga.jpg'
import Cards from './(ui)/Component/Cards';
import UpcomingEvents from './(ui)/Component/UpcomingEvents';
import DeptMission from './(ui)/Component/DeptMission';
import DeanSection from './(ui)/Component/DeanSection';

export default function Home() {

  const datas = [
    {image:pic,title:'First picture',desc:'This is the descripion of the image page'
  },
    {image:pic2,title:'Second picture',desc:'This is the descripion of the image page'
  },
    {image:pic3,title:'Third picture',desc:'This is the descripion of the image page'
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
<div className='w-full h-[60vh] relative  '>
<Image src={datas[currentDataIndex].image} alt='hero-images' className=' w-full h-full object-cover  ' /> 
<h1 className='w-full h-full flex items-center text-4xl text-white ps-20 absolute inset-0 z-50'>{datas[currentDataIndex].title}</h1>
<p className='w-1/3 h-full mt-8 flex items-center text-md text-gray-300 ps-20 absolute inset-0 z-50'>{datas[currentDataIndex].desc}</p>
<div className='w-full h-full bg-gray-900 opacity-75 absolute inset-0'></div>   

  {/* Dean/About section */}
            <DeanSection></DeanSection>

{/* About section */}
<div className="w-full min-h-[440px] flex max-[420px]:flex-col gap-3 justify-around px-20 mt-4 ">

  <div className="w-1/4 h-full">
  <Image src={profile} alt='about-image' className=' w-full h-4/5 object-cover ' /> 
  </div>
  <div className="w-2/3 h-full flex items-start flex-col mt-10 ">
    <h1 className='text-4xl font-semibold'> SCHOOL OF COMPUTING AND INFORMATICS</h1>
    <p>The School of Computing and Informatics of Masinde Muliro Universityy of Science and Technology is one of the promising Schools in the University. The School was was approved and officially formed on January, 2017 after splitting from the former Faculty of Science. We offer in-depth content in Computer Science and Information Technology that spans a wide range, from theoretical and algorithmic foundations to cutting-edge developments in ICT for Development, green technologies, security, dynamic databases and other exciting areas. We are equal to task and dedicated to producing quality products that can take on challenging programming jobs</p>
 
  </div>

</div>
{/* Mission and Vision section */}
<div className="w-full min-h-[440px] flex max-[420px]:flex-col gap-3 justify-around px-20 mt-4 ">

  <div className="w-1/2 h-full flex items-start flex-col mt-10 ">
    <h1 className='text-4xl font-semibold'>MISSION AND VISION</h1>
    <div className='px-10'>
    <div>
      <h1 className='text-lg font-semibold'>Mission</h1>
      <p className='text-sm text-gray-700'>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>
    </div>
    <div>
      <h1 className='text-lg font-semibold'>Vision</h1>
      <p className='text-sm text-gray-700'>The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner.</p>
    </div>
    <div>
      <h1 className='text-lg font-semibold'>Core Values</h1>
      <p className='text-sm text-gray-700'>News</p>
      <p className='text-sm text-gray-700'>World</p>
      <p className='text-sm text-gray-700'>Games</p>
      <p className='text-sm text-gray-700'>Referrences</p>
    </div>
    <div>
      <h1 className='text-lg font-semibold'>Success</h1>
    </div>
    </div>
  
 
  </div>
  <div className="w-1/2 h-full grid grid-cols-2 gap-1">
  <Image src={profile} alt='image' className='min-w-1/2 min-h-1/2 object-cover ' /> 
  <Image src={pic} alt='image' className=' min-w-1/2 min-h-1/2 object-cover ' /> 
  <Image src={pic3} alt='image' className=' min-w-1/2 min-h-1/2 object-cover ' /> 
  <Image src={pic2} alt='image' className=' min-w-1/2 min-h-1/2 object-cover ' /> 
  </div>

</div>

{/* Cards sections */}

<div className='w-full h-[420px] flex max-[420px]:flex-col px-20 gap-2 '>

  <div className='w-2/3 h-full grid grid-cols-2 text-white gap-1'>
   <div className='min-w-2/5 rounded-md  min-h-2/5 bg-slate-900 items-center justify-center flex'>
    <h1>Programmes</h1>

   </div>
   <div className='min-w-2/5 rounded-md  min-h-2/5 bg-slate-900 items-center justify-center flex'>
    <h1>Department</h1>

   </div>
   <div className='min-w-2/5 rounded-md  min-h-2/5 bg-slate-900 items-center justify-center flex'>
    <h1>Clubs</h1>

   </div>
   <div className='min-w-2/5 rounded-md  min-h-2/5 bg-slate-900 items-center justify-center flex'>
    <h1>Events</h1>

   </div>
  </div>
  <div className='w-1/4 h-full flex ' >
    <EventsCard/>
  </div>


</div> 

{/* Footer */}
<div className='w-full  min-h-[320px] bg-gray-400 '>
   
</div>
    </div>

</div>
  
    </>
  )


