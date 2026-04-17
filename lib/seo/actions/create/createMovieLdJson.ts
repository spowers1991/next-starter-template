import { urlForImage } from "@/lib/sanity/helpers/image";
import { Movie } from "../../../../services/[Movies]/{Movie}/types/Movie";
import { JsonLd } from "../../types/JsonLd";

// Map a Movie object to a Dataset JSON-LD string for ld+json markup
export function createMovieLdJson(movie: Movie): JsonLd {
	const image = movie.poster?.asset?._ref ? urlForImage(movie.poster).url() : undefined;
	const name = movie.title || movie.name;
	// You may need to build the canonical URL for the movie here:
	const url = movie.slug?.current ? `/movies/${movie.slug.current}` : undefined;
	const schema: JsonLd = {
		"@context": "https://schema.org/",
		"@type": "Movie",
		...(name && { name }),
		...(image && { image }),
		...(url && { url }),
		"description": movie.overview?.[0]?.children?.[0]?.text || undefined,
		"dateCreated": movie.releaseDate || undefined,
	};
	
	return schema;
}
