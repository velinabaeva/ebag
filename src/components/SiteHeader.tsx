import type { LucideIcon } from 'lucide-react'
import {
  ChefHat,
  ChevronDown,
  Gift,
  Heart,
  ListChecks,
  Martini,
  Menu,
  Percent,
  Search,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Timer,
  User,
  UtensilsCrossed,
} from 'lucide-react'

function renderIcon(Icon: LucideIcon, className?: string) {
  return (
    <Icon
      aria-hidden
      className={className ?? 'size-5 shrink-0'}
      strokeWidth={1.75}
    />
  )
}

function NavPill({
  label,
  icon: Icon,
  active,
}: {
  label: string
  icon: LucideIcon
  active?: boolean
}) {
  return (
    <a
      href="#"
      className={`flex h-10 shrink-0 items-center gap-2 rounded-full px-3 text-sm text-[#020202] ${
        active ? 'font-medium' : 'font-normal'
      }`}
    >
      <span className="text-[#daa328]">
        {renderIcon(Icon, 'size-6')}
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </a>
  )
}

export default function SiteHeader() {
  return (
    <header className="isolate flex w-full flex-col bg-[#138484] text-white">
      <div className="mx-auto flex w-full max-w-[1664px] flex-wrap items-center gap-x-3 gap-y-3 px-4 py-4 sm:gap-x-5 sm:px-6 lg:px-7 lg:py-5">
        <a href="https://www.ebag.bg/" className="order-1 flex shrink-0 items-center">
          <img
            src="/ebag-logo.svg"
            alt="eBag"
            className="h-9 w-auto max-w-[140px] brightness-0 invert sm:h-10 sm:max-w-[160px] lg:h-[41px]"
          />
        </a>

        <button
          type="button"
          className="order-3 flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#0f6262] px-4 text-[15px] font-semibold sm:order-2 lg:h-[41px]"
        >
          {renderIcon(Menu, 'size-5 text-white')}
          <span className="hidden sm:inline">Категории</span>
          {renderIcon(ChevronDown, 'size-4 text-white opacity-90')}
        </button>

        <div className="order-2 flex min-w-0 flex-1 basis-full sm:order-3 sm:basis-[280px] lg:min-w-[280px] lg:flex-1">
          <div className="relative flex w-full min-w-0">
            <div className="flex min-h-[41px] w-full flex-1 items-center rounded-full bg-white pl-5 pr-[52px] text-[#9a9a9a]">
              <span className="truncate text-sm">Намери всичко в eBag</span>
            </div>
            <button
              type="button"
              className="absolute right-1 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5bf47] text-[#020202] sm:size-10"
              aria-label="Търсене"
            >
              {renderIcon(Search, 'size-4 sm:size-[17px]')}
            </button>
          </div>
        </div>

        <div className="order-4 ml-auto flex flex-wrap items-center justify-end gap-1 sm:gap-2 lg:gap-3">
          <a
            href="https://www.ebag.bg/lists/"
            className="flex size-10 items-center justify-center rounded-full hover:bg-white/10"
            aria-label="Любими"
          >
            {renderIcon(Heart, 'size-5 text-white')}
          </a>
          <a
            href="https://www.ebag.bg/lists/"
            className="flex h-[41px] items-center justify-center rounded-full px-3 hover:bg-white/10"
            aria-label="Списъци"
          >
            {renderIcon(ListChecks, 'size-5 text-white')}
          </a>
          <a
            href="https://www.ebag.bg/orders/"
            className="relative flex size-10 items-center justify-center rounded-full hover:bg-white/10"
            aria-label="Профил"
          >
            {renderIcon(User, 'size-5 text-white')}
            <span className="absolute -right-0.5 -top-0.5 flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#f5bf47] px-1 text-[10px] font-medium leading-none text-[#020202]">
              3
            </span>
          </a>
          <div className="hidden text-center text-[10px] font-normal uppercase leading-tight text-white/95 sm:block sm:text-[11px]">
            <div>Първи свободен час</div>
            <div className="text-xs font-semibold sm:text-[13px]">
              Днес 20:00 - 21:00
            </div>
          </div>
          <a
            href="https://www.ebag.bg/cart/"
            className="flex h-10 items-center gap-2 rounded-full bg-[#0f6262] px-3 text-sm font-semibold sm:h-[41px] sm:px-3.5"
          >
            <span className="relative flex items-center">
              {renderIcon(ShoppingCart, 'size-6 text-white')}
              <span className="absolute -right-1.5 -top-1.5 flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#f5bf47] px-1 text-[10px] font-medium text-[#020202]">
                0
              </span>
            </span>
            <span className="hidden flex-col items-end leading-tight sm:flex">
              <span>
                0,00 <span className="text-sm">€</span>
              </span>
              <span className="text-sm font-semibold">
                0,00 <span>лв.</span>
              </span>
            </span>
          </a>
        </div>
      </div>

      <nav className="border-b border-[#f5f5f5] bg-white text-[#020202]">
        <div className="mx-auto w-full max-w-[1664px] px-4 py-2 sm:px-6 lg:px-7">
          <div className="-mx-1 flex gap-1 overflow-x-auto pb-1 sm:mx-0 sm:flex-wrap sm:justify-between sm:overflow-visible sm:pb-0">
            <NavPill label="Нови" icon={Sparkles} />
            <NavPill label="Оферти" icon={Percent} />
            <NavPill label="Лимитирани" icon={Timer} />
            <NavPill label="Аптека BENU" icon={Stethoscope} />
            <NavPill label="Шеф меню" icon={ChefHat} />
            <NavPill label="Рецепти" icon={UtensilsCrossed} />
            <NavPill label="Коктейл бар" icon={Martini} />
            <NavPill label="Подаръчен ваучер" icon={Gift} />
            <NavPill label="Списък за пазар" icon={ListChecks} active />
          </div>
        </div>
      </nav>
    </header>
  )
}
