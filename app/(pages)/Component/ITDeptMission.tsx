import React from 'react'
import Image from 'next/image'
import Pic from '@/public/ResearchBanner.jpeg'

export default function ITDeptMission() {
  return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6 lg:py-8">
            <div className="grid max-w-screen-lg gap-12 lg:grid-cols-2 sm:mx-auto">
            <div className="flex flex-col justify-center">
                <div>
                    <h2 className="text-4xl font-bold">Mission and Vision</h2>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg className="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                            <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                        </svg>
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Vision</p>
                    <p className="text-gray-700">
                        To be a centre of excellence in science and technology responsive to development needs of society through engagement in dynamic knowledge creation and application.                    </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg className="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                            <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                        </svg>
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Mission</p>
                    <p className="text-gray-700">
                        To generate, preserve and disseminate knowledge by integrating science and technology into quality programmes covering a wide variety of disciplines while engaging in innovative research, training, teaching, and consultancy.
                    </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg className="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                            <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                        </svg>
                        </div>
                    </div>
                    <div className="w-px h-full bg-gray-300"></div>
                    </div>
                    <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Core Values</p>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <h1 className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Quality</h1>
                        </li>
                        <li>
                            <h1 className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Research</h1>
                        </li>
                        <li>
                            <h1 className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Excellence</h1>
                        </li>
                        <li>
                            <h1 className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Respect</h1>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col items-center mr-4">
                    <div>
                        <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg className="w-6 text-gray-600" stroke="currentColor" viewBox="0 0 24 24">
                            <polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6,12 10,16 18,8"></polyline>
                        </svg>
                        </div>
                    </div>
                    </div>
                    <div className="pt-1">
                    <p className="mb-2 text-lg font-bold">Success</p>
                    <p className="text-gray-700"></p>
                    </div>
                </div>
            </div>
            {/* images */}
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
                <div className="flex flex-col items-end px-3">
                <Image
                    className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                    src={Pic}//A picture of the Department
                    alt="Department Pic"
                />
                <Image className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src={Pic} alt="Department Pic" />
                </div>
                <div className="px-3">
                <Image className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src={Pic} alt="Department Pic" />
                </div>
            </div>
            </div>
        </div>
    )
}
