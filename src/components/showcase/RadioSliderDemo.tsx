import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function RadioSliderDemo() {
  return (
    <section className="space-y-4">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Radio Groups & Sliders</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-three" />
              <Label htmlFor="option-three">Option 3</Label>
            </div>
          </RadioGroup>
          <div className="space-y-2">
            <Label>Volume: 50%</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
