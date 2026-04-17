import RegisterForm from "@/components/html/{Form}/{RegisterForm}/RegisterForm";
import Main from "@/components/html/{Main}/Main";

import { Metadata } from "next";
import { createMetadata } from "@/lib/seo/actions/create/createMetadata";

export const metadata: Metadata = createMetadata({
  title: "Register",
  description: "Create a new account to access exclusive features.",
});

export default function RegisterPage() {
  return (
    <Main>
      <RegisterForm />
    </Main>
  );
}
