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
    <section className="py-10 md:py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 text-center bg-gray-50 rounded-xl border border-gray-100 px-4 py-6"
            >
              <div className="bg-navy-50 rounded-full p-3 w-14 h-14 flex items-center justify-center">
                <Icon className="h-6 w-6 text-navy-700" />
              </div>
              <span className="text-sm font-semibold text-gray-800">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
