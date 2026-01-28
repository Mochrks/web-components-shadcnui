import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TypographyDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Typography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Heading 1
          </h1>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Heading 2
          </h2>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Heading 3</h3>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Heading 4</h4>
          <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">Heading 5</h5>
          <h6 className="scroll-m-20 text-base font-semibold tracking-tight">Heading 6</h6>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Body 1: The king, seeing how much happier his subjects were, realized the error of his
            ways and repealed the joke tax.
          </p>
          <p className="text-sm text-muted-foreground">
            Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-lg font-semibold text-muted-foreground">Subtitle 1</p>
          <p className="text-sm font-medium leading-none">Subtitle 2</p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Caption</span>
            <Button variant="link" className="p-0 h-auto">
              Button
            </Button>
            <span className="text-xs font-medium uppercase text-muted-foreground">OVERLINE</span>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
