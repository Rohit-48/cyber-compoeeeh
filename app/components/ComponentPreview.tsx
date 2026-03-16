import type { ComponentEntry } from "@/app/lib/registry";

interface ComponentPreviewProps {
  entry: ComponentEntry;
}

export default function ComponentPreview({ entry }: ComponentPreviewProps) {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      {/* Component header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {entry.name}
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {entry.description}
        </p>
      </div>

      {/* Demo sections */}
      <div className="flex flex-col gap-8">
        {entry.demos.map((demo) => (
          <section key={demo.label}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {demo.label}
            </h3>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              {demo.render}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
