'use client'
import React from 'react'
import { useState, useEffect} from 'react';
import clsx from 'clsx'
import CreateGallery from '@/app/(pages)/Component/CreateGallery';



export default function EventBriefDesc({event}:{event:any}) {


  const [visible,setVisible] = useState(false)


  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }
 

  return (
    <>
     
        <div className="text-xl mb-5">
        <div className='w-full flex justify-between px-10 py-3'>
        <p id="location" className="hover:underline">
        {event?.venue}
      </p>

        <button type='button' className='text-xs bg-sky-300 p-2 rounded-lg' onClick={toggleVisible}>Add Gallery</button>
        </div>

        {visible?(

          <CreateGallery id={event.id}/>

        ): null}
     
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
