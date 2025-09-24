"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function AssignTherapyDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [form, setForm] = React.useState({
    patient: "",
    therapy: "",
    date: "",
    time: "",
    duration: "45",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In the real app, post to backend; for now log to console.
    console.log("[v0] Assigned therapy:", form)
    setOpen(false)
  }

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Assign New Therapy</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="patient">Patient</Label>
            <Input
              id="patient"
              placeholder="Enter patient name"
              value={form.patient}
              onChange={(e) => update("patient", e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label>Therapy Type</Label>
            <Select value={form.therapy} onValueChange={(v) => update("therapy", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose therapy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Abhyanga (Oil Massage)">Abhyanga (Oil Massage)</SelectItem>
                <SelectItem value="Shirodhara">Shirodhara</SelectItem>
                <SelectItem value="Panchakarma – Vamana">Panchakarma – Vamana</SelectItem>
                <SelectItem value="Panchakarma – Virechana">Panchakarma – Virechana</SelectItem>
                <SelectItem value="Panchakarma – Basti">Panchakarma – Basti</SelectItem>
                <SelectItem value="Nasya">Nasya</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Duration</Label>
            <Select value={form.duration} onValueChange={(v) => update("duration", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="45">45 minutes</SelectItem>
                <SelectItem value="60">60 minutes</SelectItem>
                <SelectItem value="90">90 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />
          <div className="flex items-center justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-brand text-brand-foreground hover:opacity-90">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
