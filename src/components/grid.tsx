import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface GridProps {
    className?: string
    children: ReactNode
}

const Grid: React.FC<GridProps> = ({ className = "", children }) => {
    return (
        <div className={cn('grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3', className)}>
            {children}
        </div>
    )
}

export default Grid