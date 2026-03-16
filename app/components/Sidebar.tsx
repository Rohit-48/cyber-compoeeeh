"use client";

import type { ComponentEntry } from "@/app/lib/registry";

interface SidebarProps {
  entries: ComponentEntry[];
  selected: number;
  onSelect: (index: number) => void;
}

export default function Sidebar({
  entries,
  selected,
  onSelect,
}: SidebarProps) {
  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-white/10 bg-[rgba(7,10,20,0.78)] backdrop-blur xl:h-full xl:w-80 xl:border-r xl:border-b-0">
      <div className="border-b border-white/10 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
          UI Catalog
        </p>
        <h1 className="mt-3 font-mono text-2xl font-semibold tracking-tight text-white">
          Component Lab
        </h1>
        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">
          Review each component as a documented module instead of a loose demo.
        </p>
        <div className="mt-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
          {entries.length} component{entries.length !== 1 ? "s" : ""} registered
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-5">
        <ul className="flex flex-col gap-1">
          {entries.map((entry, i) => (
            <li key={entry.name}>
              <button
                onClick={() => onSelect(i)}
                className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                  selected === i
                    ? "border-cyan-300/40 bg-cyan-300/12 text-white shadow-[0_0_0_1px_rgba(103,232,249,0.15)]"
                    : "border-white/8 bg-white/[0.03] text-slate-200 hover:border-white/16 hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">{entry.name}</span>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    {entry.slug}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {entry.description}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-white/10 px-6 py-4">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
          Add flow
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          New components go in <code className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-slate-200">app/components/ui</code> and get one registry entry with demos.
        </p>
      </div>
    </aside>
  );
}
