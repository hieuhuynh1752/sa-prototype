"use client";

import React from "react";
import { PreferencesContext, SETTINGS } from "@/components/preferencesContext";

// @ts-ignore
export function Providers({ children }) {
  const [selectedRoom, setSelectedRoom] = React.useState("living");
  const [settings, setSettings] = React.useState(SETTINGS);
  const [systemLogs, setSystemLogs] = React.useState<string[] | undefined>();

  return (
    <PreferencesContext.Provider
      value={{
        settings,
        setSettings,
        setSelectedRoom,
        selectedRoom,
        systemLogs,
        setSystemLogs,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}
