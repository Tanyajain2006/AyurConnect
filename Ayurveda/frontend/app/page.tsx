import { StatCard } from "@/components/dashboard/stat-card"
import { ScheduleItem } from "@/components/dashboard/schedule-item"
import { TreatmentOverview } from "@/components/dashboard/treatment-overview"

export default function Page() {
  return (
    <main className="mx-auto max-w-screen-sm px-4 py-6 md:py-10">
      <header className="mb-6 md:mb-8">
        <p className="text-sm text-muted-foreground mb-2">Dashboard</p>
        <h1 className="text-3xl font-semibold tracking-tight text-balance">{"Welcome back, Dr. Sharma"}</h1>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          {"Here's what's happening with your practice today."}
        </p>
      </header>

      <section aria-label="Key metrics" className="space-y-4">
        <StatCard title="Total Patients" value="247" hint="+12% from last month" icon="users" />
        <StatCard title={"Today's Appointments"} value="8" hint="3 consultations, 5 follow-ups" icon="calendar" />
        <StatCard title="Active Treatments" value="34" hint="+6 new this week" icon="trending" />
        <StatCard title="Pending Reviews" value="12" hint="Diet charts & therapy plans" icon="clock" />
      </section>

      <section aria-label="Today's Schedule" className="mt-6 space-y-4">
        <div className="rounded-xl border bg-card p-5">
          <h2 className="text-xl font-semibold">{"Today's Schedule"}</h2>
          <p className="mt-1 text-muted-foreground">{"Your appointments for today, September 22, 2025"}</p>

          <ul className="mt-4 space-y-3">
            <ScheduleItem
              name="Priya Sharma"
              condition="Digestive Issues"
              time="9:00 AM"
              badge={{ label: "Consultation", tone: "brand" }}
              initials="PS"
            />
            <ScheduleItem
              name="Raj Patel"
              condition="Joint Pain"
              time="10:30 AM"
              badge={{ label: "Follow-up", tone: "soft" }}
              initials="RP"
            />
            <ScheduleItem
              name="Anita Devi"
              condition="Stress Management"
              time="2:00 PM"
              badge={{ label: "Consultation", tone: "brand" }}
              initials="AD"
            />
            <ScheduleItem
              name="Vikram Singh"
              condition="Panchakarma"
              time="3:30 PM"
              badge={{ label: "Therapy Review", tone: "soft" }}
              initials="VS"
            />
            <ScheduleItem
              name="Meera Joshi"
              condition="Skin Conditions"
              time="4:45 PM"
              badge={{ label: "Follow-up", tone: "soft" }}
              initials="MJ"
            />
          </ul>
        </div>
      </section>

      <section aria-label="Treatment Overview" className="mt-6">
        <TreatmentOverview
          items={[
            {
              label: "Herbal Medicines",
              completed: 18,
              total: 25,
              percentLabel: "72% completion rate",
              icon: "leaf",
            },
            {
              label: "Panchakarma",
              completed: 8,
              total: 12,
              percentLabel: "67% completion rate",
              icon: "droplets",
            },
            {
              label: "Yoga Therapy",
              completed: 15,
              total: 20,
              percentLabel: "75% completion rate",
              icon: "sun",
            },
            {
              label: "Meditation",
              completed: 12,
              total: 15,
              percentLabel: "80% completion rate",
              icon: "moon",
            },
          ]}
        />
      </section>
    </main>
  )
}
