'use client'
import React from 'react'
import { fetchSingleEvent } from '@/app/lib/actions';
import { useEffect, useState } from 'react';



export default function EventVenue({event}:{event:any}) {
 

  return (
    <>
  
        <div className="P-10 my-4 bg-opacity-15 bg-slate-400" >
            <div className="flex justify-start gap-4 p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32"><rect width="32" height="32" fill="none"/><path fill="#07aff8" d="M16 2C8.4 2 2 8.4 2 16s6.4 14 14 14s14-6.4 14-14S23.6 2 16 2m4.587 20L15 16.41V7h2v8.582l5 5.004z"/><path fill="none" d="M20.587 22L15 16.41V7h2v8.582l5 5.005z"/></svg>
                <div>
                <h4 className="text-lg">When</h4>
                <p className="text-sm">{event?.dateOfEvent.toLocaleDateString()} <br/> {event?.timeOfEvent.toLocaleTimeString()}</p>
                </div>
                </div>
            <div  className="flex justify-start gap-4 p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="#07aff8" d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2m-1.77 10.66l-1.41-1.41a.996.996 0 1 1 1.41-1.41l.71.71l2.83-2.83a.996.996 0 1 1 1.41 1.41l-3.54 3.54c-.38.38-1.02.38-1.41-.01"/></svg>
                <div>
                <h4 className="text-lg">Where</h4>
                    <h1 className='text-sm'>{event.venue}</h1>
                    <h1 className='text-sm'>Masinde Muliro University of Science and Technology</h1>
                    <h1 className='text-sm'>Kakamega</h1>
                    <h1 className='text-sm'>Kakamega, 50100</h1>
                </div>
            </div>
        </div>
      
    </>
  )
}
