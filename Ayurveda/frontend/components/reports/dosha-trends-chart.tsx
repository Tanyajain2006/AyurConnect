"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", vata: 42, pitta: 38, kapha: 35 },
  { month: "Feb", vata: 39, pitta: 40, kapha: 34 },
  { month: "Mar", vata: 37, pitta: 42, kapha: 36 },
  { month: "Apr", vata: 35, pitta: 41, kapha: 38 },
  { month: "May", vata: 33, pitta: 39, kapha: 40 },
  { month: "Jun", vata: 34, pitta: 38, kapha: 41 },
]

export function DoshaTrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dosha Trends</CardTitle>
        <CardDescription>Average patient dosha balance over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="h-[280px]"
          config={{
            vata: { label: "Vata", color: "oklch(0.70 0.12 290)" },
            pitta: { label: "Pitta", color: "var(--color-chart-4)" }, // warm accent
            kapha: { label: "Kapha", color: "var(--color-brand)" },
          }}
        >
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="vata" stroke="var(--color-vata)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="pitta" stroke="var(--color-pitta)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="kapha" stroke="var(--color-kapha)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
