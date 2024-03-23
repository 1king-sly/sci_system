'use client'
import React, { useEffect, useState } from 'react';

import Image from 'next/image'
import Banner from '@/public/pexels-pixabay-33045.jpg'

import Link from 'next/link';
import { fetchLatestBlogs} from '@/app/lib/actions';

interface Blog {
    id: number;
    createdById: number;
    createdAt: Date;
    views: number;
    title: string;
    desc: string;
    slug: string;
    poster: string; 
  }

export default function BlogSideBar() {

    const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 4; 



    const fetchData = async () => {
      try {    
        const latestBlogsData = await fetchLatestBlogs(currentPage, perPage);
        if(latestBlogsData && latestBlogsData.length > 0){

            setLatestBlogs(latestBlogsData);
        }
        else{
          setCurrentPage(1);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
     
        fetchData();
 // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentPage]);

  return (
    <div className='w-full h-full'>

      <div className='w-full flex justify-between '>
        <h1 className='text-2xl font-bold font-serif px-2'>Latest Blogs</h1>
        <div className="flex items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
                        <div className="flex items-center">
                            <button type="button" title='Prev' className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100" onClick={() => setCurrentPage(currentPage - 1)}>
                                <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </button>
                            <button type="button" title='Next' className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100" onClick={() => setCurrentPage(currentPage + 1)}>
                                <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
      </div>


        <div className='w-full py-5'>
            {latestBlogs.map((blog)=>(
                <Link href={`/adminstrator/blog/${blog.slug}`} key={blog.id}>

        <div className='w-full max-h-[20vh]   grid grid-cols-2 gap-4 mb-5 border-b-2'>
                <Image src={blog.poster || Banner} alt='blogBanner' height={150} width={200} className='m-2 mb-6 rounded w-full h-[16vh] object-fit'></Image>{/*remember object-cover*/}
                <div className='flex flex-col gap-2 m-2'>
                    <h1>{blog.createdAt.toLocaleDateString()}</h1>
                    <h1 className='md:text-sm h-10 sm:text-base font-serif font-bold truncate '>{blog.title}</h1>
                </div>
            </div>
                </Link>

            ))}
          
          
        </div>
    </div>
  )
}
