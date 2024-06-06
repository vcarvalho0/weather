import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Check Weather',
  description: 'Check current weather using latitude and logitude',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="bg-layout">
          <div className="z-[1] flex flex-grow flex-col">
            <Header />
            <main className="container mx-auto flex flex-grow flex-col px-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
