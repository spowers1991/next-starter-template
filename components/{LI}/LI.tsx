"use client";

import React from "react";

interface LIProps {
  children: React.ReactNode;
  className?: string;
}

export default function LI({ children, className = "" }: LIProps) {
  return (
    <li className={`flex items-center gap-3 bg-gray-50 p-3 rounded-lg ${className}`}>
      {children}
    </li>
  );
}
