export function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm text-slate-600 sm:text-base">{subtitle}</p> : null}
    </div>
  )
}
