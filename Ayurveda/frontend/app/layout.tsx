import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
              <Link href="/" className="font-semibold">
                Clinic Dashboard
              </Link>
              <div className="ml-auto flex items-center gap-1">
                <Link href="/" className="rounded-md px-3 py-1.5 hover:bg-muted">
                  Dashboard
                </Link>
                <Link href="/therapy-management" className="rounded-md px-3 py-1.5 hover:bg-muted">
                  Therapy
                </Link>
                <Link href="/reports" className="rounded-md px-3 py-1.5 hover:bg-muted">
                  Reports
                </Link>
              </div>
            </nav>
          </header>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
