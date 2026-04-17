import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/actions/create/createMetadata";
import { getPersons } from "@/services/[Persons]/queries/getPersons";
import Persons from "@/components/services/[Persons]/Persons"; 
import Main from "@/components/html/{Main}/Main";

export const metadata: Metadata = createMetadata({
  title: "Person Archive",
  description: "Browse all people from our Sanity collection.",
});

export default async function PersonsArchivePage() {

  const persons = await getPersons();

  return (
    <Main>
      <Persons persons={persons}/>
    </Main>
  );
}
