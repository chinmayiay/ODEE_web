import { Brain, CalendarCheck2, Gamepad2, Goal, LineChart, NotebookPen } from 'lucide-react'
import { LargeCTAButton } from '../components/common/LargeCTAButton'
import { FeatureCard } from '../components/common/FeatureCard'
import { OdeeLogo } from '../components/common/OdeeLogo'
import { SectionHeader } from '../components/common/SectionHeader'
import { SkeletonCard } from '../components/common/SkeletonCard'
import { StatCard } from '../components/common/StatCard'
import { StepFlow } from '../components/common/StepFlow'
import { ParentDashboardPreview } from '../components/mock/ParentDashboardPreview'
import { StudentDashboardPreview } from '../components/mock/StudentDashboardPreview'
import { useLanguage } from '../context/LanguageContext'

export function LandingPage() {
  const { copyText } = useLanguage()
  const features = [
    { icon: <Goal size={20} />, title: 'Goal-Based Learning', description: 'Choose your target and get a focused plan.' },
    { icon: <CalendarCheck2 size={20} />, title: 'Daily Smart Tasks', description: 'Short daily tasks to build strong consistency.' },
    { icon: <Brain size={20} />, title: 'AI Personalization', description: 'Learning adapts based on student performance.' },
    { icon: <NotebookPen size={20} />, title: 'Mock Tests & Quizzes', description: 'Practice in exam-like formats every week.' },
    { icon: <LineChart size={20} />, title: 'Progress Analytics', description: 'Simple insights for students and parents.' },
    { icon: <Gamepad2 size={20} />, title: 'Gamified Learning', description: 'Coins, streaks, and badges keep learners engaged.' },
  ]

  return (
    <main>
      <section className="app-gradient px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-blue-700">
              <OdeeLogo size={20} />
              ODEE - ಓದಿ
            </div>
            <p className="text-sm font-semibold text-blue-700">{copyText.tagline}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Your Daily Learning Partner</h1>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Personalized AI-powered study plans for every student.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LargeCTAButton withIcon>{copyText.cta.startLearning}</LargeCTAButton>
              <LargeCTAButton variant="secondary" withIcon>
                {copyText.cta.exploreFeatures}
              </LargeCTAButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-soft">
            <div className="mx-auto h-64 max-w-sm rounded-3xl bg-gradient-to-br from-blue-800 via-blue-600 to-cyan-400 p-5 text-white">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Student Smart Panel</p>
                <OdeeLogo size={26} />
              </div>
              <p className="mt-2 text-xs opacity-90">Daily goal and adaptive tasks in one simple screen.</p>
              <div className="mt-5 grid gap-2 text-xs">
                <div className="rounded-2xl bg-white/20 p-3">Goal: Distinction</div>
                <div className="rounded-2xl bg-white/20 p-3">Today's Tasks: 4</div>
                <div className="rounded-2xl bg-white/20 p-3">Streak: 12 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface mt-8 p-5 py-12 sm:p-8 sm:py-16">
        <SectionHeader title="Features That Make Learning Easier" subtitle="Minimal, friendly, and personalized for every student." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>

      <section className="section-surface mt-8 p-5 py-12 sm:p-8 sm:py-16">
        <SectionHeader title="How ODEE Works" subtitle="Simple daily process that builds results." />
        <StepFlow
          steps={[
            { title: 'Choose Goal', description: 'Pass / First Class / Distinction / Career' },
            { title: 'Get Daily Tasks', description: 'Short tasks matched to your level' },
            { title: 'Practice & Test', description: 'Regular revision with mock tests' },
            { title: 'Track Progress', description: 'Clear improvement metrics each week' },
          ]}
        />
      </section>

      <section className="section-surface mt-8 p-5 py-12 sm:p-8 sm:py-16">
        <SectionHeader title="Student Dashboard Preview" subtitle="See tasks, progress, and rewards in one glance." />
        <StudentDashboardPreview />
      </section>

      <section className="section-surface mt-8 p-5 py-12 sm:p-8 sm:py-16">
        <SectionHeader title="Track your child’s progress" subtitle="Parents get simple weekly graphs and alerts." />
        <div className="grid gap-4 lg:grid-cols-2">
          <ParentDashboardPreview />
          <SkeletonCard />
        </div>
      </section>

      <section className="section-surface mt-8 p-5 py-12 sm:p-8 sm:py-16">
        <SectionHeader title="Empowering rural education" subtitle="Affordable, personalized learning for every district." />
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard value="1,20,000+" label="Students Impacted" />
          <StatCard value="28%" label="Avg. Improvement" />
          <StatCard value="31" label="District Coverage" />
        </div>
      </section>
    </main>
  )
}
