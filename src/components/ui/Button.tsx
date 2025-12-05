import React, { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseClass =
    "w-50 h-10 bg-primary px-4 py-1 rounded-md font-semibold text-lg transition-colors duration-150 cursor-pointer";

  const variantClass =
    variant === "primary"
      ? "bg-priColor hover:opacity-95"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
