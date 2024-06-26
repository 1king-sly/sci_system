'use client'
import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { createProject } from '@/app/lib/actions'
import { useEffect } from 'react' 
import clsx from 'clsx'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
export default function CreateResearch({type}:{type:string}) {

    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const[visible,setVisible]= useState(false);
    const [loading, setisLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({
      title: '',
      poster:'',
      imagePreview: null as string | null,
      desc:'',
      body:'',
      type:type,
      partners:'',
      collaborators:'',
      background:'',
      statement:'',
      justification:'',
      approach:'',
      methodology:'',
      requirements:'',
      design:'',
      development:'',
      });
  
    const toggleLoading = () => {
      setisLoading((prevLoading) => !prevLoading);
    };
  

    const handleSubmit = async () => {
      const event = window.event;
      if (!event) {
        return;
      }
      event.preventDefault();
      console.log(formData)
  
      if(formData.title === ''|| formData.title===null || formData.desc === ''|| formData.desc===null || 
        formData.body === ''|| formData.body===null || formData.statement === ''|| formData.statement===null  ||
        formData.background === ''|| formData.background===null || formData.justification === ''|| formData.justification===null || 
        formData.approach === ''|| formData.approach===null || formData.methodology === ''|| formData.methodology===null ||
        formData.requirements === ''|| formData.requirements===null || formData.design === ''|| formData.design===null ||
        formData.development === ''|| formData.development===null
        ){
        toast.error('Please fill all the fields')
          toggleLoading();
          throw new Error('Missing fields')
        }  
        toggleLoading();

        try {
            toast.loading('Creating research project')
           
              const create = await createProject(formData);
              if (create) {
                toast.dismiss();
                toggleVisible();
                toast.success('Project created Successfully');
              } else {
                toast.dismiss();
                toast.error('Error creating Project');
              }
            
  
        } catch (error) {
          console.error('Error uploading file:', error);
        }finally{
          toggleLoading();
  
        }   
    };


   
    
    
    useEffect(() => {
      setDisabled(loading);
    }, [loading]);
  
   
   
  
    const handleChange = async (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>)  => {
      const { name, value, files } = event.target as HTMLInputElement;
    
      if (name === 'file' && files && files.length > 0) {
        const file = files[0];
  
        if (file) {
  
         
          const formDataToUpload = new FormData();
          formDataToUpload.append('file',file);
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

    const handleChangeQuill = (name:string,value: string) => {
      setValue(value);
      setName(name)
      setFormData({
        ...formData,
      [name]: value,
      });
    }
  return (
   <>
     <div className='w-full h-screen '>
      <div className='bg-sky-100'>
      <div className='bg-white mx-10 rounded h-fit'>
      <div className='px-4 py-4'>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your Title</label>
        <input name="title" 
               title='title'
               id="title" 
               placeholder='Title' 
        onChange={handleChange}
        className='mt-2 border-2 w-full py-2 text-lg pl-4  uppercase mb-5'></input>
        
        <div className="col-span-full mb-5">
                    <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Blog Banner</label>
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

        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your Project Summary </label>
        <ReactQuill theme='snow'  onChange={(value)=> handleChangeQuill('desc',value)} 
         placeholder='Write your Project Summary...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your Project Body</label>
        <ReactQuill theme='snow' onChange={(value)=> handleChangeQuill('body',value)} placeholder='Write your Project description...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your background statement</label>
        <ReactQuill theme='snow' onChange={(value)=> handleChangeQuill('background',value)}  placeholder='Write your background statement...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your Problem Statement</label>
        <ReactQuill theme='snow'  onChange={(value)=> handleChangeQuill('statement',value)}  placeholder='Write your Problem statement...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your Justification</label>
        <ReactQuill theme='snow' onChange={(value)=> handleChangeQuill('justification',value)}  placeholder='Write your justification...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your Research Approach</label>
        <ReactQuill theme='snow' onChange={(value)=> handleChangeQuill('approach',value)} placeholder='Write your Project Summary...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your methodology</label>
        <ReactQuill theme='snow'  onChange={(value)=> handleChangeQuill('methodology',value)}  placeholder='Write your Project methodology...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your System Requirements</label>
        <ReactQuill theme='snow' onChange={(value)=> handleChangeQuill('requirements',value)}  placeholder='Write your Project System Requirements...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your System Design</label>
        <ReactQuill theme='snow'  onChange={(value)=> handleChangeQuill('design',value)}  placeholder='Write your Project System Design...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your System Development</label>
        <ReactQuill theme='snow' onChange={(value)=> handleChangeQuill('development',value)}  placeholder='Write your Project System development...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your Development Team </label>
        <ReactQuill theme='snow' onChange={(value)=> handleChangeQuill('collaborators',value)}  placeholder='Write your Project development team (name and role)...' className='mt-2 border-2 mb-5'></ReactQuill>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Partners</label>
        <ReactQuill theme='snow'  onChange={(value)=> handleChangeQuill('partners',value)} placeholder='Write your Project Partners...' className='mt-2 border-2 mb-5'></ReactQuill>
        <div className="bg-slate-600 my-5 py-1 flex justify-end pr-5 gap-3 text-white font-semibold">
          <button type='submit'  className={clsx(`p-2`)}
            onClick={handleSubmit}
          > Publish</button>
        </div> 
      </div>
      </div>
      </div>
    </div></>
  )
}
