"use client";

import React, { createContext, useContext, useState } from "react";
import type { Person } from "../types/Person";

interface PersonsContext {
  persons: Person[];
  setPersons: React.Dispatch<React.SetStateAction<Person[]>>;
}

const PersonsContext = createContext<PersonsContext | undefined>(undefined);

export function PersonsProvider({
  initialPersons,
  children,
}: {
  initialPersons: Person[];
  children: React.ReactNode;
}) {
  const [persons, setPersons] = useState<Person[]>(initialPersons || []);

  return (
    <PersonsContext.Provider value={{ persons, setPersons }}>
      {children}
    </PersonsContext.Provider>
  );
}

export function usePersons() {
  const context = useContext(PersonsContext);
  if (!context) {
    throw new Error("usePersons must be used within a PersonsProvider");
  }
  return context;
}
