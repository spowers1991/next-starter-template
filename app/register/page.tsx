import RegisterForm from "@/components/html/{Form}/{RegisterForm}/RegisterForm";
import Main from "@/components/html/{Main}/Main";

import { Metadata } from "next";
import { setMetadata } from "@/lib/seo/actions/setMetadata";

export const metadata: Metadata = setMetadata({
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
