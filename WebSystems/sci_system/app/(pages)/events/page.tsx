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
          <div className=" static border-l-2  pl-10">
          <div id="upcoming" className="text-center px-4 pb-10 bg-sky-400 bg-opacity-10 text-base/7">
              <h2 className="font-bold text-3xl">EVENTS PAGE</h2>
              <p className='text-xl'>Know More About School of Computing and Informatics Events</p>
          </div> 
            <div id='upcoming'><UpcomingSection></UpcomingSection></div>
            <div id='general'><GeneralSection></GeneralSection></div>
            <div id='gdsc'><GDSCEvents></GDSCEvents></div>
            <div id='healthIT'><HealthITEvents></HealthITEvents></div>
            <div id='acs'><ACSEvents></ACSEvents></div>
          </div>
        </div>
      </div>  
    </>
  )
}
