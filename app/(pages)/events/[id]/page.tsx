import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import EventBanner from '../component/EventBanner'
import EventBrief from '../component/EventBrief'

export default async function page({ params }: {params: {id:string} }) {
    const id = params.id
  return (
    <>
    <div className="w-full grid grid-cols-4">
        <div className="col-span-4 border-l-2 p-4">
            <EventBanner></EventBanner>
            <h2 className="text-4xl font-bold py-4 text-left">Title of the Event, with few additional words maybe</h2>
            <EventBrief></EventBrief>
            
        </div>
    </div>
    </>
  )
}
