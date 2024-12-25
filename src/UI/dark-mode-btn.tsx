'use client'

import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = React.useState('light')
  
  React.useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(darkMode === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      className={clsx(
        "dark-mode-btn",
        darkMode === 'dark' && 'dark-mode-btn--active'
      )}
      onClick={toggleDarkMode}
    >
      <Image width={16} height={16} src='./sun.svg' alt="Light mode" className="relative z-10" />
      <Image width={16} height={16} src='./moon.svg' alt="Dark mode" className="relative z-10" />
    </button>
  )
}

export default BtnDarkMode