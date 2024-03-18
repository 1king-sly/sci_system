'use client'
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { addBlog } from '@/app/lib/actions'
import Button from '../../Component/Button'

export default function page() {
    const [value, setValue] = useState('');
    const[visible,setVisible]= useState(false);
    const [loading, setisLoading] = useState(false);

    const [formData, setFormData] = useState({
      title: '',
      desc:'',
      poster:'',
      imagePreview: null as string | null,
    });

    const toggleLoading = () => {
      setisLoading((prevLoading) => !prevLoading);
    };
  
    const handleSubmit = async () => {
      const blog = window.event;
      if (!blog) {
        return;
      }
      blog.preventDefault();
  
      if(formData.title === ''|| formData.title===null || formData.desc === ''|| formData.desc===null ){
        toast.error('Please fill all the fields')
          toggleLoading();
          throw new Error('Missing fields')
  
  
  
        }
  
  
        toggleLoading();
  
  
        try {
          toast.loading('Publishing Event')
          const formDataToUpload = new FormData();
          formDataToUpload.append('file',formData.imagePreview as unknown as  Blob);
          formDataToUpload.append('upload_preset', 'psy5tipf');
  
          const response = await fetch('https://api.cloudinary.com/v1_1/dwav3nker/upload', {
            method: 'POST',
            body: formDataToUpload
          });
  
  
          if (!response.ok) {
            throw new Error('Failed to upload file to Cloudinary');
          }
  
          const data = await response.json();
  
          const fileUrl = data.secure_url;
  
          setFormData(prevFormData => ({
              ...prevFormData,
              poster: fileUrl,
            }));
  
  
            const newFormData =  new FormData();
  
            newFormData.append('poster',fileUrl)
            newFormData.append(value,formData.desc)
            newFormData.append('title',formData.title)
  
            if(data){
              const create = await addBlog(newFormData);
              if (create) {
                toast.dismiss();
                toggleVisible();
                toast.success('Event created Successfully');
              } else {
                toast.dismiss();
                toast.error('Error creating Event');
              }
            }
  
        } catch (error) {
          console.error('Error uploading file:', error);
        }finally{
          toggleLoading();
  
        }   
    };

    const handleChange = async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>)  => {
      const { name, value, files } = event.target as HTMLInputElement;
    
      if (name === 'file' && files && files.length > 0) {
        const file = files[0];
  
        if (file) {
  
         
          const reader = new FileReader();
  
          reader.onload = () => {
            const base64String = reader.result?.toString().split(',')[1];
    
           
      
            setFormData({
              ...formData, 
              imagePreview: reader.result as string,
            });
          };
      
          reader.readAsDataURL(file);
  
        
        }
       
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    };

    const toggleVisible = () => {
      setVisible((prev) => !prev)
    }
  return (
    <div className='w-full h-full'>
      <div className='mx-20 my-10'>
        <label className='text-xl font-serif'>Add Your Title:</label>
        <input name='Title' id='Title' placeholder='Title' 
        onChange={handleChange}
        className='border-2 w-full py-2 text-xl pl-4 font-black font-mono uppercase mb-5'></input>
        
        <div className="col-span-full mb-5">
                    <label className="block font-medium leading-6 text-gray-900 text-xl font-serif">Blog Banner</label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {/* Poster */}
                      <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                        </svg>
                        <div className="w-full flex justify-center">
                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">

                              {formData.imagePreview ? (
                /\.(jpg|jpeg|png|gif|jfif)$/i.test(formData.imagePreview || '') ? (
                  <Image
                    src={formData.imagePreview}
                    alt="File Preview"
                    className="mb-4 max-w-full max-h-96"
                    width={150}
                    height={150}
                  />
                ) :
                (
                  <Image
                    src={formData.imagePreview}
                    alt="Document Preview"
                    className="mb-4 max-w-full max-h-96"
                    width={150}
                    height={150}
                  />
                )
              ) : null} 
                              
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 h-[30px] "
                                >
                                  <span>Upload a Poster</span>
                                  <input
                                    id="file-upload"
                                    name="file"
                                    type="file"
                                    className="sr-only"
                                    accept='.jpg,.jpeg,.png'
                                    onChange={handleChange}
                                    />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>

        <label className='text-xl font-serif'>Add Your Blog Body:</label>
        <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Write your Blog...' className='border-2 mb-5'></ReactQuill>
        <Button onClick={handleSubmit}>Publish</Button>
      </div>
    </div>
  )
}
