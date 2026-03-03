"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "outline";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  removable?: boolean;
  onRemove?: () => void;
  pill?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  primary: "bg-primary-100 text-primary-800 hover:bg-primary-200",
  secondary: "bg-secondary-100 text-secondary-800 hover:bg-secondary-200",
  accent: "bg-accent-100 text-accent-800 hover:bg-accent-200",
  success: "bg-green-100 text-green-800 hover:bg-green-200",
  warning: "bg-amber-100 text-amber-800 hover:bg-amber-200",
  error: "bg-red-100 text-red-800 hover:bg-red-200",
  outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      icon,
      iconPosition = "left",
      removable = false,
      onRemove,
      pill = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 font-medium",
          "transition-colors duration-200",
          variantStyles[variant],
          sizeStyles[size],
          pill ? "rounded-full" : "rounded-md",
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="flex-shrink-0" aria-hidden="true">
            {icon}
          </span>
        )}
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className={cn(
              "flex-shrink-0 ml-1 rounded-full p-0.5",
              "hover:bg-black/10 focus:outline-none focus:ring-1 focus:ring-offset-1",
              "transition-colors duration-150"
            )}
            aria-label={`Remove ${children}`}
          >
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
