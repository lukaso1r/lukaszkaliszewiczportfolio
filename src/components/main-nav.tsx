'use client'

import * as React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription  } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  // { href: '/wyksztalcenie-i-kursy', label: 'Wykształcenie i kursy' },
  { href: '/projekty', label: 'Projekty' },
  { href: '/miniBlog', label: 'miniBlog' },
  { href: '/cv', label: 'CV' },
  { href: '/kontakt', label: 'Kontakt' },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="w-fit" aria-label="Główna nawigacja">
      {/* Menu na desktop i tablet */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === link.href && 'bg-accent text-accent-foreground',
                    'text-lg'
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Hamburger menu na mobile */}
      <div className="flex md:hidden items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Otwórz menu">
              <Menu className="w-7 h-7" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-60 p-6">
            <SheetTitle>Menu nawigacyjne</SheetTitle>
            <SheetDescription>Wybierz zakładkę z menu</SheetDescription>  
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block w-full rounded px-2 py-2 text-lg text-left transition-colors',
                      pathname === link.href ? 'bg-accent text-accent-foreground' : 'hover:bg-muted/50'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
