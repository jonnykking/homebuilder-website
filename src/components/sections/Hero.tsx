"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button, Container, Badge } from "@/components/ui";

export interface HeroButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface HeroProps {
  title: string | React.ReactNode;
  subtitle?: string;
  description: string;
  buttons?: HeroButton[];
  image?: {
    src: string;
    alt: string;
  };
  badge?: {
    text: string;
    variant?: "default" | "primary" | "secondary" | "accent";
  };
  videoUrl?: string;
  overlay?: boolean;
  alignment?: "left" | "center" | "right";
  backgroundPattern?: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      title,
      subtitle,
      description,
      buttons,
      image,
      badge,
      videoUrl,
      overlay = true,
      alignment = "left",
      backgroundPattern = true,
    },
    ref
  ) => {
    const alignmentStyles = {
      left: "text-left items-start",
      center: "text-center items-center",
      right: "text-right items-end",
    };

    return (
      <section
        ref={ref}
        className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background Pattern */}
        {backgroundPattern && (
          <div
            className="absolute inset-0 opacity-5"
            aria-hidden="true"
          >
            <svg width="100%" height="100%">
              <defs>
                <pattern
                  id="hero-pattern"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="1.5" fill="#0ea5e9" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-pattern)" />
            </svg>
          </div>
        )}

        {/* Background Image */}
        {image && (
          <div className="absolute inset-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
            />
            {overlay && (
              <div
                className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"
                aria-hidden="true"
              />
            )}
          </div>
        )}

        {/* Content */}
        <Container
          className={cn(
            "relative z-10 py-16 lg:py-24",
            image ? "text-white" : ""
          )}
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className={cn(
              "flex flex-col max-w-3xl",
              alignmentStyles[alignment]
            )}
          >
            {/* Badge */}
            {badge && (
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge variant={badge.variant || "primary"} size="lg">
                  {badge.text}
                </Badge>
              </motion.div>
            )}

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                variants={fadeInUp}
                className={cn(
                  "text-sm font-semibold tracking-wide uppercase mb-4",
                  image ? "text-primary-400" : "text-primary-600"
                )}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className={cn(
                "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight",
                image ? "text-white" : "text-gray-900"
              )}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className={cn(
                "mt-6 text-lg lg:text-xl leading-relaxed max-w-2xl",
                image ? "text-gray-300" : "text-gray-600"
              )}
            >
              {description}
            </motion.p>

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
              <motion.div
                variants={fadeInUp}
                className={cn(
                  "flex flex-wrap gap-4 mt-10",
                  alignment === "center" && "justify-center",
                  alignment === "right" && "justify-end"
                )}
              >
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || (index === 0 ? "primary" : "outline")}
                    size="xl"
                    asChild
                    className={cn(
                      index === 0 && !image
                        ? ""
                        : image && index > 0
                          ? "bg-white text-gray-900 hover:bg-gray-100 border-white"
                          : ""
                    )}
                  >
                    <Link href={button.href}>
                      {button.label}
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                ))}

                {/* Video Button */}
                {videoUrl && (
                  <motion.div variants={fadeInUp}>
                    <a
                      href={videoUrl}
                      className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center",
                          "bg-white/20 backdrop-blur-sm group-hover:bg-primary-600",
                          "transition-colors duration-300",
                          image ? "text-white" : "text-primary-600 bg-primary-100"
                        )}
                      >
                        <Play size={20} fill="currentColor" aria-hidden="true" />
                      </span>
                      <span
                        className={cn(
                          "font-medium",
                          image ? "text-white" : "text-gray-700"
                        )}
                      >
                        Watch Video
                      </span>
                    </a>
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>
        </Container>

        {/* Decorative Elements */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-32 pointer-events-none",
            image ? "bg-gradient-to-t from-white to-transparent" : ""
          )}
          aria-hidden="true"
        />
      </section>
    );
  }
);

Hero.displayName = "Hero";

export { Hero };
