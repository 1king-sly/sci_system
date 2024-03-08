'use server'
import React from 'react'
import Event from '@/app/(pages)/Component/Event'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/utils/authUptions'

export default async function page() {

  

  return (
    <Event />
  )
}
