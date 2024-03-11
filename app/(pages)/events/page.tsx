'use client'
import { ViewfinderCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import UpcomingSection from './component/UpcomingSection'
import GeneralSection from './component/GeneralSection'
import GDSCEvents from './component/GDSCEvents'
import HealthITEvents from './component/HealthITEvents'
import ACSEvents from './component/ACSEvents'

export default function page() {
  return (
    <>
      <div className="w-full grid grid-cols-4 py-4">
        <div className="col-span-4 border-l-2">
          {/* <div className=" static border-l-2  pl-10"> */}
          <div className="bg-sky-400 bg-opacity-30 px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-h-screen-xl md:px-24 lg:px-8 lg:py-4 lg:m-6">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                <div id="upcoming" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="font-bold text-3xl max-w-lg mb-6 font-sans leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">EVENTS PAGE</h2>
                    <p className='text-base text-gray-700 md:text-lg'>Know More About School of Computing and Informatics Events</p>
                </div> 
              </div> 
            </div> 
          </div> 
            <div id='upcoming'><UpcomingSection></UpcomingSection></div>
            <div id='general'><GeneralSection></GeneralSection></div>
            <div id='gdsc'><GDSCEvents></GDSCEvents></div>
            <div id='healthIT'><HealthITEvents></HealthITEvents></div>
            <div id='acs'><ACSEvents></ACSEvents></div>
          </div>
        </div>
      {/* </div>   */}
    </>
  )
}
