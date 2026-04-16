import Main from "@/components/html/{Main}/Main";
import LoginForm from "@/components/html/{Form}/{LoginForm}/LoginForm";

import { Metadata } from "next";
import { setMetadata } from "@/lib/seo/actions/setMetadata";


export const metadata: Metadata = setMetadata({
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
