import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function FieldValuesDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Field Values</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label className="text-muted-foreground">Full Name</Label>
            <div className="font-medium">John Doe</div>
          </div>
          <div className="space-y-1">
            <Label className="text-muted-foreground">Email</Label>
            <div className="font-medium">john.doe@example.com</div>
          </div>
          <div className="space-y-1">
            <Label className="text-muted-foreground">Role</Label>
            <div className="font-medium">Administrator</div>
          </div>
          <div className="space-y-1">
            <Label className="text-muted-foreground">Status</Label>
            <div>
              <Badge className="bg-green-600">Active</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
