"use client";

import React from "react";
import CustomCheckbox from "./custom/CustomCheckbox";

interface CheckboxProps {
  option: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function Checkbox({ option, checked, onChange } : CheckboxProps) {
  return (
    <label className="col-span-1 flex flex-row gap-x-1 items-center cursor-pointer">
      <input
        className="sr-only peer"
        type="checkbox"
        value={option}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <CustomCheckbox />
      <span className="ml-1 py-[11px] sm:py-[12px] uppercase text-[11px] sm:text-xs font-[500] tracking-[1px]">
        {option}
      </span>
    </label>
  );
};

export default Checkbox;
