import Link from 'next/link';
import { Package2 } from 'lucide-react';
import NavigationLink from './navigation-link';
import { ModeToggle } from './mode-toggle';
import { sidebarMenu } from '@/config/menu'
import Image from 'next/image';



export default function Sidebar() {

    return (
        <div className="hidden fixed h-screen border-r bg-muted/40 lg:block md:w-64">
            <div className="flex h-14 lg:h-[60px] max-h-screen flex-col gap-2">

                <div className='flex h-full w-full justify-between border-b'>
                    <Link href="/" className="flex h-full items-center font-semibold">
                        <Image
                            src="/assets/logo.webp"
                            width="100"
                            height="100"
                            alt="Logo"
                            className='h-full object-contain'
                        />
                    </Link>
                    <div className="flex px-4 lg:px-6">
                        <div className='flex justify-center items-center'>
                            <ModeToggle />
                            <span className="sr-only">Dark/Light Mode Toggler</span>
                        </div>
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
                            />
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
