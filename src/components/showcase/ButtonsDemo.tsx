import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ButtonsDemo() {
  return (
    <section className="space-y-4">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 items-center">
          <Button>Primary</Button>
          <Button variant="outline">Outlined</Button>
          <Button variant="secondary">Soft</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link Button</Button>
          <Button disabled>Disabled</Button>
          <Button size="sm">Small</Button>
        </CardContent>
      </Card>
    </section>
  )
}
