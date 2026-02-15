import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='grid grid-cols-1 place-items-center h-screen'>
        <div className='text-center space-y-4'>
            <h1 className='text-3xl'>Not Found</h1>
            <p>Could not requested resource</p>
            <Link href="/blog" className='inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'>
                Go back blog
                <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
            </Link>
        </div>
      
    </div>
  )
}

export default NotFound
