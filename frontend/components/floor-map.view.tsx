"use client";
import { PreferencesContext } from "./preferencesContext";
import React from "react";
import User from "./user.view";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineLightMode } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";

export default function FloorMap() {
  const { settings, setSelectedRoom, selectedRoom } =
    React.useContext(PreferencesContext);
  const handleRoomClick = React.useCallback((roomName: string): void => {
    setSelectedRoom?.(roomName);
  }, []);

  const selectedRoomPreferences = React.useCallback(
    (selectedRoom: string) => {
      if (settings.find((setting) => setting.location === selectedRoom)) {
        return settings.find((setting) => setting.location === selectedRoom);
      }
    },
    [settings],
  );

  return (
    <div className="w-2/3">
      <div
        className="mb-6 grid text-center gap-4 grid-cols-4 lg:text-left"
        onClick={() => {}}
      >
        <a
          href="#"
          className="group rounded-lg border-blue-600 border-2 h-full flex flex-col justify-between px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-blue-200"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>Temperature</h2>
          <div className="flex gap-2 justify-between">
            <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
              {selectedRoomPreferences(selectedRoom)?.temperature}°C
            </p>
            <FaTemperatureLow size={"1.5em"} />
          </div>
        </a>

        <a
          href="#"
          className="group rounded-lg border-fuchsia-600 border-2 h-full flex flex-col justify-between px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-fuchsia-200"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>Humidity</h2>
          <div className="flex gap-2 justify-between">
            <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
              {selectedRoomPreferences(selectedRoom)?.humidity}%
            </p>
            <WiHumidity size={"2em"} />
          </div>
        </a>

        <a
          href="#"
          className="group rounded-lg border-amber-600 border-2 h-full flex flex-col justify-between px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-amber-200"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>Light intensity</h2>
          <div className="flex gap-2 justify-between">
            <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
              {Number(selectedRoomPreferences(selectedRoom)?.lightIntensity)
                ? Number(
                    selectedRoomPreferences(selectedRoom)?.lightIntensity,
                  ) * 5
                : 0}
            </p>
            <MdOutlineLightMode size={"1.5em"} />
          </div>
        </a>

        <a
          href="#"
          className="group rounded-lg border-slate-600 border-2 h-full flex flex-col justify-between px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-slate-200"
          rel="noopener noreferrer"
        >
          <h3 className={`mb-2 text-lg font-semibold`}>Sound Volume</h3>
          <div className="flex gap-2 justify-between">
            <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
              {selectedRoomPreferences(selectedRoom)?.soundVolume}
            </p>
            <HiMiniSpeakerWave size={"1.5em"} />
          </div>
        </a>
      </div>
      <div className="bg-white border-4 border-black flex m-auto  h-[65vh]">
        <div className="flex flex-col w-1/3 border-r-4 border-black">
          <div
            className={`flex relative items-center cursor-pointer w-full h-1/2 border-b-4 border-black transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${selectedRoom === "1" ? " bg-lime-200 hover:bg-lime-50" : " bg-white"}`}
            onClick={() => {
              handleRoomClick("room1");
            }}
          >
            <p className="p-2.5 border-b-2 border-r-2 border-black h-fit self-baseline">
              {" "}
              Room 1
            </p>
            <User roomName={"room1"} />
          </div>
          <div
            className={`flex relative items-center cursor-pointer w-full h-1/2 border-black transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${selectedRoom === "2" ? " bg-lime-200 hover:bg-lime-50" : " bg-white"}`}
            onClick={() => {
              handleRoomClick("room2");
            }}
          >
            <p className="p-2.5 border-b-2 border-r-2 border-black h-fit self-baseline">
              {" "}
              Room 2
            </p>
            <User roomName={"room2"} />
          </div>
        </div>
        <div
          className={`flex relative items-center cursor-pointer w-1/2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${selectedRoom === "living" ? " bg-lime-200 hover:bg-lime-50" : " bg-white"}`}
          onClick={() => {
            handleRoomClick("living");
          }}
        >
          <p className="p-2.5 border-b-2 border-r-2 border-black h-fit self-baseline">
            {" "}
            Living Room
          </p>
          <User roomName={"living"} />
        </div>
        <div className="flex flex-col w-1/3">
          <div
            className={`flex relative items-center cursor-pointer w-full h-1/2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${selectedRoom === "entrance" ? " bg-lime-200 hover:bg-lime-50" : " bg-white"}`}
            onClick={() => {
              handleRoomClick("entrance");
            }}
          >
            <p className="p-2.5 border-b-2 border-r-2 border-l-2 border-black h-fit self-baseline">
              {" "}
              Entrance
            </p>
            <User roomName={"entrance"} />
          </div>
          <div
            className={`flex cursor-pointer items-center w-full h-1/2 border-t-4 border-l-4 border-dashed border-black transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${selectedRoom === "kitchen" ? " bg-lime-200 hover:bg-lime-50" : " bg-white"}`}
            onClick={() => {
              handleRoomClick("kitchen");
            }}
          >
            <p className="p-2.5 border-b-2 border-r-2 border-black h-fit self-baseline">
              {" "}
              Kitchen
            </p>
          </div>
          <User roomName={"kitchen"} />
        </div>
      </div>
    </div>
  );
}
