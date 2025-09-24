"use client"

import { Pie, PieChart, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "High", value: 56, fill: "var(--color-brand)" },
  { name: "Medium", value: 28, fill: "oklch(0.86 0.03 150 / 0.6)" },
  { name: "Low", value: 16, fill: "oklch(0.92 0 0)" },
]

export function CompliancePieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nutritional Compliance</CardTitle>
        <CardDescription>Adherence to diet plans</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[280px]" config={{}}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={92} innerRadius={54} strokeWidth={2}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
