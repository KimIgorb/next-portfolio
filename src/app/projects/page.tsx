import ProjectsList from "@/UI/project-list";
import { PageTitle } from "@/UI/typography";

export default function Projects() {
  return (
    <main className="py-20 bg-slate-600 dark:bg-sectionBg">
      <section className="text-white">
        <div className="container">
          <PageTitle label="Projects" />
          <ProjectsList/>
        </div>
      </section>
    </main>

  )
}