'use server'
import React from 'react'
import { fetchSampleClubUpcomingEvents,fetchSampleUpcomingEvents} from '@/app/lib/actions';
import ACSEvents from './ACSEvents';
import GDSCEvents from './GDSCEvents';
import GeneralSection from './GeneralSection';
import HealthITEvents from './HealthITEvents';
import UpcomingSection from './UpcomingSection';


export default async function Events() {
    const healthIt = await fetchSampleClubUpcomingEvents('HEALTHIT');
    const gdsc = await fetchSampleClubUpcomingEvents('GDSC');
    const general = await fetchSampleClubUpcomingEvents('GENERAL');
    const acs = await fetchSampleClubUpcomingEvents('ACS');
    const upcoming = await fetchSampleUpcomingEvents();

  return (
    <>
    
   </>
  )
}
