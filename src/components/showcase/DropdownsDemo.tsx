import { CreditCard, Keyboard, LogOut, Mail, MoreHorizontal, Settings, User } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DropdownsDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Dropdown Components</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>MpDropdownMenu (Context Menu)</Label>
            <div className="flex items-center gap-4">
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[40px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm bg-slate-900 text-white">
                  Open Dropdown Menu with end icon <MoreHorizontal className="ml-2 h-4 w-4" />
                </ContextMenuTrigger>
                <ContextMenuContent className="w-64">
                  <ContextMenuItem inset>
                    Back
                    <DropdownMenuShortcut>⌘[</DropdownMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem inset disabled>
                    Forward
                    <DropdownMenuShortcut>⌘]</DropdownMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem inset>
                    Reload
                    <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
                  </ContextMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger inset>More Tools</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-48">
                      <DropdownMenuItem>
                        Save Page As...
                        <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
                      <DropdownMenuItem>Name Window...</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Developer Tools</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <ContextMenuItem inset>Show Full URLs</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
              <Label>Menu</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label>MpDropdown (Standalone Dropdown)</Label>
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Basic Options</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Keyboard className="mr-2 h-4 w-4" />
                      <span>Keyboard shortcuts</span>
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">With Objects</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Team Members</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span>John Doe</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <span>Jane Smith</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">User Actions</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
