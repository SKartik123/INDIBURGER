import React from 'react'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IndiBurger - Authentic Indian Burgers',
  description: 'Premium Indian burgers with traditional flavors and fresh ingredients',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-burger-dark text-white">
        {children}
      </body>
    </html>
  )
}
