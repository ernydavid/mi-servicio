import React, { ReactNode } from 'react'

export default function DashboardLayout ({ children }: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      {children}
    </div>
  )
}
