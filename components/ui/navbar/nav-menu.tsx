'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from '../button'

const publicRoutes = [
  {
    id: 1,
    href: '/',
    label: 'Inicio'
  },
  {
    id: 2,
    href: '/dashboard',
    label: 'Dashboard'
  }
]

export function NavMenu () {
  const pathname = usePathname()

  return (
    <>
      <nav className='hidden md:flex items-center gap-3 font-medium'>
        {publicRoutes.map((item) => (
          <Link
            key={item.id}
            className={cn(
              buttonVariants({ variant: 'link', size: 'sm' }),
              'px-0 text-secondary-foreground',
              pathname === item.href && 'text-primary'
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  )
}
