"use client";

import React from "react";
import Grid from "@/components/layout/grid/{Grid}/Grid";
import Link from "next/link";
import H3 from "@/components/html/{H3}/H3";
import Button from "@/components/html/{Button}/Button";
import { useMovies } from "@/services/[Movies]/state/MoviesContext";
import { usePersons } from "@/services/[Persons]/state/PersonsContext";
import { useAnimations } from "@/lib/animations/state/AnimationsContext";

import type { CastMember } from "@/services/[Movies]/{Movie}/[CastMembers]/{CastMember}/types/CastMember";


export default function PersonsGrid() {

  const { ANIMATIONS_update } = useAnimations();
  const { MOVIES_movies } = useMovies();
  const { PERSONS_GridHidden, PERSONS_togglePersonsGrid } = usePersons();

  return (
    <>
      {MOVIES_movies.map((movie) => (
        <div key={movie._id} className="mb-12"> 
          <React.Fragment key={movie._id}>
            <H3>
              {movie.title}
            </H3>

            <Button
              themeVariant="primary"
              events={[
                { name: "toggleGrid", type: "onClick", handler: () => PERSONS_togglePersonsGrid(movie._id) },
                { name: "restartAnimation", type: "onClick", handler: () => ANIMATIONS_update([
                  { 
                    id: `ANIMATION_[Persons]_<H1/>`,
                    config: { status: "restart"}
                  } 
                ])}
              ]}
            >
              {!PERSONS_GridHidden[movie._id] ? "Show Grid" : "Hide Grid"}
            </Button>

            {PERSONS_GridHidden[movie._id] && (
              <Grid cols={3}>
                {movie?.castMembers?.map((castMember : CastMember | undefined) => {
                  const ref = castMember?.person?._ref;
                  return (
                    <Link
                      key={castMember?._key}
                      href={ref ? `/persons/${ref.replace(/[_]/g, "").replace("person", "")}` : "#"}
                    >
                      <p>
                        <span className="capitalize">
                          {ref
                            ? ref.replace(/_/g, " ").replace(/[-_]/g, " ").replace("person", "")
                            : "Unknown"}
                        </span>
                        &nbsp;as&nbsp;
                        <span className="font-semibold">
                          {castMember?.characterName ?? "Unknown"}
                        </span>
                      </p>
                    </Link>
                  );
                })}
              </Grid>
            )}
          </React.Fragment>
        </div>
      ))}
    </>
  );
}