"use client";

import React from "react";

interface ULProps {
  children: React.ReactNode;
  gap?: string;        // Tailwind gap utilities
  className?: string;
}

export default function UL({
  children,
  gap = "space-y-3",
  className = "",
}: ULProps) {
  return <ul className={`${gap} ${className}`}>{children}</ul>;
}
