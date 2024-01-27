"use client";
import React from "react";

import FloorMap from "@/components/floor-map.view";
import SystemLogs from "@/components/system-logs.view";

export default function Home() {
  return (
    <div className="w-full flex gap-8">
      <FloorMap />
      <SystemLogs />
    </div>
  );
}
