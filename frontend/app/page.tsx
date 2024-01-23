"use client";
import React from "react";

import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineLightMode } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { PreferencesContext, SETTINGS } from "@/components/preferencesContext";
import FloorMap from "@/components/floor-map.view";
import SystemLogs from "@/components/system-logs.view";

export default function Home() {
  const [selectedRoom, setSelectedRoom] = React.useState("living");

  const selectedRoomPreferences = React.useMemo(() => {
    if (SETTINGS.find((setting) => setting.location === selectedRoom)) {
      return SETTINGS.find((setting) => setting.location === selectedRoom);
    }
  }, [selectedRoom]);

  return (
    <PreferencesContext.Provider
      value={{ settings: SETTINGS, setSelectedRoom, selectedRoom }}
    >
      <div className="w-full flex gap-8">
        <FloorMap />
        <SystemLogs />
      </div>
      <div
        className="mb-32 grid text-center gap-4 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"
        onClick={() => {}}
      >
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-blue-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Temperature</h2>
          <div className="flex gap-2 justify-between">
            <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
              {selectedRoomPreferences?.temperature}°C
            </p>
            <FaTemperatureLow size={"1.5em"} />
          </div>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-fuchsia-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Humidity</h2>
          <div className="flex gap-2 justify-between">
            <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
              {selectedRoomPreferences?.humidity}%
            </p>
            <WiHumidity size={"2em"} />
          </div>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-amber-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Light intensity</h2>
          <div className="flex gap-2 justify-between">
            <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
              {selectedRoomPreferences?.lightIntensity}
            </p>
            <MdOutlineLightMode size={"1.5em"} />
          </div>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-slate-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>Sound Volume</h2>
          <div className="flex gap-2 justify-between">
            <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
              {selectedRoomPreferences?.soundVolume}
            </p>
            <HiMiniSpeakerWave size={"1.5em"} />
          </div>
        </a>
      </div>
    </PreferencesContext.Provider>
  );
}
