"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  Icon?: IconType;
}

const Button = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  Icon,
}: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}
      className={`relative w-full rounded-lg disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition
        ${outline ? "bg-white" : "bg-rose-500"} ${outline?"border-black":"border-rose-500"}
        ${outline? "text-black": "text-white"} ${small?"py-1":"py-3 "} ${small?"text-sm":"text-md"} 
        ${small?"font-light":"font-semibold"} ${small? "border": "border-2"}
    `}
    >
        {Icon && (
        <Icon size={24} 
        className="absolute left-4 top-3 self-center"/>
        )}
      {label}
    </button>
  );
};

export default Button;
