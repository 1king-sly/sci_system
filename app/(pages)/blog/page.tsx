'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Banner from '@/public/pexels-pixabay-33045.jpg';
import Link from 'next/link';
import { fetchBlogs, fetchLatestBlogs, fetchTrendingBlogs } from '@/app/lib/actions';

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

export default function Page() {
    const [latestBlog, setLatestBlog] = useState<Blog | null>(null);
    const [latestBlogs, setLatestBlogs] = useState<Blog[]>([]);
    const [popularBlogs, setPopularBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestBlogData = await fetchBlogs();
        if (latestBlogData && latestBlogData.length > 0) {
            setLatestBlog(latestBlogData[0]);
        }

        const latestBlogsData = await fetchLatestBlogs();
        if(latestBlogsData){

            setLatestBlogs(latestBlogsData);
        }

        const popularBlogsData = await fetchTrendingBlogs();
        if(popularBlogsData){
            setPopularBlogs(popularBlogsData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-full h-full'>
      <div className='md:h-[20vh] w-full border-b-2 mx-auto items-center'>
        <h1 className='md:text-9xl font-bold text-center text-5xl'>THE BLOG</h1>
      </div>
      <div className='lg:flex lg:grid-cols-2 md:mx-10 mx-5 lg:border-b-2'>
        {latestBlog && (
          <div className='md:w-full lg:w-2/3 lg:px-10 lg:py-10 md:py-5 py-3 lg:border-r-2 gap-4'>
            <div className='w-full'>
              <Image src={latestBlog?.poster || Banner} alt='Blog-Banner' className='rounded-lg' />
            </div>
            <h1>{new Date(latestBlog.createdAt).toLocaleDateString()}</h1>
            <h1 className='text-3xl font-serif font-bold'>{latestBlog.title}</h1>
            <p className='opacity-95 h-[30px] truncate'>
              Blog slug
              <br />
              {latestBlog.desc}
            </p>
            <Link href={`/blog/${latestBlog.slug}`}>
              <a className='hover:underline hover:duration-300'>Read More -&gt;</a>
            </Link>
          </div>
        )}

        {/* SideBar */}
        <div className='md:w-full lg:w-1/3 lg:px-10 lg:py-10'>
          <h1 className='text-2xl font-bold font-serif lg:px-2'>Popular Blogs</h1>
          {popularBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id} >

            <div key={blog.id} className='w-full grid grid-cols-2  mb-5 border-b-2'>
              <Image src={blog.poster || Banner} alt='blogBanner' height={150} width={200} className='m-2 mb-6 rounded' />
              <div className='flex flex-col gap-2 m-2'>
                <h1>{blog.createdAt.toLocaleDateString()}</h1>
                <h1 className='text-2xl font-serif font-bold'>{blog.title}</h1>
              </div>
            </div>
            
            </Link>
          
          ))}
        </div>
      </div>
      <div className='lg:mx-20 md:mx-10 mx-5 lg:my-10'>
        <h1 className='text-xl font-serif mb-5 '>Latest Blogs</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
          {latestBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>

            <div key={blog.id} className='w-full lg:border-r-2 py-5 md:pr-5 '>
              <div className='w-full '>
                <Image src={blog.poster || Banner} alt='Blog-Banner' className=' rounded-lg' />
              </div>
              <h1 className='opacity-95 '>{blog.createdAt.toLocaleDateString()}</h1>
              <h1 className='text-3xl font-serif font-bold'>{blog.title}</h1>
              <p className='opacity-95 h-[30px] truncate '>
                <br />
                {blog.desc}
              </p>
            </div>
            
            </Link>
           
          ))}
        </div>
      </div>
    </div>
  );
}
