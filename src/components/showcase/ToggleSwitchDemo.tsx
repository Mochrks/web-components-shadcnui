'use client'

import { useState } from 'react'
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Grid2x2,
  LayoutList,
  Moon,
  Sun,
  Laptop,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ToggleSwitchDemo() {
  const [emailNotif, setEmailNotif] = useState(true)
  const [pushNotif, setPushNotif] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [autoSave, setAutoSave] = useState(true)

  return (
    <section className="space-y-4">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Toggle & Switch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label>Switch Controls</Label>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notif">Email Notifications</Label>
                  <p className="text-xs text-muted-foreground">
                    Receive emails about account activity
                  </p>
                </div>
                <Switch id="email-notif" checked={emailNotif} onCheckedChange={setEmailNotif} />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notif">Push Notifications</Label>
                  <p className="text-xs text-muted-foreground">
                    Receive push notifications on your device
                  </p>
                </div>
                <Switch id="push-notif" checked={pushNotif} onCheckedChange={setPushNotif} />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-xs text-muted-foreground">Toggle dark mode appearance</p>
                </div>
                <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-save">Auto Save</Label>
                  <p className="text-xs text-muted-foreground">Automatically save your changes</p>
                </div>
                <Switch id="auto-save" checked={autoSave} onCheckedChange={setAutoSave} />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label>Toggle Buttons</Label>
            <div className="flex flex-wrap gap-2">
              <Toggle variant="outline" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-3">
            <Label>Toggle Group — Text Alignment</Label>
            <ToggleGroup type="single" variant="outline" defaultValue="left">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <Label>Toggle Group — View Mode</Label>
            <ToggleGroup type="single" variant="outline" defaultValue="grid">
              <ToggleGroupItem value="grid" aria-label="Grid view">
                <Grid2x2 className="h-4 w-4 mr-1" /> Grid
              </ToggleGroupItem>
              <ToggleGroupItem value="list" aria-label="List view">
                <LayoutList className="h-4 w-4 mr-1" /> List
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <Label>Toggle Group — Multi-select (List Type)</Label>
            <ToggleGroup type="multiple" variant="outline">
              <ToggleGroupItem value="bullet" aria-label="Bullet list">
                <List className="h-4 w-4 mr-1" /> Bullet
              </ToggleGroupItem>
              <ToggleGroupItem value="numbered" aria-label="Numbered list">
                <ListOrdered className="h-4 w-4 mr-1" /> Numbered
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <Label>Toggle Group — Theme Selector</Label>
            <ToggleGroup type="single" variant="outline" defaultValue="system">
              <ToggleGroupItem value="light" aria-label="Light mode">
                <Sun className="h-4 w-4 mr-1" /> Light
              </ToggleGroupItem>
              <ToggleGroupItem value="dark" aria-label="Dark mode">
                <Moon className="h-4 w-4 mr-1" /> Dark
              </ToggleGroupItem>
              <ToggleGroupItem value="system" aria-label="System">
                <Laptop className="h-4 w-4 mr-1" /> System
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
