import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import StaffPic from '@/public/Staff.jpeg'
import { fetchStaff } from '@/app/lib/actions';


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

export default function ITStaff() {

    const [staffs, setStaffs] = useState<User[] | null>(null); 
    const [loading, setLoading] = useState(true);

   

useEffect(() => {
    const fetchStaffs = async () => {
        try {
<<<<<<< HEAD
            const staffsData = await fetchStaff(1,3,'IT');
=======
            const staffsData = await fetchStaff(1,2,'remove error');
>>>>>>> 3489ea29bfaaee8b6ac6b3cc814f7e818a550ae3
            if (staffsData !== undefined) {
                setStaffs(staffsData);
            } else {
                console.error('No staffs data received');
            }
        } catch (error) {
            console.error('Error fetching staff:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchStaffs();
}, []);

    if (loading) {
        return <p className='w-full h-full flex items-center justify-center'>Fetching Staff members...</p>;
    }
  return (
    <>
        <div id="staff" className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
            </div>
            <h2 className="max-w-lg underline mb-6 font-sans text-left text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Members of Staff </h2>
            </div>
        <div className="grid max-w-screen gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-3 sm:mx-auto">

            { staffs !== null && staffs.length>0 ?(
                staffs.map(staff => (
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl" key={staff.id}>
                <Image src={staff.image || StaffPic}  alt={`image of ${staff.userName}`}
                className="object-cover w-full h-56 md:h-64 xl:h-80"></Image>
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">{staff.userName} 
                    </p>
                    <p className="text-sm tracking-wide text-gray-300">
                        Small Description of the staff, achievements
                    </p>
                </div>
            </div>

                )
                  )
            ):(
                <p>No Staff  members fetched</p>

            )}
        </div>

        </div>
    </>
  )
}
