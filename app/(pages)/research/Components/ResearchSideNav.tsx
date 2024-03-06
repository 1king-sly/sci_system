import React from 'react'
import clsx from 'clsx';

export default function ResearchSideNav() {
  const links = [
    {
    name:'What we do',href:'/department#Whatwedo',id:'Whatwedo',
},
    {
    name:'Research Areas',href:'/department#ResearchArea',id:'ResearchArea',
},
    {
    name:'Interdisciplinary Programmes',href:'/department#Interdisplinary',id:'Interdisplinary',
},
    {
    name:'Find Funding',href:'/department#Funding',id:'Funding',
},
    {
    name:'Getting Started with Proposals',href:'/department#Proposals',id:'Proposals',
},
{
  name:'Featured Projects',href:'/department#Projects',id:'Projects',
},
]
  return (
    <>

  <div className="col-span-1">
    <div className="px-4 py-8 fixed  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-10 lg:py-10">
    <div className="  h-full ">
    
    {/* <div className='w-[20vw] mt-10 h-full flex flex-col  fixed items-center'> */}
    <div className="text-center  mb-4 items-center justify-center gap-2">

    {links.map((link) => {
        return (
                <div
                    className={clsx(`cursor-pointer w-full rounded-md flex  items-center justify-between text-sm hover:bg-sky-100 hover:text-blue-600 md:p-2 md:px-3 gap-2`,)}
                    // key={link.name} onClick={() => scrollToSection(link.id)}
                >
                    <a className="mb-2 mr-4 text-sm font-bold  tracking-wider uppercase" key={link.name} >{link.name}</a>
                </div>
        );
    })}
{/* </div> */}
</div>
</div>
</div>
</div>
    </>
    )
}
        {/* <div className="col-span-1 bg-slate-200 ">
          <div className="px-4 mx-auto items-center ">
            <div className="h-full fixed ">
              <div className=" flex mb-4 mt-3 gap-2">
              
                <div>   <h6 className="mb-2 mr-4 text-center text-sm font-bold leading-5  uppercase">
                  <a href="#Whatwedo">What we do</a> 
                  </h6>
                </div>
              
              </div>
                <div className=" flex mb-4 gap-2">
                    
                    <div>  
                       <h6 className="mb-2 mr-4 text-center text-sm font-bold leading-5  uppercase">
                      <a href="#ResearchArea">Research Areas</a> 
                      </h6>
                    </div>
                  
                  </div>
                  <div className=" flex mb-4 gap-2">
                    
                    <div>  
                      
                  <h6 className="mb-2 mr-4 text-sm text-center font-bold leading-5 uppercase">
                      <a href="#Interdisplinary">Interdisciplinary Programmes</a> 
                      </h6>
                    </div>
                  
                  </div>
                
                  <div className=" flex  mb-4 gap-2">
                    
                    <div>   <h6 className="m`b-2 mr-4 text-sm text-center font-bold leading-5  uppercase">
                        <a href="#Funding">Find Funding</a>
                      </h6>
                    </div>
                  
                  </div>
                  <div className=" flex mb-4 gap-2">
                   
                    <div>  
                       <h6 className="mb-2 mr-4 text-sm text-center font-bold leading-5 uppercase">
                       <a href="#Proposals">Getting Started with Proposals</a> 
                      </h6>
                    </div>
                  
                  </div>
                  <div className=" flex gap-2">
                    
                    <div>  
                       <h6 className="mb-2 mr-4 text-sm text-center font-bold leading-5  uppercase">
                       <a href="#Projects">Featured Projects</a> 
                      </h6>
                    </div>
                  
                  </div>
            
            </div>

          </div>
        </div> */}