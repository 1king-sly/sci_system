import React from 'react'
import Image from 'next/image'
import ClubPic from '@/public/ClubPic.jpg'

export default function ClubBriefDesc() {
  return (
    <>
    <div className='w-full h-full'>
        <div id="GDSCclub" className="px-20 py-10 w-full ">
                    <div className="lg:col-span-2">
                        
                        <div className="mb-3">
                          <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-3xl xl:text-4xl">
                        Google Developer Students Club                            </p>
                          </a>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                          A brief description about the club, why students should join the club.
                        </p>
                        <div className="flex items-center">
                          
                         
                        </div>
                      </div>
                    <div className="relative ">
                      <Image className="object-cover w-full h-56 sm:h-96 " src={ClubPic} alt="" />
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                    </div>
        </div> 
        <div id="HealthIt" className="px-20 py-10">
        <div className="lg:col-span-2 ">
            
            <div className="mb-3">
                <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-3xl xl:text-4xl">
            Health IT Academy</p></a>
            </div>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              A brief description about the club, why students should join the club.
            </p>
            <div className="flex items-center">
                
                
            </div>
            </div>
        <div className="relative">
            <Image className="object-cover w-full h-56 sm:h-96" src={ClubPic} alt="" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        </div> 
        <div id="ACSclub" className="px-20 py-10">
        <div className="lg:col-span-2">
            
            <div className="mb-3">
                <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-3xl xl:text-4xl">
            Association Of Computing Students</p></a>
            </div>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              A brief description about the club, why students should join the club.
            </p>
            <div className="flex items-center">
                
                
            </div>
            </div>
        <div className="relative">
            <Image className="object-cover w-full h-56 sm:h-96" src={ClubPic} alt="" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        </div>
        <div id="IOTclub" className="px-20 py-10">
                    <div className="lg:col-span-2">
                        
                        <div className="mb-3">
                          <a href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-3xl xl:text-4xl">
                            INTERNET OF THINGS</p>
                          </a>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                          A brief description about the club, why students should join the club.
                        </p>
                        <div className="flex items-center">
                          
                         
                        </div>
                      </div>
                    <div className="relative ">
                      <Image className="object-cover w-full h-56 sm:h-96" src={ClubPic} alt="" height={2500} width={2500}/>
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                    </div>
        </div> 
        </div> 
    </>
    )
}
