import React from 'react'
import Dean from '@/public/dotanga.jpg'
import Image from 'next/image'

export default function DeanSection() {
  return (
    <div className="px-4 py-10 relative  bg-white m-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-20 row-gap-8 lg:grid-cols-2">
        <div>
            <Image src={Dean} alt="Dean"  className='object-cover w-full h-56 rounded shadow-lg sm:h-96' />
          </div>
        <div className="flex flex-col justify-center">
       
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            ABOUT THE SCHOOL OF COMPUTING AND INFORMATICS
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            The School of Computing and Informatics of Masinde Muliro Universityy of Science and Technology is one of the promising Schools in the University. The School was was approved and officially formed on January, 2017 after splitting from the former Faculty of Science.

            We offer in-depth content in Computer Science and Information Technology that spans a wide range, from theoretical and algorithmic foundations to cutting-edge developments in ICT for Development, green technologies, security, dynamic databases and other exciting areas. We are equal to task and dedicated to producing quality products that can take on challenging programming jobs          </p>
        </div> 
      </div>
      
    </div>
  </div>
    )
}
