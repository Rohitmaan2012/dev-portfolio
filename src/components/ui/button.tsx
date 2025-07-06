import React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export const Button = ({ children, className, variant = "default", ...props }: Props) => {
  const baseStyles = "px-4 py-2 rounded transition-colors font-medium";
  const variants = {
    default: "bg-cyan-500 text-white hover:bg-cyan-600",
    outline: "border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};