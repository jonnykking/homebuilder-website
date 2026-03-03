"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Navigation, type NavItem } from "./Navigation";
import { Button } from "@/components/ui";

export interface HeaderProps {
 logo?: React.ReactNode;
 navItems: NavItem[];
 ctaButton?: {
 label: string;
 href: string;
 };
 contactInfo?: {
 phone?: string;
 email?: string;
 };
 transparent?: boolean;
 sticky?: boolean;
 hideOnScroll?: boolean;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
 (
 {
 logo,
 navItems,
 ctaButton,
 contactInfo,
 transparent = false,
 sticky = true,
 hideOnScroll = true,
 },
 ref
 ) => {
 const [isScrolled, setIsScrolled] = React.useState(false);
 const [isHidden, setIsHidden] = React.useState(false);
 const [lastScrollY, setLastScrollY] = React.useState(0);
 const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

 React.useEffect(() => {
 const handleScroll = () => {
 const currentScrollY = window.scrollY;

 // Update scrolled state for background change
 setIsScrolled(currentScrollY > 10);

 // Handle hide/show on scroll
 if (hideOnScroll && !isMobileMenuOpen) {
 if (currentScrollY > lastScrollY && currentScrollY > 100) {
 // Scrolling down & past threshold - hide header
 setIsHidden(true);
 } else if (currentScrollY < lastScrollY) {
 // Scrolling up - show header
 setIsHidden(false);
 }
 }

 setLastScrollY(currentScrollY);
 };

 window.addEventListener("scroll", handleScroll, { passive: true });
 return () => window.removeEventListener("scroll", handleScroll);
 }, [lastScrollY, hideOnScroll, isMobileMenuOpen]);

 React.useEffect(() => {
 if (isMobileMenuOpen) {
 document.body.style.overflow = "hidden";
 } else {
 document.body.style.overflow = "";
 }
 return () => {
 document.body.style.overflow = "";
 };
 }, [isMobileMenuOpen]);

 const defaultLogo = (
 <Link href="/" className="flex items-center gap-2">
 <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-400 rounded-lg flex items-center justify-center">
 <span className="text-white font-bold text-xl">A</span>
 </div>
 <span className="font-heading font-bold text-xl text-gray-900">
 Apex<span className="text-primary-600">Builders</span>
 </span>
 </Link>
 );

 return (
 <>
 {/* Top Bar */}
 {contactInfo && (contactInfo.phone || contactInfo.email) && (
 <div
 className={cn(
 "hidden lg:block bg-gray-900 text-white py-2 text-sm transition-transform duration-300",
 sticky && "fixed top-0 left-0 right-0 z-50",
 isHidden && "lg:-translate-y-full"
 )}
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
 <div className="flex items-center gap-6">
 {contactInfo.phone && (
 <a
 href={`tel:${contactInfo.phone}`}
 className="flex items-center gap-2 hover:text-primary-400 transition-colors"
 >
 <Phone size={14} aria-hidden="true" />
 {contactInfo.phone}
 </a>
 )}
 {contactInfo.email && (
 <a
 href={`mailto:${contactInfo.email}`}
 className="flex items-center gap-2 hover:text-primary-400 transition-colors"
 >
 <Mail size={14} aria-hidden="true" />
 {contactInfo.email}
 </a>
 )}
 </div>
 <div className="text-gray-400">
 Serving Australian families for over 25 years
 </div>
 </div>
 </div>
 )}

 {/* Main Header */}
 <header
 ref={ref}
 className={cn(
 "w-full z-50 transition-all duration-300",
 sticky && "fixed",
 sticky && contactInfo && (contactInfo.phone || contactInfo.email)
 ? "lg:top-10"
 : "top-0",
 isHidden && hideOnScroll && "-translate-y-full lg:-translate-y-[120%]",
 transparent && !isScrolled
 ? "bg-transparent text-white"
 : "bg-white shadow-md"
 )}
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-16 lg:h-20">
 {/* Logo */}
 <div className="flex-shrink-0">{logo || defaultLogo}</div>

 {/* Desktop Navigation */}
 <div className="hidden lg:flex items-center gap-8">
 <Navigation items={navItems} />
 </div>

 {/* CTA Button - Desktop */}
 {ctaButton && (
 <div className="hidden lg:block">
 <Button
 asChild
 variant="primary"
 size="md"
 className="rounded-full"
 >
 <Link href={ctaButton.href}>{ctaButton.label}</Link>
 </Button>
 </div>
 )}

 {/* Mobile Menu Button */}
 <button
 type="button"
 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
 className={cn(
 "lg:hidden p-2 rounded-lg transition-colors",
 transparent && !isScrolled
 ? "text-white hover:bg-white/10"
 : "text-gray-700 hover:bg-gray-100"
 )}
 aria-expanded={isMobileMenuOpen}
 aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
 >
 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
 </div>
 </div>
 </header>

 {/* Mobile Menu */}
 <AnimatePresence>
 {isMobileMenuOpen && (
 <>
 {/* Backdrop */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 bg-black/50 z-40 lg:hidden"
 onClick={() => setIsMobileMenuOpen(false)}
 aria-hidden="true"
 />

 {/* Menu Panel */}
 <motion.div
 initial={{ x: "100%" }}
 animate={{ x: 0 }}
 exit={{ x: "100%" }}
 transition={{ type: "spring", damping: 20, stiffness: 300 }}
 className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
 >
 <div className="p-6">
 {/* Close Button */}
 <div className="flex justify-end mb-8">
 <button
 type="button"
 onClick={() => setIsMobileMenuOpen(false)}
 className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
 aria-label="Close menu"
 >
 <X size={24} />
 </button>
 </div>

 {/* Mobile Navigation */}
 <Navigation
 items={navItems}
 mobile
 onItemClick={() => setIsMobileMenuOpen(false)}
 />

 {/* CTA Button - Mobile */}
 {ctaButton && (
 <div className="mt-8">
 <Button
 asChild
 variant="primary"
 size="lg"
 fullWidth
 className="rounded-full"
 >
 <Link
 href={ctaButton.href}
 onClick={() => setIsMobileMenuOpen(false)}
 >
 {ctaButton.label}
 </Link>
 </Button>
 </div>
 )}

 {/* Contact Info - Mobile */}
 {contactInfo && (contactInfo.phone || contactInfo.email) && (
 <div className="mt-8 pt-8 border-t border-gray-200">
 <div className="space-y-4">
 {contactInfo.phone && (
 <a
 href={`tel:${contactInfo.phone}`}
 className="flex items-center gap-3 text-gray-700 hover:text-primary-600"
 >
 <Phone size={18} aria-hidden="true" />
 {contactInfo.phone}
 </a>
 )}
 {contactInfo.email && (
 <a
 href={`mailto:${contactInfo.email}`}
 className="flex items-center gap-3 text-gray-700 hover:text-primary-600"
 >
 <Mail size={18} aria-hidden="true" />
 {contactInfo.email}
 </a>
 )}
 </div>
 </div>
 )}
 </div>
 </motion.div>
 </>
 )}
 </AnimatePresence>

 {/* Spacer for fixed header */}
 {sticky && <div className="h-16 lg:h-28" />}
 </>
 );
 }
);

Header.displayName = "Header";

export { Header };
