import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Fertility Clinic Directories",
  description:
    "Privacy policy for FertilityClinicDirectories.com. How we collect, use, and protect your information when you use our fertility clinic directory.",
  alternates: {
    canonical: "/privacy",
    languages: {
      "en-us": "https://fertilityclinicdirectories.com/privacy",
    },
  },
  openGraph: {
    title: "Privacy Policy | Fertility Clinic Directories",
    url: "/privacy",
    siteName: "FertilityClinicDirectories.com",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
          Legal
        </p>
        <h1 className="text-3xl font-semibold text-navy sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </header>

      <div className="prose prose-slate mt-10 max-w-3xl prose-headings:font-semibold prose-headings:text-navy prose-a:text-teal prose-a:no-underline hover:prose-a:underline">
        <section className="space-y-4 text-sm text-slate-700">
          <h2 className="text-lg font-semibold text-navy">1. Introduction</h2>
          <p>
            FertilityClinicDirectories.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates a directory website that helps patients and families find and compare fertility clinics across the United States and Canada. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h2 className="text-lg font-semibold text-navy">2. Information We Collect</h2>
          <p>
            We may collect information that you provide directly, such as when you contact us, submit a form, or sign up for a featured listing. This may include your name, email address, phone number, facility or business details, and any message content. We also automatically collect certain technical information when you visit our site, such as your IP address, browser type, device information, and pages visited, which may be collected through cookies or similar technologies.
          </p>

          <h2 className="text-lg font-semibold text-navy">3. How We Use Your Information</h2>
          <p>
            We use the information we collect to operate and improve our directory, respond to your inquiries, process featured or premium listing requests, send relevant updates (if you have opted in), and analyze site usage to improve the user experience. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-lg font-semibold text-navy">4. Directory Listings and Public Information</h2>
          <p>
            Our directory displays information about fertility clinics that we obtain from public sources (such as Google Maps) or that is provided by clinic owners. Listing details (e.g., name, address, phone, website) are shown to help users compare options. If you are a clinic owner and wish to update or remove your listing, contact us at hello@directoriesnetwork.com.
          </p>

          <h2 className="text-lg font-semibold text-navy">5. Cookies and Tracking</h2>
          <p>
            We may use cookies and similar technologies to remember preferences, understand how the site is used, and improve performance. You can adjust your browser settings to refuse or limit cookies, though some features may not work as intended.
          </p>

          <h2 className="text-lg font-semibold text-navy">6. Third-Party Links and Services</h2>
          <p>
            Our site may contain links to third-party websites (e.g., clinic websites, Google Maps, payment processors). We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies.
          </p>

          <h2 className="text-lg font-semibold text-navy">7. Data Security</h2>
          <p>
            We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.
          </p>

          <h2 className="text-lg font-semibold text-navy">8. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have the right to access, correct, or delete your personal information, or to object to or restrict certain processing. To exercise these rights or ask questions about your data, contact us at hello@directoriesnetwork.com.
          </p>

          <h2 className="text-lg font-semibold text-navy">9. Children&apos;s Privacy</h2>
          <p>
            Our service is not directed to individuals under 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-lg font-semibold text-navy">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will reflect the most recent version. Continued use of the site after changes constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-lg font-semibold text-navy">11. Contact Us</h2>
          <p>
            For questions about this Privacy Policy or our practices, contact us at{" "}
            <a href="mailto:hello@directoriesnetwork.com" className="text-teal hover:underline">
              hello@directoriesnetwork.com
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-10 text-sm text-slate-600">
        <Link href="/" className="text-teal hover:text-teal-soft">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
