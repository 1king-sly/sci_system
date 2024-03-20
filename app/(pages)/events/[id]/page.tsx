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
import NotFound from '@/app/not-found'


export default async function page({params}: {params: {id : string}}) {

  

    const event = await fetchSingleEvent(params.id)

    if(!event){
      return <NotFound/>
    }

  return (
    <>
    <div className="w-full grid grid-cols-4">
        <div className="col-span-4 border-l-2 p-4">
          <Suspense>
            <EventBanner poster={event?.poster}></EventBanner>
            <EventBriefDesc event={event}></EventBriefDesc>
            <Socials></Socials>
            <EventDescription desc={event?.desc}></EventDescription>
            <EventVenue event={event}></EventVenue>
            <Speaker speaker={event?.speaker}></Speaker>
            {/* <Organizers></Organizers> */}
            </Suspense>
        </div>
    </div>
    </>
  )
}
