import React, { createContext, Dispatch, SetStateAction } from "react";

export type UserProfile = {
  username: string;
  status: string;
  activity: string;
  color: string;
};

export type PreferencesState = {
  users?: UserProfile[];
  location: string;
  temperature: number;
  humidity: number;
  lightIntensity: number;
  soundVolume: number;
};

type PreferencesContextValue = {
  settings: PreferencesState[];
  selectedRoom: string;
  setSettings?: Dispatch<PreferencesState[]>;
  setSelectedRoom?: Dispatch<SetStateAction<string>>;
  systemLogs?: string[];
  setSystemLogs?: Dispatch<SetStateAction<string[] | undefined>>;
};

//JSON should be the same here
export const SETTINGS: PreferencesState[] = [
  {
    users: [],
    location: "living",
    temperature: 19,
    humidity: 85,
    lightIntensity: 85,
    soundVolume: 76,
  },
  {
    users: [],
    location: "room1",
    temperature: 22,
    humidity: 90,
    lightIntensity: 50,
    soundVolume: 0,
  },
  {
    users: [],
    location: "room2",
    temperature: 24,
    humidity: 70,
    lightIntensity: 32,
    soundVolume: 0,
  },
  {
    users: undefined,
    location: "kitchen",
    humidity: 60,
    lightIntensity: 0,
    soundVolume: 0,
    temperature: 27,
  },
  {
    users: undefined,
    location: "entrance",
    humidity: 70,
    lightIntensity: 0,
    soundVolume: 10,
    temperature: 13,
  },
];

export const PreferencesContext: React.Context<PreferencesContextValue> =
  createContext({
    settings: SETTINGS,
    selectedRoom: "living",
  });
