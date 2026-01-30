import { ReactNode } from "react";

export interface GridRepeaterConfig<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  cols?: number;
  rows?: number;
}