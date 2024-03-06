import React from 'react'

export default function ResearchContent() {
  return (
    <>
        <div className="col-span-4 border-l-2 p-5">
            {/* <!-- what we do --> */}
            <a href="Projects.html">
              <div  className="relative flex flex-col justify-center text-center">
                <img src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="absolute inset-0 object-cover w-full h-full" alt="" />
                <div className="relative bg-gray-900 bg-opacity-75 ">
                  <div className="px-4 py-16 ">
                    
                      <div className="px-4 py-16">
                        <h2 className=" mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                          The quick, brown fox <br className="hidden md:block" />
                          jumps over a lazy dog
                        </h2>
                        <p className=" mb-4 text-gray-400 md:text-lg">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
                        </p>
                
              
                      </div>
                      {/* <!-- buttons --> */}
                     <div className="flex justify-around gap-4 text-gray-100">
                        <button className="border-2 px-6 py-1 ">
                          Propose Your Own Research
                        </button>
                        <button className="border-2 px-6 py-1 ">
                          Find Funding
                        </button>
                     </div>
                   
                  </div>
                </div>
                      </div>
            </a>
         
          {/* <div className="bg-sky-400 bg-opacity-30 px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-h-screen-xl md:px-24 lg:px-8 lg:py-4 lg:m-6">
        
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
              <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
               PROGRAMMES PAGE </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
                  </p>
                </div>
                
              </div>
            </div>
            
          </div>   */}
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
             {/* <!-- cards --> */}
            <div className="grid gap-10 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-3">
              <a href="#Whatwedo" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img className="object-cover w-full h-56 md:h-64 xl:h-56" src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-2xl font-bold text-gray-100">What we do</p>
                  </div>
                </div>
              </a>
              <a href="#ResearchArea" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img className="object-cover w-full h-56 md:h-64 xl:h-56" src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">Research Areas</p>
                   
                  </div>
                </div>
              </a>
              <a href="#Interdisplinary" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img className="object-cover w-full h-56 md:h-64 xl:h-56" src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">Interdisciplinary Programmes</p>
                    
                  </div>
                </div>
              </a>
              <a href="#Funding" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img className="object-cover w-full h-56 md:h-64 xl:h-56" src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">Find Funding</p>
                   
                  </div>
                </div>
              </a>
              <a href="#Proposals" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img className="object-cover w-full h-56 md:h-64 xl:h-56" src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">Getting Started with Proposals</p>
                    
                  </div>
                </div>
              </a> <a href="#Projects" aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded border-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img className="object-cover w-full h-56 md:h-64 xl:h-56" src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
                  <div className="absolute inset-0 px-6 py-24 text-center bg-black bg-opacity-60 hover:bg-opacity-100">
                    <p className="mb-4 text-lg font-bold text-gray-100">Featured Projects</p>
                    
                  </div>
                </div>
              </a>
              
            </div>

          </div>
      </div>
    </>
    )
}
