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

          <div  className="px-20 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    
              <div className="flex flex-col lg:flex-row">
                <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                  <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    The quick, brown fox<br className="hidden md:block" />
                    jumps over
                    <span className="inline-block text-deep-purple-accent-400">a lazy dog</span>
                  </h2>

              </div>
                <div className="lg:w-1/2">
                  <p className="text-base text-gray-700">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque rem aperiam, eaque ipsa quae.
                  </p>
                </div>
              </div>
            </div> 
            <ClubBriefDesc></ClubBriefDesc>
        </div>
        </div>
 


    </>
  )
}