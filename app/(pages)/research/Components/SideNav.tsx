import React from 'react'

export default function SideNav() {
  return (
    <>
                <div className="col-span-1 bg-slate-200 ">
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
        </div>
    </>
    )
}
