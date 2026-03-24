import { SectionHeader } from '../components/common/SectionHeader'
import { StepFlow } from '../components/common/StepFlow'

export function HowItWorksPage() {
  return (
    <main className="section-surface py-12 sm:py-16 px-5 sm:px-8">
      <SectionHeader
        title="How It Works"
        subtitle="A simple 4-step daily loop for consistent academic growth."
      />
      <StepFlow
        steps={[
          { title: 'Choose Goal', description: 'Pick Pass, First Class, Distinction, or Career guidance path.' },
          { title: 'Get Daily Tasks', description: 'Receive short tasks aligned with your class and performance.' },
          { title: 'Practice & Test', description: 'Practice questions, attempt adaptive quizzes, and revise.' },
          { title: 'Track Progress', description: 'View weekly progress and unlock streak rewards.' },
        ]}
      />
    </main>
  )
}
