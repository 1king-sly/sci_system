'use client'
import React, { useState,useEffect} from 'react'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { addBlog, updateEvent } from '@/app/lib/actions'
import clsx from 'clsx'
export default function CreateGallery({id}:{id:number}) {

    const [value, setValue] = useState('');
    const[visible,setVisible]= useState(false);
    const [loading, setisLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [formData, setFormData] = useState({
      id: id,
      imagePreview: {} as { [key: string]: Blob } ,
     fileUrls: {} as { [key: string]: string },      });
  
    const toggleLoading = () => {
      setisLoading((prevLoading) => !prevLoading);
    };
  

    const handleSubmit = async () => {
      const event = window.event;
      if (!event) {
        return;
      }
      event.preventDefault();
  
     
        toggleLoading();

        console.log(formData)

     
    try {
        // toast.loading('Publishing Gallery');

        const formDataToUpload = new FormData();
  
        Object.values(formData.imagePreview || {}).forEach((file, index) => {
            formDataToUpload.append(`file${index}`, file as unknown as Blob);

           

          
            setFormData((prevFormData) => ({
              ...prevFormData,
              fileUrls: { ...prevFormData.fileUrls, [index]: file },
            }));
          });

      
        formDataToUpload.append('upload_preset', 'psy5tipf');
          


        const response = await fetch('https://api.cloudinary.com/v1_1/dwav3nker/upload', {
          method: 'POST',
          body: formDataToUpload,
        });
  
        if (!response.ok) {
         console.log(response)
          throw new Error('Failed to upload file to Cloudinary');
        }
  
        const data = await response.json();
        console.log(data)
  
        const fileUrl = data.secure_url;

        console.log(fileUrl)
  
       
       
  
        const newFormData = new FormData();

 
        newFormData.append('id',formData.id as unknown as string)
       
  
          // const create = await updateEvent(formData);
          // if (create) {
          //   toast.dismiss();
          //   toggleVisible();
          //   toast.success('Gallery published Successfully');
          // } else {
          //   toast.dismiss();
          //   toast.error('Error publishing gallery');
          // }
        
      } catch (error) {
        toast.dismiss()
        toast.error('Error publishing gallery');
        console.error('Error uploading file:', error);
      } finally {
        toggleLoading();
      }
    };

   
    
    
    useEffect(() => {
      setDisabled(loading);
    }, [loading]);
  
   
   
  
   
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = event.target;
      
        if (name === 'file' && files && files.length > 0) {
          console.log('files', files)
          try {
           
      
            const formDataToUpload = new FormData();

            formDataToUpload.append('upload_preset', 'psy5tipf');

      
          
            Array.from(files).forEach(async (file, index) => {
              formDataToUpload.append(`file${index}`, file as unknown as Blob);

            


              setFormData((prevFormData) => ({
                ...prevFormData,
                imagePreview: { ...prevFormData.imagePreview, [index]: file },
              }));
            }


              // const response = await fetch('https://api.cloudinary.com/v1_1/dwav3nker/upload', {
              //   method: 'POST',
              //   body: formDataToUpload,
              //   headers: {
              //       'Content-Type': 'application/json',

              //     },
              //   mode:'no-cors',
              // });

              // console.log(response)
        
              // if (!response.ok) {
              //   throw new Error('Failed to upload file to Cloudinary');
              // }
        
              // const data = await response.json();
              // const fileUrls = data.secure_url;

              // const reader = new FileReader();

              // reader.onload = () => {
              //   const base64String = reader.result?.toString().split(',')[1];
        
               
          
              //   setFormData({
              //     ...formData, 
              //     imagePreview: { ...formData.imagePreview, [index]: file},
              //   });
              // };
          
              // reader.readAsDataURL(file);,
  
         ) }catch (error) {
            console.error('Error uploading file:', error);
          }
        }
      };
      
  

    const toggleVisible = () => {
      setVisible((prev) => !prev)
    }

  
  return (
    <div className='w-full h-full '>
      <div className='bg-sky-100'>
       
      <div className='bg-white mx-10 rounded h-fit'>
      <div className='px-4 py-4'>
        <label className='block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900'>Add Your Images</label>
        
        <div className="col-span-full mb-5">
                   
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      {/* Poster */}
                      <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                        </svg>
                        <div className="w-full flex justify-center">
                          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">

                              {/* {formData.imagePreview ? (
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
              ) : null}  */}
                              
                              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 h-[30px] "
                                >
                                  <span>Upload Images</span>
                                  <input
                                    id="file-upload"
                                    name="file"
                                    type="file"
                                    className="sr-only"
                                    accept='.jpg,.jpeg,.png'
                                    onChange={handleChange}
                                    multiple
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

       
       
        <div className="bg-slate-600 my-5 py-1 flex justify-end pr-5 gap-3 text-white font-semibold">
          <button type='submit'  className={clsx(`p-2`)}
            onClick={handleSubmit}
          > Upload</button>
        </div> 
      </div>
      </div>
      </div>
    </div>

  )
  
    
}
