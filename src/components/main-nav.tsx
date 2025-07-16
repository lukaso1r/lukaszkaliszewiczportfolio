'use client'

import * as React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'




export function MainNav() {

const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuLink href="/" className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/' && 'bg-accent text-accent-foreground'
                )}>
              Home
            </NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
            <NavigationMenuLink href="/wyksztalcenie-i-kursy" className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/wyksztalcenie-i-kursy' && 'bg-accent text-accent-foreground'
                )}>
              Wykształcenie i kursy
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink href="/projekty" className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/projekty' && 'bg-accent text-accent-foreground'
                )}>
              Zrealizowane projekty
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink href="/nad-czym-pracuje" className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/nad-czym-pracuje' && 'bg-accent text-accent-foreground'
                )}>
              Nad czym pracuję
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink href="/miniBlog" className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/miniBlog' && 'bg-accent text-accent-foreground'
                )}>
              miniBlog
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink href="/cv"
                className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/cv' && 'bg-accent text-accent-foreground'
                )}>
              CV
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink href='/kontakt' className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === '/kontakt' && 'bg-accent text-accent-foreground'
                )}>
              Kontakt
            </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}
