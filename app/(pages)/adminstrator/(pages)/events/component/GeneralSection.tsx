'use client'
import React, { useEffect, useState } from 'react';
import { fetchSampleClubUpcomingEvents } from '@/app/lib/actions';
import Link from 'next/link';



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
   slug:string
}



export default function GeneralSection() {
   const [events, setEvents] = useState<Event[] | null>(null); 
   const [loading, setLoading] = useState(true);

  

useEffect(() => {
   const fetchEvents = async () => {
       try {
           const eventsData = await fetchSampleClubUpcomingEvents('GENERAL');
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

   fetchEvents();
}, []);

  return (
    <div id="general" className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-10">
    <h2 className="font-bold mb-4">GENERAL ANNOUNCEMENTS</h2>

    {loading ? (
            <p>Fetching data...</p>
         ) : (
            <>
               {events !== null && events.length > 0 ? (
                  events.map(event => (
                     <Link href={`/adminstrator/events/${event.slug}`} key={event.id}>
                        <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4">
                           <div className="border rounded-full p-6 bg-indigo-50">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm2 6v-2h10v2zm0 4v-2h7v2z"/></svg>
                           </div>
                           <div>
                              <h3 className="font-semibold text-md">{event.title}</h3>
                              <p>{event.desc}</p>
                           </div>
                        </div>
                     </Link>
                  ))
               ) : (
                  <p>No Events scheduled</p>
               )}
            </>
         )}
    
    </div>
    )
}
