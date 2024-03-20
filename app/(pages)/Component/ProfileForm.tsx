
'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';
import pic from '@/public/ProfilePic.jpeg'
import { updateUser } from '@/app/lib/actions';



export default function ProfileForm({user}:{user:any}) {


    const [loading, setisLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({
      userName: '',
      file: null as { name: string, type: string, binary: string } | null,
      imagePreview: null as string | null,
      userId:user.id,
      cloudinaryFileUrl:'',
      email:'',
      userType:'',
      level:'',
      password:''
    });
  
    const toggleLoading = () => {
      setisLoading((prevLoading) => !prevLoading);
    };
  
   
  
    const router = useRouter()
  
   
  
    
  
  
    const handleSubmit = async () => {
      const event = window.event;
      if (!event) {
        return;
      }
      event.preventDefault();
  
      toggleLoading();
      try {

        toast.loading('Updating user...');
        const formDataToUpload = new FormData();
        formDataToUpload.append('file', formData.imagePreview as unknown as  Blob);
        formDataToUpload.append('upload_preset', 'psy5tipf'); 
    
        const response = await fetch('https://api.cloudinary.com/v1_1/dwav3nker/upload', {
          method: 'POST',
          body: formDataToUpload,
        });
    
        if (response.ok) {
          const data = await response.json();

          const cloudinaryFileUrl = data.secure_url;

    
          setFormData({
            ...formData,
            cloudinaryFileUrl: cloudinaryFileUrl,
          });
    

          const newFormData =  new FormData();

          newFormData.append('file',cloudinaryFileUrl)
          newFormData.append('userName',formData.userName)
         
          newFormData.append('userId',formData.userId)
          newFormData.append('email',formData.email)
          newFormData.append('userType',formData.userType)
          newFormData.append('password',formData.password)

        const create = await updateUser(newFormData)
    
        if(create){
          toast.dismiss()
          toast.success('User updated Successfully')
        }
        else{
          toast.dismiss()
          toast.error('Something went wrong')
        }
      }
      } catch (error) {
        toast.dismiss();
        toast.error('Server Side error');
      } finally {
        toggleLoading();
      }
    };
    
    
    useEffect(() => {
      setDisabled(loading);
    }, [loading]);

   
   
  
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
      const { name, value, files } = event.target as HTMLInputElement;
    
      if (name === 'file' && files && files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
          const base64String = reader.result?.toString().split(',')[1];
    
          setFormData({
            ...formData,
            file: {
              name: file.name,
              type: file.type,
              binary: base64String || '', 
            },
            imagePreview: reader.result as string,
          });
        };
    
        reader.readAsDataURL(file);
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    };
    
  return (
        <>
        
<section className="h-full w-full bg-gray-100/50 ">
    <form className="container max-w-2xl mx-auto shadow-md md:w-3/4 relative">
        <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                    <Link href="#" className="relative block">
                        <Image  src={formData.imagePreview || user.image || pic} className="mx-auto object-cover rounded-full h-16 w-16 " alt='Profile Pic' width={400} height={400} />
                    </Link>
                    <h1 className="text-gray-600">
                       {user.userName}
                    </h1>

                    <label htmlFor="file-upload" className='absolute right-0 pr-4'>
        <p>
            Change Avatar
        </p>
</label>
<input
  id="file-upload"
  name="file"
  type="file"
  className="sr-only"
  title='File upload'
  accept='.png,.jpeg,.jpg'
  onChange={handleChange}
/>
                </div>
            </div>
        </div>
        <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                    Account
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={user.email} value={formData.email}   onChange={handleChange} name='email'
/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Personal info
                    </h2>
                    <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                        <div>
                            <div className=" relative ">
                                <input type="text" id="user-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={user.userName} value={formData.userName}   onChange={handleChange} name='userName'
/>
                                </div>
                            </div>
                            <div>
                                <div className=" relative ">
                                    <input type="text" id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent cursor-not-allowed  " disabled placeholder={`${user.level} Year  `} name='level' 
                                    />
                                    </div>
                                </div>
                            <div>
                                <div className=" relative ">
                                    <input type="text" id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent cursor-not-allowed  " disabled placeholder={user.school}   name='school'
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 className="max-w-sm mx-auto md:w-4/12">
                                Change password
                            </h2>
                            <div className="w-full max-w-sm pl-2 mx-auto space-y-5 md:w-5/12 md:pl-9 md:inline-flex">
                                <div className=" relative ">
                                    <input type="password" id="user-info-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  "  placeholder='change Password' name='password' value={formData.password}   onChange={handleChange}/>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                <button type="submit" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={handleSubmit}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </section>


        </>
    )
}
