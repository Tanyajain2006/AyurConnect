"use client"

import type React from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

function Pill({
  children,
  tone = "brand",
}: {
  children: React.ReactNode
  tone?: "brand" | "soft"
}) {
  const classes = tone === "brand" ? "bg-brand text-brand-foreground" : "bg-muted text-foreground"
  return (
    <span className={"inline-flex items-center rounded-full px-3 py-1 text-sm font-medium " + classes}>{children}</span>
  )
}

export function ScheduleItem({
  name,
  condition,
  time,
  badge,
  initials,
}: {
  name: string
  condition: string
  time: string
  badge: { label: string; tone?: "brand" | "soft" }
  initials: string
}) {
  return (
    <li className="rounded-xl border bg-card p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium leading-tight">{name}</p>
            <p className="text-sm text-muted-foreground">{condition}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-sm font-medium">{time}</p>
          <Pill tone={badge.tone}>{badge.label}</Pill>
        </div>
      </div>
    </li>
  )
}
