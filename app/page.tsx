"use client";

import { useState } from "react";
import registry from "@/app/lib/registry";
import Sidebar from "@/app/components/Sidebar";
import ComponentPreview from "@/app/components/ComponentPreview";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const entry = registry[selected];

  return (
    <div className="flex h-screen overflow-hidden bg-white font-sans dark:bg-zinc-950">
      <Sidebar selected={selected} onSelect={setSelected} />

      {entry ? (
        <ComponentPreview entry={entry} />
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-sm text-zinc-400">No components registered yet.</p>
        </div>
      )}
    </div>
  );
}
