import { SectionHeader } from '../components/common/SectionHeader'
import { ParentDashboardPreview } from '../components/mock/ParentDashboardPreview'

export function ParentsPage() {
  return (
    <main className="section-surface py-12 sm:py-16 px-5 sm:px-8">
      <SectionHeader
        title="For Parents"
        subtitle="Stay informed with simple tracking, reports, and alerts."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <ParentDashboardPreview />
        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Parent Controls</h3>
          <ul className="mt-3 space-y-3 text-sm text-slate-600">
            <li>Monitor student progress by chapter and subject.</li>
            <li>Receive weekly report summaries in simple format.</li>
            <li>Get alerts for low performance and missed daily tasks.</li>
          </ul>
        </article>
      </div>
    </main>
  )
}
