import React from 'react'
import BlogSideBar from '../Components/BlogSideBar'
import Image from 'next/image'
import Pic from '@/public/ProfilePic.jpeg'
import Banner from '@/public/pexels-pixabay-33045.jpg'
import { fetchSingleBlog } from '@/app/lib/actions'


export default async function page({params}: {params: {id : string}}) {
  const blog = await fetchSingleBlog(params.id)

  if(!blog){
    return null
  }
  return (
    <div className='w-full lg:mx-20 lg:my-10'>
      <div className='lg:flex md:flex-none'>
        <div className='md:w-full lg:w-3/4 lg:border-r-2'>
          <h1 className='text-2xl font-serif font-bold uppercase my-2 mx-5'>{blog.title} </h1>
          {/* Author's Info */}
          <div className='text-sm md:flex-none lg:flex gap-4 my-2 mx-5'>
            <Image src={blog.createdBy.image || Pic} alt='AuthorPic' className='h-16 w-16 rounded-full' width={400} height={400}></Image>
            <div className='items-center justify-center'>
              <h1 className='font-bold'>{blog.createdBy.userName}</h1>
              <h1>Published on: {blog.createdAt.toLocaleDateString()}</h1>
            </div>
          </div>
          <div className='mx-5 my-5'>
          <Image src={blog.poster || Banner} alt='BlogBanner' className='p-5 w-full h-96 object-cover' width={1500} height={1500}></Image>
          <h1 className='text-xl font-semibold h-[10px] truncate '>{blog.desc} </h1>
          <p>
           {blog.desc}
          </p></div>
        </div>
        <div className='md:w-full lg:w-1/4'>
          <BlogSideBar></BlogSideBar>
        </div>
      </div>
    </div>
  )
}
