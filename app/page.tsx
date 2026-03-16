"use client";

import { useState } from "react";
import registry from "@/app/lib/registry";
import Sidebar from "@/app/components/Sidebar";
import ComponentPreview from "@/app/components/ComponentPreview";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const entry = registry[selected];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_20%),linear-gradient(180deg,#020617_0%,#060816_42%,#0b1120_100%)] text-white">
      <div className="flex min-h-screen flex-col xl:flex-row">
        <Sidebar entries={registry} selected={selected} onSelect={setSelected} />

        {entry ? (
          <ComponentPreview entry={entry} />
        ) : (
          <div className="flex flex-1 items-center justify-center px-6">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-center shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
              <p className="text-lg font-medium text-white">
                No components registered yet.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Create one in <code className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-cyan-100">app/components/ui</code> and add it to <code className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-xs text-cyan-100">app/lib/registry.tsx</code>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
