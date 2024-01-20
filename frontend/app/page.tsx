'use client';
import Image from "next/image";
import { useState } from "react";

import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineLightMode } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import {PreferencesContext, PreferencesState} from "./preferencesContext";
import FloorMap from "@/app/floor-map.view";

export default function Home() {
  const [settings,setSettings] = useState<PreferencesState>({
      activeRoom: "living",
      temperature: 19,
      humidity: 85,
      lightIntensity: "intense",
      soundVolume: 76
    })
  return (
      <PreferencesContext.Provider value={{settings, setSettings}}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <FloorMap/>
          <div className="mb-32 grid text-center gap-4 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left" onClick={()=>{}}>
            <a
                href="#"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-blue-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Temperature
              </h2>
              <div className="flex gap-2 justify-between">
                <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
                  {settings.temperature}°C
                </p>
                <FaTemperatureLow size={"1.5em"}/>
              </div>
            </a>

            <a
                href="#"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-fuchsia-200"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Humidity
              </h2>
              <div className="flex gap-2 justify-between">
                <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
                  {settings.humidity}%
                </p>
                <WiHumidity size={"2em"}/>
              </div>
            </a>

            <a
                href="#"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-amber-200"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Light intensity
              </h2>
              <div className="flex gap-2 justify-between">
                <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
                  {settings.lightIntensity}
                </p>
                <MdOutlineLightMode size={"1.5em"}/>
              </div>
            </a>

            <a
                href="#"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-slate-400"
                target="_blank"
                rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Sound Volume
              </h2>
              <div className="flex gap-2 justify-between">
                <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
                  {settings.soundVolume}
                </p>
                <HiMiniSpeakerWave size={"1.5em"}/>
              </div>
            </a>

          </div>
        </main>
      </PreferencesContext.Provider>
  );
}
