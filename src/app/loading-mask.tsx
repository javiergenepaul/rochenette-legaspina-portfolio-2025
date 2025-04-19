"use client";

import { useLoadingStore } from "@/store";
import React from "react";

export default function LoadingMask() {
  const { loading } = useLoadingStore();
  return (
    <div
      hidden={!loading}
      className="fixed h-screen w-screen bg-black/10 cursor-wait select-none  z-[9999999]"
    />
  );
}
