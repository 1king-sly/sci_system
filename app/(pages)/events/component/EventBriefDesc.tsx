'use client'
import React from 'react'
import { useState, useEffect} from 'react';
import { fetchSingleEvent } from '@/app/lib/actions';
import { start } from 'repl';


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

export default function EventBriefDesc() {
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
    {events !==null && events.length > 0 ? (
      events.map(event => (  
        <div className="text-xl mb-5">
      {/* location */}
      <p id="location" className="hover:underline">
        {event.venue}
      </p>
      <br/>
      {/* Short description */}
      <p id="shortDes">
        {event.desc.slice()}
      </p>
      <h2 className="text-4xl font-bold py-4 text-left">{event.title} {/*Title of the Event, with few additional words maybe*/}</h2>
    </div>
      ))
    ) :(
      <p>No Events Description</p>
    )}
    </>
    )
}
