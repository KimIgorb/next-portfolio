import SocialList from "../UI/social-list";
import { Paragraph } from "../UI/typography";

export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-black pt-16 pb-14 text-white mt-auto">
      <div className="container">
        <div className="flex flex-col items-center gap-7">
          <SocialList />
          <Paragraph>
            2024 frontend-dev
          </Paragraph>
        </div>
      </div>
    </footer>
  )
}