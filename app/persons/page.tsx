import type { Metadata } from "next";
import { setMetadata } from "@/lib/seo/actions/setMetadata";
import { getPersons } from "@/services/[Persons]/queries/getPersons";
import Persons from "@/components/[Persons]/Persons"; 
import Main from "@/components/{Main}/Main";

export const metadata: Metadata = setMetadata({
  title: "Movie Archive",
  description: "Browse all movies from our Sanity collection.",
});

export default async function MoviesArchivePage() {

  const persons = await getPersons();

  return (
    <Main>
      <Persons persons={persons}/>
    </Main>
  );
}
