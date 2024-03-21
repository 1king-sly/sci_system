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

    useEffect(() => {
        const fetchData = async () => {
          try {    
            const latestBlogsData = await fetchLatestBlogs();
            if(latestBlogsData){
    
                setLatestBlogs(latestBlogsData);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className='w-full h-full'>
        <h1 className='text-2xl font-bold font-serif px-2'>Latest Blogs</h1>
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
