import { generateStaticParamsForType } from "@/lib/sanity/ssg/generateStaticParams";
import { getPerson } from "@/services/[Persons]/{Person}/queries/getPerson";
import Person from "@/components/services/[Persons]/{Person}/Person";
import Main from "@/components/html/{Main}/Main";

import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/actions/create/createMetadata";

interface PageProps { params: Promise<{ slug: string }>; }

export const revalidate = 60; // ISR seconds

export async function generateStaticParams() {
  return generateStaticParamsForType("person", ["slug"]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = await getPerson(slug);

  return createMetadata(person as Metadata);
}

export default async function PersonPage({ params }: PageProps) {
  const { slug } = await params;

  const person = await getPerson(slug);

  if (!person) {
    return <p className="text-center text-gray-500">Person not found</p>;
  }

  return (
    <Main>
      <Person data={person} />
    </Main>
  );
}
