import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AvatarsDemo() {
  return (
    <section className="space-y-4">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Avatars & Tooltips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Avatar className="bg-primary text-primary-foreground">
              <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarFallback>T</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Avatar className="h-14 w-14">
              <AvatarFallback>L</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-sm text-muted-foreground">Hover over avatars to see tooltips</p>
        </CardContent>
      </Card>
    </section>
  )
}
