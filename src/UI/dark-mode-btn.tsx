'use client'

import Image from 'next/image'
import React from 'react'

export default function BtnDarkMode() {

  const [mode, setMode] = React.useState<string | null>(null);


  React.useEffect(() => {
    async function fetchTheme() {
      const url = process.env.NEXT_PUBLIC_API_URL || 'https://next-portfolio-sigma-jade.vercel.app'
      const response = await fetch(`${url}/api/theme`);
      const data = await response.json();
      setMode(data.mode);
      if (data.mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
    fetchTheme();
  }, []);

  const toggleDarkMode = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL || 'https://next-portfolio-sigma-jade.vercel.app'
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    await fetch(`${url}/api/theme`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mode: newMode }),
    });
    if (newMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      className="dark-mode-btn dark:before:left-[26px]"
      onClick={toggleDarkMode}
    >
      <Image width={16} height={16} src='/sun.svg' alt="Light mode" className="relative z-10" />
      <Image width={16} height={16} src='/moon.svg' alt="Dark mode" className="relative z-10" />
    </button>
  )
}
