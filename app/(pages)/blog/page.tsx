'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Banner from '@/public/pexels-pixabay-33045.jpg';
import Link from 'next/link';
import { fetchBlogs, fetchLatestBlogs, fetchTrendingBlogs } from '@/app/lib/actions';
import Spinner from '../events/component/Spinner';
import DOMPurify from 'dompurify'
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
    const [loading,setisLoading]= useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;


    const fetchData = async () => {
      try {
        const latestBlogData = await fetchBlogs();

        if (latestBlogData) {
            setLatestBlog(latestBlogData[0]);
            setisLoading(false)
            
        }

        const latestBlogsData = await fetchLatestBlogs(currentPage,perPage);
        if(latestBlogsData && latestBlogsData.length > 0){

            setLatestBlogs(latestBlogsData);
        } else {
          setCurrentPage(1);
        }

        const popularBlogsData = await fetchTrendingBlogs();
        if(popularBlogsData){
            setPopularBlogs(popularBlogsData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className='w-full h-full relative'>
      <div className='lg:flex lg:grid-cols-2 md:mx-10 mx-5 lg:border-b-2'>

        {loading?(

        <div className='md:w-full flex-1 h-full lg:w-2/3 lg:px-10 lg:py-10 md:py-5 py-3 lg:border-r-2 gap-4 relative left-0 flex items-center justify-center'>

        <div className='w-full h-[55vh] bg-gray-50 shadow-sm justify-center items-center'>
        <Spinner/>

        </div>
        <div className='md:w-full lg:w-1/3 lg:px-10 lg:py-10 absolute right-0'>
        </div>

        <div className='lg:mx-20 md:mx-10 mx-5 mt-12 lg:mt-24 absolute bottom-0'>
        </div>

        </div>

        ):(
          <>
          {latestBlog && (
            <div className='md:w-full lg:w-3/4 lg:px-10 lg:py-10 md:py-5 py-3 lg:border-r-2 gap-4'>
              <div className='w-full'>
                <Image src={latestBlog?.poster || Banner} alt='Blog-Banner' className='rounded-lg w-full h-96 object-cover'  width={1400} height={1400} />
              </div>
              <h1>{new Date(latestBlog.createdAt).toLocaleDateString()}</h1>
              <h1 className='text-3xl font-bold uppercase' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(latestBlog.title) }}></h1>
              <div className='w-full h-12 truncate' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(latestBlog.desc) }}></div>
              <Link className='hover:underline duration-300' href={`/blog/${latestBlog.slug}`}>
                Read More -&gt;
              </Link>
            </div>
          )}
          </>
        )}
      

        {/* SideBar */}
        <div className='md:w-full lg:w-1/4 lg:px-10 lg:py-10 right-0 h-[66vh] min-[1024px]:h[80vh]'>
          <h1 className='text-2xl font-bold font-serif lg:px-2'>Popular Blogs</h1>
          {popularBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id} >

            <div key={blog.id} className='w-full grid grid-cols-2  mb-5 border-b-2'>
            <Image src={blog.poster || Banner} alt='Blog-Banner' className='w-full h-[20vh] object-cover rounded-lg' width={1400} height={1400} />
              <div className='flex flex-col gap-2 m-2'>
                <h1>{blog.createdAt.toLocaleDateString()}</h1>
                <h1 className='font-bold' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.title) }}></h1>
              </div>
            </div>
            
            </Link>
          
          ))}
        </div>
      </div>
      <div className='lg:mx-20 md:mx-10 mx-5 mt-10 max-[425px]:mt-20 bottom-0'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-serif mb-5 '>Latest Blogs</h1>
          <div className="flex items-center  mb-5 bg-white xs:flex-row xs:justify-between">
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
        <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4'>
          {latestBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>

            <div key={blog.id} className='w-full lg:border-r-2 py-5 md:pr-5 '>
              <div className='w-full h-[30vh]'>
                <Image src={blog.poster || Banner} alt='Blog-Banner' className='w-full h-[30vh] object-cover rounded-lg' width={1400} height={1400} />
              </div>
              <h1 className='opacity-95 '>{blog.createdAt.toLocaleDateString()}</h1>
              <h1 className='font-bold ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.title) }}></h1>
              <p className='opacity-95 h-[30px] truncate ' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.desc) }}>
              </p>
            </div>
            
            </Link>
           
          ))}
        </div>
      </div>
    </div>
  );
}