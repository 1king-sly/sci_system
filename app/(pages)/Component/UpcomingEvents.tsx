import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchSampleUpcomingEvents } from '@/app/lib/actions';

import pic from '@/public/ProfilePic.jpeg'

  
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
    slug:string;
    createdBy:any
}

export default function UpcomingEvents() {
    const [events, setEvents] = useState<Event[] | null>(null); 
    const [loading, setLoading] = useState(true);

   

useEffect(() => {
    const fetchEvents = async () => {
        try {
            const eventsData = await fetchSampleUpcomingEvents();
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

    if (loading) {
        return <p className='w-full h-full flex items-center justify-center'>Fetching upcoming events...</p>;
    }

    return (
        <div className="flex flex-col text-gray-400 border-l-2 py-4 space-y-8 lg:col-span-2 pr-0 pl-10 shadow-2xl">
            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                Upcoming Events
            </p>
            {events !== null && events.length > 0 ? ( 
                events.map(event => (
                    <Link key={event.id} href={`/events/${event.slug}`}>
                     <div className="border-t border-b py-4" key={event.id}>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            {event.dateOfEvent.toLocaleDateString()}
                        </p>
                        <div className="mb-3">
                                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    {event.title}
                                </p>
                        </div>
                        <div className="flex items-center">
                            
                                <Image alt="avatar" src={event.createdBy.image || pic}className="object-cover w-10 h-10 rounded-full shadow-sm" width={400} height={400} />
                            
                            <div>
                               {event.speaker}
                                <p className="text-sm font-medium leading-4 text-gray-600">{event.host}</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                   
                ))
            ) : (
                <p>No Upcoming Events scheduled</p>
            )}
        </div>
    );
}
