import * as React from "react";

export const Spacer: React.FC<{ size?: "sm" | "base" | "lg" }> = ({
  size = "base",
}) => {
  return (
    <div
      className={
        {
          sm: "h-8",
          base: "h-16",
          lg: "h-24",
        }[size]
      }
    />
  );
};
