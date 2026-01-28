import { XCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function BadgesDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Badges & Chips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Badge variant="outline">Default</Badge>
            <Badge>Primary</Badge>
            <Badge className="bg-green-500 hover:bg-green-600">Success</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge className="bg-amber-500 hover:bg-amber-600">Warning</Badge>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className="rounded-full">
              Chip 1
            </Badge>
            <Badge className="rounded-full">Chip 2</Badge>
            <Badge variant="secondary" className="rounded-full gap-1 pr-1">
              Deletable <XCircle className="h-3 w-3 cursor-pointer" />
            </Badge>
            <Badge variant="outline" className="rounded-full cursor-pointer hover:bg-accent">
              Clickable
            </Badge>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
