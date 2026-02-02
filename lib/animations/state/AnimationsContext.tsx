"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { AnimationsEntry } from "../types/AnimationsEntry";
import { ANIMATIONS_register as ANIMATIONS_register_action } from "../actions/ANIMATIONS_register";
import { ANIMATIONS_update as ANIMATIONS_update_action } from "../actions/ANIMATIONS_update";
import { playAnimations } from "../actions/playAnimations";
import { AnimationTarget } from "../types/AnimationTarget";

interface AnimationsContextType {
  ANIMATIONS_entries: AnimationsEntry[];
  ANIMATIONS_register: (entries: AnimationsEntry[]) => void;
  ANIMATIONS_update: (targets: AnimationTarget[]) => void;
}

const AnimationsContext = createContext<AnimationsContextType | undefined>(
  undefined
);

export const AnimationsProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  
  const [ANIMATIONS_entries, ANIMATIONS_setEntries] = useState<AnimationsEntry[]>([]);

  const ANIMATIONS_register = (entries: AnimationsEntry[]) => {
    ANIMATIONS_setEntries(prevEntries => ANIMATIONS_register_action(prevEntries, entries));
  }

  const ANIMATIONS_update = (targets: AnimationTarget[]) => {
    ANIMATIONS_update_action(ANIMATIONS_entries, targets);
  };

  useEffect(() => {
    console.log(ANIMATIONS_entries)
    playAnimations(ANIMATIONS_entries);
  }, [ANIMATIONS_entries]);

  return (
    <AnimationsContext.Provider
      value={{
        ANIMATIONS_entries,
        ANIMATIONS_register,
        ANIMATIONS_update,
      }}
    >
      {children}
    </AnimationsContext.Provider>
  );
};

export const useAnimations = () => {
  const context = useContext(AnimationsContext);
  if (!context) {
    throw new Error("useAnimations must be used within an AnimationsProvider");
  }
  return context;
};