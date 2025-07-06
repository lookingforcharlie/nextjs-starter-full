import { Dispatch, SetStateAction, useMemo } from 'react'

import { useTheme } from 'next-themes'

type Theme = 'dark' | 'light'
type SetTheme = Dispatch<SetStateAction<Theme>>

// handle the system theme: user will see system theme first without toggling
export function useSystemTheme() {
  const { theme, setTheme, systemTheme } = useTheme()
  // if the theme is set to system, we want to return the system theme, otherwise return the theme
  const currentTheme = theme === 'system' ? systemTheme : theme

  // currentTheme will always be 'dark' or 'light', will never be 'system'
  return useMemo(() => {
    return {
      currentTheme,
      setTheme
    } as { currentTheme: Theme; setTheme: SetTheme }
  }, [currentTheme, setTheme])
}
