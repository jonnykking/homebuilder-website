import { Metadata } from "next";
import {
  Home,
  Building2,
  Hammer,
  PenTool,
  FileCheck,
  Wrench,
  TreePalm,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Phone,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Apex Home Builders - Comprehensive Building Solutions",
  description: "Explore our complete range of home building services including custom builds, renovations, project management, and sustainable construction. Quality guaranteed.",
  keywords: "home building services, custom homes, renovations, project management, sustainable building, extensions",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <WhyChooseOurServices />
      <ServiceAreas />
      <CTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <div className="container-custom text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
          <Hammer className="w-5 h-5 text-secondary-400" />
          <span className="text-sm font-medium">Comprehensive Building Solutions</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Our Services
        </h1>

        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          From concept to completion, we provide end-to-end building solutions
          tailored to your unique needs and vision.
        </p>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const services = [
    {
      id: "custom",
      icon: Home,
      title: "Custom Home Builds",
      description: "Design and build your perfect home from the ground up, tailored to your lifestyle and preferences.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop&q=60",
      features: [
        "Complete architectural design",
        "Premium material selection",
        "Personalized floor plans",
        "Interior and exterior customization",
        "Smart home integration",
        "Landscape design",
      ],
    },
    {
      id: "renovations",
      icon: Building2,
      title: "Home Renovations",
      description: "Transform your existing space with high-quality renovations that breathe new life into your home.",
      image: "https://images.unsplash.com/photo-1493932484895-752d1471eab5?w=800&auto=format&fit=crop&q=60",
      features: [
        "Kitchen and bathroom renovations",
        "Home extensions and additions",
        "Complete home makeovers",
        "Heritage restorations",
        "Structural modifications",
        "Modern upgrades",
      ],
    },
    {
      id: "knockdown",
      icon: Hammer,
      title: "Knockdown & Rebuild",
      description: "Start fresh on your existing land with a brand new home that maximizes your property's potential.",
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=60",
      features: [
        "Complete demolition services",
        "Site preparation and clearing",
        "New home design and build",
        "Council approval management",
        "Retain existing foundations where possible",
        "Seamless transition to new build",
      ],
    },
    {
      id: "management",
      icon: FileCheck,
      title: "Project Management",
      description: "Expert management ensuring your build runs smoothly, on time, and within budget from start to finish.",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop&q=60",
      features: [
        "Timeline coordination",
        "Budget management",
        "Contractor supervision",
        "Quality assurance",
        "Progress reporting",
        "Risk management",
      ],
    },
    {
      id: "design",
      icon: PenTool,
      title: "Architectural Design",
      description: "Creative design solutions that blend functionality, aesthetics, and sustainability seamlessly.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60",
      features: [
        "3D visualisation",
        "Blueprint development",
        "Council approvals",
        "Engineering coordination",
        "Interior design",
        "Sustainable design",
      ],
    },
    {
      id: "eco",
      icon: TreePalm,
      title: "Sustainable Building",
      description: "Eco-friendly construction methods and materials for environmentally conscious homeowners.",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=60",
      features: [
        "Solar integration",
        "Rainwater systems",
        "Energy-efficient design",
        "Sustainable materials",
        "Green certifications",
        "Passive design",
      ],
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Post-Construction Support",
      description: "Comprehensive after-build services to ensure your home remains in perfect condition.",
      image: "https://images.unsplash.com/photo-1600585154526-9c4eda71a09c?w=800&auto=format&fit=crop&q=60",
      features: [
        "Structural warranty",
        "Maintenance packages",
        "Emergency repairs",
        "Seasonal inspections",
        "Renovation consulting",
        "Home improvement advice",
      ],
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive services to meet all your home building needs
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-8 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Get Quote for This Service
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your vision, requirements, budget, and timeline for your dream home project.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our architects create detailed designs and plans, incorporating your feedback at every stage.",
    },
    {
      number: "03",
      title: "Approvals & Permits",
      description: "We handle all council approvals, permits, and regulatory requirements on your behalf.",
    },
    {
      number: "04",
      title: "Construction",
      description: "Our expert team builds your home with meticulous attention to detail and quality craftsmanship.",
    },
    {
      number: "05",
      title: "Quality Assurance",
      description: "Rigorous inspections ensure every aspect meets our high standards and your expectations.",
    },
    {
      number: "06",
      title: "Handover",
      description: "We hand over your completed home with comprehensive documentation and warranties.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">Our Building Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A transparent, streamlined process designed to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-6xl font-bold text-primary-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-primary-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseOurServices() {
  const reasons = [
    {
      icon: Star,
      title: "Quality Guarantee",
      description: "Every project backed by our commitment to excellence and comprehensive warranties.",
    },
    {
      icon: CheckCircle2,
      title: "Fixed Price Contracts",
      description: "Transparent pricing with no hidden costs or surprises along the way.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Latest building technologies and sustainable practices for modern homes.",
    },
    {
      icon: Phone,
      title: "Dedicated Support",
      description: "Single point of contact throughout your project for seamless communication.",
    },
  ];

  return (
    <section className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Industry-leading standards that set us apart
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-primary-100">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const areas = [
    "Sydney & NSW",
    "Melbourne & VIC",
    "Brisbane & QLD",
    "Gold Coast",
    "Sunshine Coast",
    "Perth & WA",
    "Adelaide & SA",
    "Hobart & TAS",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-secondary mb-6">Service Areas</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Apex Home Builders proudly serves communities across Australia. From coastal
              retreats to urban residences, we bring our expertise to every corner of the country.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Not in Your Area?</h3>
            <p className="text-gray-600 mb-6">
              We're expanding! Contact us to discuss your project location and we'll do our
              best to accommodate your needs.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
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
          Ready to Discuss Your Project?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Get a free consultation and detailed quote. Let's explore how we can bring your vision to life.
        </p>
        <a href="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
          Request Free Consultation
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
