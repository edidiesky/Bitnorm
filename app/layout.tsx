import type { Metadata } from 'next'
import './globals.css'
import { AOSInit } from '@/components/common/aos'

export const metadata: Metadata = {
  title: 'BitNorm',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body>{children}</body>
    </html>
  )
}
