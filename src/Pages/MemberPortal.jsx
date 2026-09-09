import React from "react";
import Navbar from "../components/layout/Navbar";
import useDocumentTitle from "../hooks/useDocumentTitle";

const nonSensitiveResources = [
  {
    title: "FinTech Career Starter Pack",
    description: "Publicly shareable internship prep links and interview notes.",
    url: "https://www.investopedia.com/financial-edge/1112/10-fintech-companies-to-watch.aspx",
  },
  {
    title: "Payments and Banking Primer",
    description: "Foundational reading for payment rails, neobanks, and compliance basics.",
    url: "https://www.consumerfinance.gov/consumer-tools/",
  },
  {
    title: "Market + AI Learning Hub",
    description: "Public guides on AI-assisted analysis and quantitative fundamentals.",
    url: "https://www.cfainstitute.org/en/research/foundation",
  },
];

const sensitiveResources = [
  {
    title: "Sponsor Contact Playbook",
    description: "Officer-maintained outreach templates and internal contact notes.",
  },
  {
    title: "Private Event Logistics",
    description: "Internal planning docs for member-only sessions and workshops.",
  },
  {
    title: "Member Resume Bank",
    description: "Private resume review materials and coaching feedback summaries.",
  },
];

const MemberPortal = () => {
  useDocumentTitle("Member Portal", "Fintech@UW member resources and officer-shared materials.");

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-8">
        <h1 className="text-4xl font-bold mb-3">Member Portal</h1>
        <p className="text-gray-600 max-w-3xl">
          This portal contains member resources. Only non-sensitive links are hardcoded in the frontend. Sensitive content is distributed out-of-band by officers.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-5">Member Resources (Non-Sensitive)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nonSensitiveResources.map((resource) => (
            <article key={resource.title} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Open Resource
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-5">Sensitive Resources (Request Access)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sensitiveResources.map((resource) => (
            <article key={resource.title} className="bg-white rounded-xl shadow-md p-6 border border-amber-100">
              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
              <a
                href="mailto:fintechuwmadison@outlook.com?subject=FinTech%40UW%20Member%20Resource%20Access"
                className="inline-block rounded-lg bg-amber-500 text-white px-4 py-2 text-sm font-medium hover:bg-amber-600 transition"
              >
                Request Access
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MemberPortal;
