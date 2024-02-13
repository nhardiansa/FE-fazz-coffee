import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Products - Fazz Coffee'
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children
}
