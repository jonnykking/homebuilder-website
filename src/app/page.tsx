"use client";

import { useState } from "react";
import {
  Home,
  Building2,
  Hammer,
  Award,
  Users,
  Calendar,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustIndicators />
      <ServicesPreview />
      <ProjectsPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Award className="w-5 h-5 text-secondary-400" />
            <span className="text-sm font-medium">Award-Winning Home Builders Since 1998</span>
          </div>
        </motion.div>

        <motion.h1
          className="heading-primary text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Building Dreams,<br />
          <span className="text-secondary-400">Crafting Homes</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Transform your vision into reality with Australia's most trusted custom home builders.
          Quality craftsmanship, transparent pricing, exceptional service.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="/projects" className="btn-secondary inline-flex items-center gap-2 text-lg">
            View Our Work
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustIndicators() {
  const stats = [
    { icon: Calendar, value: "25+", label: "Years Experience" },
    { icon: Home, value: "500+", label: "Homes Built" },
    { icon: Award, value: "15+", label: "Industry Awards" },
    { icon: Users, value: "500+", label: "Happy Families" },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-600 mb-4 group-hover:bg-primary-100 transition-colors">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    {
      icon: Home,
      title: "Custom Home Builds",
      description: "Design and build your perfect home from the ground up with our expert team.",
      link: "/services#custom",
    },
    {
      icon: Building2,
      title: "Home Renovations",
      description: "Transform your existing space with high-quality renovations and extensions.",
      link: "/services#renovations",
    },
    {
      icon: Hammer,
      title: "Project Management",
      description: "Expert project management ensuring your build runs smoothly from start to finish.",
      link: "/services#management",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-secondary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive home building solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href={service.link}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/services"
            className="btn-secondary inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  const projects = [
    {
      title: "Modern Coastal Retreat",
      location: "Byron Bay, NSW",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60",
      type: "Custom Build",
    },
    {
      title: "Contemporary Family Home",
      location: "Melbourne, VIC",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60",
      type: "New Build",
    },
    {
      title: "Heritage Renovation",
      location: "Sydney, NSW",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop&q=60",
      type: "Renovation",
    },
    {
      title: "Sustainable Living",
      location: "Brisbane, QLD",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=60",
      type: "Eco Build",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-secondary mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore some of our latest home building achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-[4/3] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.type} in ${project.location}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm font-medium text-secondary-400 mb-1">{project.type}</div>
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/projects"
            className="btn-primary inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      title: "Quality Craftsmanship",
      description: "Every home we build reflects our commitment to excellence, with attention to every detail.",
      icon: Award,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs or surprises. We provide detailed quotes and keep you informed every step of the way.",
      icon: CheckCircle2,
    },
    {
      title: "Experienced Team",
      description: "Our skilled builders, architects, and designers bring decades of combined experience to your project.",
      icon: Users,
    },
    {
      title: "On-Time Delivery",
      description: "We respect your time and commitments, ensuring your project is completed on schedule.",
      icon: Calendar,
    },
  ];

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-secondary text-white mb-4">Why Choose Apex?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're not just building houses, we're building homes for life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white mb-6">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah & Michael Thompson",
      location: "Gold Coast, QLD",
      text: "Apex built our dream home and exceeded every expectation. Their attention to detail and commitment to quality is unmatched. We couldn't be happier with the result!",
      rating: 5,
    },
    {
      name: "David Chen",
      location: "Sydney, NSW",
      text: "From design to completion, the Apex team was professional, communicative, and delivered on time. Our renovation transformed our home completely. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Williams",
      location: "Melbourne, VIC",
      text: "The team at Apex made the building process stress-free. Their transparency and expertise gave us confidence throughout. Our new home is everything we envisioned and more.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-secondary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy homeowners
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="w-12 h-12 text-primary-200 absolute top-8 left-8" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-secondary-500 fill-current" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="text-center">
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentTestimonial === index
                    ? "bg-primary-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-600 to-primary-700 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote. Let's turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2 text-lg"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-4 text-white">
              <a href="tel:+61123456789" className="flex items-center gap-2 hover:text-secondary-300 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-medium">1300 APEX HOMES</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
