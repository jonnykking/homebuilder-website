import { Metadata } from "next";
import { Shield, Lock, Eye, Database, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Apex Home Builders",
  description: "Learn how Apex Home Builders collects, uses, and protects your personal information. Your privacy is important to us.",
  keywords: "privacy policy, data protection, personal information, Australian privacy laws",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-16">
        <div className="container-custom text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 text-secondary-400" />
            <span className="text-sm font-medium">Legal Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-primary-100">
            Last updated: March 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Apex Home Builders Pty Ltd ("we", "our", or "us") is committed to protecting
                your privacy and personal information. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website or use
                our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We comply with the Australian Privacy Principles (APPs) contained in the Privacy
                Act 1988 (Cth) and applicable state and territory laws.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Name, email address, phone number, and postal address</li>
                <li>Property address and project requirements</li>
                <li>Budget information and financing details</li>
                <li>Communication preferences</li>
                <li>Employment and income information (for financing purposes)</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>IP address, browser type, and device information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
                <li>Location data (general geographic area)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Providing quotes and services for home building projects</li>
                <li>Communicating with you about your project or inquiry</li>
                <li>Processing applications and contracts</li>
                <li>Sending promotional materials (with your consent)</li>
                <li>Improving our website, products, and services</li>
                <li>Complying with legal obligations</li>
                <li>Conducting market research and analysis</li>
                <li>Protecting against fraud and unauthorized transactions</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Contractors, subcontractors, and suppliers involved in your project</li>
                <li>Financial institutions for financing purposes</li>
                <li>Government authorities as required by law</li>
                <li>Professional advisors (lawyers, accountants, etc.)</li>
                <li>Third-party service providers who assist our operations</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We do not sell, rent, or trade your personal information to third parties
                for their marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>

              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures to
                protect your personal information from unauthorized access, disclosure,
                alteration, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                <li>Encryption of sensitive data</li>
                <li>Secure server infrastructure</li>
                <li>Regular security assessments</li>
                <li>Staff training on data protection</li>
                <li>Access controls and authentication procedures</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your
                browsing experience. You can control cookies through your browser settings.
                However, disabling cookies may limit some website functionality.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Your Rights and Choices</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under Australian privacy law, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with the Office of the Australian Information Commissioner</li>
              </ul>
            </div>

            {/* Retention */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the
                purposes outlined in this policy, unless a longer retention period is required
                or permitted by law. Project records are typically retained for 7 years after
                completion.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not directed to individuals under 18. We do not knowingly
                collect personal information from children. If we become aware of such
                collection, we will delete the information promptly.
              </p>
            </div>

            {/* Changes */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our
                practices or legal requirements. We will post the updated policy on our
                website with a new "Last updated" date.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                If you have questions or concerns about this Privacy Policy or our privacy
                practices, please contact us:
              </p>

              <div className="space-y-3 text-gray-700">
                <p><strong>Apex Home Builders Pty Ltd</strong></p>
                <p>Privacy Officer</p>
                <p>123 Builder Street, Sydney NSW 2000</p>
                <p>Phone: 1300 APEX HOMES (1300 273 946)</p>
                <p>Email: privacy@apexhomebuilders.com.au</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
