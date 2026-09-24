import { CalendarClock, ShieldCheck, Home, BadgeCheck } from "lucide-react"
import { BUSINESS } from "@/lib/business"

const badges = [
  { icon: CalendarClock, label: `Serving Lake Norman Since ${BUSINESS.foundingYear}` },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "Free Estimates" },
  { icon: Home, label: "Locally Owned & Operated" },
]

export function FreeEstimateTrustStrip() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="h-7 w-7 text-kelly-600" />
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
