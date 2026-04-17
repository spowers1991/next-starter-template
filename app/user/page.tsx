import Main from "@/components/html/{Main}/Main";
import User from "@/components/services/{User}/User";

import { Metadata } from "next";
import { createMetadata } from "@/lib/seo/actions/create/createMetadata";

export const metadata: Metadata = createMetadata({
  title: "User Profile",
  description: "View and manage your user profile.",
});

export default function UserPage() {
  return (
    
    <Main>
      <User />
    </Main>
  );
}
