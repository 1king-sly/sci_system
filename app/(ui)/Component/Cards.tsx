import React from 'react'

export default function Cards() {
  return (
    <div className="lg:col-span-3  ">
    <div className="relative col-span-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 ">
        <div id="Programmes" className="px-10 py-20  text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <h1 className="font-semibold text-gray-200 text-4xl text-center">
               <a href="Programmes.html">Programmes</a> 
              </h1>
        </div>
        <div id="Department" className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <h1 className="font-semibold text-gray-200 text-4xl">
                <a href="Department.html">  Department</a>
              </h1>
        </div>
        
        
        <div id="Clubs" className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <h1 className="font-semibold text-gray-200 text-4xl">
               <a href="Clubs.html">Clubs</a> 
              </h1>
        </div>
        <div id="Events" className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <h1 className="font-semibold text-gray-200 text-4xl">
               <a href="Events.html"> Events</a>
              </h1>
        </div>
        
      </div>   
  </div>
   )
}
