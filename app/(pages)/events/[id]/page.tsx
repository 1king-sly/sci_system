import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import EventBanner from '../component/EventBanner'
import EventBriefDesc from '../component/EventBriefDesc'
import EventDescription from '../component/EventDescription'
import EventVenue from '../component/EventVenue'
import Speaker from '../component/Speaker'
import Organizers from '../component/Organizers'
import Socials from '../component/Socials'
import { fetchSingleEvent } from '@/app/lib/actions'
import { Suspense } from 'react'

export default async function page({params}: {params: {id : string}}) {
  return (
    <>
    <div className="w-full grid grid-cols-4">
        <div className="col-span-4 border-l-2 p-4">
          <Suspense>
            <EventBanner></EventBanner>
            <EventBriefDesc></EventBriefDesc>
            <Socials></Socials>
            <EventDescription></EventDescription>
            <EventVenue></EventVenue>
            <Speaker></Speaker>
            <Organizers></Organizers>
            </Suspense>
        </div>
    </div>
    </>
  )
}
