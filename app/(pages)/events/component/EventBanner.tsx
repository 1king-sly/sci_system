'use client'
import Image from 'next/image'
import React from 'react'
import Banner from '@/public/slideshow3.jpg'
import { fetchSingleEvent } from '@/app/lib/actions'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


interface Event {
  id: number;
  createdById: number;
  dateOfEvent: Date;
  title: string;
  desc: string;
  venue: string;
  timeOfEvent: Date;
  gallery: string[];
  type: any;
  speaker: string;
  host: string;
  poster: string;
}
export default  function EventBanner({poster}:{poster:any}) {
 
 

  return (
    <>
    
        <div  className="relative flex flex-col justify-center text-center w-full h-[500px]">
          <Image src={poster || Banner} alt='Banner' width={400} height={400} className="absolute rounded-3xl object-fit w-full h-full"></Image>
          <div className="rounded-3xl relative bg-gray-900 bg-opacity-50 w-full h-full ">
            <div className="px-4 py-16 ">
              <div className="px-4 py-16">
              </div>
            </div>
          </div>
        </div>
     
    </>
  )
}
