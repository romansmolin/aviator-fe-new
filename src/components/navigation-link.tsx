import Link from 'next/link'
import React, { ReactNode } from 'react'
import { Badge } from './ui/badge'

interface NavigationLinkProps {
    href: string,
    icon: any,
    label: string,
    active?: boolean,
    badge?: any
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ href, icon: Icon, label, active, badge }) => {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${active ? 'bg-muted text-primary' : 'text-muted-foreground'} transition-all hover:text-primary`}
        >
            <Icon className="h-4 w-4" />
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