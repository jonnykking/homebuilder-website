"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, Eye, EyeOff } from "lucide-react";

export type InputVariant = "default" | "filled" | "flushed";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: InputVariant;
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  resize?: "none" | "vertical" | "horizontal" | "both";
  fullWidth?: boolean;
}

const variantStyles: Record<InputVariant, string> = {
  default:
    "border border-gray-300 bg-white focus:border-primary-500 focus:ring-primary-500",
  filled: "border-0 bg-gray-100 focus:bg-white focus:ring-primary-500",
  flushed:
    "border-0 border-b-2 border-gray-300 rounded-none bg-transparent focus:border-primary-500 focus:ring-0",
};

const inputSizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-5 py-3.5 text-lg",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      variant = "default",
      size = "md",
      leftIcon,
      rightIcon,
      fullWidth = true,
      type = "text",
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const generatedId = React.useId();
    const inputId = id || `input-${generatedId}`;
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-medium text-gray-700",
              required && "after:content-['*'] after:ml-0.5 after:text-red-500"
            )}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            className={cn(
              "block rounded-lg text-gray-900 placeholder-gray-400",
              "focus:outline-none focus:ring-2",
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50",
              "transition-colors duration-200",
              variantStyles[variant],
              inputSizeStyles[size],
              leftIcon && "pl-10",
              (rightIcon || isPassword) && "pr-10",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500",
              fullWidth && "w-full",
              className
            )}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
          {rightIcon && !isPassword && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <p
            id={`${inputId}-error`}
            className="flex items-center gap-1.5 text-sm text-red-600"
            role="alert"
          >
            <AlertCircle size={14} aria-hidden="true" />
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      resize = "vertical",
      fullWidth = true,
      id,
      disabled,
      required,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || `textarea-${generatedId}`;

    const resizeStyles: Record<string, string> = {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
    };

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              "text-sm font-medium text-gray-700",
              required && "after:content-['*'] after:ml-0.5 after:text-red-500"
            )}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
                ? `${textareaId}-helper`
                : undefined
          }
          className={cn(
            "block rounded-lg border border-gray-300 bg-white",
            "text-gray-900 placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:border-primary-500 focus:ring-primary-500",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50",
            "transition-colors duration-200 px-4 py-2.5",
            resizeStyles[resize],
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            fullWidth && "w-full",
            className
          )}
          {...props}
        />
        {error && (
          <p
            id={`${textareaId}-error`}
            className="flex items-center gap-1.5 text-sm text-red-600"
            role="alert"
          >
            <AlertCircle size={14} aria-hidden="true" />
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${textareaId}-helper`} className="text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Input, Textarea };
