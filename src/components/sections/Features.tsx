"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Container } from "@/components/ui";
import type { LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeaturesProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "cards" | "minimal";
  iconColor?: "primary" | "secondary" | "accent";
}

const Features = React.forwardRef<HTMLElement, FeaturesProps>(
  (
    {
      title,
      subtitle,
      description,
      features,
      columns = 3,
      variant = "default",
      iconColor = "primary",
    },
    ref
  ) => {
    const columnStyles = {
      2: "md:grid-cols-2",
      3: "md:grid-cols-2 lg:grid-cols-3",
      4: "md:grid-cols-2 lg:grid-cols-4",
    };

    const iconColorStyles = {
      primary: {
        bg: "bg-primary-100",
        text: "text-primary-600",
        border: "border-primary-200",
      },
      secondary: {
        bg: "bg-secondary-100",
        text: "text-secondary-600",
        border: "border-secondary-200",
      },
      accent: {
        bg: "bg-accent-100",
        text: "text-accent-600",
        border: "border-accent-200",
      },
    };

    const colors = iconColorStyles[iconColor];

    return (
      <section
        ref={ref}
        className="py-16 lg:py-24 bg-gray-50"
        aria-labelledby="features-title"
      >
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-semibold tracking-wide uppercase text-primary-600 mb-4"
              >
                {subtitle}
              </motion.p>
            )}
            <motion.h2
              id="features-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900"
            >
              {title}
            </motion.h2>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-gray-600"
              >
                {description}
              </motion.p>
            )}
          </div>

          {/* Features Grid */}
          <div className={cn("grid gap-8", columnStyles[columns])}>
            {features.map((feature, index) => {
              const Icon = feature.icon;

              if (variant === "cards") {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "relative p-8 bg-white rounded-2xl",
                      "shadow-lg hover:shadow-xl transition-shadow duration-300",
                      "group"
                    )}
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-xl flex items-center justify-center mb-6",
                        "group-hover:scale-110 transition-transform duration-300",
                        colors.bg
                      )}
                    >
                      <Icon className={cn("w-8 h-8", colors.text)} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              }

              if (variant === "minimal") {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className={cn("flex-shrink-0 mt-1", colors.text)}>
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              }

              // Default variant
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className={cn(
                      "w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6",
                      "border-2",
                      colors.bg,
                      colors.border
                    )}
                  >
                    <Icon className={cn("w-10 h-10", colors.text)} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }
);

Features.displayName = "Features";

export { Features };
