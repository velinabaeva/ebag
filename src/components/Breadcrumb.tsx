import { ChevronRight } from 'lucide-react'

export default function Breadcrumb() {
  return (
    <nav
      aria-label="Пътека"
      className="flex w-full flex-wrap items-center gap-1 py-1 text-sm text-[#676767]"
    >
      <a href="https://www.ebag.bg/" className="hover:text-[#020202]">
        Начало
      </a>
      <ChevronRight className="size-3 shrink-0 opacity-70" aria-hidden strokeWidth={2} />
      <a href="https://www.ebag.bg/profile/" className="hover:text-[#020202]">
        Профил
      </a>
      <ChevronRight className="size-3 shrink-0 opacity-70" aria-hidden strokeWidth={2} />
      <span className="font-normal text-[#020202]">За вкъщи</span>
    </nav>
  )
}
