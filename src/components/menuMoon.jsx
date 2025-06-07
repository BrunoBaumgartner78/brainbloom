'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuMond() {
  const pathname = usePathname()

  // Wenn wir auf /monduhr sind, verlinken wir zur Startseite, sonst zur Monduhr
  const href = pathname === '/monduhr' ? '/' : '/monduhr'
  const title = pathname === '/monduhr' ? 'Zur Startseite' : 'Zur Monduhr'

  return (
    <div className="fixed top-4 right-4 z-50">
      <Link href={href} title={title}>
        <span className="text-3xl cursor-pointer hover:animate-pulse">🌙</span>
      </Link>
    </div>
  )
}

