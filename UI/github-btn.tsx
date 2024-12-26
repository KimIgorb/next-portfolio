import Image from "next/image";

export default function GitHubBtn({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-x-3 h-12 px-5 py-3 rounded-md border border-black text-black bg-white transition-opacity duration-400 hover:opacity-80 active:translate-y-[1px]"
    >
      <Image src='/gitHub-black.svg' alt='Github Logo' width={24} height={24} />
      GitHub repo
    </a>
  )
}