import React from 'react'

export default function page() {
  return (
    <>
        <div className="bg-sky-100 w-full">
            <div className="border-l-2 text-center py-2 text-3xl bg-slate-400">
            <p>Name of Club</p>
            </div>
            <div className="flex justify-between items-center px-10 py-10">
            <ul className="flex gap-4"> 
                <li>Overview</li>
                <li>Members</li>
                <li>Events</li>
                <li>Attendees</li>
                <li>Tickets</li>
                <li>Sponsors</li>
            </ul>
            
            </div>

            <div className="bg-white mx-10 h-56 rounded shadow-sm ">
            
                <div id="main-content" className="flex-grow overflow-auto px-4 py-4">
                
                </div>
            </div>

            </div>
    </>
  )
}
