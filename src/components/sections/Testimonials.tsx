"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Badge } from "@/components/ui";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: string;
  rating?: number;
  project?: string;
}

export interface TestimonialsProps {
  title: string;
  subtitle?: string;
  description?: string;
  testimonials: Testimonial[];
  variant?: "carousel" | "grid" | "featured";
  autoplay?: boolean;
  autoplayInterval?: number;
  showRating?: boolean;
}

const Testimonials = React.forwardRef<HTMLElement, TestimonialsProps>(
  (
    {
      title,
      subtitle,
      description,
      testimonials,
      variant = "carousel",
      autoplay = true,
      autoplayInterval = 5000,
      showRating = true,
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(0);

    React.useEffect(() => {
      if (!autoplay || variant !== "carousel") return;

      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, autoplayInterval);

      return () => clearInterval(interval);
    }, [autoplay, variant, testimonials.length, autoplayInterval]);

    const goTo = (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    };

    const goToPrevious = () => {
      setDirection(-1);
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    };

    const goToNext = () => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const slideVariants = {
      enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }),
    };

    const currentTestimonial = testimonials[currentIndex];

    if (variant === "grid") {
      return (
        <section
          ref={ref}
          className="py-16 lg:py-24 bg-gray-50"
          aria-labelledby="testimonials-title"
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
                id="testimonials-title"
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

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  {/* Rating */}
                  {showRating && testimonial.rating && (
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={cn(
                            i < testimonial.rating!
                              ? "text-secondary-500 fill-secondary-500"
                              : "text-gray-300"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  )}

                  {/* Quote */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {testimonial.image && (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      {(testimonial.role || testimonial.company) && (
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                          {testimonial.role && testimonial.company && " - "}
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>
      );
    }

    // Carousel / Featured variant
    return (
      <section
        ref={ref}
        className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
        aria-labelledby="testimonials-title"
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
              id="testimonials-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900"
            >
              {title}
            </motion.h2>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-xl">
                <Quote className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="relative overflow-hidden rounded-3xl bg-primary-600 min-h-[400px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center justify-center text-center px-8 py-16 sm:p-12"
                >
                  {/* Rating */}
                  {showRating && currentTestimonial.rating && (
                    <div className="flex items-center gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={cn(
                            i < currentTestimonial.rating!
                              ? "text-secondary-500 fill-secondary-500"
                              : "text-white/50"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  )}

                  {/* Quote */}
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-8 max-w-3xl">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    {currentTestimonial.image && (
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.author}
                        width={64}
                        height={64}
                        className="rounded-full object-cover mb-4 border-4 border-white/20"
                      />
                    )}
                    <p className="text-lg font-semibold text-white">
                      {currentTestimonial.author}
                    </p>
                    {(currentTestimonial.role || currentTestimonial.company) && (
                      <p className="text-primary-200 text-sm mt-1">
                        {currentTestimonial.role}
                        {currentTestimonial.role && currentTestimonial.company &&
                          " - "}
                        {currentTestimonial.company}
                      </p>
                    )}
                    {currentTestimonial.project && (
                      <Badge
                        variant="secondary"
                        size="sm"
                        className="mt-3 bg-white/20 text-white hover:bg-white/30"
                      >
                        {currentTestimonial.project}
                      </Badge>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-gray-700" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === currentIndex
                        ? "bg-primary-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : "false"}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-gray-700" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    );
  }
);

Testimonials.displayName = "Testimonials";

export { Testimonials };
