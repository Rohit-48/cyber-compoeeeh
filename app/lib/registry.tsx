import type { ReactNode } from "react";
import Button from "@/app/components/ui/Button";

// -------------------------------------------------------------------
// Component Registry
// -------------------------------------------------------------------
// To add a new component:
//   1. Create the component file in app/components/ui/
//   2. Import it above
//   3. Add an entry to the `registry` array below
// -------------------------------------------------------------------

export interface ComponentEntry {
  /** Display name shown in the sidebar */
  name: string;
  /** Short description of the component */
  description: string;
  /** Array of demo variants to render in the preview area */
  demos: Demo[];
}

export interface Demo {
  /** Label for this demo variant (e.g. "Primary", "Small size") */
  label: string;
  /** The rendered JSX to display */
  render: ReactNode;
}

const registry: ComponentEntry[] = [
  {
    name: "Button",
    description: "A versatile button component with multiple variants and sizes.",
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
  },
];

export default registry;
