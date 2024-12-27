import Image from "next/image"
import { PageTitle, Paragraph } from "../../../UI/typography"
import GitHubBtn from "../../../UI/github-btn"
import { IProject } from "../../../UI/project-list"
import { Suspense } from "react"

export default async function Project(props: { params: Promise<{ id: string }> }) {

  const url = process.env.NEXT_PUBLIC_API_URL || 'https://next-portfolio-sigma-jade.vercel.app'
  const params = await props.params
  const id = params.id

  const response = await fetch(`${url}/api/projects/${id}`);
  const project:IProject = await response.json()

  return (
    <main className="py-20 text-white">
      <section>
        <div className="container">
          <div className="max-w-3xl flex flex-col items-center mx-auto">
            <PageTitle label={project.title} />
            <Suspense fallback='loading..'>
              <Image src={project.image_url} alt={project.title} width={865} height={648} priority={true} className="h-auto w-auto rounded-xl shadow-lg mb-10" />
              <Paragraph className="!text-2xl font-semibold mb-5 text-center">
                Skills: {project.skills}
              </Paragraph>
              <GitHubBtn href={project.github} />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}