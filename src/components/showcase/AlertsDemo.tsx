import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AlertsDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Alerts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="bg-blue-50 text-blue-900 border-blue-200">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-800">Info Alert</AlertTitle>
            <AlertDescription className="text-blue-700">
              This is an informational message with shadcn-like styling.
            </AlertDescription>
          </Alert>
          <Alert className="bg-green-50 text-green-900 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Operation completed successfully!
            </AlertDescription>
          </Alert>
          <Alert className="bg-amber-50 text-amber-900 border-amber-200">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              Please review your settings before proceeding.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive" className="bg-red-50 text-red-900 border-red-200">
            <XCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              An error occurred. Please try again.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </section>
  )
}
