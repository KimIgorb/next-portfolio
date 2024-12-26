import ProjectsList from "../../UI/project-list";
import { PageTitle } from "../../UI/typography";
import { Suspense } from "react";
import CardSkeleton from "../../UI/skeleton";

export default function Projects() {
  return (
    <main className="py-20">
      <section className="text-white">
        <div className="container">
          <PageTitle label="Projects" />
          <Suspense fallback={<CardSkeleton />}>
            <ProjectsList />
          </Suspense>
        </div>
      </section>
    </main>

  )
}