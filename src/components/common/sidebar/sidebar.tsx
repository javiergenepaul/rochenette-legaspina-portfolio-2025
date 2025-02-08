import React from "react";
import { Drawer } from "vaul";

export default function Sidebar() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger>
        <svg
          className="stroke-woodsmoke-600 dark:stroke-woodsmoke-50"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={`Burger icon`}
        >
          <path
            d="M11 17H19M5 12H19M11 7H19"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-black flex flex-col h-screen w-[375px] fixed top-0 right-0 outline-none z-[99999999999999]">
          <Drawer.Title>title</Drawer.Title>
          <div className="p-4 bg-slate-400">test</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
