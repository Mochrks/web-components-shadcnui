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
        <CardContent className="flex flex-col items-center justify-center h-48 gap-3 text-muted-foreground">
          <img src="/nodata.png" alt="No data" className="h-24 w-24 object-contain opacity-80" />
          <p>No items found</p>
        </CardContent>
      </Card>
    </section>
  )
}
