import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/public/research.jpg'
import { fetchSingleResearch } from '@/app/lib/actions'
import { JSDOM } from "jsdom";
import DOMPurify from 'dompurify'
import NotFound from '@/app/not-found'

const window = new JSDOM("").window;
const DOMPurifyServer = DOMPurify(window);


export default async function page({params}: {params: {id:string}}) {

    const research = await fetchSingleResearch(params.id)

    if(!research){
      return <NotFound/>
    }
  return (
    <div className='w-full h-full my-5'>
        <div className='flex flex-row'>
            <div className='w-[14vw] border-2 mx-2'>
                <div className='px-3 my-3'>
                    <h1 className='font-semibold text-xl mb-1'>Collaborators</h1>
                    <div className='mb-3 text-sm' dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.collaborators || '') }}></div>
                </div>
                <div className='px-3 my-3'>
                    <h1 className='font-semibold text-xl mb-1'>Partners</h1>
                    <Link href={''}><h1 className='mb-3 text-sm text-sky-500 hover:text-sky-300' 
                    dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.partners || '') }}></h1></Link>
                </div>
                <div className='px-3 my-3'>
                    <h1 className='font-semibold text-xl mb-1'>Contact Details</h1>
                    <h1 className='mb-3 text-sm'>Department of Computer Science</h1>
                    <h1 className='mb-3 text-sm'>School of Computing and Informatics (MMUST)</h1>
                    <h1 className='mb-3 text-sm'>P.O. Box 190-50100</h1>
                    <h1 className='mb-3 text-sm'>Kakamega, KENYA</h1>
                    <h1 className='mb-3 text-sm'>Office no. SPD Block B Room 102</h1>
                    <h1 className='mb-3 text-sm'>Kakamega-Webuye Road</h1>
                    <h1 className='mb-3 text-sm'>Email: researchersemail@gmail.com</h1>
                </div>
            </div>
            <div className='w-full h-full border-2 mx-2'>
                <div className='px-3 my-3'>
                    <h1 className='text-xl font-bold mb-3'dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.title) }}>
                    </h1>
                    <h1 className='text-lg font-semibold opacity-70 mb-3'>About the Project</h1>
                    <h1 className='font-bold mb-3'>Brief description</h1>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.desc) }}>
                       
                    </p>
                    <Image src={research.image || Banner} alt='Project-Banner' width={1400} height={1400} className='p-10 w-full h-[80vh]'></Image>
                    <h1 className='font-bold mb-3'>Project Body</h1>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.body) }}></p>
                    <h1 className='font-bold mb-3'>Project Background</h1>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.background) }}>
                       
                    </p>
                    <h1 className='font-bold mb-3'>Problem Statement</h1>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.statement ) }}></p>
                    <h1 className='font-bold mb-3'>Justification</h1>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.justification ) }}>
                  
                    </p>
                    <h1 className='font-bold mb-3'>Approach</h1>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.approach ) }}>
                   
                    </p>
                    <h1 className='font-bold mb-3'>Methodology</h1>
                    <div dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.methodology || '') }}></div>
                    {/* <h1 className='font-bold mb-3'>Project Sustainability</h1>
                    <p>
                    The proposed framework aims to provide a sustainable solution to the ongoing cybersecurity challenges in IoT environments. By leveraging blockchain technology, the framework offers a decentralized and immutable platform for securing IoT devices, ensuring long-term integrity and trustworthiness. Additionally, the open-source nature of the project encourages collaboration and contributions from the wider community, fostering continuous improvement and innovation in IoT security practices.
                    </p> */}
                    <h1 className='font-bold mb-3'>System Requirements</h1>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.requirements) }}></p>
                       
                    <h1 className='font-bold mb-3'>System Design</h1>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.design ) }}>
                    </p>
                    <h1 className='font-bold mb-3'>System Development</h1>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(research.development ) }}>
                 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
