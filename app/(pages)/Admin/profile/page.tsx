'use server'
import ProfileForm from '@/app/(pages)/Component/ProfileForm'
import { authOptions } from '@/app/utils/authUptions'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page() {

    const user = await getServerSession(authOptions)
  return (
        <>
        <ProfileForm user={user}/>
        </>
    )
}
