
export default function Section({n, title, right, children,} : {n: number; title: string; right?: React.ReactNode; children: React.ReactNode}) {
  return (
    <section className="rounded-2xl border border-indigo-100 bg-surface p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-3 font-semibold">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-100 text-xs font-bold text-gray-600">{n}</span>
                {title}
            </h2>
            {right}
        </div>
        {children}
    </section>
  )
}
