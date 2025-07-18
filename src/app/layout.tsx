import type { Metadata } from 'next'
import { Suspense } from 'react'

import AppNavbar from '../components/app-navbar'
import Providers from '../components/providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'A basic starter for Next.js'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* using emoji as favicon */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
      />

      <body className="h-screen w-screen">
        <Providers>
          <AppNavbar />
          {/* Set up the background image to dark and light mode */}
          <main className="flex-grow overflow-auto bg-[url(/light-abstract.webp)] bg-cover dark:bg-[url(/dark-abstract.webp)]">
            {/* With the Suspense, the shell of the application will be load before the children are loaded */}
            <Suspense>{children}</Suspense>
            {/* {children} */}
          </main>
        </Providers>
      </body>
    </html>
  )
}
