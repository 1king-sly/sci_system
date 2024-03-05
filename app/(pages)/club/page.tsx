import { ViewfinderCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ClubInfo from './component/ClubInfo'
import ClubsLink from './component/ClubsLink'
import Leads from './component/Leads'
import ClubBriefDesc from './component/ClubBriefDesc'
import Footer from '@/app/(ui)/Component/Footer'

export default function page() {
  return (
    <>
      <div>
          <div  className="w-full col-span-4 border-l-2 px-3 mt-4 ">
          <ClubInfo></ClubInfo>
          <ClubsLink></ClubsLink>
          <Leads></Leads>

          <div  className="px-20 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                    
              <div className="flex flex-col lg:flex-row">
                <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                  <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    The quick, brown fox<br className="hidden md:block" />
                    jumps over
                    <span className="inline-block text-deep-purple-accent-400">a lazy dog</span>
                  </h2>

              </div>
                <div className="lg:w-1/2">
                  <p className="text-base text-gray-700">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque rem aperiam, eaque ipsa quae.
                  </p>
                </div>
              </div>
            </div> 
            <ClubBriefDesc></ClubBriefDesc>
        </div>
        {/* <div className='w-screen flex-none'>
        <Footer></Footer>
        </div> */}
        </div>
 


    </>
  )
}
{/*<div className='w-full h-full flex flex-col px-20 pt-20 gap-10 scroll-smooth'>

          {/* Upcominf Events */}

          {/* <div className='w-full flex  h-fit flex-col gap-0 pb-10' id='gdsc' >
            <h1 className='text-xl font-bold' >GDSC club</h1>
            <div className='w-4/5 flex gap-5 h-[70px] mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
           

          </div>
          <div className='w-full flex  h-fit flex-col gap-0 pb-10' id='healthIT' >
            <h1 className='text-xl font-bold' >HealthIT club</h1>
            <div className='w-4/5 flex gap-5 h-[70px] mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
           

          </div>
          <div className='w-full flex  h-fit flex-col gap-0 pb-10'id='acs' >
            <h1 className='text-xl font-bold'>ACS club</h1>
            <div className='w-4/5 flex gap-5 h-[70px] mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
           

          </div>
          <div className='w-full flex  h-fit flex-col gap-0 pb-10' id='IoT' >
            <h1 className='text-xl font-bold'>Internet of Things club</h1>
            <div className='w-4/5 flex gap-5 h-[70px] mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
            <div className='w-4/5 flex gap-5 h-[70px]  mt-10' >
            <div className='w-[70px] rounded-full h-full flex justify-center items-center bg-rose-500'>
              <ViewfinderCircleIcon className='w-6 h-6'/>
            </div>
            
            <div className='flex flex-1 flex-col gap-0 '>
              <h4 className='text-lg font-semibold'>Read the recipe</h4>
              <p>All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.</p>

            </div>

            </div>
           

          </div>
         
           
        </div> */}