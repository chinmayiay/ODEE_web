export type Step = { title: string; description: string }

export function StepFlow({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
            {index + 1}
          </span>
          <h3 className="mt-4 text-base font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  )
}
