'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const commonClass = 'text-lg transition-opacity hover:opacity-70 border-b-2'
const linkClass = `${commonClass} border-transparent hover:border-blue-200`
const activateLinkClass = `${commonClass} border-blue-500`

export const Header = () => {
  const pathname = usePathname()

  return (
    <header className="item-center container mx-auto flex justify-between px-4 py-8">
      <nav className="flex gap-6">
        <Link href="/">
          <Image src={''} alt="" />
        </Link>
        <Link
          className={pathname === '/' ? activateLinkClass : linkClass}
          href="/"
        >
          Home
        </Link>
        <Link
          className={pathname === '/weather' ? activateLinkClass : linkClass}
          href="/weather"
        >
          Weather
        </Link>
      </nav>
    </header>
  )
}
