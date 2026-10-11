import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-slate-950 min-h-screen text-slate-100">
      <div className="border-b border-slate-800 pb-6 mb-8">
        <h1 className="text-5xl font-bold tracking-tight text-red-500">Welcome to Kissena Baked Goods</h1>
        <h2 className="mt-2 text-2xl font-medium text-amber-400">Financial Statements</h2>
      </div>
      <p className="mx-20 text-lg text-green-200">We are a new company, Year 2025 is our first full year of operations. On this site, we will disclose the financial statements for our investors.</p>
       <div className='bg-yellow-900 m-10'>
    <button className="bg-slate-900 text-slate-100 font-medium px-6 py-3 m-5 rounded-xl border border-slate-700/60 shadow-lg hover:bg-orange-500 hover:text-white hover:border-orange-400 active:scale-95 transition-all duration-1000">
      Click Here
  </button>
    
    
    <button>Click Here</button><button>Click Here</button><button>Click Here</button></div>
</div>  )
}
