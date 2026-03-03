"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Button, Badge } from "@/components/ui";
import { ArrowRight, MapPin, Home } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  category?: string;
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  featured?: boolean;
  href: string;
}

export interface ProjectGalleryProps {
  title: string;
  subtitle?: string;
  description?: string;
  projects: Project[];
  columns?: 2 | 3 | 4;
  showFilters?: boolean;
  categories?: string[];
  viewAllLink?: {
    label: string;
    href: string;
  };
  variant?: "grid" | "masonry" | "carousel";
}

const ProjectGallery = React.forwardRef<HTMLElement, ProjectGalleryProps>(
  (
    {
      title,
      subtitle,
      description,
      projects,
      columns = 3,
      showFilters = false,
      categories = [],
      viewAllLink,
      variant = "grid",
    },
    ref
  ) => {
    const [activeCategory, setActiveCategory] = React.useState("All");
    const [hoveredId, setHoveredId] = React.useState<string | null>(null);

    const filteredProjects =
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    const columnStyles = {
      2: "md:grid-cols-2",
      3: "md:grid-cols-2 lg:grid-cols-3",
      4: "md:grid-cols-2 lg:grid-cols-4",
    };

    return (
      <section
        ref={ref}
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="projects-title"
      >
        <Container>
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
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
                id="projects-title"
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
                  className="mt-4 text-lg text-gray-600 max-w-2xl"
                >
                  {description}
                </motion.p>
              )}
            </div>

            {/* View All Link */}
            {viewAllLink && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  <Link href={viewAllLink.href}>{viewAllLink.label}</Link>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Filters */}
          {showFilters && categories.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mb-10"
              role="tablist"
              aria-label="Project categories"
            >
              <button
                role="tab"
                aria-selected={activeCategory === "All"}
                onClick={() => setActiveCategory("All")}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === "All"
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                    activeCategory === category
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className={cn("grid gap-6", columnStyles[columns])}
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative"
                >
                  <Link
                    href={project.href}
                    className="block"
                    aria-label={`View ${project.title} project`}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent",
                          "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        )}
                      />

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" size="sm">
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* Hover Content */}
                      <div
                        className={cn(
                          "absolute bottom-0 left-0 right-0 p-6",
                          "transform translate-y-4 opacity-0",
                          "group-hover:translate-y-0 group-hover:opacity-100",
                          "transition-all duration-300"
                        )}
                      >
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-200 text-sm">
                          <MapPin size={14} aria-hidden="true" />
                          {project.location}
                        </div>

                        {/* Property Details */}
                        {(project.bedrooms || project.bathrooms || project.size) && (
                          <div className="flex items-center gap-4 mt-3 text-sm text-gray-300">
                            {project.bedrooms && (
                              <span className="flex items-center gap-1">
                                <Home size={14} aria-hidden="true" />
                                {project.bedrooms} Beds
                              </span>
                            )}
                            {project.bathrooms && (
                              <span>{project.bathrooms} Baths</span>
                            )}
                            {project.size && <span>{project.size}</span>}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Title (visible by default) */}
                    <div className="mt-4 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex items-center gap-1 mt-1">
                        <MapPin size={14} aria-hidden="true" />
                        {project.location}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>
    );
  }
);

ProjectGallery.displayName = "ProjectGallery";

export { ProjectGallery };
