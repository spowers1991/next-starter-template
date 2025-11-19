import { ReactNode } from "react";
import { poppins } from "@/fonts/Poppins";

interface HtmlProps {
  children: ReactNode;
}

export default function Html({ children }: HtmlProps) {

  return (
    <html lang="en" className={poppins.className}>
      {children}
    </html>
  );
}
