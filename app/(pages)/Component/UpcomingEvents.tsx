import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchSampleUpcomingEvents } from '@/app/lib/actions';

  
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
                    <div className="border-t border-b py-4" key={event.id}>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            {event.dateOfEvent.toLocaleDateString()}
                        </p>
                        <div className="mb-3">
                            <Link href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    {event.title}
                                </p>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <Link href="/" aria-label="Author" className="mr-3">
                                <Image alt="avatar" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="object-cover w-10 h-10 rounded-full shadow-sm" />
                            </Link>
                            <div>
                                <Link href="/" aria-label="Author" className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">{event.speaker}</Link>
                                <p className="text-sm font-medium leading-4 text-gray-600">{event.host}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No Upcoming Events scheduled</p>
            )}
        </div>
    );
}
