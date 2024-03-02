import React from 'react'
import CODCard from '@/app/(ui)/Component/CODCard'
import MembersCard from '@/app/(ui)/MembersCard'
import SideNav from '@/app/(ui)/Component/SideNav'

export default function page() {
  return (
    <><div className='w-screen h-screen '>
      <div className='w-full  max-h-full h-full flex flex-row'>
        <div className='h-full w-[15vw] bg-sky-300 flex '>
          <SideNav></SideNav>
        </div>
        <div className=' mx-20 mt-10 h-full  w-full bg-gray-200  '>
          <h1 className='text-4xl font-serif font-bold max-[425px]:text-2xl'>Staff</h1>
          <CODCard></CODCard>
          <h1 className='text-4xl font-serif font-bold max-[425px]:text-2xl'>Members of Staff</h1>
          <MembersCard></MembersCard>
          <MembersCard></MembersCard>
          <MembersCard></MembersCard>

        </div>
    </div></div>
    </>
  )
}
