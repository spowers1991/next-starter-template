import type { Metadata } from "next";
import { setMetadata } from "@/lib/seo/actions/setMetadata";
import JsonLdScript from "@/lib/seo/components/JsonLdScript";
import { getPersons } from "@/services/Persons/queries/getPersons";
import { supabase } from "@/lib/supabase/supabaseClient";
import type { User } from "@supabase/supabase-js";

export const metadata: Metadata = setMetadata({
  title: "Movie Archive",
  description: "Browse all persons from our Sanity collection.",
});

export default async function PersonsArchivePage() {

  const persons = await getPersons();

  const { data, error } = await supabase.auth.admin.listUsers({
    page: 1,
    perPage: 50
  })
  
  return (
    <>
      {data.users.map((user: User) => (
        <div key={user.id}>
            {user.email}
        </div> 
      ))}
    </>
  );
}
