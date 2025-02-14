import Link from "next/link"
import { ProjectTitle } from "./typography"
import Image from "next/image"

export interface IProject {
  id: number;
  title: string;
  image_url: string;
  skills: string
  github: string
}

interface IProps {
  projects: IProject[]
}


export default function ProjectsList({projects}: IProps) {

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {projects.map((item) => (
        <li key={item.id} className="rounded-xl bg-slate-200 dark:bg-black p-2 shadow-xl duration-300 transition-transform hover:-translate-y-2">
          <Link href={`/projects/${item.id}`}>
            <Image src={item.image_url} alt={item.title} className="w-full object-contain rounded-lg mb-5" width={300} height={220} priority={true} />
            <ProjectTitle label={item.title} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

