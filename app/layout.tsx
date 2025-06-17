import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SIAKAD',
  description: 'Created with sephanoe',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
