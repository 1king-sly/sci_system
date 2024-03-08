import React from 'react'
import DeptSideBar from '../Component/DeptSideBar'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        <div className='w-full h-full flex  overflow-hidden gap-1 mb-0'>
          <div className=" w-[20vw] ">
            <DeptSideBar/>

          </div>
          <div className="flex-1 flex w-full bg-gray-100 overflow-y-scroll">{children}</div>  
        </div>
    </div>
  )
}
