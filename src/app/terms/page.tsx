import { Metadata } from "next";
import { FileText, Scale, AlertTriangle, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Apex Home Builders",
  description: "Read the terms and conditions that govern your use of Apex Home Builders' services and website.",
  keywords: "terms of service, terms and conditions, building contract terms, Australian construction terms",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-16">
        <div className="container-custom text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <FileText className="w-5 h-5 text-secondary-400" />
            <span className="text-sm font-medium">Legal Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
                Welcome to Apex Home Builders. These Terms of Service ("Terms") govern your
                use of our website and services. By accessing our website or engaging our
                services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read these Terms carefully before proceeding. If you do not agree
                with any part of these Terms, please do not use our website or services.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Definitions</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>"We", "our", or "us"</strong> refers to Apex Home Builders Pty Ltd</li>
                <li><strong>"You" or "your"</strong> refers to the client or website user</li>
                <li><strong>"Services"</strong> refers to home building, renovation, and related services</li>
                <li><strong>"Website"</strong> refers to apexhomebuilders.com.au</li>
                <li><strong>"Contract"</strong> refers to any written agreement for building services</li>
              </ul>
            </div>

            {/* Services */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Apex Home Builders provides residential construction services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Custom home construction</li>
                <li>Home renovations and extensions</li>
                <li>Knockdown and rebuild projects</li>
                <li>House and land packages</li>
                <li>Design and build services</li>
                <li>Investment property construction</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Specific terms for each project will be outlined in individual contracts
                that supersede these general Terms.
              </p>
            </div>

            {/* Quotations and Contracts */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Quotations and Contracts</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Quotations</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>All quotations are valid for 30 days from the date of issue</li>
                <li>Quotations are estimates based on information provided and may be subject to change</li>
                <li>A formal contract will be prepared upon acceptance of a quotation</li>
                <li>Prices may vary due to changes in scope, materials, or site conditions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Contracts</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>All building work is subject to a written contract</li>
                <li>Contracts will comply with relevant Australian state and territory laws</li>
                <li>Contract variations must be agreed upon in writing</li>
                <li>Progress payments will be structured according to contract milestones</li>
              </ul>
            </div>

            {/* Client Obligations */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Client Obligations</h2>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide accurate and complete information about your project</li>
                <li>Ensure site access for our team and authorized personnel</li>
                <li>Make payments as per the agreed payment schedule</li>
                <li>Obtain necessary approvals (where not included in our services)</li>
                <li>Notify us promptly of any issues or concerns</li>
                <li>Comply with all contract requirements</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Deposit payment is required upon contract signing</li>
                <li>Progress payments are due at specified construction milestones</li>
                <li>Final payment is due upon practical completion</li>
                <li>Late payments may incur interest charges as per contract terms</li>
                <li>Payment methods accepted: bank transfer, credit card, cheque</li>
              </ul>
            </div>

            {/* Warranties */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Warranties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We provide the following warranties on our work:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Structural warranty: 7 years from practical completion</li>
                <li>Non-structural work: 2 years from practical completion</li>
                <li>Appliance and fixture warranties as per manufacturer terms</li>
                <li>Warranties are transferable to new owners upon property sale</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Warranties do not cover damage caused by misuse, neglect, unauthorized
                modifications, or normal wear and tear.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>

              <p className="text-gray-600 leading-relaxed">
                To the extent permitted by law, Apex Home Builders' liability is limited
                to the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-4">
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>Our liability is limited to the value of the contract</li>
                <li>We are not liable for delays caused by factors outside our control</li>
                <li>Nothing in these Terms limits statutory guarantees under Australian Consumer Law</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All designs, plans, and documents created by Apex Home Builders remain
                our intellectual property until full payment is received. Upon completion
                and final payment, you receive a licence to use the designs for the
                constructed property only.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In the event of a dispute:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Parties should first attempt to resolve the dispute informally</li>
                <li>If unresolved, either party may refer the matter to mediation</li>
                <li>Disputes may be referred to the relevant state building authority</li>
                <li>Legal action is a last resort when other methods fail</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Either party may terminate a contract in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Mutual written agreement</li>
                <li>Material breach by the other party (with notice)</li>
                <li>Insolvency or bankruptcy</li>
                <li>Force majeure events preventing performance</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Specific termination rights and consequences will be detailed in individual
                contracts.
              </p>
            </div>

            {/* Website Use */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Website Use</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When using our website, you agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit viruses or malicious code</li>
                <li>Copy, reproduce, or distribute content without permission</li>
                <li>Provide false or misleading information</li>
              </ul>
            </div>

            {/* Changes */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
              </div>

              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be
                posted on our website with an updated "Last updated" date. Your continued
                use of our website or services after changes constitutes acceptance of
                the modified Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="heading-secondary mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms are governed by the laws of New South Wales, Australia. Any
                disputes will be resolved in the courts of New South Wales, unless
                otherwise required by applicable building legislation.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-primary-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you have any questions about these Terms, please contact us:
              </p>

              <div className="space-y-3 text-gray-700">
                <p><strong>Apex Home Builders Pty Ltd</strong></p>
                <p>123 Builder Street, Sydney NSW 2000</p>
                <p>Phone: 1300 APEX HOMES (1300 273 946)</p>
                <p>Email: legal@apexhomebuilders.com.au</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
