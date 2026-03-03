import projectsData from "@/data/projects.json";

export interface Project {
  id: number;
  name: string;
  location: string;
  type: string;
  style: string;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  size_sqm: number;
  description: string;
  features: string[];
  build_time: string;
  year_completed: number;
  featured: boolean;
  images: string[];
}

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllProjects(): Project[] {
  return projectsData.projects as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find((project) => generateSlug(project.name) === slug);
}

export function getRelatedProjects(
  currentProjectId: number,
  limit: number = 3
): Project[] {
  const projects = getAllProjects();
  const currentProject = projects.find((p) => p.id === currentProjectId);

  if (!currentProject) return [];

  // First, try to find projects of the same type
  const sameType = projects.filter(
    (p) => p.id !== currentProjectId && p.type === currentProject.type
  );

  // If we have enough of the same type, return those
  if (sameType.length >= limit) {
    return sameType.slice(0, limit);
  }

  // Otherwise, fill with other projects
  const others = projects.filter(
    (p) => p.id !== currentProjectId && p.type !== currentProject.type
  );

  return [...sameType, ...others].slice(0, limit);
}

export function getAllProjectSlugs(): string[] {
  const projects = getAllProjects();
  return projects.map((project) => generateSlug(project.name));
}
