import { ViewfinderCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ClubInfo from './component/ClubInfo'
import ClubsLink from './component/ClubsLink'

export default function page() {
  return (
    <>
        <div  className="w-full col-span-4 border-l-2 px-3 m-4 ">
          <ClubInfo></ClubInfo>
          <ClubsLink></ClubsLink>
        </div>
        
        
        
        
        
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
    </>
  )
}
