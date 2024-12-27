import { PageTitle, Paragraph, Subtitle } from "../../UI/typography";

export default function Contacts() {
  return (
    <main className="py-20 bg-slate-600 dark:bg-sectionBg ">
      <section className="text-white">
        <div className="container">
          <PageTitle label="Contacts" />
          <div className="max-w-xl mx-auto text-center space-y-10">
            <div>
              <Subtitle label="Location" />
              <Paragraph>
                Tashkent, Uzbekistan
              </Paragraph>
            </div>
            <div>
              <Subtitle label="Telegram / WhatsApp" />
              <a href="tel:+998903294228" className="text-purple text-lg">
                +998 (90)329-42-28
              </a>
            </div>
            <div>
              <Subtitle label="Email" />
              <a href="mailto:kimigor362@gmail.com" className="text-purple text-lg">
                kimigor362@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}