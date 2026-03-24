export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <article className="rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-sm">
      <p className="text-2xl font-bold text-blue-800">{value}</p>
      <p className="mt-2 text-sm text-slate-600">{label}</p>
    </article>
  )
}
