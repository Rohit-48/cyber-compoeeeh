import type { ReactNode } from "react";
import Button from "@/app/components/ui/Button";

export interface ComponentEntry {
  /** Stable id used by the UI */
  slug: string;
  /** Display name shown in the sidebar */
  name: string;
  /** Short description of the component */
  description: string;
  /** Project file where the component lives */
  filePath: string;
  /** Import statement for consumers */
  importPath: string;
  /** Minimal usage example for the docs panel */
  usage: string;
  /** Optional implementation notes */
  notes?: string[];
  /** Array of demo variants to render in the preview area */
  demos: Demo[];
}

export interface Demo {
  /** Label for this demo variant (e.g. "Primary", "Small size") */
  label: string;
  /** The rendered JSX to display */
  render: ReactNode;
}

export function defineComponent(entry: ComponentEntry) {
  return entry;
}

// To add a new component:
// 1. Create the component file in app/components/ui/
// 2. Import it into this file
// 3. Register it with defineComponent(...)
const registry: ComponentEntry[] = [
  defineComponent({
    slug: "button",
    name: "Button",
    description: "A versatile button component with multiple variants and sizes.",
    filePath: "app/components/ui/Button.tsx",
    importPath: "@/app/components/ui/Button",
    usage: `<Button variant="primary" size="md">Save changes</Button>`,
    notes: [
      "Keep the public props focused on variants, size, and native button props.",
      "Add a demo for every visual state you expect consumers to rely on.",
    ],
    demos: [
      {
        label: "Variants",
        render: (
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        ),
      },
      {
        label: "Sizes",
        render: (
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        ),
      },
      {
        label: "Disabled",
        render: (
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled>Disabled Primary</Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        ),
      },
    ],
  }),
];

export default registry;
