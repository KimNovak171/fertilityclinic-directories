import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Fertility Clinic Directories",
  description:
    "Get in touch with FertilityClinicDirectories.com. Send a message or email hello@directoriesnetwork.com for questions about our directory or featured listings.",
  alternates: {
    canonical: "/contact",
    languages: {
      "en-us": "https://fertilityclinicdirectories.com/contact",
    },
  },
  openGraph: {
    title: "Contact Us | Fertility Clinic Directories",
    description:
      "Contact FertilityClinicDirectories.com for questions about our directory or featured listings.",
    url: "/contact",
    siteName: "FertilityClinicDirectories.com",
    type: "website",
  },
};

const siteUrl = "https://fertilityclinicdirectories.com";

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "FertilityClinicDirectories.com", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
    ],
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
          Get in touch
        </p>
        <h1 className="text-3xl font-semibold text-navy sm:text-4xl">
          Contact Us
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Have a question about our directory, a listing, or featured placement?
          Use the form below or email us directly at{" "}
          <a
            href="mailto:hello@directoriesnetwork.com"
            className="font-medium text-teal underline underline-offset-2 hover:text-teal-soft"
          >
            hello@directoriesnetwork.com
          </a>
          .
        </p>
      </header>

      <section className="mt-10 max-w-xl">
        <ContactForm />
      </section>

      <section className="mt-10 rounded-xl border border-gold/30 bg-gold/5 px-6 py-5">
        <p className="text-sm font-medium text-navy">Email us directly</p>
        <p className="mt-1 text-sm text-slate-700">
          <a
            href="mailto:hello@directoriesnetwork.com"
            className="font-medium text-teal underline underline-offset-2 hover:text-teal-soft"
          >
            hello@directoriesnetwork.com
          </a>
        </p>
      </section>

      <div className="mt-8 text-sm text-slate-600">
        <Link href="/" className="text-teal hover:text-teal-soft">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
