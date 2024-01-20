import {createContext, Dispatch, SetStateAction} from "react";

export type PreferencesState = {activeRoom: string; temperature: number; humidity: number; lightIntensity: string; soundVolume: number}

type PreferencesContextValue = {
    settings: PreferencesState,
    setSettings?: Dispatch<SetStateAction<PreferencesState>>
}

export const PreferencesContext: React.Context<PreferencesContextValue> = createContext({
    settings: {
        activeRoom: "living",
        temperature: 19,
        humidity: 85,
        lightIntensity: "intense",
        soundVolume: 76
    },
});
