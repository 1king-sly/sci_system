import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='w-full '>
        <div className=" bg-sky-100 h-full">
 <div className="border-l-2 text-center py-2 text-3xl bg-slate-400">

  <p>Name of Club</p>
 </div>
 <div className="flex justify-between items-center px-10 py-10">
   <ul className="flex gap-4"> 
    <li  id="live-btn">Live</li>
    <li  id="draft-btn">Draft</li>
    <li  id="completed-btn">Completed</li>
    <li id="cancelled-btn">Canceled</li>
   </ul>
   <Link href="/Admin/addEvents">
   <button className="flex items-center px-2 py-2 bg-slate-800 rounded text-white">
   New event
    <svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="m7 10l5 5l5-5z"/></svg>
   </button></Link>
 </div>

  <div className="bg-white mx-10 h-fit rounded shadow-sm ">
  
    <main id="main-content" className="flex-grow overflow-auto px-4 py-4">
      <div id="live-content">  { /*<!-- live event -->*/}
        <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4">
          <div className="border rounded-full p-6 bg-indigo-50" >
          <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm2 6v-2h10v2zm0 4v-2h7v2z"/></svg>
 
          </div>
          <div>
             <h3 className="font-semibold text-md ">Event One</h3>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem sunt magnam earum asperiores error sed aut odio architecto voluptatibus tempora at autem, itaque perferendis maiores. Corporis qui non ex?
         </p>
          </div>
           </div>

           <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4">
            <div className="border rounded-full p-6 bg-indigo-50" >
            <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm2 6v-2h10v2zm0 4v-2h7v2z"/></svg>
   
            </div>
            <div>
               <h3 className="font-semibold text-md ">Event One</h3>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem sunt magnam earum asperiores error sed aut odio architecto voluptatibus tempora at autem, itaque perferendis maiores. Corporis qui non ex?
           </p>
            </div>
             </div>   
           
      </div>
      <div id="draft-content" className='hidden'>
        <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4">
          <div className="border rounded-full p-6 bg-indigo-50" >
          <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm2 6v-2h10v2zm0 4v-2h7v2z"/></svg>
 
          </div>
          <div>
             <h3 className="font-semibold text-md ">Event One</h3>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem sunt magnam earum asperiores error sed aut odio architecto voluptatibus tempora at autem, itaque perferendis maiores. Corporis qui non ex?
         </p>
          </div>
           </div>
      </div>
      <div id="completed-content" className='hidden'>
        <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4">
          <div className="border rounded-full p-6 bg-indigo-50" >
          <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm2 6v-2h10v2zm0 4v-2h7v2z"/></svg>
 
          </div>
          <div>
             <h3 className="font-semibold text-md ">Event One</h3>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem sunt magnam earum asperiores error sed aut odio architecto voluptatibus tempora at autem, itaque perferendis maiores. Corporis qui non ex?
         </p>
          </div>
           </div>
           <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4">
            <div className="border rounded-full p-6 bg-indigo-50" >
            <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm2 6v-2h10v2zm0 4v-2h7v2z"/></svg>
   
            </div>
            <div>
               <h3 className="font-semibold text-md ">Event One</h3>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem sunt magnam earum asperiores error sed aut odio architecto voluptatibus tempora at autem, itaque perferendis maiores. Corporis qui non ex?
           </p>
            </div>
             </div>
             <div className="flex shadow-md p-3 border-t-2 m-2 hover:shadow-lg items-center gap-10 py-4">
              <div className="border rounded-full p-6 bg-indigo-50" >
              <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm2 6v-2h10v2zm0 4v-2h7v2z"/></svg>
     
              </div>
              <div>
                 <h3 className="font-semibold text-md ">Event One</h3>
              <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem sunt magnam earum asperiores error sed aut odio architecto voluptatibus tempora at autem, itaque perferendis maiores. Corporis qui non ex?
             </p>
              </div>
               </div>    
      </div>
    </main>
  </div>

  </div>
    </div>
  )
}
