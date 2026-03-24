import { SectionHeader } from '../components/common/SectionHeader'
import { StatCard } from '../components/common/StatCard'

export function CSRPage() {
  return (
    <main className="section-surface py-12 sm:py-16 px-5 sm:px-8">
      <SectionHeader
        title="CSR / Partners"
        subtitle="Support student success and measure real educational impact."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Partner with ODEE</h3>
          <ul className="mt-3 space-y-3 text-sm text-slate-600">
            <li>Sponsor students in underserved communities.</li>
            <li>Access clear impact reports and progress outcomes.</li>
            <li>Track district-level coverage and improvements.</li>
          </ul>
        </article>
        <div className="grid gap-4 sm:grid-cols-2">
          <StatCard value="50,000+" label="Sponsored Learners" />
          <StatCard value="92%" label="Task Completion Rate" />
          <StatCard value="31" label="District Dashboards" />
          <StatCard value="18%" label="Average Score Lift" />
        </div>
      </div>
    </main>
  )
}
