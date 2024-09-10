'use client'

import Link from 'next/link'
import React, { ReactNode } from 'react'
import { Badge } from './ui/badge'
import { usePathname } from 'next/navigation'

interface NavigationLinkProps {
    href: string,
    icon: any,
    label: string,
    active?: boolean,
    badge?: any
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ href, icon: Icon, label, active, badge }) => {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={`flex items-center gap-3 rounded-lg py-2 ${pathname === href ? 'bg-muted/40 text-primary' : 'text-black dark:text-white'} transition-all hover:text-primary`}
        >
            {Icon}   
            {label}
            {badge && (
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {badge}
                </Badge>
            )}
        </Link>
    )
}

export default NavigationLink