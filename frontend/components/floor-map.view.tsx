"use client";
import {
  PreferencesContext,
  selectedRoomPreferences,
  UserProfile,
} from "./preferencesContext";
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

  const getCurrentRoomUsers = React.useCallback(
    (roomName: string): UserProfile[] | undefined => {
      return settings.find((setting) => setting.location === roomName)?.users;
    },
    [],
  );

  const getCurrentSignificantNotifications = React.useCallback(() => {
    const notGoodRooms = settings.filter((setting) =>
      setting.users?.find((user) => user.status !== "good"),
    );
    const notGoodPersons = notGoodRooms.map((room) =>
      room.users?.filter((user) => user.status !== "good"),
    );

    return notGoodPersons.map((persons, index) => {
      if (persons) {
        return persons.map((person) => {
          return (
            <div
              key={index + person.username}
              className={`w-full h-fit p-4 border-solid border-2 rounded-md border-black ${person.status === "warning" ? "bg-yellow-300" : "bg-red-300"}`}
            >
              <p>
                <b className="capitalize">{person.status}:</b> {person.username}{" "}
                needs attention!{" "}
                {person.status !== "warning"
                  ? " Trigger Emergency protocols? "
                  : ""}
              </p>
              {person.status !== "warning" ? (
                <>
                  <p className="text-sm">
                    (<b>Info:</b> Emergency protocols will be triggered
                    automatically after <b>10s</b>){" "}
                  </p>
                  <div className="flex justify-end mt-4">
                    <div className="flex gap-4">
                      <button className="p-2 border-solid border-2 border-red-600 rounded-md bg-red-100 hover:ring-2 hover:ring-red-600 hover:ring-inset">
                        Ignore
                      </button>
                      <button className="p-2 border-solid text-green-50 border-2 border-green-200 rounded-md bg-green-600 hover:ring-2 hover:ring-green-100 hover:ring-inset">
                        Activate Now
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          );
        });
      }
      return <></>;
    });
  }, [settings]);

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
              {selectedRoomPreferences(selectedRoom)?.lightIntensity}
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
      <div className="bg-white border-4 border-black flex m-auto  h-96">
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
      <div className="w-full h-fit max-h-[40vh] bg-white p-4 overflow-auto mt-4 flex gap-4 flex-col">
        {getCurrentSignificantNotifications()}
      </div>
    </div>
  );
}
