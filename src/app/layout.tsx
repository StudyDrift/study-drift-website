import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Study Drift",
  description: "Learn by Learning & Teach by Teaching",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-hidden">{children}</body>
    </html>
  )
}
