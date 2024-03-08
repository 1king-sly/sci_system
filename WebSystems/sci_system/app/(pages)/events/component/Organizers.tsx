import React from 'react'
import Image from 'next/image'
import dp1 from '@/public/DP1.webp'
import dp2 from '@/public/DP2.jpeg'
import dp3 from '@/public/dp3.webp'
import dp4 from '@/public/DP4.jpeg'

export default function Organizers() {
  return (
    <>
    <div>
      <h3 className="text-4xl text-center py-10">Organizers</h3>
      <div className="grid gap-6 row-gap-8  grid-cols-4">
        <div className="flex flex-col gap-5">
          <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={dp1} alt="Person" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Dr Jasper Ondulo</p>
            <p className="text-sm text-gray-800">Club Patron</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={dp2} alt="Person" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Valencia Neema</p>
            <p className="text-sm text-gray-800">GDSC lead</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={dp3} alt="Person" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Laria Clarence</p>
            <p className="text-sm text-gray-800">Health IT lead</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={dp4} alt="Person" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Byrone Kingsly</p>
            <p className="text-sm text-gray-800">ACS Lead</p>
          </div>
        </div>
      </div>
    </div>  
    </>
  )
}
