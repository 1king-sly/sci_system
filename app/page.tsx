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
import Dean from '@/public/dotanga.jpg'
import Cards from './(ui)/Component/Cards';
import UpcomingEvents from './(ui)/Component/UpcomingEvents';
import DeptMission from './(ui)/Component/DeptMission';
import DeanSection from './(ui)/Component/DeanSection';

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
              {/* <a href="/" aria-label="" className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700">
                Learn more
                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </a>  */}
            </div>
            {/* <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up for updates
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label for="firstName" className="inline-block mb-1 font-medium">First name</label>
                    <input
                      placeholder="John"
                      required=""
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label for="lastName" className="inline-block mb-1 font-medium">Last name</label>
                    <input
                      placeholder="Doe"
                      required=""
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label for="email" className="inline-block mb-1 font-medium">E-mail</label>
                    <input
                      placeholder="john.doe@example.org"
                      required=""
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>

  {/* Dean/About section */}
            <DeanSection></DeanSection>

  {/* Mission Section */}
    <DeptMission></DeptMission>

  {/* Other/Extras Sections */}
  <div className="px-4 relative py-5 m-20 mx-auto bg-white sm:max-w-xl md:max-w-full lg:max-h-screen-lg lg:max-w-screen-xl   md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
          <Cards />
          <UpcomingEvents></UpcomingEvents>
        </div>
  </div>


{/* Cards sections */}

{/* <div className='w-full h-[420px] flex max-[420px]:flex-col px-20 '>

  <div className='w-2/3 h-full'>
    <Programmes/>
  </div>
  <div className='w-1/4 h-full flex ' >
    <EventsCard/>
  </div>


</div> */}

{/* Footer */}
<div className='w-full  min-h-[320px] bg-gray-400 '>
   
</div>
    </div>
  
    </>
  );
}
