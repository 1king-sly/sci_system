'use server'
import React from 'react';
import { getServerSession } from 'next-auth';
import Image from 'next/image'
import profile from '@/public/images/profile.png'
import { fetchSingleUser, updateUser } from '@/app/lib/actions';
import {  redirect } from 'next/navigation';
import ProfileForm from '@/app/(pages)/Component/ProfileForm';
import NotFound from '@/app/not-found';

export default async function Page({ params }: { params: { id: string } }) {  
    const userId = params.id
    
    const user = await fetchSingleUser(userId)
    if(!user){
     return <NotFound/>
    }

  return (
    <>
       <ProfileForm user={user}/>
    </>
  );
}