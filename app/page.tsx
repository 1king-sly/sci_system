'use client'
import React, { useState, useEffect } from 'react';
import pic from '@/public/students.png'
import pic2 from '@/public/club.jpg'
import pic3 from '@/public/students.png'
import { usePathname } from "next/navigation";
import Cards from './(ui)/Component/Cards';
import UpcomingEvents from './(ui)/Component/UpcomingEvents';
import DeptMission from './(ui)/Component/DeptMission';
import DeanSection from './(ui)/Component/DeanSection';
import Footer from './(ui)/Component/Footer';

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
        <div className="relative">
            <img src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="absolute inset-0 object-cover w-full h-full" alt="" />
            <div className="relative bg-gray-900 bg-opacity-75">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                  <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                      Welcome to Department of Computer Science,<br className="hidden md:block" />
                      Home of technology<span className="text-teal-accent-400"></span>
                    </h2>
                    <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <DeanSection></DeanSection>
        <DeptMission></DeptMission>

        <div className="px-4 relative py-5 m-20 mx-auto bg-white sm:max-w-xl md:max-w-full lg:max-h-screen-lg lg:max-w-screen-xl   md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
            <Cards />
            <UpcomingEvents></UpcomingEvents>
          </div>
        </div>

        <Footer></Footer>
          {/* <div className='w-full  min-h-[320px] bg-gray-400 '>
            
          </div> */}
      </div>  
    </>
  );
}
