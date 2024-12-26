import Image from "next/image"
import { PageTitle, Paragraph } from "../../../UI/typography"
import GitHubBtn from "../../../UI/github-btn"
import { IProject } from "../../../UI/project-list"

async function getProject(id: string) {
  const response = await fetch(`http://localhost:3000/api/projects/${id}`)

  return response.json()
}

export default async function Project(props: { params: Promise<{ id: string }> }) {

  const params = await props.params
  const id = params.id

  const project: IProject = await getProject(id)

  return (
    <main className="py-20 text-white">
      <section>
        <div className="container">
          <div className="max-w-3xl flex flex-col items-center mx-auto">
            <PageTitle label={project.title} />
            <Image src={project.image_url} alt={project.title} width={865} height={648} priority={true} className="h-auto w-auto rounded-xl shadow-lg mb-10" />
            <Paragraph className="!text-2xl font-semibold mb-5 text-center">
              Skills: {project.skills}
            </Paragraph>
            <GitHubBtn href={project.github} />
          </div>
        </div>
      </section>
    </main>
  )
}