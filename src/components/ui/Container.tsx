"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  padding?: "none" | "sm" | "md" | "lg";
  center?: boolean;
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-screen-2xl",
  full: "max-w-full",
};

const paddingStyles: Record<string, string> = {
  none: "px-0",
  sm: "px-4 sm:px-6",
  md: "px-4 sm:px-6 lg:px-8",
  lg: "px-6 sm:px-8 lg:px-12",
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      size = "lg",
      padding = "md",
      center = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          sizeStyles[size],
          paddingStyles[padding],
          center && "mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
