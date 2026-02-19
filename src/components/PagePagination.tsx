import { cn } from '@/helpers/classnames';
import Link from 'next/link';
import React from 'react'
interface PagePaginationProps {
    pagination: {
        page: number; //pagina actual
        pageSize: number; //cantidad de items por pagina
        pageCount: number; //cantidad de paginas totales
        total: number; //cantidad total de items
    }
}
const PagePagination = ({ pagination }: PagePaginationProps) => {
    const { page, pageSize, pageCount, total } = pagination;
    
    const classNumber = "flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-10 h-10 focus:outline-none";
    const classActive = "flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border border border-default-medium hover:text-fg-brand font-medium text-sm w-10 h-10 focus:outline-none";
    const classPrevious = "flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-10 focus:outline-none";
    const classNext = "flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-10 focus:outline-none";

    return (
        <>
            <nav aria-label="Page navigation example" className='text-center'>
                <ul className="inline-flex -space-x-px">
                    <li>
                        <Link href={
                            page > 1 ? `/blog?page=${page - 1}` : `/blog?page=${page}`
                        } className={cn(classPrevious, {"opacity-50 pointer-events-none": page === 1,})}>Previous</Link>
                    </li>       
                    {
                        Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNumber) => (
                            <li key={pageNumber}>
                                
                                <Link href={`/blog?page=${pageNumber}`} className={pageNumber === page ? classActive : classNumber}>{pageNumber}</Link>
                            </li>
                        ))  
                    }
                    <li>
                        <Link href={
                            page < pageCount ? `/blog?page=${page + 1}` : `/blog?page=${page}`
                        } className={cn(classNext, {"opacity-50 pointer-events-none": page === pageCount,})}>Next</Link>
                    </li>  
                </ul>
            </nav>
        </>
    )
}

export default PagePagination
