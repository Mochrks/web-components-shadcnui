'use client'

import { toast } from 'sonner'
import { CheckCircle2, XCircle, AlertTriangle, Info, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export function ToastDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Toast / Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Sonner Toast Variants</Label>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() =>
                  toast.success('Success!', {
                    description: 'Your changes have been saved successfully.',
                  })
                }
              >
                <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                Success Toast
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  toast.error('Error!', {
                    description: 'Something went wrong. Please try again.',
                  })
                }
              >
                <XCircle className="mr-2 h-4 w-4 text-red-500" />
                Error Toast
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  toast.warning('Warning!', {
                    description: 'Please review your settings before proceeding.',
                  })
                }
              >
                <AlertTriangle className="mr-2 h-4 w-4 text-amber-500" />
                Warning Toast
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  toast.info('Information', {
                    description: 'A new version is available for download.',
                  })
                }
              >
                <Info className="mr-2 h-4 w-4 text-blue-500" />
                Info Toast
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Toast with Action</Label>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                onClick={() =>
                  toast('Event Created', {
                    description: 'Your event has been scheduled.',
                    action: {
                      label: 'Undo',
                      onClick: () => toast.info('Event undone'),
                    },
                  })
                }
              >
                <Bell className="mr-2 h-4 w-4" />
                Toast with Action
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  const promise = () => new Promise((resolve) => setTimeout(resolve, 2000))
                  toast.promise(promise, {
                    loading: 'Loading data...',
                    success: 'Data loaded successfully!',
                    error: 'Failed to load data.',
                  })
                }}
              >
                Promise Toast
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
