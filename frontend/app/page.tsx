"use client";
import React from "react";

import { PreferencesContext, SETTINGS } from "@/components/preferencesContext";
import FloorMap from "@/components/floor-map.view";
import SystemLogs from "@/components/system-logs.view";

export default function Home() {
  const [selectedRoom, setSelectedRoom] = React.useState("living");
  const [settings, setSettings] = React.useState(SETTINGS);

  return (
    <PreferencesContext.Provider
      value={{ settings, setSettings, setSelectedRoom, selectedRoom }}
    >
      <div className="w-full flex gap-8">
        <FloorMap />
        <SystemLogs />
      </div>
    </PreferencesContext.Provider>
  );
}
