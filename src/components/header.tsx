import { Menu, Search } from 'lucide-react';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import NavigationLink from './navigation-link';
import { sidebarMenu } from '@/config/menu';
import { ModeToggle } from './mode-toggle';

export default function Header() {
    return (
        <header className="lg:ml-64 flex fixed top-0 left-0 right-0 z-50 h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        {sidebarMenu.map(item => (
                            <NavigationLink
                                key={item.label}
                                href={item.href}
                                icon={item.icon}
                                label={item.label}
                            />
                        ))}
                    </nav>
                    <div className='absolute left-2 bottom-2'>
                        <ModeToggle />
                    </div>
                </SheetContent>
            </Sheet>

            <div className='flex flex-1 items-center gap-5 justify-between'>
                <form className='flex-1'>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                        />
                    </div>
                </form>

                <div className='flex gap-5'>
                    <div className='flex justify-center items-center'>
                        <ModeToggle />
                    </div>

                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                    </DropdownMenu> */}
                </div>
            </div>
        </header>
    );
}
