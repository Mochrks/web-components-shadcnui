'use client'

import { useState } from 'react'
import { Menu, Filter, Settings, User, Bell, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

export function SheetDrawerDemo() {
  const [notifications] = useState([
    { id: 1, title: 'New message from Alex', time: '2 min ago', read: false },
    { id: 2, title: 'Your order has shipped', time: '1 hour ago', read: false },
    { id: 3, title: 'Payment confirmed', time: '3 hours ago', read: true },
    { id: 4, title: 'New follower: Sarah', time: '1 day ago', read: true },
  ])

  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Sheet / Side Panel</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Sheet Directions</Label>
            <div className="flex flex-wrap gap-3">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Menu className="mr-2 h-4 w-4" />
                    Right Sheet
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4 px-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" defaultValue="John Doe" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input id="username" defaultValue="@johndoe" className="col-span-3" />
                    </div>
                  </div>
                  <SheetFooter className="px-4">
                    <SheetClose asChild>
                      <Button type="submit">Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Menu className="mr-2 h-4 w-4" />
                    Left Sheet
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>Browse through the application sections.</SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col gap-2 py-4 px-4">
                    {[
                      { icon: User, label: 'Profile' },
                      { icon: Settings, label: 'Settings' },
                      { icon: Bell, label: 'Notifications' },
                    ].map((item) => (
                      <Button key={item.label} variant="ghost" className="justify-start">
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications Panel
                    <Badge variant="destructive" className="ml-2">
                      {notifications.filter((n) => !n.read).length}
                    </Badge>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Notifications</SheetTitle>
                    <SheetDescription>
                      You have {notifications.filter((n) => !n.read).length} unread notifications
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col gap-1 py-4 px-4">
                    {notifications.map((notif) => (
                      <div key={notif.id}>
                        <div className="flex items-start gap-3 p-3 rounded-md hover:bg-muted/50">
                          <div
                            className={`mt-1 h-2 w-2 rounded-full shrink-0 ${notif.read ? 'bg-transparent' : 'bg-blue-500'}`}
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium">{notif.title}</p>
                            <p className="text-xs text-muted-foreground">{notif.time}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        <Separator />
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter Panel
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Apply filters to narrow your results.</SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 py-4 px-4">
                    <div className="space-y-3">
                      <Label className="font-medium">Category</Label>
                      {['Electronics', 'Clothing', 'Books', 'Sports'].map((cat) => (
                        <div key={cat} className="flex items-center space-x-2">
                          <Checkbox id={cat} />
                          <Label htmlFor={cat} className="text-sm font-normal">
                            {cat}
                          </Label>
                        </div>
                      ))}
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label className="font-medium">Price Range</Label>
                      <div className="flex gap-2">
                        <Input placeholder="Min" type="number" />
                        <Input placeholder="Max" type="number" />
                      </div>
                    </div>
                  </div>
                  <SheetFooter className="px-4">
                    <Button variant="outline">Reset</Button>
                    <SheetClose asChild>
                      <Button>Apply Filters</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
