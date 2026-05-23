import { company } from '../data/content'

export default function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={company.logoUrl}
        alt="ZOST logo"
        className="h-24 w-24 shrink-0 bg-transparent object-contain shadow-none sm:h-24 sm:w-24"
      />
      <div className="flex flex-col justify-center leading-none">
        <p className="text-[10px] uppercase tracking-[0.28em] text-ocean dark:text-gold">Travelling Agency</p>
      </div>
    </div>
  )
}
