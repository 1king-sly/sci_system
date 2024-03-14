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
export default async function EventBanner() {
 
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

  fetchEvents('');
}, []);

  if (loading){
    return <p className='w-full h-full flex items-center justify-center'>Loading  events...</p>;
  }


  return (
    <>
    {events !==null && events.length > 0 ? (
      events.map(event => (
        <div  className="relative flex flex-col justify-center text-center">
          <Image src={event.poster || Banner} alt='Banner' className="absolute rounded-3xl object-cover w-full h-full"></Image>
          <div className="rounded-3xl relative bg-gray-900 bg-opacity-50 ">
            <div className="px-4 py-16 ">
              <div className="px-4 py-16">
              </div>
            </div>
          </div>
        </div>
      ))
      ):(
        <p>No Events Banner</p>
      )}
    </>
  )
}
