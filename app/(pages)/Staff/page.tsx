import React from 'react'
import CODCard from '@/app/(ui)/Component/CODCard'
import MembersCard from '@/app/(ui)/MembersCard'

export default function page() {
  return (
    <div className='mx-20 my-10 overflow-hidden'>
        <h1 className='text-4xl font-serif font-bold max-[425px]:text-2xl'>Staff Page</h1>
        <CODCard></CODCard>
        <h1 className='text-4xl font-serif font-bold max-[425px]:text-2xl'>Members of Staff</h1>
        <MembersCard></MembersCard>
    </div>
  )
}
