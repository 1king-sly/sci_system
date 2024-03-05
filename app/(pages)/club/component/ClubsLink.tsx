import React from 'react'

export default function ClubsLink() {
  return (
    <div className="">
    <div className="relative px-4 sm:px-0 ">
        <div className="absolute inset-0 bg-sky-400 bg-opacity-35 h-1/2"></div>
        <div className="relative grid mx-auto overflow-hidden  bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                  <svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800">Google Developer Students Club</p>
                <div>
                    <a
                      href="/"
                      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-sky-400 focus:shadow-outline focus:outline-none"
                    >
                      Register
                    </a>
                  </div> 
              </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">Health IT Academy</p>
            <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-sky-400 focus:shadow-outline focus:outline-none"
                >
                  Get started
                </a>
              </div>   
        </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
              <svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
            <p className="font-bold tracking-wide text-gray-800">Association of Commputing Students</p>
            <div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-sky-400 focus:shadow-outline focus:outline-none"
                >
                  Join Community
                </a>
              </div>  
        </div>
        </div>
      </div>
    </div>
      )
}
