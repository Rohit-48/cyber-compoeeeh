import type { ComponentEntry } from "@/app/lib/registry";

interface ComponentPreviewProps {
  entry: ComponentEntry;
}

export default function ComponentPreview({ entry }: ComponentPreviewProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10 lg:py-10">
        <section className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(15,23,42,0.72)_38%,rgba(7,10,20,0.94))] shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
          <div className="grid gap-6 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                Live component
              </p>
              <h2 className="mt-3 font-mono text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {entry.name}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200">
                {entry.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs text-slate-200">
                  {entry.filePath}
                </div>
                <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 font-mono text-xs text-cyan-100">
                  {entry.importPath}
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-slate-950/55 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Add another
              </p>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>1. Create the component in <code className="font-mono text-cyan-100">app/components/ui</code>.</li>
                <li>2. Import it in <code className="font-mono text-cyan-100">app/lib/registry.tsx</code>.</li>
                <li>3. Register demos, usage, and file metadata with <code className="font-mono text-cyan-100">defineComponent</code>.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            {entry.demos.map((demo) => (
              <section
                key={demo.label}
                className="rounded-[24px] border border-white/10 bg-[rgba(9,13,27,0.82)] p-5 shadow-[0_18px_50px_rgba(2,6,23,0.24)] sm:p-6"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                    {demo.label}
                  </h3>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-500">
                    preview
                  </span>
                </div>
                <div className="rounded-[20px] border border-dashed border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_42%),rgba(15,23,42,0.62)] p-5 sm:p-8">
                  {demo.render}
                </div>
              </section>
            ))}
          </div>

          <aside className="space-y-6">
            <section className="rounded-[24px] border border-white/10 bg-[rgba(9,13,27,0.82)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Usage
              </p>
              <pre className="mt-4 overflow-x-auto rounded-[18px] border border-white/10 bg-slate-950/80 p-4 text-sm leading-6 text-cyan-100">
                <code>{entry.usage}</code>
              </pre>
            </section>

            <section className="rounded-[24px] border border-white/10 bg-[rgba(9,13,27,0.82)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Registry fields
              </p>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <div>
                  <p className="font-medium text-white">filePath</p>
                  <p>Shows where the source lives in the project.</p>
                </div>
                <div>
                  <p className="font-medium text-white">importPath</p>
                  <p>Documents the import users should copy.</p>
                </div>
                <div>
                  <p className="font-medium text-white">demos</p>
                  <p>Keeps all preview states grouped with the component entry.</p>
                </div>
              </div>
            </section>

            {entry.notes ? (
              <section className="rounded-[24px] border border-white/10 bg-[rgba(9,13,27,0.82)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Notes
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  {entry.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </section>
            ) : null}
          </aside>
        </section>
      </div>
    </div>
  );
}
