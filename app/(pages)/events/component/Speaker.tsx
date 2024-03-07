import Image from 'next/image'
import React from 'react'
import Pic from '@/public/Profile.jpg'

export default function Speaker() {
  return (
    <>
        <h3 className="text-4xl text-center py-5">Speaker</h3>
        <div className="flex text-center gap-3 justify-center">
        
        <div id="speaker">
            {/* <!-- image -->  */}
            <Image src={Pic} alt='Speaker Photo' width={200} height={200} className='rounded-full w-36 h-36 mx-auto p-2'></Image>
            <p>Speaker's Name</p>
            <p>Speaker's Title</p>
        </div>
        </div>
    </>
    )
}
