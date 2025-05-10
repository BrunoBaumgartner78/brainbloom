// src/components/MenuMond.jsx
'use client'
import Link from 'next/link'

export default function MenuMond() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <Link href="/monduhr" title="Zur Monduhr">
        <span className="text-3xl cursor-pointer hover:animate-pulse">🌙</span>
      </Link>
    </div>
  )
}
