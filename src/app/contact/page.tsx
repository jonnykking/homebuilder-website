"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Building2,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContactSection />
      <MapSection />
      <FAQSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      <div className="container-custom text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
          <MessageSquare className="w-5 h-5 text-secondary-400" />
          <span className="text-sm font-medium">Get in Touch</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="text-xl text-primary-100 max-w-3xl mx-auto">
          Ready to start your home building journey? We're here to help. Reach out
          for a free consultation and quote.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "1300 APEX HOMES",
      subcontent: "(1300 273 946)",
      action: "tel:+61123456789",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@apexhomebuilders.com.au",
      subcontent: "We reply within 24 hours",
      action: "mailto:info@apexhomebuilders.com.au",
    },
    {
      icon: MapPin,
      title: "Head Office",
      content: "123 Builder Street",
      subcontent: "Sydney NSW 2000",
      action: "#map",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 8am - 6pm",
      subcontent: "Sat: 9am - 2pm",
      action: null,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="heading-secondary mb-4">Request a Free Quote</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours with
              a detailed quote for your project.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your inquiry has been submitted successfully. We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="0412 345 678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select project type</option>
                    <option value="custom">Custom Home Build</option>
                    <option value="renovation">Home Renovation</option>
                    <option value="extension">Home Extension</option>
                    <option value="knockdown">Knockdown Rebuild</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="500-800">$500K - $800K</option>
                      <option value="800-1.2">$800K - $1.2M</option>
                      <option value="1.2-1.5">$1.2M - $1.5M</option>
                      <option value="1.5-2">$1.5M - $2M</option>
                      <option value="2+">$2M+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="e.g., Sydney NSW"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">{item.title}</div>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold text-gray-900">{item.content}</div>
                      )}
                      <div className="text-sm text-gray-600">{item.subcontent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <Building2 className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Book a Site Visit</h3>
              <p className="text-primary-100 mb-6">
                See our work in progress. Visit one of our current build sites to experience
                our quality firsthand.
              </p>
              <a
                href="tel:+61123456789"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Schedule Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section id="map" className="bg-gray-100">
      <div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Interactive Map</p>
          <p className="text-sm text-gray-500">123 Builder Street, Sydney NSW 2000</p>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We service all major cities and regions across Australia, including Sydney, Melbourne, Brisbane, Perth, Adelaide, and surrounding areas. Contact us if you're unsure about your location.",
    },
    {
      question: "How long does a typical build take?",
      answer: "A custom home build typically takes 8-12 months, depending on size, complexity, and weather conditions. Renovations and extensions usually take 3-6 months.",
    },
    {
      question: "Do you provide fixed-price contracts?",
      answer: "Yes, we offer fixed-price contracts for all our projects, giving you certainty and peace of mind throughout the build process.",
    },
    {
      question: "What warranties do you offer?",
      answer: "We provide comprehensive structural warranties up to 7 years, along with manufacturer warranties on all fixtures and fittings.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions from our clients
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center group-open:rotate-180 transition-transform">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
