import Main from "@/components/html/{Main}/Main";
import User from "@/components/services/{User}/User";

import { Metadata } from "next";
import { setMetadata } from "@/lib/seo/actions/setMetadata";

export const metadata: Metadata = setMetadata({
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
