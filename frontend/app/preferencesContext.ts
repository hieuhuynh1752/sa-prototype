import { createContext, Dispatch, SetStateAction } from "react";

export type UserProfile = { username: string; status: string; color: string };

export type PreferencesState = {
  users?: UserProfile[];
  location: string;
  temperature: number;
  humidity: number;
  lightIntensity: string;
  soundVolume: number;
};

type PreferencesContextValue = {
  settings: PreferencesState[];
  selectedRoom: string;
  setSelectedRoom?: Dispatch<SetStateAction<string>>;
};

//JSON should be the same here
export const SETTINGS: PreferencesState[] = [
  {
    users: [
      {
        username: "Lori",
        status: "reading",
        color: "bg-red-500",
      },
      {
        username: "Hieu",
        status: "reading",
        color: "bg-indigo-500",
      },
    ],
    location: "living",
    temperature: 19,
    humidity: 85,
    lightIntensity: "intense",
    soundVolume: 76,
  },
  {
    users: [{ username: "Aleksa", status: "studying", color: "bg-teal-500" }],
    location: "1",
    temperature: 22,
    humidity: 90,
    lightIntensity: "normal",
    soundVolume: 0,
  },
  {
    users: [{ username: "Rafi", status: "sleeping", color: "bg-orange-500" }],
    location: "2",
    temperature: 24,
    humidity: 70,
    lightIntensity: "dimming",
    soundVolume: 0,
  },
  {
    users: undefined,
    location: "kitchen",
    humidity: 60,
    lightIntensity: "off",
    soundVolume: 0,
    temperature: 27,
  },
  {
    users: undefined,
    location: "entrance",
    humidity: 70,
    lightIntensity: "off",
    soundVolume: 10,
    temperature: 13,
  },
];

export const PreferencesContext: React.Context<PreferencesContextValue> =
  createContext({
    settings: SETTINGS,
    selectedRoom: "living",
  });
