
import PageCardImage from '@/components/PageCardImage';
import PageHeader from '@/components/PageHeader';
import PagePagination from '@/components/PagePagination';
import { FetchApi } from '@/helpers/fetchApi';
import { Post } from '@/interfaces/post';
import React from 'react'

const getData = async (page = 1, pageSize = 2) => {
    const path = "/posts";
    const urlParams = {
        populate: "*",
        sort: { createdAt: "desc" },
        pagination: { page: page, pageSize: pageSize }
    };
    const options = {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
        next: { revalidate: 10 } //se mantiene en cache por 10 segundos en cache.

    }

    let {data, meta } = await FetchApi(path, urlParams, options);
    return {data, pagination: meta.pagination};

}

interface BlogProps {
    searchParams: { 
        page?: string;
     }
}
const Blog = async ({searchParams}: BlogProps) => {
    const {page = '1'} = searchParams;
    console.log("Current page:", page);
    const {data, pagination} = await getData(page ? parseInt(page) : 1);
    
    return (
        <div className='space-y-8'>
            <PageHeader header="Blog" />
            
            <div className='grid  gap-4'>
                {data.map((post: Post) => (
                        <PageCardImage  key={post.id} id = {post.id.toString()} post = {post} />
                    )

                )}
            </div>
            <PagePagination pagination={pagination}/>
        </div>
    )
}

export default Blog
