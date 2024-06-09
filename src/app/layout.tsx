import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  weight: '300',
  subsets: ['latin'],
})

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
      <body className={`${inter.className}`}>
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
