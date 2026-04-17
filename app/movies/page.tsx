import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/actions/create/createMetadata";
import { getMovies } from "@/services/[Movies]/queries/getMovies";
import Movies from "@/components/services/[Movies]/Movies"; 
import Main from "@/components/html/{Main}/Main";
import JsonLdScript from "@/lib/seo/components/JsonLdScript";
import { createMoviesLdJson } from "@/lib/seo/actions/create/createMoviesLdJson";
import { Movie } from "@/services/[Movies]/{Movie}/types/Movie";

export const metadata: Metadata = createMetadata({
  title: "Movie Archive",
  description: "Browse all movies from our Sanity collection.",
});

export default async function MoviesArchivePage() {

  const movies = await getMovies();

  const schema = createMoviesLdJson(movies as Movie[]);

  return (
    <>
      <JsonLdScript json={schema} />
      <Main>
        <Movies movies={movies}/>
      </Main>
    </>
  );
}
