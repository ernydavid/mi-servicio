import type { Metadata, Viewport } from 'next'
import './globals.css'
import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { geistSans } from '@/components/fonts'
import { Navbar } from '@/components/ui/navbar/navbar'
import { Footer } from '@/components/footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export const metadata: Metadata = {
  title: 'Mi Servicio App',
  description: 'Lleva el control de tu informe de servicio',
  icons: {
    icon: [
      {
        href: '/icon.svg',
        url: '/icon.svg'
      }
    ]
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang='es'
    >
      <body
        className={cn(
          geistSans.className,
          'min-h-dvh tracking-tight antialiased'
        )}
      >
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='system'
        >
          <div className='min-h-dvh flex flex-col px-4 relative'>
            <Navbar />
            <div className='flex-1 pt-12'>
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
