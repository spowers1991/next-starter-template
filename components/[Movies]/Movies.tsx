"use client";

import React from "react";
import Link from "next/link";
import Movie from "./[Movie]/Movie";
import type { Movie as MovieType } from "@/services/Movies/Movie/types/Movie";
import type { Person as PersonType } from "@/services/Persons/Person/types/Person";
import H1 from "../[H1]/H1";
import { usePersons } from "@/services/Persons/state/PersonsContext";

interface PostProps {
  movies: MovieType[]; 
}

export default function Movies({ movies }: PostProps) {
  const { persons } = usePersons();

  return (
    <>
      <div>
        <H1>
          Movies
        </H1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie: MovieType) => (
            <Link key={movie._id} href={`/movies/${movie.slug.current}`}>
              <Movie data={movie} />
            </Link>
          ))}
        </div>
      </div>
      ,
      <div>
        <H1>
          Person
        </H1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {persons.map((person: PersonType) => (
            <Link key={person._id} href={`/persons/${person.slug.current}`}>
              <Movie data={person} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
