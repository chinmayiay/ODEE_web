import { Route, Routes } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { PageContainer } from '../components/layout/PageContainer'
import { AuthPage } from '../pages/AuthPage'
import { CSRPage } from '../pages/CSRPage'
import { FeaturesPage } from '../pages/FeaturesPage'
import { HowItWorksPage } from '../pages/HowItWorksPage'
import { LandingPage } from '../pages/LandingPage'
import { ParentsPage } from '../pages/ParentsPage'

function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </div>
  )
}

export function AppRoutes() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/parents" element={<ParentsPage />} />
        <Route path="/csr" element={<CSRPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </AppShell>
  )
}
