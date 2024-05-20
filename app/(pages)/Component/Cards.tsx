import React from 'react'
import Link from 'next/link'

export default function Cards() {
  return (
    <div className="lg:col-span-3">
    <div className=" col-span-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-2 ">
      <Link href="/department#Programs">
        <div id="Programmes" className=" cursor-pointer px-10 py-20  text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <h1 className="font-semibold text-gray-200 text-4xl text-center">
               Programmes
              </h1>
        </div>
        </Link> 
        <Link href="/research">
          <div id="Department" className=" cursor-pointer px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <h1 className="font-semibold text-gray-200 text-4xl">
                  Researchs
              </h1>
        </div></Link>
        
        <Link href="/blog">
        <div id="Clubs" className=" cursor-pointer px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <h1 className="font-semibold text-gray-200 text-4xl">
               Blog
              </h1>
        </div></Link>
        <Link href="/events">
        <div id="Events" className=" cursor-pointer px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
            <h1 className="font-semibold text-gray-200 text-4xl">
                Events
              </h1>
        </div></Link> 
        
      </div>   
  </div>
   )
}
