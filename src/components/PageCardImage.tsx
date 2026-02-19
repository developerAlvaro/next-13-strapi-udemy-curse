import { formatDate } from '@/helpers/format-date-helper';
import { Post } from '@/interfaces/post'
import Link from 'next/link';
import React from 'react'
interface Props {
    id:string,
    post: Post
}
const PageCardImage = ({id, post}: Props) => {
    
    return (
        <>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href={`blog/${post.slug}`}>
                    <img className="rounded-t-lg w-full" src={post.image[0].url} 
                                                    alt={`Image ${post.title}`} 
                                                    width={484}
                                                    height={324}/>
                </Link>
                <div className="p-5">
                     <Link href={`blog/${post.slug}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                    </Link>
                    <p className="text-gray-500 mb-2">{formatDate(post.publishedAt)}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {post.description}
                    </p>
                   
                    <Link href={`blog/${post.slug}`} className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                        Read more
                        <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PageCardImage
