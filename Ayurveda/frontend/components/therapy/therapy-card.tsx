import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function TherapyCard(props: {
  patient: string
  therapy: string
  datetime: string // ISO
  status: "Scheduled" | "In Progress" | "Completed"
}) {
  const dt = new Date(props.datetime)
  const time = dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  const day = dt.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })
  const initials = props.patient
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")

  const badgeClass =
    props.status === "Completed"
      ? "bg-brand text-brand-foreground"
      : props.status === "In Progress"
        ? "border border-brand text-brand bg-background"
        : "bg-secondary text-foreground"

  return (
    <div className="flex items-center justify-between rounded-xl border p-3">
      <div className="flex min-w-0 items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate font-medium">{props.patient}</p>
          <p className="text-muted-foreground text-sm">{props.therapy}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-medium">{time}</p>
          <p className="text-muted-foreground text-xs">{day}</p>
        </div>
        <Badge className={cn("rounded-full px-3 py-1 text-xs", badgeClass)}>{props.status}</Badge>
      </div>
    </div>
  )
}
