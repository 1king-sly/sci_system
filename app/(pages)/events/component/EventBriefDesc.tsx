'use client'
import React from 'react'
import { useState, useEffect} from 'react';
import { fetchSingleEvent } from '@/app/lib/actions';
import { start } from 'repl';




export default function EventBriefDesc({event}:{event:any}) {
 

  return (
    <>
     
        <div className="text-xl mb-5">
      {/* location */}
      <p id="location" className="hover:underline">
        {event?.venue}
      </p>
      <br/>
      {/* Short description */}
      <p id="shortDes">
        {event?.desc.slice()}
      </p>
      <h2 className="text-4xl font-bold py-4 text-left">{event?.title} {/*Title of the Event, with few additional words maybe*/}</h2>
    </div>
     
    </>
    )
}
