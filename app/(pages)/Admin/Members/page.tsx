import React from 'react'

export default function page() {
  return (
    <>
        <div className='w-full bg-sky-100'>
        <div className="border-l-2 text-center py-2 text-3xl bg-slate-400">
            <p>Name of Club</p>
            </div>
            <div className="flex justify-between items-center px-10 py-10">
            <ul className="flex gap-4"> 
            <li className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full'>Members</li>
            
            </ul>

            </div>
        <div className="bg-white mx-10 h-fit rounded shadow-sm ">
            <div id="main-content" className="flex-grow overflow-auto px-4 py-4">
            <h3 className="text-3xl font-semibold">Chapter members</h3>
            <div>
                <ul className="flex justify-between mr-4 bg-sky-200 py-2 px-1 bg-opacity-10 rounded">
                <li>Name</li>
                <li>Email</li>
                <li>Date Joined</li>
                <li>Events registered</li>
                </ul>
            </div>
            <div className="shadow-md my-2 text-left">
                <ul className="flex justify-between mr-4 py-4 px-1 rounded">
                <li>Valencia Neema</li>
                <li>n******@gmail.com</li>
                <li>Apr 04,2022</li>
                <li>20</li>
                </ul>
            </div>
            <div className="shadow-md my-2 text-left">
                <ul className="flex justify-between mr-4 py-4 px-1 rounded">
                <li>Byrone Kingsly</li>
                <li>n******@gmail.com</li>
                <li>May 05,2023</li>
                <li>20</li>
                </ul>
            </div>
            <div className="shadow-md my-2 text-left">
                <ul className="flex justify-between mr-4 py-4 px-1 rounded">
                <li>Clarence Laria</li>
                <li>n******@gmail.com</li>
                <li>June 06,2023</li>
                <li>20</li>
                </ul>
            </div>            
            </div>
        </div>
        </div>
    </>
  )
}
