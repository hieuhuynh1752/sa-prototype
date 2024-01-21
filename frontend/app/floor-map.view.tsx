"use client";
import { PreferencesContext, UserProfile } from "./preferencesContext";
import React from "react";
import User from "./user.view";

export default function FloorMap() {
  const { settings, setSelectedRoom, selectedRoom } =
    React.useContext(PreferencesContext);
  const handleRoomClick = React.useCallback((roomName: string): void => {
    setSelectedRoom?.(roomName);
  }, []);

  const getCurrentRoomUsers = React.useCallback(
    (roomName: string): UserProfile[] | undefined => {
      return settings.find((setting) => setting.location === roomName)?.users;
    },
    [],
  );

  return (
    <div className="w-full h-96 bg-white border-4 border-black flex">
      <div className="flex flex-col w-1/3 border-r-4 border-black">
        <div
          className={`flex relative cursor-pointer w-full h-1/2 border-b-4 border-black transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${selectedRoom === "1" ? " bg-lime-200 hover:bg-lime-50" : " bg-white"}`}
          onClick={() => {
            handleRoomClick("1");
          }}
        >
          <p className="p-2.5 border-b-2 border-r-2 border-black h-fit">
            {" "}
            Room 1
          </p>
          <User users={getCurrentRoomUsers("1")} />
        </div>
        <div
          className={`flex relative cursor-pointer w-full h-1/2 border-black transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${selectedRoom === "2" ? " bg-lime-200 hover:bg-lime-50" : " bg-white"}`}
          onClick={() => {
            handleRoomClick("2");
          }}
        >
          <p className="p-2.5 border-b-2 border-r-2 border-black h-fit">
            {" "}
            Room 2
          </p>
          <User users={getCurrentRoomUsers("2")} />
        </div>
      </div>
      <div
        className={`flex relative cursor-pointer w-1/2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${selectedRoom === "living" ? " bg-lime-200 hover:bg-lime-50" : " bg-white"}`}
        onClick={() => {
          handleRoomClick("living");
        }}
      >
        <p className="p-2.5 border-b-2 border-r-2 border-black h-fit">
          {" "}
          Living Room
        </p>
        <User users={getCurrentRoomUsers("living")} />
      </div>
      <div className="flex flex-col w-1/3">
        <div
          className={`flex relative cursor-pointer w-full h-1/3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${selectedRoom === "entrance" ? " bg-lime-200 hover:bg-lime-50" : " bg-white"}`}
          onClick={() => {
            handleRoomClick("entrance");
          }}
        >
          <p className="p-2.5 border-b-2 border-r-2 border-l-2 border-black h-fit">
            {" "}
            Entrance
          </p>
          <User users={getCurrentRoomUsers("entrance")} />
        </div>
        <div
          className={`flex cursor-pointer w-full h-2/3 border-t-4 border-l-4 border-dashed border-black transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${selectedRoom === "kitchen" ? " bg-lime-200 hover:bg-lime-50" : " bg-white"}`}
          onClick={() => {
            handleRoomClick("kitchen");
          }}
        >
          <p className="p-2.5 border-b-2 border-r-2 border-black h-fit">
            {" "}
            Kitchen
          </p>
        </div>
        <User users={getCurrentRoomUsers("kitchen")} />
      </div>
    </div>
  );
}
