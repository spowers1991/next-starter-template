"use client";

import React from "react";
import H1 from "@/components/html/{H1}/H1"
import Section from "@/components/html/{Section}/Section";
import Animator from "@/components/animations/Animator";
import type { Person } from "@/services/[Persons]/{Person}/types/Person";

import PersonsGrid from "@/components/services/[Persons]/{PersonsGrid}/PersonsGrid";

interface PersonsProps {
  persons: Person[]; 
}

export default function Persons({  }: PersonsProps) {

  return (
    <Animator 
      id={`[Persons]_<Animator/>`}
      animations={[{name: "fadeIn", config: { duration: 3, delay: 0.1 }}]}
    >

      <Section>

        <H1
          id={`[Persons]_<H1/>`}
          animations={[
            { 
              name: 'fadeIn', 
              config: { duration: 1, delay: 0.1 }
            }
          ]} 
        >
          Persons
        </H1>

        <PersonsGrid />

      </Section>

    </Animator>
  );
}