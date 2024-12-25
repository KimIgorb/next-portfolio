import Image from "next/image"

const social = [
  { image: '/telegram.svg', href: '#', alt: 'Telegram logo' },
  { image: '/instagram.svg', href: '#', alt: 'Instagram logo' },
  { image: '/gitHub.svg', href: '#', alt: 'GitHub logo' },
]


export default function SocialList() {
  return (
    <ul className="flex items-center gap-8">
      {social.map(item => (
        <li key={item.image}>
          <a href={item.href}>
            <Image src={item.image} alt={item.alt} width={38} height={38} />
          </a>
        </li>
      ))}
    </ul>
  )
}