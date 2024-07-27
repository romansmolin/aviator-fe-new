import Link from 'next/link';
import { Package2, Bell, HomeIcon, ShoppingCart, Package, Users, LineChart } from 'lucide-react';
import NavigationLink from './navigation-link';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

export default function Sidebar() {
    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span>Aviator Play</span>
                    </Link>
                    <div className='ml-auto'>
                        <ModeToggle />
                        <span className="sr-only">Dark/Light Mode Toggler</span>
                    </div>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <NavigationLink href="#" icon={HomeIcon} label="Dashboard" />
                        <NavigationLink href="#" icon={ShoppingCart} label="Orders" badge="6" />
                        <NavigationLink href="#" icon={Package} label="Products" active />
                        <NavigationLink href="#" icon={Users} label="Customers" />
                        <NavigationLink href="#" icon={LineChart} label="Analytics" />
                    </nav>
                </div>
            </div>
        </div>
    );
}
