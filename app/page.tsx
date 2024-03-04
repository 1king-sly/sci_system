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
  <div className="px-4 py-10 relative  bg-white m-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-20 row-gap-8 lg:grid-cols-2">
        <div>
            <Image src={Dean} alt="Dean"  className='object-cover w-full h-56 rounded shadow-lg sm:h-96' />
            {/* <img className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="dotanga.jpg" alt="" /> */}
          </div>
        <div className="flex flex-col justify-center">
       
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            ABOUT THE SCHOOL OF COMPUTING AND INFORMATICS
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div>
                {/* <span className="relative inline-block text-deep-purple-accent-400">a lazy dog</span>  */}
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            The School of Computing and Informatics of Masinde Muliro Universityy of Science and Technology is one of the promising Schools in the University. The School was was approved and officially formed on January, 2017 after splitting from the former Faculty of Science.

            We offer in-depth content in Computer Science and Information Technology that spans a wide range, from theoretical and algorithmic foundations to cutting-edge developments in ICT for Development, green technologies, security, dynamic databases and other exciting areas. We are equal to task and dedicated to producing quality products that can take on challenging programming jobs          </p>
        </div> 
      </div>
      
    </div>
  </div>

{/* Mission Section */}
<div className="px-4 py-16 relative bg-white m-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6 lg:py-10">
    <div className="grid max-w-screen-lg gap-12 lg:grid-cols-2 sm:mx-auto">
      <div className="flex flex-col justify-center">
        <div>
            <h2 className="text-4xl font-bold">Mission and Vision</h2>
        </div>
        <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg className="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                    <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Mission</p>
              <p className="text-gray-700">
                All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg className="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                    <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Vision</p>
              <p className="text-gray-700">
                The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg className="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                    <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Core Values</p>
              <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">News</a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">World</a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Games</a>
                  </li>
                  <li>
                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">References</a>
                  </li>
                </ul>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg className="w-6 text-gray-600" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6,12 10,16 18,8"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold">Success</p>
              <p className="text-gray-700"></p>
            </div>
          </div>
      </div>
      {/* images */}
      <div className="flex items-center justify-center -mx-4 lg:pl-8">
        <div className="flex flex-col items-end px-3">
          <img
            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
        </div>
        <div className="px-3">
          <img className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
        </div>
      </div>
    </div>
  </div>

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
