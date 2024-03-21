import React from 'react'
import Image from 'next/image'
import Banner from '@/public/ResearchBanner.jpeg'
import CardsPic from '@/public/Team.jpeg'
import Link from 'next/link'

export default function ResearchContent() {
  return (
    <>
        <div className="col-span-4 border-l-2 p-5">
            {/* <!-- what we do --> */}
              <div  className="relative flex flex-col justify-center text-center">
                <Image src={Banner} className="absolute inset-0 object-cover w-full h-full" alt="Banner" />
                <div className="relative bg-gray-900 bg-opacity-75 ">
                  <div className="px-4 py-16 ">
                    
                      <div className="px-4 py-16">
                        <h2 className=" mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                          Welcome To School of Computing <br className="hidden md:block" />
                          and Informatics Research 
                        </h2>
                        <p className=" mb-4 text-gray-400 md:text-lg">
                          Computer Science C.O.D&lsquo;s Message on Research. Learn More about our Projects and ongoing Research
                        </p>
                
              
                      </div>
                      {/* <!-- buttons --> */}
                     <div className="flex justify-around gap-4 text-gray-100">
                        <button className="border-2 px-6 py-1 ">
                          Propose Your Own Research
                        </button>
                        <button className="border-2 px-6 py-1 ">
                          Find Funding
                        </button>
                     </div>
                   
                  </div>
                </div>
                      </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
             {/* <!-- cards --> */}
            <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-3">
              <Link href="#Whatwedo" >
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image className="object-cover w-full h-56 md:h-64 xl:h-56" src={CardsPic} alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-2xl font-bold text-gray-100">What we do</p>
                  </div>
                </div>
              </Link>
              <Link href="#ResearchArea" >
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image className="object-cover w-full h-56 md:h-64 xl:h-56" src={CardsPic} alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">Research Areas</p>
                   
                  </div>
                </div>
              </Link>
              <Link href="#Interdisplinary" >
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image className="object-cover w-full h-56 md:h-64 xl:h-56" src={CardsPic} alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">Interdisciplinary Programmes</p>
                    
                  </div>
                </div>
              </Link>
              <Link href="#Funding" >
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image className="object-cover w-full h-56 md:h-64 xl:h-56" src={CardsPic} alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">Find Funding</p>
                   
                  </div>
                </div>
              </Link>
              <Link href="#Proposals" >
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image className="object-cover w-full h-56 md:h-64 xl:h-56" src={CardsPic} alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">Getting Started with Proposals</p>
                    
                  </div>
                </div>
              </Link> <Link href="#Projects" >
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image className="object-cover w-full h-56 md:h-64 xl:h-56" src={CardsPic} alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">Featured Projects</p>
                    
                  </div>
                </div>
              </Link>
              
            </div>

          </div>
      </div>
    </>
    )
}
