import React from 'react'
import MiniNavBar from './Components/MiniNavBar'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/utils/authUptions'
import { redirect } from 'next/navigation'



export default async function page() {

  const user = await getServerSession(authOptions)

  if(!user){
    redirect('/')
  }

  if(user.role !== 'Lead' && user.role !== 'CoLead'){

    redirect('/')
  }


  return (
    <div className='w-full'>
      <MiniNavBar></MiniNavBar>

    </div>
  )
}
