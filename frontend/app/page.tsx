"use client";
import Image from "next/image";
import { useState } from "react";

import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineLightMode } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { PreferencesContext, PreferencesState } from "./preferencesContext";
import FloorMap from "@/app/floor-map.view";

const userImages = [
  "https://i.ibb.co/60qcsSS/Screenshot-2024-01-21-at-10-33-42.png",
  "https://i.ibb.co/GJCn6Pp/Screenshot-2024-01-21-at-10-30-09.png",
  "https://i.ibb.co/HY25J3c/Screenshot-2024-01-21-at-10-32-51.png",
  "https://i.ibb.co/xC1yCFM/Screenshot-2023-08-05-at-18-20-42.png",
];

// Assuming you have user information, replace the placeholder values with actual user information
const usersInfo = [
  { name: "Rafi Papa", role: "Owner" },
  { name: "Hieu", role: "Member" },
  { name: "Lori", role: "Member" },
  { name: "Aleksa", role: "Member" },
];

const UserSquare: React.FC<{ image: string; name: string; role: string }> = ({
  image,
  name,
  role,
}) => (
  <div className="flex flex-col items-center">
    <div
      className="w-40 h-40 mb-2 relative overflow-hidden rounded-full cursor-pointer"
      style={{
        transition: "opacity 0.3s",
        opacity: 1,
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
      onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
    >
      <img
        src={image}
        alt={`Profile of ${name}`}
        className="w-full h-full object-cover"
      />
    </div>
    <p className="text-center font-semibold">{name}</p>
    <p className="text-center text-gray-500">{role}</p>
  </div>
);

export default function Home() {
  const [settings, setSettings] = useState<PreferencesState>({
    activeRoom: "living",
    temperature: 19,
    humidity: 85,
    lightIntensity: "intense",
    soundVolume: 76,
  });
  return (
    <PreferencesContext.Provider value={{ settings, setSettings }}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Profiles Overview
        </h1>
        <br />
        <br />
        <div className="mb-32 grid grid-cols-4 gap-10 text-center">
          {userImages.map((image, index) => (
            <UserSquare
              key={index}
              image={image}
              name={usersInfo[index].name}
              role={usersInfo[index].role}
            />
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <FloorMap />
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
                {settings.temperature}°C
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
                {settings.humidity}%
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
                {settings.lightIntensity}
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
                {settings.soundVolume}
              </p>
              <HiMiniSpeakerWave size={"1.5em"} />
            </div>
          </a>
        </div>
      </main>
    </PreferencesContext.Provider>
  );
}
