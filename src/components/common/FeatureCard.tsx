import type { ReactNode } from 'react'

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <article className="card-float rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="mb-4 inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">{icon}</div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </article>
  )
}
