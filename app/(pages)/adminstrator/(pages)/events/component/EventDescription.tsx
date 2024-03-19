'use client'
import React from 'react'
import { fetchSingleEvent } from '@/app/lib/actions';
import { useEffect, useState } from 'react';



export default function EventDescription({desc}:{desc:any}) {
 

  return (
    <>
  
    <div>
      <h3 className="text-5xl py-6">About this event</h3>
      {/* <!-- Event description --> */}
      <p id="EventDescription">
        {desc}
      </p>
    </div>
    
    </>
  )
}
