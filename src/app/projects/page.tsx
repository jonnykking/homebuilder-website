import { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  MapPin,
  Calendar,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { InteractiveProjectGrid } from "@/components/sections/InteractiveProjectGrid";
import { getAllProjects, generateSlug } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Projects | Apex Home Builders - Project Gallery & Portfolio",
  description: "Explore our portfolio of award-winning custom homes and renovations across Australia. See our craftsmanship and quality in action.",
  keywords: "home building portfolio, custom homes gallery, renovation projects, Australian builders showcase",
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();
  const featuredProjects = allProjects.filter((p) => p.featured);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedProjects projects={featuredProjects} />
      <InteractiveProjectGrid />
      <AwardWinning />
      <CTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <div className="container-custom text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
          <Home className="w-5 h-5 text-secondary-400" />
          <span className="text-sm font-medium">Project Portfolio</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Our Projects
        </h1>

        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          Explore our collection of dream homes brought to life – each one a testament
          to quality craftsmanship and client collaboration.
        </p>
      </div>
    </section>
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

function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our most recent and celebrated builds
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-xl">
                  <img
                  src={project.images[0] || "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                  <div className="absolute top-4 right-4 bg-secondary-500 text-white px-4 py-2 rounded-lg font-semibold">
                    {project.type}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-2 text-primary-600 mb-3">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">{project.location}</span>
                  <span className="text-gray-300">|</span>
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{project.year_completed}</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-600" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Size</div>
                    <div className="text-2xl font-bold text-primary-600">{project.size_sqm} m²</div>
                  </div>
                  <Link
                    href={`/projects/${generateSlug(project.name)}`}
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    View Details
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardWinning() {
  const awards = [
    { year: "2024", title: "Best Custom Home", org: "HIA Awards" },
    { year: "2024", title: "Excellence in Sustainability", org: "Green Building Council" },
    { year: "2023", title: "Project of the Year", org: "MBA Awards" },
    { year: "2023", title: "Best Renovation", org: "HIA Awards" },
    { year: "2022", title: "Innovation in Design", org: "Australian Housing Awards" },
    { year: "2022", title: "Best Sustainable Home", org: "Green Building Council" },
  ];

  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Award-Winning Excellence</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Recognised by industry leaders for our commitment to quality and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 hover:bg-white/15 transition-colors"
            >
              <div className="flex-shrink-0">
                <Award className="w-12 h-12 text-secondary-400" />
              </div>
              <div>
                <div className="text-sm text-primary-200 mb-1">{award.year}</div>
                <div className="text-xl font-bold mb-1">{award.title}</div>
                <div className="text-sm text-primary-100">{award.org}</div>
              </div>
            </div>
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
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Let&apos;s add your dream home to our portfolio. Contact us today for a free consultation.
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
