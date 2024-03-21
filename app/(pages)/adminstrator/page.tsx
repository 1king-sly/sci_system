'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import ProfileForm from '../Component/ProfileForm'
import Loading from '../loading'
import Dashboard from '../Component/Dashboard'

export default function Page() {
  const pathName = usePathname()

  if(pathName === '/adminstrator'){
    return(
      <div className='w-full h-full'>   <Dashboard/>   </div>
    )  
  }

  return (
    <div>{pathName}</div>
  )
}


