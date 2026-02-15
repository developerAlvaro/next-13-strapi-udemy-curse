import PageHeader from '@/components/PageHeader';
import { FetchApi } from '@/helpers/fetchApi';
import { formatDate } from '@/helpers/format-date-helper';
import { Post } from '@/interfaces/post';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

const getData = async (slug: string) => {
    const path = "/posts";
    const urlParams = {
        populate: "*",
        filters:{slug: slug}
    };
    const options = {
        method: "GET",
        headers: {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        },
        next: { revalidate: 10 } //se mantiene en cache por 10 segundos en cache.

    }

    let {data} = await FetchApi(path, urlParams, options);
    return data[0];

}

const Slug = async ({params}: Params) => {
    
    const post: Post = await getData(params.slug);
    if (!post) {
        return notFound();
    }
    
  return (
   <div  className="space-y-8">
                <div className="p-6 text-center">
                    <PageHeader header={post.title} />
                    <p className='text-gray-500'>
                        {formatDate(post.createdAt)}
                    </p>
                    <img className="rounded-lg mx-auto" src={post.image[0].url} alt={`Image ${post.title}`} width={800} height={500}/>
                        <p className='mt-4 text-lg leading-relaxed text-gray-700'>
                            {post.description}
                        </p>
                    <div className='mt-6 text-left'>
                        {post.body.map((block, index) => (
                            <div key={index}>
                                {block.children.map((child, childIndex) => (
                                    <p key={childIndex} className='mb-4 text-lg leading-relaxed text-gray-700'>
                                        {child.text}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <Link href="/blog" className='inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'>
                        Go back blog
                        <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                    </Link>
                </div>
                
                
            </div>
  )
}

export default Slug
