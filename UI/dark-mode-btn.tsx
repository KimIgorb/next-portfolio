'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

async function getTheme() {
  const response = await fetch('http://localhost:3000/api/theme');

  return response.json()
}

async function toggleTheme(currentMode: string) {
  const newMode = currentMode === 'dark' ? 'light' : 'dark'

  await fetch('http://localhost:3000/api/theme', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ mode: newMode })
  })

  return newMode
}

export default function BtnDarkMode() {

  const [mode, setMode] = React.useState<string | null>(null);


  React.useEffect(() => {
    async function fetchTheme() {
      const theme = await getTheme()
      setMode(theme.mode)
      document.documentElement.classList.add(theme.mode);
    }

    fetchTheme()
  }, [])

  const handleToggle = async () => {
    const updatedMode = await toggleTheme(mode as string)
    setMode(updatedMode)

    if (updatedMode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }

  }

  return (
    <button
      className="dark-mode-btn dark:before:left-[26px]"
      onClick={handleToggle}
    >
      <Image width={16} height={16} src='/sun.svg' alt="Light mode" className="relative z-10" />
      <Image width={16} height={16} src='/moon.svg' alt="Dark mode" className="relative z-10" />
    </button>
  )
}
