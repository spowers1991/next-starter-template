import { Movie } from "../../../../services/[Movies]/{Movie}/types/Movie";
import { urlForImage } from "@/lib/sanity/helpers/image";
import { JsonLd } from "../../types/JsonLd";

// Returns a JSON-LD string for a schema.org ItemList
export function createMoviesLdJson(movies: Movie[]): JsonLd {
  const itemListElement = movies.map((movie, idx) => {
    const image = movie.poster?.asset?._ref ? urlForImage(movie.poster).url() : undefined;
    const name = movie.title || movie.name;
    // You may need to build the canonical URL for each movie here:
    const url = movie.slug?.current ? `/movies/${movie.slug.current}` : undefined;
    const item: JsonLd = {
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Movie",
        ...(name && { name }),
        ...(image && { image }),
        ...(url && { url })
      }
    };
    return item;
  });

  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement
  };

  return schema;
}
