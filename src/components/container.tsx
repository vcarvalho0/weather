import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="w-[100%] ml-auto mr-auto">{children}</div>
}
