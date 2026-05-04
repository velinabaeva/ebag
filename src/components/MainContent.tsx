import { ArrowLeft, Pencil, Share2, Trash2 } from 'lucide-react'

export default function MainContent() {
  return (
    <section className="relative min-w-0 flex-1 pl-0 lg:pl-16 xl:pl-24">
      <div className="flex w-full max-w-[1000px] flex-col gap-8 lg:gap-12">
        <div className="flex flex-wrap items-start justify-between gap-3 sm:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[inset_0_0_0_1px_#ccc]"
              aria-label="Назад"
            >
              <ArrowLeft className="size-4 text-[#020202]" strokeWidth={1.75} />
            </button>
            <h1 className="font-secondary min-w-0 text-2xl font-normal tracking-[-0.02em] text-[#020202] sm:text-[28px]">
              За вкъщи <span className="text-[#676767]">(0)</span>
            </h1>
          </div>
          <div className="flex w-full shrink-0 flex-wrap items-center justify-end gap-2 sm:w-auto">
            <button
              type="button"
              className="relative flex size-10 items-center justify-center rounded-full bg-white shadow-[inset_0_0_0_1px_#353535]"
              aria-label="Изтрий"
            >
              <Trash2 className="size-4 text-[#020202]" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="relative flex size-10 items-center justify-center rounded-full bg-white shadow-[inset_0_0_0_1px_#353535]"
              aria-label="Редактирай"
            >
              <Pencil className="size-4 text-[#020202]" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="relative flex h-10 items-center gap-2 rounded-full bg-white px-5 shadow-[inset_0_0_0_1px_#353535]"
            >
              <Share2 className="size-[18px] text-[#020202]" strokeWidth={1.75} />
              <span className="text-sm font-normal text-[#020202]">Сподели</span>
            </button>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-[#fff8e8] px-6 py-6 text-center sm:px-10 sm:py-6">
          <p className="text-base font-normal leading-snug text-[#020202]">
            Все още нямаш продукти в този списък.
          </p>
        </div>
      </div>
    </section>
  )
}
