import { SectionHeader } from '../components/common/SectionHeader'

const featureBlocks = [
  {
    title: 'Goal-driven learning engine',
    body: 'Students set their target and the platform creates a guided route for daily completion.',
  },
  {
    title: 'Daily micro-learning',
    body: 'Every day includes Learn, Practice, Revise, and Motivate cycles for better retention.',
  },
  {
    title: 'Adaptive tests',
    body: 'Mock tests adjust difficulty based on mistakes so weak areas improve faster.',
  },
  {
    title: 'Gamification',
    body: 'Coins, streaks, and badges create positive momentum without distracting from academics.',
  },
  {
    title: 'Offline learning capability',
    body: 'Designed for low internet zones with lightweight tasks and sync-friendly progress updates.',
  },
]

export function FeaturesPage() {
  return (
    <main className="section-surface py-12 sm:py-16 px-5 sm:px-8">
      <SectionHeader
        title="Powerful Features, Simple Experience"
        subtitle="Built for students from Class 5 to Degree with rural-first accessibility."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {featureBlocks.map((feature) => (
          <article key={feature.title} className="card-float rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{feature.body}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
