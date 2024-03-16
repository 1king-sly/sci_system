import React from 'react'
import MiniNavBar from './Components/MiniNavBar'
import EventBanner from '../events/component/EventBanner'
import EventBriefDesc from '../events/component/EventBriefDesc'
import EventDescription from '../events/component/EventDescription'
import EventVenue from '../events/component/EventVenue'
import Socials from '../events/component/Socials'
import Speaker from '../events/component/Speaker'
import Organizers from '../events/component/Organizers'

export default function page() {
  return (
    <div className='w-full'>
      <MiniNavBar></MiniNavBar>
    {/* <div className='w-full px-16 py-16'>
      <EventBanner></EventBanner>
      <h2 className="text-4xl font-bold py-4 text-left">Title of the Event, with few additional words maybe</h2>
      <EventBriefDesc></EventBriefDesc>
      <Socials></Socials>
      <EventDescription></EventDescription>
      <EventVenue></EventVenue>
      <Speaker></Speaker>
      <Organizers></Organizers>
    </div> */}
    </div>
  )
}
