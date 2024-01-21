"use client";
import { PreferencesContext, PreferencesState } from "./preferencesContext";
import React from "react";

export default function FloorMap() {
  const { settings, setSettings } = React.useContext(PreferencesContext);

  const handleRoomClick = (roomSettings: PreferencesState): void => {
    setSettings?.(roomSettings);
  };

  return (
    <div className="w-full h-96 bg-white border-4 border-black flex">
      <div className="flex flex-col w-1/3 border-r-4 border-black">
        <div
          className={`flex w-full h-1/2 border-b-4 border-black transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
            settings.activeRoom === "1"
              ? " bg-lime-200 hover:bg-lime-50"
              : " bg-white"
          }`}
          onClick={() => {
            handleRoomClick({
              activeRoom: "1",
              humidity: 90,
              lightIntensity: "normal",
              soundVolume: 0,
              temperature: 22,
            });
          }}
        >
          <p className="m-auto"> Room 1</p>
        </div>
        <div
          className={`flex w-full h-1/2 border-black transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
            settings.activeRoom === "2"
              ? " bg-lime-200 hover:bg-lime-50"
              : " bg-white"
          }`}
          onClick={() => {
            handleRoomClick({
              activeRoom: "2",
              humidity: 70,
              lightIntensity: "mild",
              soundVolume: 100,
              temperature: 24,
            });
          }}
        >
          <p className="m-auto"> Room 2</p>
        </div>
      </div>
      <div
        className={`flex w-1/2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
          settings.activeRoom === "living"
            ? " bg-lime-200 hover:bg-lime-50"
            : " bg-white"
        }`}
        onClick={() => {
          handleRoomClick({
            activeRoom: "living",
            humidity: 85,
            lightIntensity: "intense",
            soundVolume: 76,
            temperature: 19,
          });
        }}
      >
        <p className="m-auto"> Living Room</p>
      </div>
      <div className="flex flex-col w-1/3">
        <div
          className={`flex w-full h-1/3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
            settings.activeRoom === "entrance"
              ? " bg-lime-200 hover:bg-lime-50"
              : " bg-white"
          }`}
          onClick={() => {
            handleRoomClick({
              activeRoom: "entrance",
              humidity: 70,
              lightIntensity: "off",
              soundVolume: 10,
              temperature: 13,
            });
          }}
        >
          <p className="m-auto"> Entrance</p>
        </div>
        <div
          className={`flex w-full h-2/3 border-t-4 border-l-4 border-dashed border-black transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${
            settings.activeRoom === "kitchen"
              ? " bg-lime-200 hover:bg-lime-50"
              : " bg-white"
          }`}
          onClick={() => {
            handleRoomClick({
              activeRoom: "kitchen",
              humidity: 60,
              lightIntensity: "off",
              soundVolume: 0,
              temperature: 27,
            });
          }}
        >
          <p className="m-auto"> Kitchen</p>
        </div>
      </div>
    </div>
  );
}
