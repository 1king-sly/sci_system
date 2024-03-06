'use client'
import Button from '@/app/(ui)/Component/Button'
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import pdf from '@/public/pdf.png'

export default function page() {
  const[visible,setVisible]= useState(false);
  const [loading, setisLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'clusterId',
    level: '',
    file: null as { name: string, type: string, data: string } | null,
    imagePreview: null as string | null,
    cloudinaryFileUrl: null as string | null,
    });

  const toggleLoading = () => {
    setisLoading((prevLoading) => !prevLoading);
  };

 

  // const router = useRouter();


  // const handleSubmit = async () => {
  //   const event = window.event;
  //   if (!event) {
  //     return;
  //   }
  //   event.preventDefault();
  
  //   toggleLoading();
  //   try {
  //     toast.loading('Uploading document...');
  
  //     const formDataToUpload = new FormData();
  //     formDataToUpload.append('file', formData.imagePreview as unknown as  Blob);
  //     formDataToUpload.append('upload_preset', 'psy5tipf'); 
  
  //     const response = await fetch('https://api.cloudinary.com/v1_1/dwav3nker/upload', {
  //       method: 'POST',
  //       body: formDataToUpload,
  //     });
  
  //     if (response.ok) {
  //       const data = await response.json();

  //       const cloudinaryFileUrl = data.secure_url;

  
  //       setFormData({
  //         ...formData,
  //         cloudinaryFileUrl: cloudinaryFileUrl,
  //       });
  
  //       toast.dismiss();
  //       toast.loading('Creating exam...');

  //       const newFormData =  new FormData();

  //       newFormData.append('file',cloudinaryFileUrl)
  //       newFormData.append('title',formData.title)
  //       newFormData.append('level',formData.level)
  //       newFormData.append('category',formData.category)

  //       const create = await createExam(newFormData);
        
  //       if (create) {
  //         toast.dismiss();
  //         toggleVisible();
  //         toast.success('Exam created Successfully');
  //       } else {
  //         toast.dismiss();
  //         toast.error('Error creating exam');
  //       }
  //     } else {
  //       toast.dismiss();
  //       toast.error('Error uploading file');
  //     }
  //   } catch (error) {
  //     toast.dismiss();
  //     toast.error('Server Side error');
  //   } finally {
  //     toggleLoading();
  //   }
  // };
  
  
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
            data: base64String || '', 
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

  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }
  return (
    <>
<div className='w-full flex flex-col justify-center items-center bg-gray-200'>
    {/* <div className="my-10 w-full flex justify-center">
      <div className="w-2/5 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">

    <div className="mt-4 flex text-sm leading-6 text-gray-600">
    <label
      htmlFor="file-upload"
      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 w-[110px] h-[30px] "
    >
      <span>Upload a file</span>
      <input
        id="file-upload"
        name="file"
        type="file"
        className="sr-only"
        // onChange={handleChange}
        // disabled={disabled}
        />
    </label>
    <p className="pl-1">or drag and drop</p>
  </div>
  </div>
  </div> 
  </div> */}
          <form  className={clsx(`w-[80vw] flex flex-col gap-2 mx-auto`)}>{/*!visible && */}
            <div className='w-full flex justify-center items-center flex-col gap-2'>
              <textarea
                name="title"
                id="title"
                title='title'
                placeholder='Event Title'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                // value={formData.title}
                // onChange={handleChange}
                // disabled={disabled}
              ></textarea>
               <textarea
                name="date"
                id="date"
                title='date'
                placeholder='Date of Event'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                // value={formData.title}
                // onChange={handleChange}
                // disabled={disabled}
              ></textarea>
 <textarea
                name="time"
                id="time"
                title='time'
                placeholder='Event Time'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                // value={formData.title}
                // onChange={handleChange}
                // disabled={disabled}
              ></textarea>
               <textarea
                name="venue"
                id="venue"
                title='venue'
                placeholder='Event Venue'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                // value={formData.title}
                // onChange={handleChange}
                // disabled={disabled}
              ></textarea>
               <textarea
                name="speaker"
                id="speaker"
                title='speaker'
                placeholder='Speaker'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                // value={formData.title}
                // onChange={handleChange}
                // disabled={disabled}
              ></textarea>       
              <textarea
                name="moderator"
                id="moderator"
                title='moderator'
                placeholder='Moderator'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                // value={formData.title}
                // onChange={handleChange}
                // disabled={disabled}
              ></textarea>            
              
              {/* <label>
                <select
                  name='level'
                  className='bg-white outline-sky-400 px-2 py-1 rounded-md w-80 text-gray-800 text-sm'
                  required
                  title='level'
                  // value={formData.level}
                  // onChange={handleChange}
                  // disabled={disabled}
                  
                >
                  <option disabled value=''>
                    Choose Form Level
                  </option>
                  <option value='Form1'>Form 1</option>
                  <option value='Form2'>Form 2</option>
                  <option value='Form3'>Form 3</option>
                  <option value='Form4'>Form 4</option>
                </select>
              </label> */}
      

            </div>

        <div className="w-full flex justify-center">
              <div className="w-2/5 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">

                  {formData.imagePreview ? (
    /\.(jpg|jpeg|png|gif|jfif)$/i.test(formData.file?.name || '') ? (
      <Image
        src={formData.imagePreview}
        alt="File Preview"
        className="mb-4 max-w-full max-h-96"
        width={150}
        height={150}
      />
    ) : (
      <Image
        src={pdf}
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
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 w-[10vw] h-[30px] "
                    >
                      <span>Upload a Poster</span>
                      <input
                        id="file-upload"
                        name="file"
                        type="file"
                        className="sr-only"
                        // onChange={handleChange}
                        // disabled={disabled} 
                        />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full md:w-2/5 flex justify-end'>
              <Button
                type='submit'
                // onClick={handleSubmit}
                // disabled={disabled}
              >
                Submit
              </Button>
            </div>
          </form>  

  </div>
  </>
  )
}
    {/* <div className='justify-center '>
      <form action="/upload" method="post" encType="multipart/form-data">
        <label htmlFor="fileInput">Select a file:</label>
        <input type="file" id="fileInput" name="file" accept=".jpg, .jpeg, .png, .gif" />
        <button type="submit">Upload</button>
      </form>
    </div> */}