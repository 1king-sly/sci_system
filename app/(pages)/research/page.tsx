import React from 'react'
import ResearchContent from './Components/ResearchContent'
import ResearchSideNav from './Components/ResearchSideNav'

export default function page() {
  return (
    <>
    <div className='w-full h-full flex  overflow-hidden gap-1 mb-0'>
      <div className=" w-[16vw] max-[768px]:hidden bg-white">
        <ResearchSideNav/>
      </div>
      <div className="flex-1 flex w-full bg-gray-100 overflow-y-scroll">
        <div className="w-full">
          <ResearchContent></ResearchContent>
        </div></div>
      </div>
    </>
    )
}
