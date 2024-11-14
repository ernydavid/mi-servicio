'use client'

import { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'inline-flex items-center tracking-tight justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        success: 'bg-success/10 text-success hover:bg-success/5',
        destructive: 'bg-error/10 text-error hover:bg-error/5',
        outline: 'bg-transparent text-foreground border border-foreground/20 hover:bg-secondary/5',
        link: 'text-foreground hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3',
        lg: 'h-10 px-8',
        icon: 'w-8 h-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  })

interface Props extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button ({ className, variant, size, ...props }: Props) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
