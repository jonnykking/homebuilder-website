"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui";

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
}

export interface StatsProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "cards" | "gradient";
}

function AnimatedCounter({
  value,
  suffix,
  prefix,
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </div>
  );
}

const Stats = React.forwardRef<HTMLElement, StatsProps>(
  (
    {
      title,
      subtitle,
      stats,
      columns = 4,
      variant = "default",
    },
    ref
  ) => {
    const columnStyles = {
      2: "sm:grid-cols-2",
      3: "sm:grid-cols-2 lg:grid-cols-3",
      4: "sm:grid-cols-2 lg:grid-cols-4",
    };

    const variantStyles = {
      default: "",
      cards: "",
      gradient: "",
    };

    return (
      <section
        ref={ref}
        className={cn(
          "py-16 lg:py-24",
          variant === "gradient" ? "bg-primary-600" : "bg-gray-50"
        )}
        aria-labelledby="stats-title"
      >
        <Container>
          {/* Header */}
          {(title || subtitle) && (
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "text-sm font-semibold tracking-wide uppercase mb-4",
                    variant === "gradient" ? "text-primary-200" : "text-primary-600"
                  )}
                >
                  {subtitle}
                </motion.p>
              )}
              {title && (
                <motion.h2
                  id="stats-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "text-3xl sm:text-4xl lg:text-5xl font-heading font-bold",
                    variant === "gradient" ? "text-white" : "text-gray-900"
                  )}
                >
                  {title}
                </motion.h2>
              )}
            </div>
          )}

          {/* Stats Grid */}
          <div className={cn("grid gap-8", columnStyles[columns])}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "text-center",
                  variant === "cards" &&
                    "bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                )}
              >
                {/* Icon */}
                {stat.icon && (
                  <div
                    className={cn(
                      "w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center",
                      variant === "gradient"
                        ? "bg-white/20 text-white"
                        : "bg-primary-100 text-primary-600"
                    )}
                  >
                    {stat.icon}
                  </div>
                )}

                {/* Value */}
                <div
                  className={cn(
                    "text-4xl sm:text-5xl lg:text-6xl font-heading font-bold",
                    variant === "gradient" ? "text-white" : "text-gray-900"
                  )}
                >
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Label */}
                <p
                  className={cn(
                    "mt-2 text-sm sm:text-base",
                    variant === "gradient"
                      ? "text-primary-100"
                      : "text-gray-600"
                  )}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    );
  }
);

Stats.displayName = "Stats";

export { Stats };
