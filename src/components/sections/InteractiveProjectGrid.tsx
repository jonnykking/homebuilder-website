"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, MapPin, ArrowRight, Grid, List } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAllProjects, generateSlug } from "@/lib/projects";

const categories = ["All Projects", "Custom Homes", "Renovations", "Knockdown & Rebuild", "Investment"];
const PROJECTS_PER_PAGE = 8;

export function InteractiveProjectGrid() {
  const allProjects = getAllProjects();
  const [activeFilter, setActiveFilter] = React.useState("All Projects");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = React.useState(PROJECTS_PER_PAGE);

  const getFilterType = (filter: string): string => {
    switch (filter) {
      case "Custom Homes":
        return "Custom Home";
      case "Renovations":
        return "Renovation";
      case "Knockdown & Rebuild":
        return "Knockdown & Rebuild";
      case "Investment":
        return "Investment";
      default:
        return "";
    }
  };

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === "All Projects") {
      return allProjects;
    }
    const filterType = getFilterType(activeFilter);
    return allProjects.filter((project) => project.type === filterType);
  }, [activeFilter, allProjects]);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(PROJECTS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PROJECTS_PER_PAGE);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Project Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our complete portfolio of completed projects
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-gray-600 font-medium">Filter by:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all duration-200",
                  activeFilter === category
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-600 font-medium text-sm">View:</span>
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                viewMode === "grid"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              )}
              aria-label="Grid view"
              aria-pressed={viewMode === "grid"}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                viewMode === "list"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              )}
              aria-label="List view"
              aria-pressed={viewMode === "list"}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={cn(
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col gap-4"
            )}
          >
            {displayedProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${generateSlug(project.name)}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer",
                    viewMode === "list" && "flex flex-row"
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      viewMode === "grid" ? "aspect-[4/3]" : "w-48 flex-shrink-0"
                    )}
                  >
                  <img
                    src={project.images[0] || "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60"}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </div>
                  </div>
                  <div className={cn("p-6", viewMode === "list" && "flex-1 flex flex-col justify-center")}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{project.year_completed}</span>
                      <ArrowRight className="w-4 h-4 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {displayedProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
          </p>
          {hasMoreProjects && (
            <button
              onClick={handleLoadMore}
              className="btn-secondary inline-flex items-center gap-2"
            >
              Load More Projects
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
