import React from 'react'
import CODCard from '@/app/(ui)/Component/CODCard'
import MembersCard from '@/app/(ui)/MembersCard'
import SideNav from '@/app/(ui)/Component/SideNav'

export default function page() {
  return (
    <>
    <div className='overflow-hidden overflow-y-auto w-full  max-h-full h-full flex flex-row'>
        <div className='h-full overflow-hidden w-[15vw] bg-sky-300 flex justify-center mt-5'>
          <SideNav></SideNav>
        </div>
        <div className='mx-20 mt-10 h-full  w-full bg-gray-200 overflow-x-clip '>
          <h1 className='text-4xl font-serif font-bold max-[425px]:text-2xl'>Staff</h1>
          <CODCard></CODCard>
          <h1 className='text-4xl font-serif font-bold max-[425px]:text-2xl'>Members of Staff</h1>
          <MembersCard></MembersCard>
        </div>
    </div>
    </>
  )
}
