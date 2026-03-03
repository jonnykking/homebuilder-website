import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexhomebuilders.com.au"),
  title: {
    default: "Apex Home Builders | Custom Home Construction in Australia",
    template: "%s | Apex Home Builders",
  },
  description: "Build your dream home with Apex Home Builders. Award-winning custom home construction serving Australian families for over 25 years. Quality craftsmanship, transparent pricing, exceptional service.",
  keywords: "home builders, custom homes, house construction, new homes, Australian builders, home renovation, dream home",
  authors: [{ name: "Apex Home Builders" }],
  creator: "Apex Home Builders",
  publisher: "Apex Home Builders",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://apexhomebuilders.com.au",
    siteName: "Apex Home Builders",
    title: "Apex Home Builders | Custom Home Construction in Australia",
    description: "Build your dream home with Apex Home Builders. Award-winning custom home construction serving Australian families for over 25 years.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apex Home Builders - Building Dreams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Home Builders | Custom Home Construction",
    description: "Build your dream home with Apex Home Builders. Award-winning custom home construction.",
    images: ["/images/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const footerLinkSections = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Homes", href: "/services#custom" },
      { label: "Renovations", href: "/services#renovations" },
      { label: "Knockdown & Rebuild", href: "/services#knockdown" },
      { label: "Design & Build", href: "/services#design-build" },
      { label: "Investment", href: "/services#investment" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <body className="min-h-screen bg-white flex flex-col">
        <Header
          navItems={navItems}
          ctaButton={{ label: "Get a Quote", href: "/contact" }}
          contactInfo={{
            phone: "1300 APEX HOMES",
            email: "info@apexhomebuilders.com.au",
          }}
        />
        <main className="flex-grow">{children}</main>
        <Footer
          description="Apex Home Builders has been helping Australian families build their dream homes since 1998. We combine innovative design with traditional craftsmanship."
          linkSections={footerLinkSections}
          contactInfo={{
            phone: "1300 APEX HOMES",
            email: "info@apexhomebuilders.com.au",
            address: "123 Builder Street, Sydney NSW 2000",
          }}
          newsletter={{
            title: "Newsletter",
            placeholder: "Your email",
            buttonText: "Subscribe",
          }}
          legalLinks={[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
          ]}
        />
      </body>
    </html>
  );
}
