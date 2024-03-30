'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/public/NRF2.png'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import {useState} from 'react'
import clsx from 'clsx'
import ResearchSideNav from '../Components/ResearchSideNav'

export default function page() {
    const [visible, setVisible] = useState(false);
    const buttonData = [
        { text: 'Button 1' },
        { text: 'Button 2' },
        { text: 'Button 3' },
        { text: 'Button 4' },
      ];
    const toggleVisible = () => {
        setVisible((prev) => !prev);
    }
  return (
    <>
    <div className='w-full h-full flex  overflow-hidden gap-1 mb-0'>
        <div className=" w-[16vw] max-[768px]:hidden bg-white">
            <ResearchSideNav/>
        </div>
        <div className="flex-1 flex w-full bg-gray-100 overflow-y-scroll">
            <div className='my-10 mx-10'>
                <h1 className='text-3xl font-bold my-5 uppercase'>National Research Fund (NRF)</h1>
                <p className='my-3'>
                    The National Research Fund (NRF) is a State Corporation established under the Science Technology and Innovation (ST&I) Act No. 28, Section 32 of 2013. The Fund is mandated to facilitate research to advance Science, Technology and Innovation.
                    Part VII of the ST&I Act, 2013, stipulates that the Fund will constitute a sum of money amounting to 2% of the country&lsquo;s Gross Domestic Product every year and such other monies designated for the Fund by Parliament, donations, endowment or grants or gifts designated for the Fund.
                </p>
                <div className='py-5'>
                    <h1 className='text-3xl font-bold uppercase mb-5'>Researches Won</h1>
                    <div className='w-full my-5'>
                    <div className='bg-gray-900 text-white w-full h-10 relative'>
                        <h1 className='my-3 absolute text-xl px-5'>2023-2024</h1>
                        <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
                        <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
                    </div>
                    <div className={clsx(`flex-col mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
                        <Link href={''} className='my-1'><h1>September</h1></Link>
                        <Link href={''} className='my-1'><h1>June</h1></Link>
                        <Link href={''} className='my-1'><h1>May</h1></Link>
                        <Link href={''} className='my-1'><h1>January</h1></Link>
                    </div>
                    </div>
                    <div className='w-full my-5'>
                    <div className='bg-gray-900 text-white w-full h-10 relative'>
                        <h1 className='my-3 absolute text-xl px-5'>2022-2023</h1>
                        <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
                        <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
                    </div>
                    <div className={clsx(`mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
                        <Link href={''} className='my-1'><h1>September</h1></Link>
                        <Link href={''} className='my-1'><h1>June</h1></Link>
                        <Link href={''} className='my-1'><h1>May</h1></Link>
                        <Link href={''} className='my-1'><h1>January</h1></Link>
                    </div>
                    </div>
                    <div className='w-full my-5'>
                    <div className='bg-gray-900 text-white w-full h-10 relative'>
                        <h1 className='my-3 absolute text-xl px-5'>2021-2022</h1>
                        <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
                        <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
                    </div>
                    <div className={clsx(`mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
                        <Link href={''} className='my-1'><h1>September</h1></Link>
                        <Link href={''} className='my-1'><h1>June</h1></Link>
                        <Link href={''} className='my-1'><h1>May</h1></Link>
                        <Link href={''} className='my-1'><h1>January</h1></Link>
                    </div>
                    </div>
                    <div className='w-full my-5'>
                    <div className='bg-gray-900 text-white w-full h-10 relative'>
                        <h1 className='my-3 absolute text-xl px-5'>2020-2021</h1>
                        <PlusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,visible && 'hidden')} onClick={toggleVisible}></PlusIcon>
                        <MinusIcon className={clsx(`w-10 h-10 text-white absolute right-5 cursor-pointer`,!visible && 'hidden')} onClick={toggleVisible}></MinusIcon>
                    </div>
                    <div className={clsx(`mx-5 my-3 text-sky-300 text-lg`,!visible && 'hidden')}>
                        <Link href={''} className='my-1'><h1>September</h1></Link>
                        <Link href={''} className='my-1'><h1>June</h1></Link>
                        <Link href={''} className='my-1'><h1>May</h1></Link>
                        <Link href={''} className='my-1'><h1>January</h1></Link>
                    </div>
                    </div>
                </div>
                <div className='w-full h-auto my-5 border-2'>
                    <div className='p-5'>
                        <h1 className='text-3xl font-bold  mb-5'>All NRF Projects</h1>
                        <div className='border-2 my-5'>
                            <Link href={''}>
                            <h1 className='hover:text-sky-300 p-2'>Research/ Project Name.
                            A Psychosocial Approach  Towards   Risk and Readiness  Assessment of Vulnerable  Communities in  Responding To  Covid 19 Pandemic  in Kakamega County  (Research and Innovation Projects)
                            </h1>
                            <p className='hover:text-sky-300 px-2'>Read More -&#62;</p>
                            </Link>
                        </div>
                        <div className='border-2 my-5'>
                            <Link href={''}>
                            <h1 className='hover:text-sky-300 p-2'>Research/ Project Name.
                            A Psychosocial Approach  Towards   Risk and Readiness  Assessment of Vulnerable  Communities in  Responding To  Covid 19 Pandemic  in Kakamega County  (Research and Innovation Projects)
                            </h1>
                            <p className='hover:text-sky-300 px-2'>Read More -&#62;</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

