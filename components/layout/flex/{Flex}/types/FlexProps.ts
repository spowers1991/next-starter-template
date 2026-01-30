import { ReactNode } from "react";

export interface FlexProps {
  children: ReactNode;
  className?: string;
  cols?: number;
  gap?: number;
  direction?: "row" | "col";
  wrap?: boolean;
}