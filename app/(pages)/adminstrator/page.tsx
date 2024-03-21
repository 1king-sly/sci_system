'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import ProfileForm from '../Component/ProfileForm'
import Loading from '../loading'

export default function Page() {
  const pathName = usePathname()

  if(pathName === '/adminstrator'){
    return <Loading/>
  }

  return (
    <div>{pathName}</div>
  )
}


