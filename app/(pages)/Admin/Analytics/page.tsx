import React from 'react'

export default function page() {
  return (
    <>
        <div className="bg-sky-100 w-full">
            <div className="border-l-2 text-center py-2 text-3xl bg-slate-400">
            <p>Name of Club</p>
            </div>
            <div className="flex justify-between items-center px-10 py-10">
            
            </div>

            <div className="bg-white mx-10 h-56 rounded shadow-sm ">
            
              <div id="main-content" className="flex-grow overflow-auto px-4 py-4 flex justify-between">
                <div>
                  <div className="flex">
                    <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                    22
                    </h6>
                    <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                      <svg className="text-teal-900 w-7 h-7" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg>
                    </div>
                    </div>
                    <p className="mb-2 font-bold md:text-lg">Total Members</p>
                    <p className="text-gray-700">
                      This is a total of all the Members currently in the Club
                    </p>
                </div>

                <div>
                  <div className="flex">
                    <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                    22
                    </h6>
                    <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                      <svg className="text-teal-900 w-7 h-7" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                      </svg>
                    </div>
                  </div>
                  <p className="mb-2 font-bold md:text-lg">Total Events</p>
                  <p className="text-gray-700">
                    This is a total of all the Events the Club has had
                  </p>
                </div>
              </div>
            </div>
            </div>
    </>
  )
}
