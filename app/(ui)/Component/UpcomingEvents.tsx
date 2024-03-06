import React from 'react'
import Link from 'next/link'
import { fetchSampleUpcomingEvents } from '@/app/lib/actions'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function UpcomingEvents() {
    // const [events, setEvents] = useState([]);
    // useEffect(() => {
    //     fetchSampleUpcomingEvents().then((data) => {
    //         setEvents(data);
    //     });
    // }, []);
    const { data: events, error } = useSWR('/api/sampleUpcomingEvents', fetchSampleUpcomingEvents);

    if (error) return <div>Error: {error.message}</div>;
  return (
        <div className="flex flex-col text-gray-400 border-l-2 py-4 space-y-8 lg:col-span-2 pr-0 pl-10 shadow-2xl">
        <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
            Upcoming Events
        </p>
        {/* {events && events.map(event => ( */}
        <div  className="border-t border-b py-4">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                {/* {String(event.dateOfEvent)} */}
            </p><div className="mb-3">
                    <Link href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                        <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                            {/* {event.desc} */}
                            Mascarpone cheese triangles taleggio
                        </p>
                    </Link>
                </div><div className="flex items-center">
                    <Link href="/" aria-label="Author" className="mr-3">
                        <img alt="avatar" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="object-cover w-10 h-10 rounded-full shadow-sm" />
                    </Link>
                    <div>
                        <Link href="/" aria-label="Author" className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Alex Stratulat</Link>
                        <p className="text-sm font-medium leading-4 text-gray-600">Author </p>{/*{event.host}*/}
                    </div>
                </div>
        </div>
        {/* ))} */}
        <div className=" border-b pb-4">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            14 Jul 2020
            </p>
            <div className="mb-3">
            <Link href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                Mascarpone cheese triangles taleggio
                </p>
            </Link>
            </div>
            
            <div className="flex items-center">
            <Link href="/" aria-label="Author" className="mr-3">
                <img alt="avatar" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="object-cover w-10 h-10 rounded-full shadow-sm" />
            </Link>
            <div>
                <Link href="/" aria-label="Author" className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Alex Stratulat</Link>
                <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
            </div>
            </div>
        </div>
        <div className=" border-b pb-4">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            14 Jul 2020
            </p>
            <div className="mb-3">
            <Link href="/" aria-label="Article" className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                Mascarpone cheese triangles taleggio
                </p>
            </Link>
            </div>
            
            <div className="flex items-center">
            <Link href="/" aria-label="Author" className="mr-3">
                <img alt="avatar" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="object-cover w-10 h-10 rounded-full shadow-sm" />
            </Link>
            <div>
                <Link href="/" aria-label="Author" className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">Alex Stratulat</Link>
                <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
            </div>
            </div>
        </div>
        </div>
    )
}
