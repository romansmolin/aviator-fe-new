import { cn } from '@/shared/lib/cn'
import React from 'react'

interface HeadingTitleProps {
    children: string
    className?: string
}

const HeadingTitle: React.FC<HeadingTitleProps> = ({ children, className }) => {
    return (
        <div className="py-5">
            <h2 className='text-3xl md:text-5xl font-bold text-primary dark:text-white'>{children}</h2>
        </div>
    )
}

export default HeadingTitle