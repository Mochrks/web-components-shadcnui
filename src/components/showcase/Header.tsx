'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Select value="system" disabled>
        <SelectTrigger className="w-[140px]" aria-label="Loading theme select">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
      </Select>
    )
  }

  return (
    <Select value={theme || 'system'} onValueChange={(v) => setTheme(v)}>
      <SelectTrigger className="w-[140px]" aria-label="Select theme">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  )
}

export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-2xl font-bold text-balance">Showcase Web UI ShadcnUI Components</h1>
          <p className="text-sm text-muted-foreground"> by @mochrks</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
      </div>
    </header>
  )
}
