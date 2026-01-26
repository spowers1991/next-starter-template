"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from "react";

import type { Animation } from "../types/Animation";
import { animate } from "../actions/animate";

// --------------------------------
// Types
// --------------------------------
interface ANIMATIONS_Entry {
  ANIMATIONS_name?: string;
  ANIMATIONS_element: HTMLDivElement | null;
  ANIMATIONS_animations: Animation[];
}

interface AnimationsContextType {
  ANIMATIONS_entries: ANIMATIONS_Entry[];
  ANIMATIONS_register: (
    name: string,
    element: HTMLDivElement | null,
    animations: Animation[]
  ) => void;
  ANIMATIONS_reset: (entryNames: string[]) => void,
  ANIMATIONS_unregister: (name : string) => void,
}

// --------------------------------
// Context
// --------------------------------
const AnimationsContext = createContext<AnimationsContextType | undefined>(
  undefined
);

// --------------------------------
// Provider
// --------------------------------
export const AnimationsProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [ANIMATIONS_entries, ANIMATIONS_setEntries] =
    useState<ANIMATIONS_Entry[]>([]);

  // Register animation entry
  const ANIMATIONS_register = useCallback(
    (
      name: string,
      element: HTMLDivElement | null,
      animations: Animation[]
    ) => {
      if (!element) return;

      ANIMATIONS_setEntries(prev => {
        // already registered → return previous state unchanged
        if (prev.some(entry => entry.ANIMATIONS_name === name)) {
          return prev;
        }

        return [
          ...prev,
          {
            ANIMATIONS_name: name,
            ANIMATIONS_element: element,
            ANIMATIONS_animations: animations
          }
        ];
      });
    },
    []
  );


  // Reset animations
  const ANIMATIONS_reset = (entryNames: string[]) => {
    // 1. Find matching entries
    const matchingEntries = ANIMATIONS_entries.filter(entry =>
      entryNames.includes(entry.ANIMATIONS_name ?? "")
    );

    // 2. Copy them
    const savedEntries = [...matchingEntries];

    // 3. Remove ONLY the matching entries from the state
    ANIMATIONS_setEntries(prev =>
      prev.filter(entry => !entryNames.includes(entry.ANIMATIONS_name ?? ""))
    );

    // 4. Re-add them on the next frame (preserves order)
    requestAnimationFrame(() => {
      ANIMATIONS_setEntries(prev => [...prev, ...savedEntries]);
    });
  };

  const ANIMATIONS_unregister = useCallback((name: string) => {
    ANIMATIONS_setEntries(prev =>
      prev.filter(entry => entry.ANIMATIONS_name !== name)
    );
  }, []);


  // Run animations when entries change
  useEffect(() => {
    console.log(ANIMATIONS_entries);
    ANIMATIONS_entries.forEach(entry => {
      entry.ANIMATIONS_animations.forEach(animation => {
        animate(entry.ANIMATIONS_element, animation);
      });
    });
  }, [ANIMATIONS_entries]);

  return (
    <AnimationsContext.Provider
      value={{
        ANIMATIONS_entries,
        ANIMATIONS_register,
        ANIMATIONS_reset,
        ANIMATIONS_unregister
      }}
    >
      {children}
    </AnimationsContext.Provider>
  );
};

// --------------------------------
// Hook
// --------------------------------
export const useAnimations = () => {
  const context = useContext(AnimationsContext);
  if (!context) {
    throw new Error("useAnimations must be used within an AnimationsProvider");
  }
  return context;
};