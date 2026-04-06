import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brisa Garcia Roman | REALTOR® | The Rio Group',
  description:
    'Brisa Garcia Roman is a licensed REALTOR® with The Rio Group powered by AZ & Associates, serving buyers and sellers across the Phoenix Valley.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
