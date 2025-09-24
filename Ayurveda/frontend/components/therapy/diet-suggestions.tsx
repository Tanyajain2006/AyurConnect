"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const suggestions: Record<string, { pre: string[]; post: string[] }> = {
  "Abhyanga (Oil Massage)": {
    pre: ["Light breakfast", "Warm water with lemon", "Avoid heavy dairy"],
    post: ["Khichdi with ghee", "Cumin-fennel tea", "Early dinner"],
  },
  Shirodhara: {
    pre: ["Avoid caffeine 3–4 hrs prior", "Warm sesame oil scalp prep if advised"],
    post: ["Warm milk with turmeric", "Gentle, warm foods", "Early sleep"],
  },
  "Panchakarma – Vamana": {
    pre: ["Follow physician’s preparatory snehana", "Peya (thin rice gruel) if prescribed"],
    post: ["Samsarjana Krama diet progression", "Jeera-coriander tea", "Strict rest"],
  },
  "Panchakarma – Virechana": {
    pre: ["Light, easy-to-digest meals", "Hydrate well"],
    post: ["Samsarjana Krama progression", "Warm rice gruel", "Avoid spices for 1–2 days"],
  },
  "Panchakarma – Basti": {
    pre: ["Light dinner prior night", "Avoid cold foods"],
    post: ["Warm soups", "Cooked vegetables", "No raw salads same day"],
  },
  Nasya: {
    pre: ["Avoid heavy meals before session", "Gentle steam if advised"],
    post: ["Warm water sips", "Light meals", "Avoid dust/cold wind"],
  },
}

export function DietSuggestions() {
  const [therapy, setTherapy] = React.useState<keyof typeof suggestions>("Abhyanga (Oil Massage)")
  const rec = suggestions[therapy]

  return (
    <div className="lg:sticky lg:top-6">
      <Card>
        <CardHeader>
          <CardTitle>Diet Recommendations</CardTitle>
          <CardDescription>Auto-suggestions for pre and post therapy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <span className="text-sm font-medium">Therapy</span>
            <Select value={therapy} onValueChange={(v) => setTherapy(v as keyof typeof suggestions)}>
              <SelectTrigger>
                <SelectValue placeholder="Choose therapy" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(suggestions).map((k) => (
                  <SelectItem key={k} value={k}>
                    {k}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <section>
            <h4 className="mb-2 font-medium">Pre-therapy</h4>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {rec.pre.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="mb-2 mt-4 font-medium">Post-therapy</h4>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {rec.post.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
