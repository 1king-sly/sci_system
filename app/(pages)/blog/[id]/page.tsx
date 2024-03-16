import React from 'react'
import BlogSideBar from '../Components/BlogSideBar'
import Image from 'next/image'
import Pic from '@/public/ProfilePic.jpeg'
import Banner from '@/public/pexels-pixabay-33045.jpg'


export default function page({params}: {params: {id : string}}) {
  return (
    <div className='w-full lg:mx-20 lg:my-10'>
      <div className='lg:flex md:flex-none'>
        <div className='md:w-full lg:w-2/3 lg:border-r-2'>
          <h1 className='text-2xl font-serif font-bold uppercase my-2 mx-5'>This is a Blog Title</h1>
          {/* Author's Info */}
          <div className='text-sm md:flex-none lg:flex gap-4 my-2 mx-5'>
            <Image src={Pic} alt='AuthorPic' className='h-16 w-16 rounded-full'></Image>
            <div className='items-center justify-center'>
              <h1 className='font-bold'>By Author Name</h1>
              <h1>Author Title</h1>
              <h1>Published on: 25/01/2024</h1>
            </div>
          </div>
          <div className='mx-5 my-5'>
          <Image src={Banner} alt='BlogBanner' className='p-5'></Image>
          <h1 className='text-xl font-semibold '>This is a Blog sub-title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur error, consequuntur sapiente nostrum perferendis provident eaque quisquam obcaecati, in aliquam, debitis necessitatibus ipsam id excepturi quam nisi tenetur. Alias, nemo?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur error, consequuntur sapiente nostrum perferendis provident eaque quisquam obcaecati, in aliquam, debitis necessitatibus ipsam id excepturi quam nisi tenetur. Alias, nemo?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur error, consequuntur sapiente nostrum perferendis provident eaque quisquam obcaecati, in aliquam, debitis necessitatibus ipsam id excepturi quam nisi tenetur. Alias, nemo?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur error, consequuntur sapiente nostrum perferendis provident eaque quisquam obcaecati, in aliquam, debitis necessitatibus ipsam id excepturi quam nisi tenetur. Alias, nemo?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur error, consequuntur sapiente nostrum perferendis provident eaque quisquam obcaecati, in aliquam, debitis necessitatibus ipsam id excepturi quam nisi tenetur. Alias, nemo?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur error, consequuntur sapiente nostrum perferendis provident eaque quisquam obcaecati, in aliquam, debitis necessitatibus ipsam id excepturi quam nisi tenetur. Alias, nemo?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur error, consequuntur sapiente nostrum perferendis provident eaque quisquam obcaecati, in aliquam, debitis necessitatibus ipsam id excepturi quam nisi tenetur. Alias, nemo?
          </p></div>
        </div>
        <div className='md:w-full lg:w-1/3'>
          <BlogSideBar></BlogSideBar>
        </div>
      </div>
    </div>
  )
}
