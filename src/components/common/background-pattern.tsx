"use client";

import { cn } from "@/lib";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";

export default function BackgroundPattern() {
  return (
    <div className="fixed top-0 right-0 w-full z-[1] h-full pointer-events-none opacity-15">
      <InteractiveGridPattern
        width={20}
        height={20}
        squares={[120, 120]}
        squaresClassName="hover:fill-amethyst-500"
      />
    </div>
  );
}
