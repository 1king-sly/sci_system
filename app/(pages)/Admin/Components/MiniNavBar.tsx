import React from 'react'
import Link from 'next/link'

export default function MiniNavBar() {
  return (
    <>
        <div className="fixed w-full z-50 flex justify-between px-10 py-1 bg-sky-200">
            <div><p>Hello UserName</p></div>
            <div className="flex gap-6"> 
            <Link href="/Admin/addEvents">
                <div className="flex items-center mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="#07aff8" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
                <p>Create Event</p>
            </div> 
            </Link>
            <Link href="/Admin/Analytics">
                <div className="flex items-center mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><rect width="32" height="32" fill="none"/><path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z"/><path fill="currentColor" d="M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z"/></svg>  
                    <p>Analytics</p>
                </div>
            </Link>
            <Link href="/Admin/EventsDashboard">
                <div className="flex items-center mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><rect width="36" height="36" fill="none"/><path fill="currentColor" d="m25.18 12.32l-5.91 5.81a3 3 0 1 0 1.41 1.42l5.92-5.81Z" className="clr-i-outline clr-i-outline-path-1"/><path fill="currentColor" d="M18 4.25A16.49 16.49 0 0 0 5.4 31.4l.3.35h24.6l.3-.35A16.49 16.49 0 0 0 18 4.25m11.34 25.5H6.66a14.43 14.43 0 0 1-3.11-7.84H7v-2H3.55A14.41 14.41 0 0 1 7 11.29l2.45 2.45l1.41-1.41l-2.43-2.46A14.41 14.41 0 0 1 17 6.29v3.5h2V6.3a14.47 14.47 0 0 1 13.4 13.61h-3.48v2h3.53a14.43 14.43 0 0 1-3.11 7.84" className="clr-i-outline clr-i-outline-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>  
                    <p>Dashboard</p>
                </div> 
            </Link>
            
            </div>
    </div>  
    </>
  )
}
