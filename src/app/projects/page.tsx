import ProjectsList from "../../UI/project-list";
import { PageTitle } from "../../UI/typography";
import { Suspense } from "react";
import CardSkeleton from "../../UI/skeleton";
import { IProject } from '../../UI/project-list'


async function getProjects(): Promise<IProject[]> {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json()
}

export default async function Projects() {
  
  const projects = await getProjects()
  
  return (
    <section className="text-white py-20">
      <div className="container">
        <PageTitle label="Projects" />
        <Suspense fallback={<CardSkeleton />}>
          <ProjectsList projects={projects} />
        </Suspense>
      </div>
    </section>
  )
}
