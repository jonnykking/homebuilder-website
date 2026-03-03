"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";
import { ArrowRight, Phone } from "lucide-react";

export interface CTABannerProps {
  title: string;
  description?: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  variant?: "primary" | "secondary" | "gradient";
  alignment?: "left" | "center" | "right";
  showPhone?: boolean;
  phoneNumber?: string;
  backgroundImage?: string;
}

const CTABanner = React.forwardRef<HTMLElement, CTABannerProps>(
  (
    {
      title,
      description,
      primaryButton,
      secondaryButton,
      variant = "primary",
      alignment = "center",
      showPhone = false,
      phoneNumber,
      backgroundImage,
    },
    ref
  ) => {
    const alignmentStyles = {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end",
    };

    const variantStyles = {
      primary: "bg-primary-600 text-white",
      secondary: "bg-secondary-500 text-gray-900",
      gradient:
        "bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 text-white",
    };

    return (
      <section ref={ref} className="relative overflow-hidden">
        {/* Background Image (optional) */}
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gray-900/70" />
          </div>
        )}

        <div
          className={cn(
            "relative",
            variantStyles[variant],
            !backgroundImage && "py-16 lg:py-20"
          )}
        >
          {backgroundImage && (
            <div className="py-20 lg:py-28">
              <Container>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "flex flex-col max-w-3xl mx-auto",
                    alignmentStyles[alignment]
                  )}
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold">
                    {title}
                  </h2>
                  {description && (
                    <p className="mt-4 text-lg opacity-90">{description}</p>
                  )}

                  {/* Buttons */}
                  <div
                    className={cn(
                      "flex flex-wrap gap-4 mt-8",
                      alignment === "center" && "justify-center",
                      alignment === "right" && "justify-end"
                    )}
                  >
                    {primaryButton && (
                      <Button
                        asChild
                        variant={variant === "secondary" ? "primary" : "secondary"}
                        size="xl"
                        className={cn(
                          variant !== "secondary" &&
                            "bg-white text-primary-600 hover:bg-gray-100"
                        )}
                      >
                        <Link href={primaryButton.href}>
                          {primaryButton.label}
                          <ArrowRight size={18} />
                        </Link>
                      </Button>
                    )}
                    {secondaryButton && (
                      <Button
                        asChild
                        variant="outline"
                        size="xl"
                        className={cn(
                          variant !== "secondary"
                            ? "border-white text-white hover:bg-white/10"
                            : ""
                        )}
                      >
                        <Link href={secondaryButton.href}>
                          {secondaryButton.label}
                        </Link>
                      </Button>
                    )}
                  </div>
                </motion.div>
              </Container>
            </div>
          )}

          {!backgroundImage && (
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col lg:flex-row items-center justify-between gap-8",
                  alignment !== "center" ? "text-left" : "text-center"
                )}
              >
                {/* Content */}
                <div
                  className={cn(
                    "flex-1",
                    alignment === "center" && "flex flex-col items-center"
                  )}
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold">
                    {title}
                  </h2>
                  {description && (
                    <p className={cn("mt-2 text-lg opacity-90", alignment === "center" ? "max-w-2xl" : "")}>
                      {description}
                    </p>
                  )}
                </div>

                {/* Buttons & Phone */}
                <div className="flex flex-wrap items-center gap-4">
                  {showPhone && phoneNumber && (
                    <a
                      href={`tel:${phoneNumber}`}
                      className={cn(
                        "flex items-center gap-2 text-lg font-medium",
                        "hover:opacity-80 transition-opacity"
                      )}
                    >
                      <Phone size={20} aria-hidden="true" />
                      {phoneNumber}
                    </a>
                  )}
                  {primaryButton && (
                    <Button
                      asChild
                      variant={variant === "secondary" ? "primary" : "secondary"}
                      size="lg"
                      rightIcon={<ArrowRight size={18} />}
                      className={cn(
                        variant !== "secondary" &&
                          "bg-white text-primary-600 hover:bg-gray-100"
                      )}
                    >
                      <Link href={primaryButton.href}>{primaryButton.label}</Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            </Container>
          )}
        </div>
      </section>
    );
  }
);

CTABanner.displayName = "CTABanner";

export { CTABanner };
