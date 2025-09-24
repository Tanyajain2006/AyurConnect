import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TherapyCard } from "@/components/therapy/therapy-card"
import { AssignTherapyDialog } from "@/components/therapy/assign-therapy-dialog"
import { DietSuggestions } from "@/components/therapy/diet-suggestions"

export default function Page() {
  const today = new Date()

  // Mock upcoming therapies data
  const therapies = [
    {
      id: "t1",
      patient: "Priya Sharma",
      therapy: "Abhyanga (Oil Massage)",
      datetime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0).toISOString(),
      status: "Scheduled" as const,
    },
    {
      id: "t2",
      patient: "Raj Patel",
      therapy: "Shirodhara",
      datetime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 30).toISOString(),
      status: "In Progress" as const,
    },
    {
      id: "t3",
      patient: "Anita Devi",
      therapy: "Panchakarma – Vamana",
      datetime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0).toISOString(),
      status: "Completed" as const,
    },
  ]

  return (
    <main className="container mx-auto max-w-6xl px-4 py-6">
      <header className="mb-6">
        <h1 className="text-pretty text-3xl font-semibold">Panchakarma & Therapy Management</h1>
        <p className="text-muted-foreground">Schedule therapies, track progress, and view diet recommendations.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left content: calendar + therapy list */}
        <section className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>Plan and organize upcoming therapies</CardDescription>
              </div>
              <AssignTherapyDialog>
                <Button className="bg-brand text-brand-foreground hover:opacity-90">Assign New Therapy</Button>
              </AssignTherapyDialog>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex items-start gap-4 md:gap-6">
                <Calendar mode="single" selected={today} className="rounded-lg border" />
                <div className="hidden sm:block text-sm text-muted-foreground">
                  <p className="max-w-xs">
                    Select a date to view or assign therapies. Use the button to add a new therapy session.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Therapies</CardTitle>
              <CardDescription>Patients, therapy types, and session times</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {therapies.map((t, idx) => (
                <div key={t.id}>
                  <TherapyCard patient={t.patient} therapy={t.therapy} datetime={t.datetime} status={t.status} />
                  {idx < therapies.length - 1 && <Separator className="my-3" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Right panel: diet suggestions */}
        <aside className="lg:col-span-1">
          <DietSuggestions />
        </aside>
      </div>
    </main>
  )
}
