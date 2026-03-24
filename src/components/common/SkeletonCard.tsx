export function SkeletonCard() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="skeleton h-4 w-24 rounded-full" />
      <div className="skeleton mt-4 h-6 w-2/3 rounded-lg" />
      <div className="skeleton mt-3 h-4 w-full rounded-lg" />
      <div className="skeleton mt-2 h-4 w-5/6 rounded-lg" />
    </div>
  )
}
