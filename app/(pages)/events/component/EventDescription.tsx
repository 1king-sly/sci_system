'use client'
import React from 'react'
import { fetchSingleEvent } from '@/app/lib/actions';
import { useEffect, useState } from 'react';

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
