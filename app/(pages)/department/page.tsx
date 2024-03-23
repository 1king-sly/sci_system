'use client'
import React from 'react'
import DeptSideBar from '@/app/(pages)/Component/DeptSideBar'
import AboutCs from '../Component/AboutCs'
import Programs from '../Component/Programs'
import Representatives from '@/app/(pages)/Component/Representatives'
import Staff from '@/app/(pages)/Component/Staff'
import DeptMission from '@/app/(pages)/Component/DeptMission'
export default function page() {
  return (
    <>
        <div className='w-full'>
            <div className="grid grid-cols-4 py-4">
                <div className="col-span-4 border-l-2">
                    <div id='Introduction'><AboutCs></AboutCs></div>
                    <div id='Programs'><Programs></Programs></div>
                    <div className='' id='Mission'><DeptMission></DeptMission></div>
                    <div id='Staff'><Staff></Staff></div>
                    <div id='Student-Representatives'><Representatives></Representatives></div>
                </div>
            </div>
        </div>
    </>
  )
}
