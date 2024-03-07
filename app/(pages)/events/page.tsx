'use client'
import { ViewfinderCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Upcoming from './component/Upcoming'
import UpcomingSection from './component/UpcomingSection'
import GeneralSection from './component/GeneralSection'
import GDSCEvents from './component/GDSCEvents'
import HealthITEvents from './component/HealthITEvents'
import ACSEvents from './component/ACSEvents'

export default function page() {
  return (
    <>
      <div className="grid grid-cols-4 py-4">
        <div className="col-span-4 border-l-2">
          <div className=" static border-l-2  pl-10">
            <Upcoming></Upcoming>
            <UpcomingSection></UpcomingSection>
            <GeneralSection></GeneralSection>
            <GDSCEvents></GDSCEvents>
            <HealthITEvents></HealthITEvents>
            <ACSEvents></ACSEvents>
          </div>
        </div>
      </div>  
    </>
  )
}
