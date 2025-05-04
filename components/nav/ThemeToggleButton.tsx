'use client'

import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useStore } from '@/store/store'

export default function ThemeToggleButton() {
  const isDark = useStore((state) => state.isDark)
  const setIsDark = useStore((state) => state.setIsDark)

  useEffect(() => {
    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [isDark])

  return (
    <button
      onClick={setIsDark}
      className="p-2 rounded-full border border-[#D1D1D6] dark:border-[#3A3A3C] bg-[#F9F9F9] dark:bg-[#1D1D1F] transition-all duration-300 hover:scale-105 hover:shadow-md"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-[#F9F9F9] transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-[#1D1D1F] transition-transform duration-300" />
      )}
    </button>
  )
}
