import BtnDarkMode from "../UI/dark-mode-btn";
import NavLinks from "../UI/nav-links";
import Link from "next/link";



export default function Header() {
  return (
    <header className="py-5 bg-slate-800 dark:bg-black border-b dark:border-border border-black text-white">
      <div className="container">
        <div className="flex items-center justify-end gap-y-5 gap-x-7 flex-wrap">
          <Link href="/" className="text-2xl mr-auto">
            <strong>Next</strong> portfolio
          </Link>
          <div className="flex items-center">
            <NavLinks />
          </div>
          <BtnDarkMode />
        </div>
      </div>

    </header>
  )
}