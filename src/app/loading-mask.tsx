"use client";

import { useLoadingStore } from "@/store";
import React from "react";

export default function LoadingMask() {
  const { loading } = useLoadingStore();

  if (!loading) return null;

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.75 z-9999999 overflow-hidden">
        <div className="h-full bg-amethyst-500 animate-year-progress" />
      </div>
      {/* Click blocker */}
      <div className="fixed inset-0 cursor-wait select-none z-9999998" />
    </>
  );
}
