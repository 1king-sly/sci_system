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
                The School of Computing and Informatics of Masinde Muliro Universityy of Science and Technology is one of the promising Schools in the University. The School was was approved and officially formed on January, 2017 after splitting from the former Faculty of Science.

                We offer in-depth content in Computer Science and Information Technology that spans a wide range, from theoretical and algorithmic foundations to cutting-edge developments in ICT for Development, green technologies, security, dynamic databases and other exciting areas. We are equal to task and dedicated to producing quality products that can take on challenging programming jobs          </p>
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
