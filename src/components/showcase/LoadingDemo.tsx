import { Loader2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function LoadingDemo() {
  return (
    <section className="space-y-4">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Loading State</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-40">
          <Loader2 className="h-10 w-10 animate-spin" />
        </CardContent>
      </Card>
    </section>
  )
}

export function NoDataDemo() {
  return (
    <section className="space-y-4">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>No Data State</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-40 gap-2 text-muted-foreground">
          <div className="h-12 w-12 bg-muted rounded-md flex items-center justify-center">
            <div className="h-8 w-8 border-2 border-muted-foreground/20 border-b-muted-foreground rounded-sm" />
          </div>
          <p>No items found</p>
        </CardContent>
      </Card>
    </section>
  )
}
