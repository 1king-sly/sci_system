import React from 'react'
import ProgramCard from './ProgramCard'
import pic from '@/public/students.png'


export default function Programmes() {
  return (
    <div className='w-full h-full flex gap-2 justify-around items-center flex-wrap'>

        <ProgramCard name={'Programmes'} link={'/programmes'} desc={'Description on programmes'} image={pic}/>
        <ProgramCard name={'Students'} link={'/students'} desc={'Description on students'} image={pic}/>
        <ProgramCard name={'Staff'} link={'/staff'} desc={'Description on staff'} image={pic}/>
        <ProgramCard name={'News'} link={'/news'} desc={'Description on news'} image={pic}/>
        <ProgramCard name={'Clubs'} link={'/clubs'} desc={'Description on clubs'} image={pic}/>


    </div>
  )
}
