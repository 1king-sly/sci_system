import React from 'react'
import ProgramCard from './ProgramCard'
import pic from '@/public/students.png'


export default function Programmes() {
  return (
    <div className='w-full h-full grid grid-cols-2 gap-2  items-center flex-wrap'>

        <ProgramCard name={'Programmes'} link={'/programmes'} desc={'Description on programmes'} image={pic}/>
        <ProgramCard name={'Students'} link={'/Students'} desc={'Description on students'} image={pic}/>
        <ProgramCard name={'Staff'} link={'/Staff'} desc={'Description on staff'} image={pic}/>
        <ProgramCard name={'News'} link={'/news'} desc={'Description on news'} image={pic}/>
        <ProgramCard name={'Clubs'} link={'/clubs'} desc={'Description on clubs'} image={pic}/>


    </div>
  )
}
