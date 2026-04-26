import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Copy,
  Trash,
  Download,
  Edit,
  Star,
  Heart,
  Bookmark,
  Share2,
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export function TooltipHoverCardDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Tooltip & Hover Card</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Tooltip on Buttons</Label>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Bold, label: 'Bold' },
                { icon: Italic, label: 'Italic' },
                { icon: Underline, label: 'Underline' },
                { icon: AlignLeft, label: 'Align Left' },
                { icon: AlignCenter, label: 'Center' },
                { icon: AlignRight, label: 'Align Right' },
              ].map((item) => (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <item.icon className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tooltip on Action Icons</Label>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Edit, label: 'Edit item', side: 'top' as const },
                { icon: Copy, label: 'Copy to clipboard', side: 'top' as const },
                { icon: Download, label: 'Download file', side: 'bottom' as const },
                { icon: Trash, label: 'Delete permanently', side: 'bottom' as const },
                { icon: Star, label: 'Add to favorites', side: 'top' as const },
                { icon: Heart, label: 'Like', side: 'top' as const },
                { icon: Bookmark, label: 'Bookmark', side: 'top' as const },
                { icon: Share2, label: 'Share', side: 'top' as const },
              ].map((item) => (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <item.icon className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side={item.side}>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Hover Card</Label>
            <div className="flex flex-wrap gap-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto">
                    <Info className="mr-1 h-4 w-4" />
                    @johndoe
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">
                        Full-stack developer. Building amazing web experiences.
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto">
                    <Info className="mr-1 h-4 w-4" />
                    @sarahdesign
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Sarah Design</h4>
                      <p className="text-sm text-muted-foreground">
                        UI/UX Designer passionate about creating beautiful interfaces.
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <Badge variant="secondary">Figma</Badge>
                        <Badge variant="secondary">Design Systems</Badge>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
