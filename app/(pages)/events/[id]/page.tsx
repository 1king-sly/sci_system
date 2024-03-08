import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import EventBanner from '../component/EventBanner'
import EventBriefDesc from '../component/EventBriefDesc'
import EventDescription from '../component/EventDescription'
import EventVenue from '../component/EventVenue'
import Speaker from '../component/Speaker'
import Organizers from '../component/Organizers'
import Socials from '../component/Socials'

export default async function page({ params }: {params: {id:string} }) {
    const id = params.id
  return (
    <>
    <div className="w-full grid grid-cols-4">
        <div className="col-span-4 border-l-2 p-4">
            <EventBanner></EventBanner>
            <EventBriefDesc></EventBriefDesc>
            <h2 className="text-4xl font-bold py-4 text-left">Title of the Event, with few additional words maybe</h2>
            <Socials></Socials>
            <EventDescription></EventDescription>
            <EventVenue></EventVenue>
            <Speaker></Speaker>
            <Organizers></Organizers>
        </div>
    </div>
    </>
  )
}
