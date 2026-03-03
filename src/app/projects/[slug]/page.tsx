import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
 Home,
 MapPin,
 Calendar,
 Bed,
 Bath,
 Car,
 Ruler,
 Clock,
 ArrowLeft,
 ArrowRight,
 CheckCircle2,
 Building2,
} from "lucide-react";
import {
 getProjectBySlug,
 getRelatedProjects,
 getAllProjectSlugs,
 generateSlug,
} from "@/lib/projects";

interface ProjectPageProps {
 params: { slug: string };
}

export async function generateStaticParams() {
 const slugs = getAllProjectSlugs();
 return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
 params,
}: ProjectPageProps): Promise<Metadata> {
 const project = getProjectBySlug(params.slug);

 if (!project) {
 return {
 title: "Project Not Found",
 };
 }

 return {
 title: `${project.name} | Project Portfolio`,
 description: `${project.description.slice(0, 160)}...`,
 keywords: `${project.type}, ${project.style}, ${project.location}, custom home, home builder, apex home builders`,
 openGraph: {
 title: `${project.name} - Apex Home Builders`,
 description: project.description,
 type: "article",
 publishedTime: `${project.year_completed}`,
 authors: ["Apex Home Builders"],
 images: project.images.length > 0 ? [project.images[0]] : [],
 },
 };
}

export default function ProjectPage({ params }: ProjectPageProps) {
 const project = getProjectBySlug(params.slug);

 if (!project) {
 notFound();
 }

 const relatedProjects = getRelatedProjects(project.id);

 return (
 <main className="min-h-screen">
 <HeroSection project={project} />
 <ProjectDetails project={project} />
 <ProjectGallery project={project} />
 <RelatedProjects projects={relatedProjects} />
 <CTASection />
 </main>
 );
}

