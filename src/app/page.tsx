'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import('@/components/Map'), {
        loading: () => <p>Map is loading!</p>,
        ssr: false,
      }),
    [],
  )

  return <Map zoom={3} posx={[0, 0]} />
}
