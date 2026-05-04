import type { LucideIcon } from 'lucide-react'
import {
  Bell,
  ChevronRight,
  Gift,
  Heart,
  CalendarDays,
  ListChecks,
  MapPin,
  Settings2,
  ShoppingBag,
  Star,
  Ticket,
  User,
  Users,
} from 'lucide-react'

function Row({
  icon: Icon,
  label,
  active,
}: {
  icon: LucideIcon
  label: string
  active?: boolean
}) {
  return (
    <a
      href="#"
      className={`flex w-full items-center gap-2 rounded-lg px-4 py-4 text-base text-[#020202] ${
        active ? 'bg-[#e4f6f6] font-semibold ring-2 ring-[#138484]' : 'font-normal hover:bg-[#f5f5f5]'
      }`}
    >
      <Icon className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
      <span className="min-w-0 flex-1 truncate">{label}</span>
      <ChevronRight className="size-5 shrink-0 text-[#676767]" strokeWidth={1.75} />
    </a>
  )
}

export default function SidebarNav() {
  return (
    <aside className="w-full shrink-0 border-[#ccc] pb-6 lg:w-[min(100%,315px)] lg:border-r lg:pr-7 lg:pb-0">
      <div className="rounded-lg">
        <div className="flex items-center gap-3 p-4">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#e6e6e6] text-[#138484]">
            <User className="size-8" strokeWidth={1.5} aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-sm leading-5 tracking-[-0.02em] text-[#9a9a9a]">
              Здравей,
            </p>
            <p className="text-xl leading-tight tracking-[-0.02em] text-[#020202]">Velina</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-6">
        <div className="flex flex-col gap-0">
          <Row icon={ShoppingBag} label="Поръчки" />
          <Row icon={ListChecks} label="Списък за пазар" active />
          <Row icon={Heart} label="Любими" />
          <Row icon={Star} label="Оцени ни" />
          <Row icon={Bell} label="Известия" />
        </div>

        <div className="bg-[#f5f5f5] px-4 py-2">
          <h2 className="font-secondary text-sm font-normal text-[#676767]">Моят профил</h2>
        </div>

        <div className="flex flex-col gap-0">
          <Row icon={Users} label="Служители" />
          <Row icon={MapPin} label="Адреси" />
          <Row icon={Ticket} label="Промо кодове" />
          <Row icon={Gift} label="Ваучери" />
          <Row icon={CalendarDays} label="Моите абонаменти" />
          <Row icon={Settings2} label="Настройки" />
        </div>

        <div className="pt-2">
          <button
            type="button"
            className="relative flex h-10 w-full max-w-[220px] items-center justify-center rounded-full bg-white px-6 text-sm font-normal text-[#020202] shadow-[inset_0_0_0_1px_#353535] sm:w-auto"
          >
            Изход от профил
          </button>
        </div>
      </div>
    </aside>
  )
}
