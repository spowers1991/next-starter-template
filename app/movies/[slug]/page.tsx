import type { Metadata } from "next";
import { generateStaticParamsForType } from "@/lib/sanity/ssg/generateStaticParams";
import { getMovie } from "@/services/[Movies]/{Movie}/queries/getMovie";
import { createMetadata } from "@/lib/seo/actions/create/createMetadata";
import Movie from "@/components/services/[Movies]/{Movie}/Movie";
import Main from "@/components/html/{Main}/Main";
import JsonLdScript from "@/lib/seo/components/JsonLdScript";
import { createMovieLdJson } from "@/lib/seo/actions/create/createMovieLdJson";
import type { Movie as MovieType } from "@/services/[Movies]/{Movie}/types/Movie";

interface PageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60; // ISR seconds

export async function generateStaticParams() {
  return generateStaticParamsForType("movie", ["slug"]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const movie = await getMovie(slug);

  // Pass the full movie object directly to setMetadata (which handles image conversion)
  return createMetadata(movie as Metadata);
}

export default async function MoviePage({ params }: PageProps) {
  const { slug } = await params;
  const movie = await getMovie(slug);

  if (!movie) {
    return <p className="text-center text-gray-500">Movie not found</p>;
  }

  const schema = createMovieLdJson(movie as MovieType);
 
  return (
    <>
      <JsonLdScript json={schema} />
      <Main>
        <Movie data={movie} />
      </Main>
    </>
  );
}
