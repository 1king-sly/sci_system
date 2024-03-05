import React from 'react'
import DeptSideBar from '@/app/(ui)/Component/DeptSideBar'
import AboutCs from '../../(ui)/Component/AboutCs'
import Programs from '../../(ui)/Component/Programs'
import Representatives from '@/app/(ui)/Component/Representatives'
import Staff from '@/app/(ui)/Component/Staff'
import DeptMission from '@/app/(ui)/Component/DeptMission'
export default function page() {
  return (
    <>
        <div className='w-full'>
            <div className="grid grid-cols-4 py-4">
                <div className="col-span-4 border-l-2">
                <div className="bg-sky-400 bg-opacity-30 px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-h-screen-xl md:px-24 lg:px-8 lg:py-4 lg:m-6">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        
                            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            DEPARTMENT PAGE </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
                            </p>
                            </div>
                            {/* <!-- <div>
                            <a
                                href="/"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </a>
                            </div> --> */}
                        </div>
                    </div>
                </div>
                    <div id='Introduction'><AboutCs></AboutCs></div>
                    <div id='Programs'><Programs></Programs></div>
                    <div className='' id='Mission'><DeptMission></DeptMission></div>
                    <div id='Staff'><Staff></Staff></div>
                    <div id='Student-Representatives'><Representatives></Representatives></div>
                </div>
            </div>
        </div>
    </>
  )
}
