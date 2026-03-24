import { Flame, ListTodo, Trophy } from 'lucide-react'

export function StudentDashboardPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <article className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
        <ListTodo className="text-blue-700" size={18} />
        <h3 className="mt-3 text-sm font-semibold text-slate-900">Today's Tasks</h3>
        <p className="mt-1 text-xs text-slate-600">Learn 2 topics, solve 15 MCQs</p>
      </article>
      <article className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
        <Trophy className="text-amber-500" size={18} />
        <h3 className="mt-3 text-sm font-semibold text-slate-900">Progress Meter</h3>
        <p className="mt-1 text-xs text-slate-600">74% syllabus completed</p>
      </article>
      <article className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
        <Flame className="text-orange-500" size={18} />
        <h3 className="mt-3 text-sm font-semibold text-slate-900">Streak & Coins</h3>
        <p className="mt-1 text-xs text-slate-600">12-day streak, 420 coins</p>
      </article>
    </div>
  )
}
