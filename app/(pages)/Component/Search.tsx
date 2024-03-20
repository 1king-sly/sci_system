'use client'
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function Search() {

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const {replace} = useRouter()
    
    const handleSearch = useDebouncedCallback( (term:string) =>{
    
    const params = new URLSearchParams(searchParams)
    
     if(term){
      params.set('query',term)
     }
     else{
      params.delete('query')
     }

     replace(`${pathname}?${params.toString()}`)

    },300)
  return (
    <>
    
    <div className=" relative ">
                        <input type="text" id="search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="search ..." name='search'  onChange={(e)=>{
        handleSearch(e.target.value)
      }}
      />
     </div>
    </>
  )
}
