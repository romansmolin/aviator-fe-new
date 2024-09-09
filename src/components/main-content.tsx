import React, { ReactNode } from 'react'

interface MainContentProps {
    children: ReactNode
}

const MainContent:React.FC<MainContentProps> = ({ children }) => {
    return (
        <main className="mt-14 w-screen overflow-hidden lg:overflow-visible lg:w-[unset] flex flex-1 flex-col gap-4 md:p-4 lg:gap-6 lg:p-6 ">
            <div className="flex w-full flex-1 flex-col p-5 rounded-lg bg-muted/40 border border-dashed shadow-sm">
                {children}
            </div>
        </main>
    )
}

export default MainContent