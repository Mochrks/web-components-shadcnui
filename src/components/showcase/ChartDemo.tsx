'use client'

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'

const barData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'Jun', desktop: 214, mobile: 140 },
]

const lineData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 },
]

const pieData = [
  { name: 'chrome', value: 275, fill: 'var(--color-chrome)' },
  { name: 'safari', value: 200, fill: 'var(--color-safari)' },
  { name: 'firefox', value: 187, fill: 'var(--color-firefox)' },
  { name: 'edge', value: 173, fill: 'var(--color-edge)' },
  { name: 'other', value: 90, fill: 'var(--color-other)' },
]

const barConfig = {
  desktop: { label: 'Desktop', color: 'hsl(221, 83%, 53%)' },
  mobile: { label: 'Mobile', color: 'hsl(262, 83%, 58%)' },
} satisfies ChartConfig

const lineConfig = {
  revenue: { label: 'Revenue', color: 'hsl(142, 76%, 36%)' },
  expenses: { label: 'Expenses', color: 'hsl(0, 84%, 60%)' },
} satisfies ChartConfig

const pieConfig = {
  chrome: { label: 'Chrome', color: 'hsl(221, 83%, 53%)' },
  safari: { label: 'Safari', color: 'hsl(262, 83%, 58%)' },
  firefox: { label: 'Firefox', color: 'hsl(24, 95%, 53%)' },
  edge: { label: 'Edge', color: 'hsl(142, 76%, 36%)' },
  other: { label: 'Other', color: 'hsl(0, 0%, 60%)' },
} satisfies ChartConfig

export function ChartDemo() {
  return (
    <section className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Charts (Recharts)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Bar Chart</CardTitle>
                <CardDescription>Desktop vs Mobile visitors</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={barConfig} className="h-[250px] w-full">
                  <BarChart data={barData}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Line Chart</CardTitle>
                <CardDescription>Revenue vs Expenses trend</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={lineConfig} className="h-[250px] w-full">
                  <LineChart data={lineData}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="var(--color-revenue)"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="expenses"
                      stroke="var(--color-expenses)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base">Pie Chart</CardTitle>
                <CardDescription>Browser market share</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ChartContainer config={pieConfig} className="h-[280px] w-[400px]">
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                    />
                    <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
