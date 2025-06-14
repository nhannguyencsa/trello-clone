'use client'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, MonitorIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const ModeSelect = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null //Avoid rendering before mounting, prevent hydration mismatch between client and server in SSR
  }

  return (
    <div className="md:flex">
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="w-30 cursor-pointer focus-visible:ring-1 focus-visible:border-white dark:hover:bg-transparent dark:border-white text-white [&_svg]:fill-white">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent className="min-w-[var(--radix-select-trigger-width)] !translate-y-0">
          <SelectItem value="light">
            <div className="flex items-center gap-2">
              <SunIcon size={32} weight="fill" /> Light
            </div>
          </SelectItem>
          <SelectItem value="dark">
            <div className="flex items-center gap-2">
              <MoonIcon size={32} weight="fill" /> Dark
            </div>
          </SelectItem>
          <SelectItem value="system">
            <div className="flex items-center gap-2">
              <MonitorIcon size={32} weight="fill" /> System
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default ModeSelect
