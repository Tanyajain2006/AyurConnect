"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { food: "Khichdi", count: 120 },
  { food: "Mung Soup", count: 96 },
  { food: "Buttermilk", count: 70 },
  { food: "Ghee", count: 64 },
  { food: "Papaya", count: 48 },
]

export function FoodsBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Most Prescribed Foods</CardTitle>
        <CardDescription>Top dietary recommendations</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[280px]" config={{ count: { label: "Count", color: "var(--color-brand)" } }}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="food" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="count" fill="var(--color-count)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
