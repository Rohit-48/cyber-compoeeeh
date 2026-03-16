"use client";

import registry from "@/app/lib/registry";

interface SidebarProps {
  selected: number;
  onSelect: (index: number) => void;
}

export default function Sidebar({ selected, onSelect }: SidebarProps) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      {/* Header */}
      <div className="border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
        <h1 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Component Lab
        </h1>
        <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
          {registry.length} component{registry.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Component list */}
      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="flex flex-col gap-1">
          {registry.map((entry, i) => (
            <li key={entry.name}>
              <button
                onClick={() => onSelect(i)}
                className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  selected === i
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "text-zinc-700 hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800"
                }`}
              >
                {entry.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer hint */}
      <div className="border-t border-zinc-200 px-5 py-3 dark:border-zinc-800">
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          Add components in{" "}
          <code className="rounded bg-zinc-200 px-1 py-0.5 font-mono text-[11px] dark:bg-zinc-800">
            components/ui/
          </code>
        </p>
      </div>
    </aside>
  );
}
