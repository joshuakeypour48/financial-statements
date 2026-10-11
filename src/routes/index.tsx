import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
<div className="max-w-4xl mx-auto px-6 py-12 bg-slate-950 min-h-screen text-slate-100">
  <div className="border-b border-slate-800 pb-6 mb-8">
    <h1 className="text-3xl font-bold tracking-tight text-red-500">
      Welcome to KISSENA Baked Goods
    </h1>
    <h2 className="mt-2 text-lg font-medium text-amber-400">
      Financial Statements
    </h2>
  </div>
</div>
  )
}
