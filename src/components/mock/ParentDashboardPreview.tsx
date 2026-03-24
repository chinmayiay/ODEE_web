export function ParentDashboardPreview() {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">Parent Insights</h3>
      <p className="mt-1 text-xs text-slate-600">Weekly performance trend</p>
      <div className="mt-4 flex h-28 items-end gap-2">
        {[35, 50, 40, 75, 62, 84, 72].map((height, idx) => (
          <div
            key={`bar-${idx}`}
            style={{ height: `${height}%` }}
            className="w-full rounded-t-xl bg-gradient-to-t from-blue-700 to-blue-400"
          />
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">Alerts: 1 missed task | Improvement: +18%</p>
    </div>
  )
}
