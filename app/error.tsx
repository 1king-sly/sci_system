'use client'
import React from 'react'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}:{
    error: Error & {digest? : string}
    reset: () => void
}) {
  useEffect(()=> {
    console.error(error);
  }, [error])
  return (
    <div className='items-center justify-center'>
        <h2>Something Went wrong!</h2>
        <button onClick={() => reset()} className='border rounded-lg bg-sky-400'>Try again</button> 
    </div>
  )
}
