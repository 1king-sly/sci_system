'use client'
import Image from 'next/image'
import React from 'react'
import Pic from '@/public/Profile.jpg'
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

export default function Speaker() {
    const [events, setEvents] = useState<Event[] |null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      const fetchEvents = async (EventId: string) => {
        try {
          const eventsData = await fetchSingleEvent(EventId);
          if (eventsData !== undefined) {
            setEvents(eventsData);
          } else {
            console.error('No events data received');
          }
        } catch (error) {
          console.error('Error fetching events:', error);
        } finally {
          setLoading(false);
        }
      };

  // fetchEvents();
}, []);

  if (loading){
    return <div>Loading...</div>;
  }
  return (
    <>
        <h3 className="text-4xl text-center py-5">Speaker</h3>
        {events !== null && events.length > 0 ? ( 
            events.map(event => (
        <div className="flex text-center gap-3 justify-center">
        
        <div id="speaker">
            {/* <!-- image -->  */}
            {/* <Image src={Pic} alt='Speaker Photo' width={200} height={200} className='rounded-full w-36 h-36 mx-auto p-2'></Image> */}
            <p>{event.speaker}</p>
            <p>Speaker's Title</p>
        </div>
        </div>
        ))
            ) : (
                <p>No Speaker Info</p>
            )}
    </>
    )
}
