import { cn } from '@/shared/lib/cn'
import React, { ReactNode } from 'react'

interface GridProps {
    className?: string
    children: ReactNode
}

const Grid: React.FC<GridProps> = ({ className = "", children }) => {
    return (
        <div className={cn('grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 py-5', className)}>
            {children}
        </div>
    )
}

export default Grid