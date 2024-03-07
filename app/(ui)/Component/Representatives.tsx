import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { fetchSchoolReps,fetchClassReps } from '@/app/lib/actions';

interface User {
  id: number;
  userName: string;
  email: string;
  createdAt:any
  updatedAt:any
  hashedPassword:string
  image: string | null;
  club:any | null
  role:any 
  userType:any
  level:any
  school:any
  
}

export default function Representatives() {

  const [sReps, setsReps] = useState<User[] | null>(null); 
  const [cReps, setcReps] = useState<User[] | null>(null); 
  const [loading, setLoading] = useState(true);

 

useEffect(() => {
  const fetchReps = async () => {
      try {
          const sRepsData = await fetchSchoolReps();
          const cRepsData = await fetchClassReps()
          if (sRepsData !== undefined) {
            setsReps(sRepsData);
          } else {
              console.error('No School Reps data received');
          }
          if (cRepsData !== undefined) {
            setcReps(cRepsData);
          } else {
              console.error('No School Reps data received');
          }
      } catch (error) {
          console.error('Error fetching reps:', error);
      } finally {
          setLoading(false);
      }
  };

  fetchReps();
}, []);

  if (loading) {
      return <p className='w-full h-full flex items-center justify-center'>Fetching School  representatives...</p>;
  }


  return (
    <div>
        <h2 id="SCIreps" className="max-w-lg underline mb-6 font-sans text-left text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        SCI Representatives </h2>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-lg gap-16 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          {sReps !== null && sReps.length>0 ?(
              sReps.map(rep=>(
       <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center" key={rep.id}>
        <div className="relative">
        <Image className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96" src={rep.image || "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"} alt={`Image of ${rep.userName}`} />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
        </div>
        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {rep.userName}       
 </h5>
        <p className="mb-5 text-gray-700">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde.
        </p>
        <button
        type="submit"
        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
        Read more
        </button>
        </div>
        </div>
              ))
          ):(
            <p>No School  representatives  fetched</p>

          ) }
        </div>
        </div> 
        {/* Class Representatives */}
        <h2 id="classNameReps" className="max-w-lg  mx-auto font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none  group">
        <span className="inline-block underline mb-1 sm:mb-4">
        class Representatives
        </span>
        </h2>
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">

        <p className="max-w-lg mb-5 font-sans text-lg font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span className="inline-block mb-1 sm:mb-4">
        1st Year Representatives
        </span>
        </p>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">

          {cReps !== null && cReps.length>0 ?(
              cReps.map(rep=>(
                ( rep !== null && rep.level === 'FIRST'?(
                  <div className="flex" key={rep.id}>
                  <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={ rep.image|| "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"} alt={`Image of ${rep.userName}`} />
                  <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">{rep.userName} </p>
                  <p className="text-sm text-gray-800">{rep.school} </p>
                  </div>
                  </div>
                ):null)
              ))
          ):(
            <p>No 1st Year reps fetched</p>

          )}
        </div>

        </div>
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">

        <p className="max-w-lg mb-5 font-sans text-lg font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span className="inline-block mb-1 sm:mb-4">
        2nd Year Representatives
        </span>
        </p>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">

        {cReps !== null && cReps.length>0 ?(
              cReps.map(rep=>(
                ( rep !== null && rep.level === 'SECOND'?(
                  <div className="flex" key={rep.id}>
                  <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={ rep.image|| "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"} alt={`Image of ${rep.userName}`} />
                  <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">{rep.userName} </p>
                  <p className="text-sm text-gray-800">{rep.school} </p>
                  </div>
                  </div>
                ):null)
              ))
          ):(
            <p>No 2nd Year reps fetched</p>

          )}
        </div>


        </div>
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">

        <p className="max-w-lg mb-5 font-sans text-lg font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span className="inline-block mb-1 sm:mb-4">
        3rd Year Representatives
        </span>
        </p>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">

        {cReps !== null && cReps.length>0 ?(
              cReps.map(rep=>(
                ( rep !== null && rep.level === 'THIRD'?(
                  <div className="flex" key={rep.id}>
                  <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={ rep.image|| "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"} alt={`Image of ${rep.userName}`} />
                  <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">{rep.userName} </p>
                  <p className="text-sm text-gray-800">{rep.school} </p>
                  </div>
                  </div>
                ):null)
              ))
          ):(
            <p>No 3rd Year reps fetched</p>

          )}
        </div> 
        </div>
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">

        <p className="max-w-lg mb-5 font-sans text-lg font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span className="inline-block mb-1 sm:mb-4">
        4th Year Representatives
        </span>
        </p>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">

        {cReps !== null && cReps.length>0 ?(
              cReps.map(rep=>(
                ( rep !== null && rep.level === 'FOURTH'?(
                  <div className="flex" key={rep.id}>
                  <Image className="object-cover w-20 h-20 mr-4 rounded-full shadow" src={ rep.image|| "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"} alt={`Image of ${rep.userName}`} />
                  <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold">{rep.userName} </p>
                  <p className="text-sm text-gray-800">{rep.school} </p>
                  </div>
                  </div>
                ):null)
              ))
          ):(
            <p>No 4th Year reps fetched</p>

          )}
        </div>


        </div>
    </div>  
    )
}
