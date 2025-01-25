import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { DarkMode, LightMode } from "@/assets";
import Image from "next/image";

const ThemeToggleSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-scorpion-50 data-[state=unchecked]:bg-amethyst-500",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none flex items-center justify-center h-5 w-5 rounded-full data-[state=checked]:bg-amethyst-950 data-[state=unchecked]:bg-scorpion-50 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    >
      {props.checked ? (
        <Image src={DarkMode} alt="Dark Mode Icon" />
      ) : (
        <Image src={LightMode} alt="Light Mode Icon" />
      )}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
ThemeToggleSwitch.displayName = SwitchPrimitives.Root.displayName;

export { ThemeToggleSwitch };
