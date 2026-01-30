import { ReactNode } from "react";

export interface GridConfig {
  key?: string | number;
  children: ReactNode;
  className?: string;
  cols?: number;
  rows?: number;
  gap?: number;
}