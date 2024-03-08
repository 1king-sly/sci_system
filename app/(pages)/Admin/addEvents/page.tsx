'use client'
import React , {useState } from 'react'
import pdf from '@/public/pdf.png'
import Image from 'next/image';
import Button from '../../Component/Button';

export default function page() {
  const [formData, setFormData] = useState({
    title: '',
    category: 'clusterId',
    level: '',
    file: null as { name: string, type: string, data: string } | null,
    imagePreview: null as string | null,
    cloudinaryFileUrl: null as string | null,
    });


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

  return (
    <div className='w-full'>
      <div className="bg-sky-100">
        <div className="border-l-2 text-center py-2 text-3xl bg-slate-400">
          <p>Name of Club</p>
        </div>
        <div className="flex justify-between items-center px-10 py-10">
          <ul className="flex gap-4"> 
            <li className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full'>Attendees</li>
            <li className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full'>Edit</li>
            <li className='cursor-pointer after:content-[""] after:w-0 after:h-0.5 after:m-auto after:bg-black after:block after:duration-500 hover:after:w-full'>Cohost</li> 
          </ul>
        </div>

        <div className="bg-white mx-10 h-fit rounded shadow-sm ">
  
          <div id="main-content" className="flex-grow overflow-auto px-4 py-4">
            <div id="attendees">
            <div>
              <p>
                Edit
              </p>
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
                /\.(jpg|jpeg|png|gif|jfif)$/i.test(formData.file?.name || '') ? (
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
                                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 h-[30px] "
                                >
                                  <span>Upload a Poster</span>
                                  <input
                                    id="file-upload"
                                    name="file"
                                    type="file"
                                    className="sr-only"
                                    // accept='.jpg,.jpeg,.png'
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
                    <input id="about" name="about" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">0/100</p>
                </div>
                <div className="col-span-full py-5">
                  <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Short description</label>
                  <div className="mt-2">
                    <textarea className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Displayed on chapter page and newsletters</p>
                </div>
                <div className="col-span-full py-5">
                  <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Event Description</label>
                  <div className="mt-2">
                    <textarea className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
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
                className='resize-none p-2 h-10 w-[10vw] border-2 flex items-center rounded-md outline-sky-200 overflow-hidden'
                ></input>
              <label className='p-2 '>Date</label>
               <input type='date'
                name="date"
                id="date"
                title='date'
                placeholder='Date of Event'
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
                        // placeholder='Event Venue'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    /></div>
                  </div>
                  <div className='w-full'>
                    <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Event Host</label>
                    <div className="mt-2">
                      <input type="text"
                        name="Host"
                        id="Host"
                        title='Host'
                        // placeholder='Host'
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      /></div>
                  </div>
                </div>
                {/* Thumbnail */}
                <div className="col-span-full py-5">
                  <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Event thumbnail</label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                    </svg>
                    <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Upload Image</button>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Displayed on chapter page, upcoming events page and social media</p>
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
                  <label className="block text-sm rounded px-4 font-medium leading-6 text-gray-900">First Name</label>
                    <input type="text"
                      name="SpeakerName"
                      id="SpeakerName"
                      title='SpeakerName'
                      // placeholder='Host'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                  <label className="block text-sm rounded px-4 font-medium leading-6 text-gray-900">Second Name</label>
                    <input type="text"
                    name="SpeakerName"
                    id="SpeakerName"
                    title='SpeakerName'
                    // placeholder='Host'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  <label className="block text-sm rounded px-4 font-medium leading-6 text-gray-900">Company</label>
                    <input type="text"
                    name="SpeakerName"
                    id="SpeakerName"
                    title='SpeakerName'
                    // placeholder='Host'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  <label className="block text-sm rounded px-4 font-medium leading-6 text-gray-900">Title</label>
                    <input type="text"
                      name="SpeakerTitle"
                      id="SpeakerTitle"
                      title='SpeakerTitle'
                      // placeholder='Host'
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    </div>
                    </div>
                  {/* Speaker's Biography */}
                  <div className="col-span-full ">
                    <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900"></label>Biography(displayed on event page)
                    <div className="mt-2">
                      <textarea className="block w-full rounded-md border-0 py-1.5 text-gray-900 bg-sky-100 "></textarea>
                    </div>
                  </div>
                {/* Speaker's Image */}
                <div className="col-span-full py-5">
                  <label className="block text-sm bg-gray-300 rounded px-4 font-medium leading-6 text-gray-900">Speaker's Image</label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <svg className="h-40 w-40 border-2 rounded text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                    </svg>
                    <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Upload Image</button>
                  </div>

                </div>



                <div className="bg-slate-600 my-5 py-1 flex justify-end pr-5 gap-3 text-white font-semibold">
                  <button type='submit' className=" p-2"> Publish</button>
                  <button className="p-2">Save draft</button>
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
