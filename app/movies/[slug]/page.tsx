import type { Metadata } from "next";
import { generateStaticParamsForType } from "@/lib/sanity/ssg/generateStaticParams";
import { getMovie } from "@/services/sanity/movies/queries/getMovie";
import { setMetadata } from "@/lib/seo/actions/setMetadata";
import JsonLdScript from "@/lib/seo/components/JsonLdScript";
import Movie from "@/components/[Movies]/[Movie]/Movie";

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
  return setMetadata(movie);
}

export default async function MoviePage({ params }: PageProps) {
  const { slug } = await params;

  const movie = await getMovie(slug);

  if (!movie) {
    return <p className="text-center text-gray-500">Movie not found</p>;
  }

  return (
    <div className="min-h-screen">
      <Movie movie={movie} />
    </div>
  );
}
