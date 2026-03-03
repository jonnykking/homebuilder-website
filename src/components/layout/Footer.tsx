"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Input, Button } from "@/components/ui";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface FooterProps {
  logo?: React.ReactNode;
  description?: string;
  linkSections: FooterLinkSection[];
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  socialLinks?: SocialLink[];
  newsletter?: {
    title: string;
    placeholder: string;
    buttonText: string;
  };
  copyright?: string;
  legalLinks?: FooterLink[];
  showBackToTop?: boolean;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      logo,
      description,
      linkSections,
      contactInfo,
      socialLinks,
      newsletter,
      copyright = "Apex Home Builders. All rights reserved.",
      legalLinks,
      showBackToTop = true,
    },
    ref
  ) => {
    const [email, setEmail] = React.useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle newsletter subscription
      console.log("Newsletter subscription:", email);
      setEmail("");
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const defaultSocialLinks: SocialLink[] = [
      { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
      { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
      { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
      { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
      { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
    ];

    const defaultLogo = (
      <Link href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <span className="font-heading font-bold text-xl text-white">
          Apex<span className="text-secondary-500">Builders</span>
        </span>
      </Link>
    );

    return (
      <footer
        ref={ref}
        className="bg-gray-900 text-white"
        role="contentinfo"
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              {logo || defaultLogo}
              {description && (
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              )}

              {/* Contact Info */}
              {contactInfo && (
                <div className="mt-6 space-y-3">
                  {contactInfo.phone && (
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      <Phone size={16} aria-hidden="true" />
                      {contactInfo.phone}
                    </a>
                  )}
                  {contactInfo.email && (
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      <Mail size={16} aria-hidden="true" />
                      {contactInfo.email}
                    </a>
                  )}
                  {contactInfo.address && (
                    <address className="flex items-start gap-3 text-gray-300 not-italic text-sm">
                      <MapPin
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {contactInfo.address}
                    </address>
                  )}
                </div>
              )}

              {/* Social Links */}
              {(socialLinks || defaultSocialLinks) && (
                <div className="mt-6 flex items-center gap-4">
                  {(socialLinks || defaultSocialLinks).map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Link Sections */}
            {linkSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-heading font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowRight
                          size={12}
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            {newsletter && (
              <div>
                <h3 className="font-heading font-semibold text-white mb-4">
                  {newsletter.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest updates on new projects and exclusive offers.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder={newsletter.placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    rightIcon={<ArrowRight size={16} />}
                  >
                    {newsletter.buttonText}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} {copyright}
              </p>

              {/* Legal Links */}
              {legalLinks && legalLinks.length > 0 && (
                <div className="flex items-center gap-4">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Back to Top */}
              {showBackToTop && (
                <button
                  onClick={scrollToTop}
                  className="hidden md:flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  aria-label="Back to top"
                >
                  Back to top
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export { Footer };
