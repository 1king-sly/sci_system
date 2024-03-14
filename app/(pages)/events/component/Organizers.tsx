'use client'
import React from 'react'
import Image from 'next/image'
import Profile from '@/public/ProfilePic.jpeg'
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

export default function Organizers() {
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
    return <div>Loading...</div>;
  }
  return (
    <>
    {events !== null && events.length > 0 ? ( 
      events.map(event => (
    <div>
      <h3 className="text-4xl text-center py-10">Organizers</h3>
      <div className="grid gap-6 row-gap-8  grid-cols-4">
        <div className="flex flex-col gap-5">
          <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={Profile} alt="Person" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Dr Jasper Ondulo</p>
            <p className="text-sm text-gray-800">Club Patron</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={Profile} alt="Person" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Valencia Neema</p>
            <p className="text-sm text-gray-800">GDSC lead</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={Profile} alt="Person" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Laria Clarence</p>
            <p className="text-sm text-gray-800">Health IT lead</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={Profile} alt="Person" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">Byrone Kingsly</p>
            <p className="text-sm text-gray-800">ACS Lead</p>
          </div>
        </div>
      </div>
    </div>  
    ))
    ) : (
        <p>No Events Organizers</p>
    )}
    </>
  )
}
