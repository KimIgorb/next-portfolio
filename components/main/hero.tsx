import { Paragraph } from "../../UI/typography";

export default function Hero() {
  return (
    <section className="bg-slate-800 dark:bg-black text-white">
      <div className="container">
        <div className="py-10 min-h-[43.5rem] flex justify-center items-center text-center bg-[url('/hero-bg.png')] bg-no-repeat bg-center bg-auto">
          <div className="max-w-2xl px-4">
            <h1 className="mb-5 text-[40px] font-bold leading-norma">
              <strong className="text-[60px]">Hi, my name is <em className="not-italic text-purple">Igor</em> </strong>
              <br />
              a frontend developer
            </h1>
            <Paragraph className="mb-10 leading-normal">
              with passion for learning and creating.
            </Paragraph>
            <a
              href="/CV.pdf"
              download
              className="inline-block h-12 py-3 px-7 bg-purple font-medium tracking-wide rounded-md hover:opacity-80 active:top-px active:relative"
            >Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
} 