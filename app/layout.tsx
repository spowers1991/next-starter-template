"use client"

import "@/css/globals.css";
import { ThemeProvider } from "@/lib/themes/state/ThemeContext";
import Header from "@/components/[Header]/Header";
import { Poppins } from "next/font/google";
import BodyWrapper from "@/components/[BodyWrapper]/BodyWrapper";
import Themes from "@/themes/Themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider themes={Themes}>
      <html lang="en">
        <body className={poppins.className}>
          <BodyWrapper>
            <Header />
            {children}
          </BodyWrapper>
        </body>
      </html>
    </ThemeProvider>
  );
}
