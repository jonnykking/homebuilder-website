"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Container, Button, Badge } from "@/components/ui";
import { Check, ArrowRight, Award, Users, Building2 } from "lucide-react";
import Link from "next/link";

export interface AboutFeature {
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

export interface AboutProps {
  title: string;
  subtitle?: string;
  description: string;
  secondaryDescription?: string;
  image?: {
    src: string;
    alt: string;
  };
  features?: AboutFeature[];
  badges?: string[];
  stats?: {
    value: string;
    label: string;
  }[];
  ctaButton?: {
    label: string;
    href: string;
  };
  imagePosition?: "left" | "right";
  variant?: "default" | "centered" | "split";
}

const About = React.forwardRef<HTMLElement, AboutProps>(
  (
    {
      title,
      subtitle,
      description,
      secondaryDescription,
      image,
      features,
      badges,
      stats,
      ctaButton,
      imagePosition = "right",
      variant = "default",
    },
    ref
  ) => {
    if (variant === "centered") {
      return (
        <section
          ref={ref}
          className="py-16 lg:py-24 bg-white"
          aria-labelledby="about-title"
        >
          <Container size="md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {subtitle && (
                <p className="text-sm font-semibold tracking-wide uppercase text-primary-600 mb-4">
                  {subtitle}
                </p>
              )}
              <h2
                id="about-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6"
              >
                {title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                {description}
              </p>

              {/* Badges */}
              {badges && badges.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {badges.map((badge, index) => (
                    <Badge key={index} variant="primary" size="md">
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}

              {/* CTA */}
              {ctaButton && (
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  <Link href={ctaButton.href}>{ctaButton.label}</Link>
                </Button>
              )}
            </motion.div>
          </Container>
        </section>
      );
    }

    if (variant === "split") {
      return (
        <section
          ref={ref}
          className="py-16 lg:py-24 bg-gray-50"
          aria-labelledby="about-title"
        >
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              {image && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative accent */}
                  <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary-100 rounded-2xl" />
                </motion.div>
              )}

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {subtitle && (
                  <p className="text-sm font-semibold tracking-wide uppercase text-primary-600 mb-4">
                    {subtitle}
                  </p>
                )}
                <h2
                  id="about-title"
                  className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6"
                >
                  {title}
                </h2>
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>{description}</p>
                </div>

                {/* Stats */}
                {stats && stats.length > 0 && (
                  <div className="grid grid-cols-3 gap-8 mb-8">
                    {stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-3xl font-heading font-bold text-primary-600">
                          {stat.value}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                {ctaButton && (
                  <Button
                    asChild
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight size={18} />}
                  >
                    <Link href={ctaButton.href}>{ctaButton.label}</Link>
                  </Button>
                )}
              </motion.div>
            </div>
          </Container>
        </section>
      );
    }

    // Default variant
    return (
      <section
        ref={ref}
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="about-title"
      >
        <Container>
          <div
            className={cn(
              "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
              imagePosition === "left" ? "" : ""
            )}
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={imagePosition === "right" ? "lg:order-1" : ""}
            >
              {subtitle && (
                <p className="text-sm font-semibold tracking-wide uppercase text-primary-600 mb-4">
                  {subtitle}
                </p>
              )}
              <h2
                id="about-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6"
              >
                {title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {description}
              </p>
              {secondaryDescription && (
                <p className="text-base text-gray-500 leading-relaxed mb-8">
                  {secondaryDescription}
                </p>
              )}

              {/* Badges */}
              {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {badges.map((badge, index) => (
                    <Badge key={index} variant="primary" size="md">
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Features */}
              {features && features.length > 0 && (
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {feature.icon || (
                          <Check
                            size={14}
                            className="text-primary-600"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {feature.title}
                        </p>
                        {feature.description && (
                          <p className="text-sm text-gray-500 mt-0.5">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              {ctaButton && (
                <Button
                  asChild
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  <Link href={ctaButton.href}>{ctaButton.label}</Link>
                </Button>
              )}
            </motion.div>

            {/* Image */}
            {image && (
              <motion.div
                initial={{ opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative",
                  imagePosition === "right" ? "lg:order-2" : ""
                )}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Stats Card */}
                {stats && stats.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className={cn(
                      "absolute bg-white rounded-xl shadow-xl p-6",
                      imagePosition === "right"
                        ? "-bottom-6 -left-6"
                        : "-bottom-6 -right-6"
                    )}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-primary-600" />
                        <span className="text-sm text-gray-600">
                          {stats[0]?.value} {stats[0]?.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary-600" />
                        <span className="text-sm text-gray-600">
                          {stats[1]?.value} {stats[1]?.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-primary-600" />
                        <span className="text-sm text-gray-600">
                          {stats[2]?.value} {stats[2]?.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Decorative element */}
                <div
                  className={cn(
                    "absolute -z-10 w-full h-full bg-primary-100 rounded-2xl",
                    imagePosition === "right"
                      ? "-bottom-6 -right-6"
                      : "-bottom-6 -left-6"
                  )}
                />
              </motion.div>
            )}
          </div>
        </Container>
      </section>
    );
  }
);

About.displayName = "About";

export { About };
