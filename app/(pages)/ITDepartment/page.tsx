'use client'
import React from 'react'
import DeptSideBar from '@/app/(pages)/Component/DeptSideBar'
import AboutCs from '../Component/AboutCs'
import ITPrograms from '@/app/(pages)/Component/ITPrograms'
import ITRepresentatives from '../Component/ITReps'
import ITStaff from '../Component/ITStaff'
import ITDeptMission from '../Component/ITDeptMission' 
import Image from 'next/image'
import Pic from '@/public/Raphael-Angulu-2.png'

export default function page() {
  return (
    <>
        <div className='w-full'>
            <div className="grid grid-cols-4 py-4">
                <div className="col-span-4 border-l-2">
                    <div id='Introduction'>
                    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-20 row-gap-8 lg:grid-cols-2">
            <div>
                <Image src={Pic} alt="C.O.D"  className='object-fit w-full h-56 rounded shadow-lg sm:h-96' />
              
            </div>
            <div className="flex flex-col justify-center">
        
            <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            DEPARTMENT OF INFORMATION TECHNOLOGY   <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div>
               
                </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            I take the opportunity to welcome all in the department of Information Technology. This is one of the three departments that makes up the School of Computing and Informatics. Information technology (IT) is the application of computers to store, study, retrieve, transmit, and manipulate data, or information, often in the context of a business or other enterprise. (Wiki).
            The department is determined to impact knowledge that will enable graduates to use any computers, store any digital information, carry out networking and utilise any other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data within a prescribed period of time.
            This can be done in Businesses industries, learning institutions and any other area where IT is required.        
            </p>
            </div> 
        </div>
        
        </div>
        </div>
                    </div>
                    <div id='Programs'><ITPrograms></ITPrograms></div>
                    <div className='' id='Mission'><ITDeptMission></ITDeptMission></div>
                    <div id='Staff'><ITStaff></ITStaff></div>
                    <div id='Student-Representatives'><ITRepresentatives></ITRepresentatives></div>
                </div>
            </div>
        </div>
    </>
  )
}
