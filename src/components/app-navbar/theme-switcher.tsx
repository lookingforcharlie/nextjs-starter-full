'use client'

import { useEffect, useState } from 'react'

import { Switch } from '@heroui/react'
import { IconMoon, IconSun } from '@tabler/icons-react'

import { useSystemTheme } from '@/hooks/use-system-theme'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { currentTheme, setTheme } = useSystemTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <Switch
        isSelected={currentTheme === 'dark'}
        onValueChange={
          currentTheme === 'dark'
            ? () => setTheme('light')
            : () => setTheme('dark')
        }
        color="secondary"
        size="lg"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <IconSun className={className} />
          ) : (
            <IconMoon className={className} />
          )
        }
      />
    </div>
  )
}
