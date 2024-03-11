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
                <li className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full'>Overview</li>
                <li className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full'>Members</li>
                <li className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full'>Events</li>
                <li className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full'>Attendees</li>
                <li className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full'>Tickets</li>
                <li className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full'>Sponsors</li>
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
