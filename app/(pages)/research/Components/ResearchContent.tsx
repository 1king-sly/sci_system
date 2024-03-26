'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Banner from '@/public/ResearchBanner.jpeg'
import CardsPic from '@/public/Team.jpeg'
import Link from 'next/link'
import clsx from 'clsx';

export default function ResearchContent() {
  const [hidden, setHidden] = useState(false);
  const [irfHidden, setIRFHidden] = useState(false);
  const [nrfHidden, setNRFHidden] = useState(false);
  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <>
        <div className="w-full col-span-4 border-l-2 p-5">
            {/* <!-- what we do --> */}
              <div  className="w-full relative flex flex-col justify-center text-center bg-sky-400">
                <div className="relative  ">
                  <div className="px-4 py-4">
                    
                      <div className="px-4 py-4">
                        <h2 className=" mb-3 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                          Welcome To School of Computing <br className="hidden md:block" />
                          and Informatics Research 
                        </h2>
                        <p className=" mb-2 text-gray-700 md:text-lg">
                          Computer Science C.O.D Message on Research.
                          Learn More about our Projects and ongoing Research
                        </p>
                
              
                      </div>
                      {/* <!-- buttons --> */}
                     <div className="flex justify-around gap-4 text-gray-100">
                        <Link href='/research/urf'><button className="border-2 px-6 py-1 hover:bg-gray-100 hover:text-sky-400 ">
                          Propose Your Own Research
                        </button></Link>
                        <Link href='/research/urf'><button className="border-2 px-6 py-1 hover:bg-gray-100 hover:text-sky-400">
                          Find Funding
                        </button></Link>
                     </div>
                   
                  </div>
                </div>
              </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-3">
              <div
                onMouseEnter={() => setHidden(true)}
                onMouseLeave={() => setHidden(false)}>
                <Link href="#">
                  <div className={clsx(`relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg  hover:shadow-2xl`,{} )}>
                    <Image className="object-cover w-full h-56 md:h-64 xl:h-56" src={CardsPic} alt="" />
                    <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                      <p className="mb-4 text-2xl font-bold text-gray-100">University Research Fund (URF)</p>
                    </div>
                  </div>
                </Link>
                <div className={clsx(`transition duration-200 transform rounded border-2 shadow-lg  hover:shadow-2xl`,{hidden: !hidden})}>
                    <div className=" px-6 py-5 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                      <p className="mb-4 text-gray-100">
                        Step into the world of university research funding, where innovation and exploration are nurtured. University research funds serve as vital resources that propel cutting-edge research initiatives within academic institutions. These funds are tailored to support the diverse array of research projects conducted by faculty, researchers, and students across various disciplines. From groundbreaking scientific discoveries to insightful social science inquiries and innovative technological advancements, university research funding fuels the pursuit of knowledge and fosters academic excellence. Join us as we delve into the dynamic landscape of university research funding and uncover the transformative impact it has on shaping the future of education and scholarship.                        
                      </p>
                      <Link href='/research/urf'><h1 className='hover:underline mb-4 text-gray-100'>Learn more - </h1></Link>
                    </div>
                </div>
              </div>
              <div
                onMouseEnter={() => setNRFHidden(true)}
                onMouseLeave={() => setNRFHidden(false)}>
                <Link href="#" >
                  <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg  hover:shadow-2xl">
                    <Image className="object-cover w-full h-56 md:h-64 xl:h-56" src={CardsPic} alt="" />
                    <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                      <p className="mb-4 text-2xl font-bold text-gray-100">National Research Fund (NRF)</p>
                    </div>
                  </div>
                </Link>
                <div id='nrf' title='nrf' className={clsx(`transition duration-200 transform rounded border-2 shadow-lg  hover:shadow-2xl`,{hidden: !nrfHidden})}>
                    <div className=" px-6 py-5 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                      <p className=" text-gray-100">
                        Enter the realm of national research funding, where vision meets action and discoveries unfold. National research funds play a pivotal role in driving forward the frontiers of knowledge and innovation within a country&lsquo;s borders. Established by governments, these funds provide crucial support for research endeavors that address national priorities, societal challenges, and economic competitiveness. From advancing scientific breakthroughs to informing public policy and fostering economic growth, national research funding serves as a catalyst for progress and prosperity. Join us as we embark on a journey to explore the myriad opportunities and benefits that national research funding brings to individuals, institutions, and society as a whole.
                      </p>
                      <Link href='/research/nrf'><h1 className='hover:underline mb-4 text-gray-100'>Learn more - </h1></Link>
                    </div>
                </div>
              </div>
              <div
                onMouseEnter={() => setIRFHidden(true)}
                onMouseLeave={() => setIRFHidden(false)}>
                <Link href="#">
                <div className={clsx(`relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:shadow-2xl`, )}>
                    <Image className="object-cover w-full h-56 md:h-64 xl:h-56" src={CardsPic} alt="" />
                    <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                      <p className="mb-4 text-2xl font-bold text-gray-100">International Research Fund (IRF)</p>
                    </div>
                  </div>                
                </Link>                              
                <div id='irf' title='irf' className={clsx(`transition duration-200 transform rounded border-2 shadow-lg  hover:shadow-2xl`,{hidden: !irfHidden})}>
                  <div className=" px-6 py-5 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-gray-100">
                      Welcome to the realm of international research funding, where boundaries are transcended and collaboration knows no limits. At the heart of this endeavor lies a robust financial resource designed to support research ventures spanning across international borders. Established by governments, non-governmental organizations (NGOs), international bodies, philanthropic foundations, and private entities, these funds are dedicated to fostering collaborative research endeavors aimed at tackling global challenges head-on. Join us on a journey of discovery as we explore the opportunities and impact of international research funding.
                    </p>
                    <Link href='/research/irf'><h1 className='hover:underline mb-4 text-gray-100'>Learn more - </h1></Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
      </div>
    </>
    )
}
