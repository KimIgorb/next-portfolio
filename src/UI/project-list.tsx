'use client'

import Link from "next/link"
import { ProjectTitle } from "./typography"
import Image from "next/image"

export default function ProjectsList() {

  const  projects = [
    { id: 1, title: "Blanchard", src: "/projects/project1.png" },
    { id: 2, title: "Orders Management", src: "/projects/project2.png" },
    { id: 3, title: "Cast Base", src: "/projects/project3.png" },
    { id: 4, title: "Weather App", src: "/projects/project4.png" },
  ]

  return (
    <ul className="grid grid-cols-4 gap-4">
      {projects.map(item => (
        <li key={item.id} className="rounded-xl bg-slate-200 dark:bg-black p-2 shadow-xl duration-300 transition-transform hover:-translate-y-2">
          <Link href={`/projects/${item.id}?data=${encodeURIComponent(JSON.stringify(item))}`}>
            <Image src={item.src} alt={item.title} className="w-full object-contain rounded-lg mb-5" width={300} height={220} />
            <ProjectTitle label={item.title} />
          </Link>
        </li>
      ))}
    </ul>
  )
}