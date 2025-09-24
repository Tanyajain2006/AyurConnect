import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DoshaTrendsChart } from "@/components/reports/dosha-trends-chart"
import { FoodsBarChart } from "@/components/reports/foods-bar-chart"
import { CompliancePieChart } from "@/components/reports/compliance-pie-chart"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-6">
      <header className="mb-6">
        <h1 className="text-pretty text-3xl font-semibold">Reports</h1>
        <p className="text-muted-foreground">Patient reports, diet charts, therapy summaries, and analytics.</p>
      </header>

      <Tabs defaultValue="patient-reports" className="space-y-6">
        <TabsList>
          <TabsTrigger value="patient-reports">Patient Reports</TabsTrigger>
          <TabsTrigger value="diet-charts">Diet Charts</TabsTrigger>
          <TabsTrigger value="therapy-summaries">Therapy Summaries</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="patient-reports" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Patient Reports</CardTitle>
                <CardDescription>Download diet charts and therapy progress PDFs</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary">Print</Button>
                <Button className="bg-brand text-brand-foreground hover:opacity-90">Export PDF</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient</TableHead>
                    <TableHead>Report</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { patient: "Priya Sharma", report: "Diet Chart Report", date: "2025-09-20" },
                    { patient: "Raj Patel", report: "Therapy Progress", date: "2025-09-18" },
                    { patient: "Anita Devi", report: "Diet Chart Report", date: "2025-09-15" },
                  ].map((r) => (
                    <TableRow key={r.patient + r.report}>
                      <TableCell>{r.patient}</TableCell>
                      <TableCell>{r.report}</TableCell>
                      <TableCell>{new Date(r.date).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="secondary">
                            View
                          </Button>
                          <Button size="sm" className="bg-brand text-brand-foreground hover:opacity-90">
                            Download
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diet-charts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Diet Charts</CardTitle>
              <CardDescription>Maintain and export individualized diet plans</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Your team can connect real data here. For now, this is a placeholder table or editor where you can
                render a patient’s chart and export it.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="therapy-summaries" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Therapy Summaries</CardTitle>
              <CardDescription>Session counts, completion rates, and notes</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Hook this to your backend to show therapy aggregates and downloadable summaries.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <DoshaTrendsChart />
            <FoodsBarChart />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <CompliancePieChart />
            <Card>
              <CardHeader>
                <CardTitle>Exports</CardTitle>
                <CardDescription>Save and share analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2">
                  <Button variant="secondary">Print</Button>
                  <Button className="bg-brand text-brand-foreground hover:opacity-90">Export PDF</Button>
                </div>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  Export actions are placeholders. Wire them to your reporting service when ready.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
