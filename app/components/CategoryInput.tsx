"use client";

import React from "react";
import { IconType } from "react-icons";

interface CategoryInputProps {
  onClick: (value: string) => void;
  selected?: boolean;
  label: string;
  Icon: IconType;
}

const CategoryInput = ({
  onClick,
  selected,
  label,
  Icon,
}: CategoryInputProps) => {

  return (
    <div
      onClick={() => onClick(label)}
      className={`flex flex-col gap-3 rounded-xl border-2 p-4 hover:border-black transition cursor-pointer
      ${selected? "border-black" : "border-neutral-200 "}`}
    >
      <Icon size={30}/>
      <div className="font-semibold">
        {label}
      </div>
    </div>
  );
};

export default CategoryInput;
