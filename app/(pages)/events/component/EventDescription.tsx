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

export default function EventDescription() {
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
      <h3 className="text-5xl py-6">About this event</h3>
      {/* <!-- Event description --> */}
      <p id="EventDescription">
        {event.desc}
      </p>
    </div>
      ))
      ) : (
          <p>No Events Description</p>
      )}
    </>
  )
}
