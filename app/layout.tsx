import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Search Bar',
  description: 'Searching through a postgres database with Next.js and Vercel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>Search Bar</title>
      </head>
      <body className={inter.className}>
        {children}
      <Analytics />
      </body>
    </html>
  );
}
