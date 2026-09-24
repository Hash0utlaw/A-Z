import { Phone } from "lucide-react"
import { BUSINESS } from "@/lib/business"

export function FreeEstimateMobileCtaBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-3">
        <a
          href={`tel:${BUSINESS.phoneE164}`}
          className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-navy-700 text-navy-700 font-semibold rounded-md py-3 text-sm"
        >
          <Phone className="h-4 w-4" />
          {BUSINESS.phoneDisplay}
        </a>
        <a
          href="#estimate-form"
          className="flex-1 inline-flex items-center justify-center bg-kelly-500 hover:bg-kelly-600 text-white font-semibold rounded-md py-3 text-sm"
        >
          Get Free Estimate
        </a>
      </div>
    </div>
  )
}
