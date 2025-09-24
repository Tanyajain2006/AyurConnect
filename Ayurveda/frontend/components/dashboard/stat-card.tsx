"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { CalendarDays, Clock4, TrendingUp, Users } from "lucide-react"
import { cn } from "@/lib/utils"

type IconKey = "users" | "calendar" | "trending" | "clock"

const icons: Record<IconKey, React.ReactNode> = {
  users: <Users className="h-5 w-5 text-muted-foreground" aria-hidden="true" />,
  calendar: <CalendarDays className="h-5 w-5 text-muted-foreground" aria-hidden="true" />,
  trending: <TrendingUp className="h-5 w-5 text-muted-foreground" aria-hidden="true" />,
  clock: <Clock4 className="h-5 w-5 text-muted-foreground" aria-hidden="true" />,
}

export function StatCard({
  title,
  value,
  hint,
  icon,
  className,
}: {
  title: string
  value: string
  hint?: string
  icon: IconKey
  className?: string
}) {
  return (
    <Card className={cn("rounded-xl p-5", className)}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-medium">{title}</h3>
        </div>
        <div aria-hidden="true">{icons[icon]}</div>
      </div>
      <div className="mt-3 text-3xl font-semibold">{value}</div>
      {hint ? <p className="mt-1 text-sm text-muted-foreground">{hint}</p> : null}
    </Card>
  )
}
