import React from "react";
import { Link } from "react-router-dom";
import AuthNavItems from "../components/AuthNavItems";

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
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="fixed w-full top-0 z-50 bg-white shadow-md text-black">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex h-14 sm:h-16 items-center gap-3">
            <Link to="/" className="flex items-center gap-3 min-w-0 flex-none">
              <img
                src="/fintechatuw/fintech-at-uw-logo.png"
                alt="Fintech Logo"
                className="w-10 h-auto sm:w-12 shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg font-bold truncate">FinTech@UW</h1>
              </div>
            </Link>

            <div className="min-w-0 flex-1">
              <ul
                className="
                  nav-strip
                  flex items-center gap-4 sm:gap-6 font-medium text-sm sm:text-base
                  overflow-x-auto no-scrollbar whitespace-nowrap
                  md:justify-end
                "
              >
                <li className="shrink-0">
                  <Link to="/about" className="hover:opacity-80">About</Link>
                </li>
                <li className="shrink-0">
                  <Link to="/events" className="hover:opacity-80">Events</Link>
                </li>
                <li className="shrink-0">
                  <Link to="/resources" className="hover:opacity-80">Resources</Link>
                </li>
                <li className="shrink-0">
                  <Link to="/team" className="hover:opacity-80">The Team</Link>
                </li>
                <AuthNavItems />
              </ul>
            </div>
          </div>
        </div>
      </nav>

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
