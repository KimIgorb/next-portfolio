import Image from "next/image"

const social = [
  { image: '/telegram.svg', href: 'https://t.me/KimIgorb', alt: 'Telegram logo' },
  { image: '/instagram.svg', href: 'https://www.instagram.com/kim_igorb95/profilecard/?igsh=MTNzNWZxNmVibXVhZA==', alt: 'Instagram logo' },
  { image: '/gitHub.svg', href: 'https://github.com/KimIgorb', alt: 'GitHub logo' },
]


export default function SocialList() {
  return (
    <ul className="flex items-center gap-8">
      {social.map(item => (
        <li key={item.image}>
          <a href={item.href} target="_blank">
            <Image src={item.image} alt={item.alt} width={38} height={38} />
          </a>
        </li>
      ))}
    </ul>
  )
}