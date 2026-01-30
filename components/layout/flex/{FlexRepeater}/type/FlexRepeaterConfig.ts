import { ReactNode } from "react";

export interface FlexRepeaterConfig<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  direction?: "row" | "col";
  wrap?: boolean;
  cols?: number;
}