import React from 'react'

interface HeadingTitleProps {
    children: string
}

const HeadingTitle:React.FC<HeadingTitleProps> = ({ children }) => {
    return (
        <div className='py-5'>
            <h2 className='text-5xl font-bold text-primary dark:text-white'>{children}</h2>
        </div>
    )
}

export default HeadingTitle