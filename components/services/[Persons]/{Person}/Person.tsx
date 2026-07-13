"use client"

import React from "react";
import H1 from "@/components/html/{H1}/H1";
import Article from "@/components/html/{Article}/Article";
import Section from "@/components/html/{Section}/Section";
import Image from 'next/image'
import { urlForImage } from "@/lib/sanity/helpers/image";
import Animator from "@/components/animations/Animator";

import type { Person } from "@/services/[Persons]/{Person}/types/Person";

interface PersonProps {
  data: Person;
}

function Person( { data: person } : PersonProps) {

  return (
    <Section>
      
      <Article>
        <H1
        id={`{Person}_<H1/>`}
        animations={[
            { 
              name: 'textReveal'
            }
          ]} 
        >
          {person?.name}
        </H1>
      </Article>

      <Article>
        
        {person?.image &&
          <Animator
            id={`{Person}_<Image/>`}
            animations={[{name: "fadeIn", config: { duration: 3, delay: 0.1 }}]}
          >
            <Image
              src={urlForImage(person?.image).url()}  
              alt={person?.name}
              width={350}
              height={500}
              priority
              className="h-auto w-auto"
            />
          </Animator>
        }
      </Article>

    </Section>
  );
}

export default Person;
