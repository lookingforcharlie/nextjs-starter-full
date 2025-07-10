'use client'

import { Route } from 'next'
import Link from 'next/link'
import React from 'react'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@heroui/react'
import { IconPackage } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'

import { AuthButton } from './auth-button'
import { ThemeSwitcher } from './theme-switcher'

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { status } = useSession()

  const menuItems = [
    {
      label: 'Home',
      href: '/'
    }
  ]

  // User will see Profile link in the navbar only when they are signed in
  if (status === 'authenticated') {
    menuItems.push({
      label: 'Profile',
      href: '/profile'
    })
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <IconPackage size={24} />
          <p className="font-bold text-inherit">NextJS Starter</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link color="foreground" href={item.href as Route}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* /MARK: Theme Switcher */}
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <AuthButton minimal={false} />
        </NavbarItem>
      </NavbarContent>

      {/* /MARK: menu items starts here */}
      <NavbarMenu>
        <NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenuItem>

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={item.href as Route}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <AuthButton />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
