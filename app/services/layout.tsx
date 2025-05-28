import type React from "react"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>{children}</main>
    </div>
  )
}
