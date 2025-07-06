// src/components/ui/card.tsx
import React from "react";
import clsx from "clsx";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => (
  <div className={clsx("bg-gray-900 rounded-lg shadow-md", className)} {...props} />
);

export const CardContent = ({ className, ...props }: CardProps) => (
  <div className={clsx("p-4", className)} {...props} />
);
