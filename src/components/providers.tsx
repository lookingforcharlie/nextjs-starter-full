'use client'

import { HeroUIProvider } from '@heroui/react'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // did not pass session prop to SessionProvider, component will handle it by using useSession hook
    <SessionProvider>
      <HeroUIProvider className="flex h-full w-full flex-col">
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      </HeroUIProvider>
    </SessionProvider>
  )
}
