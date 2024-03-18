import React from 'react'
import Image from 'next/image'
import Pic from '@/public/ProfilePic.jpeg'

export default function Leads() {
  return (
    <>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-5 sm:row-gap-6 sm:grid-cols-2">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <Image className="object-cover w-full h-56 md:h-64 xl:h-80" src={Pic} alt="" height={400} width={400} />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                        <p className="text-sm font-medium tracking-wide text-white">
                        Club Patron,Dr Jasper Ondulo</p>
                    </div>
                </div>
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <Image className="object-cover w-full h-56 md:h-64 xl:h-80" src={Pic} alt="" height={400} width={400} />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                        <p className="text-sm font-medium tracking-wide text-white">
                        GDSC Lead</p>
                    </div>
                </div>
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <Image className="object-cover w-full h-56 md:h-64 xl:h-80" src={Pic} alt="" height={400} width={400} />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                        <p className="text-sm font-medium tracking-wide text-white">
                        Health IT Lead</p>
                    </div>
                </div>
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <Image className="object-cover w-full h-56 md:h-64 xl:h-80" src={Pic} alt="" height={400} width={400} />
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                        <p className="text-sm font-medium tracking-wide text-white">
                        ACS Lead</p>
                    </div>
                </div>
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <Image className="object-cover w-full h-56 md:h-64 xl:h-80" src={Pic} alt="" height={400} width={400}/>
                    <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                        <p className="text-sm font-medium tracking-wide text-white">
                        IOT Lead</p>
                    </div>
                </div>
            
            </div>
            
        </div>
    </>
    )
}
