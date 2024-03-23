'use client'
import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
import clsx from 'clsx';
import Image from 'next/image';
import pic from '@/public/pexels-pixabay-33045.jpg'
import { fetchSampleClubUpcomingEvents } from '@/app/lib/actions';
import { useEffect } from 'react';

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
export default function Page() {
  const [visible, setVisible] = useState(true);
  const [visibleDraft, setVisibleDraft] = useState(false);
  const [visibleCompleted, setVisibleCompleted] = useState(false);
  const [events, setEvents] = useState<Event[] | null>(null); 
  const [loading, setLoading] = useState(true);

   const toggleLive = () => {
      setVisible((prev) => !prev)
   }
   const closeLive = () =>{
      setVisible(!toggleLive);
    }

    const toggleDraft = () => {
      setVisibleDraft((preview) => !preview)
   }
   const closeDraft = () =>{
      setVisibleDraft(!toggleLive);
    }

    const toggleCompleted = () => {
      setVisibleCompleted((prevC) => !prevC)
   }
   const closeCompleted = () =>{
      setVisibleCompleted(!toggleLive);
    }
    useEffect(() => {
      const fetchEvents = async () => {
          try {
              const eventsData = await fetchSampleClubUpcomingEvents('GDSC');
              if (eventsData !== undefined) {
                setEvents(eventsData);
              } else {
                  console.error('No events data received');
              }
          } catch (error) {
              console.error('Error fetching events:', error);
          } 
      };
      fetchEvents();
    }, []);
  //   if (loading) {
  //     return <p className='w-full h-full flex items-center justify-center'>Fetching upcoming events...</p>;
  // }

  return (
    <div className='w-full '>
      <div className=" bg-sky-100 h-full">
      <div className="border-l-2 text-center py-2 text-3xl bg-slate-400">

        <p>Name of Club</p>
      </div>
      <div className="flex justify-between items-center px-10 py-10">
        <ul className="flex gap-4"> 
          <li  id="live-btn" className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full' 
          onClick={() => {
            toggleLive();
            closeCompleted();
            closeDraft();
          }}
          >Upcoming</li>
          <li  id="draft-btn" className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full' 
          onClick={() => {
            toggleDraft();
            closeCompleted();
            closeLive();
          }}>Draft</li>
          <li  id="completed-btn" className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full' 
          onClick={() => {
            toggleCompleted();
            closeDraft();
            closeLive();
          }}>Completed</li>
        </ul>
        <Link href="/Admin/addEvents">
        <button className="flex items-center px-2 py-2 bg-slate-800 rounded text-white">
        New event
          <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
        </button></Link>
      </div>

  <div className="bg-white mx-10 h-fit rounded shadow-sm ">
  
    <div id="main-content" className="flex-grow overflow-auto px-4 py-4">
      {/* Upcoming Events */}
      <div id="live-content" className={clsx(``,!visible && 'hidden')}> 
      {events !== null && events.length > 0 ? (
        events.map(event => (
          <div key={event.id} className='flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4 justify-between'>
            <div className='flex gap-10 items-center'>
              <Image src={event.createdBy.image || pic} alt='ClubPic' height={400} width={400} className='w-24 h-24 rounded-full object-cover'></Image>
              <div>
                <h3 className="font-semibold text-md ">{event.title}</h3>
                <p>{String(event.dateOfEvent)}</p>
                <p>
                  {event.desc}
                </p>
              </div>
            </div>
            <div className='justify-end items-end mx-10'>
              <Link key={event.id} href={`/events/${event.slug}`}><button className='bg-rose-600 py-2 px-4 rounded-lg mx-4'>View</button></Link>
              <button className='bg-sky-300 py-2 px-4 rounded-lg mx-4'>Delete</button>
            </div>
          </div>
        ))
      ) : (
          <p>No Upcoming Events scheduled</p>
        )}    
      </div>
      <div id="draft-content" className={clsx(``,!visibleDraft && 'hidden')}>
        <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4 justify-between">
        <div className='flex gap-10 items-center'>
        <Image src={pic} alt='ClubPic' height={400} width={400} className='w-24 h-24 rounded-full object-cover'></Image>

          <div>
             <h3 className="font-semibold text-md ">Draft One</h3>
          <p>
            Event brief Description, a few lines about the event
         </p>
          </div></div>
          <div className='justify-end items-end mx-10'>
              <Link href='events/id'><button className='bg-rose-600 py-2 px-4 rounded-lg mx-4'>View</button></Link>
              <button className='bg-sky-300 py-2 px-4 rounded-lg mx-4'>Delete</button>
            </div>
           </div>
      </div>
      <div id="completed-content" className={clsx(``,!visibleCompleted && 'hidden')}>
      <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4 justify-between">
        <div className='flex gap-10 items-center'>
          <Image src={pic} alt='ClubPic' height={400} width={400} className='w-24 h-24 rounded-full object-cover'></Image>
            <div>
              <h3 className="font-semibold text-md ">Event One</h3>
              <p>
                Event brief Description, a few lines about the event
              </p>
            </div>
          </div>
          <div className='justify-end items-end mx-10'>
              <Link href='events/id'><button className='bg-rose-600 py-2 px-4 rounded-lg mx-4'>View</button></Link>
              <button className='bg-sky-300 py-2 px-4 rounded-lg mx-4'>Delete</button>
            </div>
           </div>
      <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4 justify-between">
        <div className='flex gap-10 items-center'>
          <Image src={pic} alt='ClubPic' height={400} width={400} className='w-24 h-24 rounded-full object-cover'></Image>
            <div>
              <h3 className="font-semibold text-md ">Event One</h3>
              <p>
                Event brief Description, a few lines about the event
              </p>
            </div>
          </div>
          <div className='justify-end items-end mx-10'>
              <Link href='events/id'><button className='bg-rose-600 py-2 px-4 rounded-lg mx-4'>View</button></Link>
              <button className='bg-sky-300 py-2 px-4 rounded-lg mx-4'>Delete</button>
            </div>
           </div>
      <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4 justify-between">
        <div className='flex gap-10 items-center'>
          <Image src={pic} alt='ClubPic' height={400} width={400} className='w-24 h-24 rounded-full object-cover'></Image>
            <div>
              <h3 className="font-semibold text-md ">Event One</h3>
              <p>
                Event brief Description, a few lines about the event
              </p>
            </div>
          </div>
          <div className='justify-end items-end mx-10'>
              <Link href='events/id'><button className='bg-rose-600 py-2 px-4 rounded-lg mx-4'>View</button></Link>
              <button className='bg-sky-300 py-2 px-4 rounded-lg mx-4'>Delete</button>
            </div>
           </div> 
      </div>
    </div>
  </div>

  </div>
    </div>
  )
}
