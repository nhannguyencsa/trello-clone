'use client'

import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, MonitorIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'


export default function ModeSelect() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null //Avoid rendering before mounting, prevent hydration mismatch between client and server in SSR
  }

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-30 cursor-pointer ">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent className="min-w-[var(--radix-select-trigger-width)] !translate-y-0">
        <SelectItem value="light">
          <div className="flex items-centem gap-2">
            <SunIcon size={32} className='fill-teal-500' weight="fill" /> Light
          </div>
        </SelectItem>
        <SelectItem value="dark">
          <div className="flex items-centem gap-2">
            <MoonIcon size={32} className='fill-teal-500' weight="fill" /> Dark
          </div>
        </SelectItem>
        <SelectItem value="system">
          <div className="flex items-centem gap-2">
            <MonitorIcon size={32} className='fill-teal-500' weight="fill" /> System
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
