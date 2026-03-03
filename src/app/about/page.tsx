import { Metadata } from "next";
import {
 Users,
 Award,
 Target,
 Heart,
 Shield,
 Star,
 Calendar,
 CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
 title: "About Us | Apex Home Builders - Our Story & Values",
 description: "Learn about Apex Home Builders' 25+ year legacy of excellence in custom home construction. Meet our team and discover our commitment to quality craftsmanship in Australia.",
 keywords: "about apex home builders, Australian home builders, construction company history, building team",
};

export default function AboutPage() {
 return (
 <main className="min-h-screen">
 <HeroSection />
 <OurStory />
 <CoreValues />
 <Achievements />
 <TeamSection />
 <MissionVision />
 <CTASection />
 </main>
 );
}

function HeroSection() {
 return (
 <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
 <div className="container-custom text-center text-white">
 <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
 <Users className="w-5 h-5 text-secondary-400" />
 <span className="text-sm font-medium">About Apex Home Builders</span>
 </div>

 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
 Building Dreams<br />
 <span className="text-secondary-400">Since 1998</span>
 </h1>

 <p className="text-xl text-primary-100 max-w-3xl mx-auto">
 For over 25 years, we've been transforming Australian families' dreams into reality,
 one exceptional home at a time.
 </p>
 </div>
 </section>
 );
}

function OurStory() {
 return (
 <section className="section-padding bg-white">
 <div className="container-custom">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <h2 className="heading-secondary mb-6">Our Story</h2>
 <div className="space-y-4 text-gray-600 leading-relaxed">
 <p className="text-lg">
 Apex Home Builders was founded in 1998 by John Anderson, a master builder with a
 vision to create homes that stand the test of time. What started as a small
 family business has grown into one of Australia's most trusted home building
 companies.
 </p>
 <p>
 Our journey began with a simple belief: every family deserves a home built with
 integrity, quality craftsmanship, and genuine care. This philosophy has guided
 us through hundreds of successful projects and earned us a reputation for
 excellence in the industry.
 </p>
 <p>
 Today, we continue to honour our founding principles while embracing modern
 innovations in sustainable building, smart home technology, and architectural
 design. Our commitment to quality remains unchanged, but our capabilities have
 expanded to meet the evolving needs of Australian homeowners.
 </p>
 </div>
 </div>

 <div className="relative">
 <img
 src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=60"
 alt="Apex Home Builders team"
 className="aspect-[4/3] w-full object-cover rounded-2xl"
 />
 <div className="absolute -bottom-6 -right-6 bg-secondary-500 text-white p-6 rounded-xl shadow-xl">
 <div className="text-4xl font-bold">25+</div>
 <div className="text-sm">Years of Excellence</div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}

function CoreValues() {
 const values = [
 {
 icon: Shield,
 title: "Integrity",
 description: "We operate with transparency and honesty in every interaction, building trust through ethical practices.",
 },
 {
 icon: Star,
 title: "Excellence",
 description: "We pursue the highest standards in craftsmanship, design, and customer service in everything we do.",
 },
 {
 icon: Heart,
 title: "Care",
 description: "We treat every home as if it were our own, with genuine care for our clients and their families.",
 },
 {
 icon: Target,
 title: "Innovation",
 description: "We embrace new technologies and sustainable practices to deliver cutting-edge solutions.",
 },
 ];

 return (
 <section className="section-padding bg-gray-50">
 <div className="container-custom">
 <div className="text-center mb-16">
 <h2 className="heading-secondary mb-4">Our Core Values</h2>
 <p className="text-xl text-gray-600 max-w-2xl mx-auto">
 The principles that guide every decision and every build
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {values.map((value, index) => (
 <div key={index} className="text-center group">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
 <value.icon className="w-8 h-8" />
 </div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
 <p className="text-gray-600">{value.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}

function Achievements() {
 const achievements = [
 { value: "500+", label: "Homes Built" },
 { value: "15+", label: "Industry Awards" },
 { value: "98%", label: "Client Satisfaction" },
 { value: "100%", label: "Projects Completed" },
 { value: "25+", label: "Years Experience" },
 { value: "50+", label: "Expert Team Members" },
 ];

 return (
 <section className="py-16 bg-primary-600">
 <div className="container-custom">
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
 {achievements.map((achievement, index) => (
 <div key={index} className="text-center text-white">
 <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.value}</div>
 <div className="text-primary-100 font-medium">{achievement.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}

function TeamSection() {
 const team = [
 {
 name: "John Anderson",
 role: "Founder & Managing Director",
 experience: "35+ years in construction",
 image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60",
 },
 {
 name: "Sarah Mitchell",
 role: "Head of Design",
 experience: "20+ years in architecture",
 image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60",
 },
 {
 name: "Michael Zhang",
 role: "Construction Manager",
 experience: "25+ years in building",
 image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
 },
 {
 name: "Emma Turner",
 role: "Client Relations Director",
 experience: "15+ years in client service",
 image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60",
 },
 ];

 return (
 <section className="section-padding bg-white">
 <div className="container-custom">
 <div className="text-center mb-16">
 <h2 className="heading-secondary mb-4">Meet Our Leadership Team</h2>
 <p className="text-xl text-gray-600 max-w-2xl mx-auto">
 Experienced professionals dedicated to bringing your vision to life
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {team.map((member, index) => (
 <div key={index} className="text-center group">
 <div className="relative mb-6 inline-block">
 <img
 src={member.image}
 alt={member.name}
 className="w-48 h-48 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
 />
 <div className="absolute -bottom-2 -right-2 bg-secondary-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
 <CheckCircle2 className="w-6 h-6" />
 </div>
 </div>
 <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
 <p className="text-primary-600 font-medium mb-2">{member.role}</p>
 <p className="text-gray-500 text-sm">{member.experience}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}

function MissionVision() {
 return (
 <section className="section-padding bg-gray-900 text-white">
 <div className="container-custom">
 <div className="grid md:grid-cols-2 gap-12">
 <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 mb-6">
 <Target className="w-8 h-8" />
 </div>
 <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
 <p className="text-gray-300 leading-relaxed">
 To create exceptional homes that exceed our clients' expectations through superior
 craftsmanship, innovative design, and unwavering commitment to quality. We build
 more than houses; we create spaces where families grow, memories are made, and
 dreams come true.
 </p>
 </div>

 <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-500 mb-6">
 <Star className="w-8 h-8" />
 </div>
 <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
 <p className="text-gray-300 leading-relaxed">
 To be Australia's most trusted and respected home builder, recognised for our
 commitment to sustainability, innovation, and customer satisfaction. We aspire to
 set the standard for quality in residential construction while contributing
 positively to our communities and environment.
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}

function CTASection() {
 return (
 <section className="py-16 bg-primary-50">
 <div className="container-custom text-center">
 <h2 className="heading-secondary mb-4">Ready to Start Your Journey?</h2>
 <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
 Join hundreds of happy families who trusted Apex to build their dream homes
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a href="/contact" className="btn-primary inline-flex items-center gap-2">
 Contact Us Today
 <Calendar className="w-5 h-5" />
 </a>
 <a href="/projects" className="btn-secondary inline-flex items-center gap-2">
 View Our Projects
 </a>
 </div>
 </div>
 </section>
 );
}
