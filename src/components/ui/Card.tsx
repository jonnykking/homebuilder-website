"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export type CardVariant = "default" | "elevated" | "outlined" | "filled";

export interface CardProps {
  variant?: CardVariant;
  hoverable?: boolean;
  clickable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: "video" | "square" | "portrait" | "auto";
  overlay?: boolean;
  overlayGradient?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  subtitle?: string;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "left" | "center" | "right" | "between";
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-white shadow-md",
  elevated: "bg-white shadow-xl",
  outlined: "bg-white border-2 border-gray-200",
  filled: "bg-gray-50",
};

const paddingStyles: Record<string, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};

const aspectRatioStyles: Record<string, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  auto: "aspect-auto",
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hoverable = false,
      clickable = false,
      padding = "md",
      children,
    },
    ref
  ) => {
    const baseClassName = cn(
      "rounded-xl overflow-hidden",
      variantStyles[variant],
      hoverable && "transition-shadow duration-300 hover:shadow-2xl",
      clickable && "cursor-pointer",
      paddingStyles[padding],
      className
    );

    if (clickable) {
      return (
        <motion.div
          ref={ref}
          className={baseClassName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={baseClassName}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  (
    {
      className,
      aspectRatio = "video",
      overlay = false,
      overlayGradient = false,
      alt = "",
      src,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative overflow-hidden", aspectRatioStyles[aspectRatio])}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover",
            className
          )}
          {...props}
        />
        {overlay && (
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        )}
        {overlayGradient && (
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            aria-hidden="true"
          />
        )}
      </div>
    );
  }
);

CardImage.displayName = "Card.Image";

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, subtitle, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mb-3", className)} {...props}>
        {children}
        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
      </div>
    );
  }
);

CardHeader.displayName = "Card.Header";

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("text-gray-600", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = "Card.Content";

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, align = "left", children, ...props }, ref) => {
    const alignStyles: Record<string, string> = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
      between: "justify-between",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center gap-3 mt-4 pt-4 border-t border-gray-100",
          alignStyles[align],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "Card.Footer";

// Compound component exports
const CardCompound = Object.assign(Card, {
  Image: CardImage,
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});

export { CardCompound as Card };
export { CardImage, CardHeader, CardContent, CardFooter };