interface Project {
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

function HeroSection({ project }: { project: Project }) {
 return (
 <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
 <div className="container-custom">
 <Link
 href="/projects"
 className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-8"
 >
 <ArrowLeft className="w-5 h-5" />
 <span className="font-medium">Back to Projects</span>
 </Link>

 <div className="flex items-center gap-4 mb-6">
 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
 <Building2 className="w-5 h-5 text-secondary-400" />
 <span className="text-sm font-medium text-white">
 {project.type}
 </span>
 </div>
 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
 <Home className="w-5 h-5 text-secondary-400" />
 <span className="text-sm font-medium text-white">
 {project.style}
 </span>
 </div>
 {project.featured && (
 <div className="bg-secondary-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
 Featured Project
 </div>
 )}
 </div>

 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
 {project.name}
 </h1>

 <div className="flex flex-wrap items-center gap-6 text-primary-100">
 <div className="flex items-center gap-2">
 <MapPin className="w-5 h-5 text-secondary-400" />
 <span className="text-lg">{project.location}</span>
 </div>
 <div className="flex items-center gap-2">
 <Calendar className="w-5 h-5 text-secondary-400" />
 <span className="text-lg">Completed {project.year_completed}</span>
 </div>
 </div>
 </div>
 </section>
 );
}

function ProjectDetails({ project }: { project: Project }) {
 return (
 <section className="section-padding bg-white">
 <div className="container-custom">
 <div className="grid lg:grid-cols-3 gap-12">
 <div className="lg:col-span-2">
 <h2 className="heading-secondary mb-6">About This Project</h2>
 <p className="text-lg text-gray-600 leading-relaxed mb-8">
 {project.description}
 </p>

 <h3 className="text-2xl font-bold text-gray-900 mb-4">
 Key Features
 </h3>
 <div className="grid md:grid-cols-2 gap-4 mb-8">
 {project.features.map((feature, index) => (
 <div key={index} className="flex items-start gap-3">
 <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
 <span className="text-gray-700">{feature}</span>
 </div>
 ))}
 </div>

 <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
 <h3 className="text-xl font-bold text-gray-900 mb-4">
 Project Timeline
 </h3>
 <div className="flex items-center gap-3">
 <Clock className="w-6 h-6 text-primary-600" />
 <div>
 <div className="text-sm text-gray-600">Build Duration</div>
 <div className="text-lg font-bold text-primary-700">
 {project.build_time}
 </div>
 </div>
 </div>
 </div>
 </div>

 <div>
 <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
 <h3 className="text-xl font-bold text-gray-900 mb-6">
 Project Specifications
 </h3>

 <div className="space-y-5">
 <div className="flex items-center justify-between pb-4 border-b border-gray-200">
 <div className="flex items-center gap-3">
 <Bed className="w-5 h-5 text-primary-600" />
 <span className="text-gray-700">Bedrooms</span>
 </div>
 <span className="font-bold text-gray-900">
 {project.bedrooms}
 </span>
 </div>

 <div className="flex items-center justify-between pb-4 border-b border-gray-200">
 <div className="flex items-center gap-3">
 <Bath className="w-5 h-5 text-primary-600" />
 <span className="text-gray-700">Bathrooms</span>
 </div>
 <span className="font-bold text-gray-900">
 {project.bathrooms}
 </span>
 </div>

 <div className="flex items-center justify-between pb-4 border-b border-gray-200">
 <div className="flex items-center gap-3">
 <Car className="w-5 h-5 text-primary-600" />
 <span className="text-gray-700">Garage</span>
 </div>
 <span className="font-bold text-gray-900">
 {project.garage}
 </span>
 </div>

 <div className="flex items-center justify-between pb-4 border-b border-gray-200">
 <div className="flex items-center gap-3">
 <Ruler className="w-5 h-5 text-primary-600" />
 <span className="text-gray-700">Size</span>
 </div>
 <span className="font-bold text-gray-900">
 {project.size_sqm} m²
 </span>
 </div>

 <div className="flex items-center justify-between pb-4 border-b border-gray-200">
 <div className="flex items-center gap-3">
 <Building2 className="w-5 h-5 text-primary-600" />
 <span className="text-gray-700">Type</span>
 </div>
 <span className="font-bold text-gray-900">{project.type}</span>
 </div>

 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <Home className="w-5 h-5 text-primary-600" />
 <span className="text-gray-700">Style</span>
 </div>
 <span className="font-bold text-gray-900">
 {project.style}
 </span>
 </div>
 </div>

 <a
 href="/contact"
 className="btn-primary w-full mt-8 inline-flex items-center justify-center gap-2"
 >
 Start Similar Project
 <ArrowRight className="w-5 h-5" />
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}

function ProjectGallery({ project }: { project: Project }) {
 const galleryImages = [
 "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60",
 "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60",
 "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop&q=60",
 "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60",
 "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=60",
 "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60"
 ];

 return (
 <section className="section-padding bg-gray-50">
 <div className="container-custom">
 <h2 className="heading-secondary mb-8">Project Gallery</h2>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {project.images.map((image, index) => (
 <div
 key={index}
 className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
 >
 <img
 src={galleryImages[index % 6]}
 alt={`${project.name} - Image ${index + 1}`}
 className="w-full h-full object-cover"
 />
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}

function RelatedProjects({ projects }: { projects: Project[] }) {
 const projectImages = [
 "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60",
 "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60",
 "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop&q=60",
 "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60",
 "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=60",
 "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60"
 ];

 if (projects.length === 0) return null;

 return (
 <section className="section-padding bg-white">
 <div className="container-custom">
 <h2 className="heading-secondary mb-8">Related Projects</h2>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {projects.map((project) => (
 <Link
 key={project.id}
 href={`/projects/${generateSlug(project.name)}`}
 className="group"
 >
 <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
 <div className="aspect-[4/3] relative overflow-hidden">
 <img
 src={projectImages[project.id % 6]}
 alt={project.name}
 className="w-full h-full object-cover"
 />
 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
 {project.type}
 </div>
 </div>
 <div className="p-6">
 <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
 {project.name}
 </h3>
 <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
 <MapPin className="w-4 h-4" />
 <span>{project.location}</span>
 </div>
 <div className="flex items-center justify-between">
 <span className="text-sm text-gray-600">
 {project.year_completed}
 </span>
 <ArrowRight className="w-4 h-4 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
 </div>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>
 );
}

function CTASection() {
 return (
 <section className="py-16 bg-gray-900 text-white">
 <div className="container-custom text-center">
 <h2 className="text-3xl md:text-4xl font-bold mb-4">
 Ready to Build Your Dream Home?
 </h2>
 <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
 Let&apos;s discuss your vision and create something extraordinary together.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="/contact" className="btn-primary inline-flex items-center gap-2">
 Start Your Project
 <ArrowRight className="w-5 h-5" />
 </a>
 <a href="/services" className="btn-secondary inline-flex items-center gap-2">
 View Our Services
 </a>
 </div>
 </div>
 </section>
 );
}
