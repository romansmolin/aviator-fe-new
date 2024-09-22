import React, { ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'
import { ApolloProvider } from './apollo-provider'
interface ProvidersProps {
    children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ApolloProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </ApolloProvider>
    )
}

export default Providers