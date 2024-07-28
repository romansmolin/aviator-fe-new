import Link from 'next/link';
import { Package2, HomeIcon, Dices, NotebookText, Castle } from 'lucide-react';
import NavigationLink from './navigation-link';
import { ModeToggle } from './mode-toggle';
import { headers } from "next/headers";
import { sidebarMenu } from '@/config/menu'



export default function Sidebar() {
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    console.log(pathname)
    return (
        <div className="hidden fixed h-screen border-r bg-muted/40 md:block md:w-72">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span>Aviator</span>
                    </Link>
                    <div className='ml-auto'>
                        <ModeToggle />
                        <span className="sr-only">Dark/Light Mode Toggler</span>
                    </div>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {sidebarMenu.map(item => (
                            <NavigationLink 
                                key={item.label} 
                                href={item.href} 
                                icon={item.icon} 
                                label={item.label}
                                active={item.href === pathname ? true : false} 
                            />
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
