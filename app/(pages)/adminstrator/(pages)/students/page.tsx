'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import pic from '@/public/ProfilePic.jpeg'
import Search from '@/app/(pages)/Component/Search'
import { fetchStudents } from '@/app/lib/actions';
import { ClubType,RoleType,School,UserType,Level } from '@prisma/client';

export default function Page({searchParams}:{searchParams:string}) {

  const params = new URLSearchParams(searchParams);
  const q = params.get('query') || '';

  const [students, setStudents] = useState<{
    id: number;
    userName: string;
    email: string;
    hashedPassword: string;
    createdAt: Date;
    updatedAt: Date;
    image: string | null;
    club: ClubType | null;
    role: RoleType;
    school: School | null;
    userType: UserType | null;
    level: Level | null;
  }[]>([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 4; 

  const fetchUsers = async () => {
    const data = await fetchStudents(currentPage, perPage,q);
    if (data && data.length > 0) {
      setStudents(data);
    } else {
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  return (
    <>
      
<div className="container  px-4 mx-auto sm:px-8 w-full h-full">
    <div className="py-8">
        <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
            <h2 className="text-2xl leading-tight">
                Users
            </h2>
            <div className="text-end">
                <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                    
                        <Search/>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="button" onClick={()=>fetchUsers()}>
                            Filter
                        </button>
                    </form>
                </div>
            </div>
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    User
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    Role
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    Created at
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    year
                                </th>
                                <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                        {students !== null ?(

                students.map((student)=>(
                  <tr key={student.id}>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <div className="flex items-center">
                          <div className="flex-shrink-0">
                              <Link href="#" className="relative block">
                                  <Image alt="profil" src={student.image || pic} className="mx-auto object-cover rounded-full h-10 w-10 " width={400} height={400} />
                              </Link>
                          </div>
                          <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                  {student.userName}
                              </p>
                          </div>
                      </div>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                          {student.userType}
                      </p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {student.createdAt.toLocaleDateString()}
                      </p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                          <span aria-hidden="true" className="absolute inset-0   opacity-50">
                          </span>
                          <span className="relative">
                            {student.level} 
                          </span>
                      </span>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                      <Link href={`/adminstrator/students/${student.id}`} className="text-indigo-600 hover:text-indigo-900">
                          Edit
                      </Link>
                  </td>
                </tr>
                ))


                          

                        ):null}

                         
                        </tbody>
                    </table>
                    <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
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
            </div>
        </div>
    </div>

    </>
  )
}
