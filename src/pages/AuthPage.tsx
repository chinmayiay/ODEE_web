import { SectionHeader } from '../components/common/SectionHeader'
import { AuthCard } from '../components/mock/AuthCard'

export function AuthPage() {
  return (
    <main className="section-surface py-12 sm:py-16 px-5 sm:px-8">
      <SectionHeader
        title="Welcome to ODEE"
        subtitle="Secure mobile OTP login for students, parents, and CSR partners."
      />
      <AuthCard />
    </main>
  )
}
