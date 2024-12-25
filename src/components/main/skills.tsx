import { Subtitle, Paragraph } from "@/UI/typography";

export default function Skills() {
  return (
    <section className="bg-slate-600 dark:bg-sectionBg py-20 text-white">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <Subtitle label="Frontend"/>
          <Paragraph>
            JavaScript, TypeScript, ReactJS, Next, Redux, Zustand, NPM, Yarn, MaterialUI, TailwindCSS, HTML, CSS,
          </Paragraph>
        </div>
      </div>
    </section>
  )
}
