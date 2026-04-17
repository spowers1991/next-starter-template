import Main from "@/components/html/{Main}/Main";
import LoginForm from "@/components/html/{Form}/{LoginForm}/LoginForm";

import { Metadata } from "next";
import { createMetadata } from "@/lib/seo/actions/create/createMetadata";


export const metadata: Metadata = createMetadata({
  title: "Login",
  description: "Login to access your account.",
});

export default function LoginPage() {
  
  return (
    <Main>
      <LoginForm />
    </Main>
  );
}
