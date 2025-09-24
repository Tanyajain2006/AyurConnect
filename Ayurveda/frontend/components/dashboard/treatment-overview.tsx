"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Droplets, Leaf, Moon, Sun } from "lucide-react"

type IconKey = "leaf" | "droplets" | "sun" | "moon"

const iconMap: Record<IconKey, React.ReactNode> = {
  leaf: <Leaf className="h-5 w-5 text-brand" aria-hidden="true" />,
  droplets: <Droplets className="h-5 w-5 text-brand" aria-hidden="true" />,
  sun: <Sun className="h-5 w-5 text-brand" aria-hidden="true" />,
  moon: <Moon className="h-5 w-5 text-brand" aria-hidden="true" />,
}

export function TreatmentOverview({
  items,
}: {
  items: Array<{
    label: string
    completed: number
    total: number
    percentLabel: string
    icon: IconKey
  }>
}) {
  return (
    <Card className="rounded-xl p-5">
      <h2 className="text-xl font-semibold">Treatment Overview</h2>
      <p className="mt-1 text-muted-foreground">Current active treatments and therapy completion rates</p>

      <ul className="mt-4 space-y-5">
        {items.map((item) => {
          const pct = Math.max(0, Math.min(100, Math.round((item.completed / item.total) * 100)))
          return (
            <li key={item.label} className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span aria-hidden="true">{iconMap[item.icon]}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {item.completed}/{item.total}
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-brand"
                  style={{ width: `${pct}%` }}
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  role="progressbar"
                />
              </div>

              <p className="text-sm text-muted-foreground">{item.percentLabel}</p>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
