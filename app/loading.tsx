"use client";

import React from 'react'

const LoadingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <div className='loader'></div>
      <h1 className='text-2xl mt-2'>Loading Portfolio...</h1>
    </div>
  )
}

export default LoadingPage