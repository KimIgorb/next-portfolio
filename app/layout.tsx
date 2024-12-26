import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const poppinsFont = Poppins({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: "Next Portfolio",
  description: "Портфолио веб-разработчика с примерами проектов, навыками и контактной информацией."
};

async function getTheme() {
  const response = await fetch('http://localhost:3000/api/theme')

  return response.json()
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const theme = await getTheme()
  

  return (
    <html lang="en" className={theme.mode}>
      <body
        className={`${poppinsFont.className} antialias min-h-screen bg-slate-600 dark:bg-sectionBg flex flex-col`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
