import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function StepperDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Stepper</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Custom Stepper Implementation */}
          <div className="relative flex items-center justify-between w-full">
            <div className="absolute left-0 top-1/2 w-full h-0.5 bg-muted -z-10" />

            <div className="flex items-center bg-background px-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                1
              </div>
              <span className="ml-2 font-medium text-sm hidden sm:block">Select campaign</span>
            </div>

            <div className="flex items-center bg-background px-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground font-bold text-sm">
                2
              </div>
              <span className="ml-2 font-medium text-muted-foreground text-sm hidden sm:block">
                Create ad group
              </span>
            </div>

            <div className="flex items-center bg-background px-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground font-bold text-sm">
                3
              </div>
              <span className="ml-2 font-medium text-muted-foreground text-sm hidden sm:block">
                Create ads
              </span>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button variant="secondary" disabled>
              Back
            </Button>
            <Button>Next</Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
