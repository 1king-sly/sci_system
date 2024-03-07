import { ViewfinderCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ClubInfo from './component/ClubInfo'
import ClubsLink from './component/ClubsLink'
import Leads from './component/Leads'
import ClubBriefDesc from './component/ClubBriefDesc'
import Footer from '@/app/(pages)/Component/Footer'

export default function page() {
  return (
    <>
      <div>
          <div  className="w-full col-span-4 border-l-2 px-3 mt-4 ">
          <ClubInfo></ClubInfo>
          <ClubsLink></ClubsLink>
          <Leads></Leads>
            <ClubBriefDesc></ClubBriefDesc>
        </div>
      </div>
 


    </>
  )
}