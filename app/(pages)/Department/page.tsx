import React from 'react'
import DeptSideBar from '@/app/(ui)/Component/DeptSideBar'
import AboutCs from '../../(ui)/Component/AboutCs'
import Programs from '../../(ui)/Component/Programs'
import Representatives from '@/app/(ui)/Component/Representatives'
import Staff from '@/app/(ui)/Component/Staff'

export default function page() {
  return (
    <>
        <div className='w-full'>
            <div className="grid grid-cols-4">
                <div className="col-span-3 border-l-2">
                    <div id='Introduction'><AboutCs></AboutCs></div>
                    <div id='Programs'><Programs></Programs></div>
                    <div id='Staff'><Staff></Staff></div>
                    <div id='Student-Representatives'><Representatives></Representatives></div>
                </div>
            </div>
        </div>
    </>
  )
}
