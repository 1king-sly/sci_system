'use client'
import React , {useState, useEffect} from 'react'
import clsx from 'clsx';
import Image from 'next/image';
import Button from '../../Component/Button';
import { addEvent } from '@/app/lib/actions';
import toast from 'react-hot-toast';


export default function Page() {
  const[visible,setVisible]= useState(false);
  const [loading, setisLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    venue: '',
    poster:'',
    imagePreview: null as string | null,
    speaker:'',
    host:'',
    time:'',
    desc:'',
   




   
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

    if(formData.title === ''|| formData.title===null || formData.date === ''|| formData.date===null || formData.venue === ''|| formData.venue===null || formData.speaker === ''|| formData.speaker===null ||   formData.time === ''|| formData.time===null  || formData.desc === ''|| formData.desc===null ){
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
          newFormData.append('date',formData.date)
          newFormData.append('venue',formData.venue)
          newFormData.append('speaker',formData.speaker)
          newFormData.append('host',formData.host)
          newFormData.append('time',formData.time)
          newFormData.append('desc',formData.desc)
          newFormData.append('title',formData.title)

          if(data){
            const create = await addEvent(newFormData);
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
  
  
  useEffect(() => {
    setDisabled(loading);
  }, [loading]);

 
 

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
    <div className='w-full'>
      <div className="bg-sky-100">
        <div className="border-l-2 text-center py-2 text-3xl bg-slate-400">
          <p>Name of Club</p>
        </div>

        <div className="bg-white mx-10 h-fit rounded shadow-sm ">
  
          <div id="main-content" className="flex-grow overflow-auto px-4 py-4">
            <div id="attendees">
            <div>
              <div className="bg-slate-600 ">
                <ul  className="flex justify-center items-center gap-3">
                <li>General information</li>
              </ul> 

            </div>
              <div>
                <div>
                  {/* <!-- Event banner --> */}
                  <div className="col-span-full">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Event Banner</label>
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

                </div>
                <div className="col-span-full py-5">
                  <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Title</label>
                  <div className="mt-2">
                    <input 
                    name="title" 
                    title='title'
                    id="title"
                    onChange={handleChange} 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">0/100</p>
                </div>
                <div className="col-span-full py-5">
                  <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Event Description</label>
                  <div className="mt-2">
                    <textarea 
                    name="desc"
                    id="Description"
                    title='Description'
                    placeholder='Event Description'                
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Displayed only on the event page. Add images by dragging them into the section above</p>
                </div>
                {/* Date and time*/}
                <div className="col-span-full py-5">
                  <label className="mb-3 block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Time & Date</label>                <div className='flex w-full '>
              <label className='p-2 '>Time</label>
              <input type='time' 
                name="time"
                id="time" 
                title='time'
                placeholder='Event Time' 
                onChange={handleChange}
                className='resize-none p-2 h-10 w-[10vw] border-2 flex items-center rounded-md outline-sky-200 overflow-hidden'
                ></input>
              <label className='p-2 '>Date</label>
               <input type='date'
                name="date"
                id="date"
                title='date'
                placeholder='Date of Event'
                onChange={handleChange}
                className='resize-none p-2 h-10 w-[10vw] border-2 flex items-center rounded-md outline-sky-200 overflow-hidden'
               ></input>
               </div>
               </div>
               <div className="w-full flex flex-row py-5 gap-6">
                  <div className='w-full'>
                    <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Event Venue</label>
                    <div className="mt-2">
                      <input type="text"
                        name="venue"
                        id="venue"
                        title='venue'
                        onChange={handleChange}
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    /></div>
                  </div>
                  <div className='w-full'>
                    <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Event Host</label>
                    <div className="mt-2">
                      <input type="text"
                        name="host"
                        id="host"
                        title='host'
                        onChange={handleChange}
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      /></div>
                  </div>
                </div>                  
                <div className="bg-slate-600 my-5 py-1">
                  <ul  className="flex px-5  items-center gap-5 list-disc">
                    <li>People</li>
                  </ul> 
                </div>
                {/* Speaker */}
                <div className='col-span-full py-5'>
                  <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Speaker</label>
                  <div className="mt-2 flex flex-row gap-4 ">
                  <label className="block text-sm rounded px-4 font-medium leading-6 text-gray-900">Name</label>
                    <input type="text"
                      name="speaker"
                      id="FirstName"
                      title='FirstName'
                      onChange={handleChange}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                    </div>

                <div className="bg-slate-600 my-5 py-1 flex justify-end pr-5 gap-3 text-white font-semibold">
                  <button type='submit'  className={clsx(`p-2`)}
                  onClick={handleSubmit}
                  > Publish</button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
