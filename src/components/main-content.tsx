import React, { ReactNode } from 'react'

interface MainContentProps {
    children: ReactNode
}

const MainContent:React.FC<MainContentProps> = ({ children }) => {
    return (
        <main className="mt-14 w-screen lg:w-[unset] flex flex-1 flex-col gap-4 md:p-4 lg:gap-6 lg:p-6 ">
            {/* <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
            </div> */}
            <div className="flex w-full flex-1 flex-col p-5 rounded-lg bg-muted/40 border border-dashed shadow-sm">
                {children}
            </div>
        </main>
    )
}

export default MainContent