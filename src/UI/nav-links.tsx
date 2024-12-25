'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const navItems = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contacts" },
]

export default function NavLinks() {

  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex items center gap-7 mr-7">
        {navItems.map(item => (
          <li key={item.href} className="relative w-max">
            <Link
              href={item.href}
              className="hover:opacity-80 duration-200 text-base font-medium"
            >
              {item.title}
            </Link>
            <span className={clsx("absolute w-full bottom-0 left-0 h-0.5 bg-purple", pathname === item.href ? 'block' : 'hidden')}></span>
          </li>
        ))}
      </ul>
    </nav>
  )
}