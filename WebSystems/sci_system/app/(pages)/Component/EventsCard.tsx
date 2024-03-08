import React from 'react'

export default function EventsCard() {
  return (
    <div className='w-full h-full flex flex-col px-2 py-2  bg-sky-300 gap-2'>
        <div className='w-full h-fit flex flex-col'>
            <div className='w-full h-1/2 flex  gap-5'>
                <p>GDSC: </p>
                <p>Info Session</p>
            </div>
            <div className='w-full h-1/2 flex gap-5'>
                <p>12/09/2022 </p>
                <p>Venue: SPD 004</p>
            </div>

        </div>
        <div className='w-full h-fit flex flex-col'>
            <div className='w-full h-1/2 flex gap-5'>
                <p>ACS: </p>
                <p>Info Session</p>
            </div>
            <div className='w-full h-1/2 flex gap-5'>
                <p>12/09/2022 </p>
                <p>Venue: SPD 004</p>
            </div>

        </div>
        <div className='w-full h-fit flex flex-col'>
            <div className='w-full h-1/2 flex gap-5'>
                <p>HEALTH IT: </p>
                <p>Info Session</p>
            </div>
            <div className='w-full h-1/2 flex gap-5'>
                <p>12/09/2022 </p>
                <p>Venue: SPD 004</p>
            </div>

        </div>

    </div>
  )
}
