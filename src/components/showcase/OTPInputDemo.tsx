'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp'

export function OTPInputDemo() {
  const [value4, setValue4] = useState('')
  const [value6, setValue6] = useState('')

  return (
    <section className="space-y-4">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>OTP / Verification Code Input</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>4-Digit OTP</Label>
            <InputOTP maxLength={4} value={value4} onChange={setValue4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-xs text-muted-foreground">Value: {value4 || '—'}</p>
          </div>

          <div className="space-y-2">
            <Label>6-Digit OTP with Separator</Label>
            <InputOTP maxLength={6} value={value6} onChange={setValue6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-xs text-muted-foreground">Value: {value6 || '—'}</p>
          </div>

          <div className="space-y-2">
            <Label>Disabled OTP</Label>
            <InputOTP maxLength={4} disabled>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
