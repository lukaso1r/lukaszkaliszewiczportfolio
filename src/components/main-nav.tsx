'use client'

import * as React from 'react'
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
  // { href: '/cv', label: 'CV' },
  // { href: '/kontakt', label: 'Kontakt' },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="w-fit" aria-label="Główna nawigacja">
      {/* Menu na desktop i tablet */}
      <div className="hidden md:flex">
        <ul className="flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-lg',
                  pathname === link.href && 'bg-accent text-accent-foreground'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
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
